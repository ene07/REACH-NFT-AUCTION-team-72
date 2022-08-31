

'reach 0.1';

export const main = Reach.App(() => {
  const Creator = Participant('Creator', {
     getSale:Fun([],Object({
      nftId:Token,
      minBid:UInt,
      lenInBlock:UInt

     })),
     auctionReady:Fun([],Null),
     showBid:Fun([Address,UInt],Null),
     showOutcome:Fun([Address,UInt],Null)
  });
  const Bidder= API('Bidder', {
    // Specify Bob's interact interface here
    bid:Fun([UInt],Tuple(Address,UInt)),
    optIn: Fun([], Token),
    seelastBid:Fun([],UInt),
    showHighestBidder:Fun([],Address)
  });
  
  const vNFT = View('NFT', {
        owner: Address });
  init();

  Creator.only(()=>{
    const {nftId,minBid,lenInBlock} =declassify(interact.getSale())

  })

  Creator.publish(nftId,minBid,lenInBlock)

   vNFT.owner.set(Creator); 

  const amt =1
  commit()
  Creator.pay([[amt,nftId]])
  Creator.interact.auctionReady()
  assert(balance(nftId)==amt,"Balance of Nft is wrong")

  const end=lastConsensusTime() +lenInBlock

  const bidders =new Set()

  const [highestBidder,lastPrice,isFirstBid]
    =parallelReduce([ Creator,minBid,true ])
    .invariant(balance(nftId) == amt)
    .invariant(balance() == (isFirstBid? 0:lastPrice))
    .while(lastConsensusTime() <= end)

    .api_(Bidder.optIn, () => {      
      return [0, (k) => {
        k(nftId);
        
        return [highestBidder,lastPrice,isFirstBid];
      }];
    })
    .api_(Bidder.seelastBid, () => {      
      return [0, (k) => {
        k(lastPrice);
        
        return [highestBidder,lastPrice,isFirstBid];
      }];
    })
    .api_(Bidder.bid, (bid) => {
       check(bid >lastPrice,"bid is too low")
       check(!bidders.member(this),"You already placed a bid")
      return[bid,(notify) =>{
        notify([highestBidder, lastPrice])
        if(!isFirstBid){
          transfer(lastPrice).to(highestBidder)
        }
        const who=this
        bidders.insert(who)
        Creator.interact.showBid(who,bid)
        return[who,bid,false]
      }]
    })
    .timeout(absoluteTime(end), () => {
        Creator.publish();
      
        return [highestBidder,lastPrice,isFirstBid]
    });
    transfer(amt,nftId).to(highestBidder)
    if(!isFirstBid){
      transfer(lastPrice).to(Creator)
    }
    commit()
    Creator.interact.showOutcome(highestBidder,lastPrice)
       const [ [], k ] = call(Bidder.showHighestBidder);
      k(highestBidder);
    commit()
    exit()
});
