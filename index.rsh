




'reach 0.1';

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true })
  const Auctioneer= Participant('Auctioneer', {
     getAuction:Fun([],Object({
      nftId:Token,
      startingBid:UInt,
      lenInBlock:UInt

     })),
     startBidding:Fun([],Null),
     seeBid:Fun([Address,UInt],Null),
     seeOutcome:Fun([Address,UInt],Null)
  });
  const Bidder= API('Bidder', {
    // Specify Bob's interact interface here
    bid:Fun([UInt],Tuple(Address,UInt)),
    optIn: Fun([], Token),
    seelastBid:Fun([],UInt),
    showHighestBidder:Fun([],Tuple(Address,UInt))
  });
  
  const vNFT = View('NFT', {
        owner: Address });
  init();

  Auctioneer.only(()=>{
    const {nftId,startingBid,lenInBlock} =declassify(interact.getAuction())

  })

  Auctioneer.publish(nftId,startingBid,lenInBlock)

   vNFT.owner.set(Auctioneer); 

  const price =1
  commit()
  Auctioneer.pay([[price,nftId]])
  Auctioneer.interact.startBidding()
  assert(balance(nftId)==price,"Balance of Nft is wrong")

  const end=lastConsensusTime() +lenInBlock

  const bidders =new Set()

  const [highestBidder,lastPrice,isFirstBid]
    =parallelReduce([ Auctioneer,startingBid,true ])
    .invariant(balance(nftId) == price)
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
        Auctioneer.interact.seeBid(who,bid)
        return[who,bid,false]
      }]
    })
    .timeout(absoluteTime(end), () => {
        Auctioneer.publish();
      
        return [highestBidder,lastPrice,isFirstBid]
    });
    transfer(price,nftId).to(highestBidder)
    if(!isFirstBid){
      transfer(lastPrice).to(Auctioneer)
    }
    commit()
    Auctioneer.interact.seeOutcome(highestBidder,lastPrice)
       const [ [], k ] = call(Bidder.showHighestBidder);
      k([highestBidder,lastPrice]);
    commit()
    exit()
});
