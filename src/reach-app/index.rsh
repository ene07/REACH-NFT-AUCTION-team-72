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
     showOutcome:Fun([Address,UInt],Null),
     showTimeout:Fun([],Null)
  });
  const Bidder= API('Bidder', {
    // Specify Bob's interact interface here
    bid:Fun([UInt],Tuple(Address,UInt)),
    optIn: Fun([], Token)
  });


  init();

  Creator.only(()=>{
    const {nftId,minBid,lenInBlock} =declassify(interact.getSale())

  })

  Creator.publish(nftId,minBid,lenInBlock)
  const amt =1
  commit()
  Creator.pay([[amt,nftId]])
  Creator.interact.auctionReady()
  assert(balance(nftId)==amt,"Balance of Nft is wrong")

  const end=lastConsensusTime() +lenInBlock

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
    .api_(Bidder.bid, (bid) => {
       check(bid >lastPrice,"bid is too low")
      return[bid,(notify) =>{
        notify([highestBidder, lastPrice])
        if(!isFirstBid){
          transfer(lastPrice).to(highestBidder)
        }
        const who=this
        Creator.interact.showBid(who,bid)
        return[who,bid,false]
      }]
    })
    .timeout(absoluteTime(end), () => {
        Creator.publish();
        Creator.interact.showTimeout()
      
        return [highestBidder,lastPrice,isFirstBid]
    });
    transfer(amt,nftId).to(highestBidder)
    if(!isFirstBid){
      transfer(lastPrice).to(Creator)
    }
    Creator.interact.showOutcome(highestBidder,lastPrice)
   
    commit()
    exit()
});