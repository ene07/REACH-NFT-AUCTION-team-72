'reach 0.1';
  ///FIRST_PRICED SEALED AUCTION MECHENISM

const AuctioneerInteract = {
  ...hasRandom,
   getAuctionProps: Fun([], Object({
    nftId: Token,
    deadline:UInt,
  })),
  getBids: Fun([], Null),
  showTimeout:Fun([],Null),
  winnerReady:Fun([],Null),
  seeBid: Fun([Address, UInt], Null),
  seeWinner: Fun([Address, UInt], Null),
  claimTimeout:Fun([],Null)
}






export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true })
  const Auctioneer= Participant('Auctioneer',  AuctioneerInteract);


  const Buyer= API('Buyer', {
    // Specify Bob's interact interface here
    submitBid:Fun([UInt],Bool),
    claimItem:Fun([],Bool),
    optIn: Fun([], Token),
    showHighestBidder:Fun([],Tuple(Address,UInt))
  });

  const vNFT = View('NFT', {
    owner: Address });
  init();


  Auctioneer.only(() => {
    const { nftId, deadline} = declassify(interact.getAuctionProps());
  })

  Auctioneer.publish( nftId, deadline);
  vNFT.owner.set(Auctioneer); 
  const supply = 1;
  commit();

  Auctioneer.pay([[supply , nftId]]);
  assert(balance(nftId) == supply, "balance of NFT is wrong");
  Auctioneer.interact.getBids();

  
  const buyersMap = new Map(Address, UInt);
  const buyersSet= new Set();
  //const [ timeRemaining, keepGoing ] = makeDeadline(deadline);
  const close= lastConsensusTime() + deadline
  const [numOfBuyer] =
  parallelReduce([0])
      .invariant(balance(nftId) == supply)
      .while(lastConsensusTime() <= close)
      .api_(Buyer.optIn, () => {      
        return [0, (k) => {
          k(nftId);
          
          return [numOfBuyer];
        }];
      })
      .api_(Buyer.submitBid, (bid) => {
        check(!buyersSet.member(this),"You already submitted your bid")
          return [bid, (k) => {
             k(true)
             buyersMap[this] = bid
             buyersSet.insert(this);
             Auctioneer.interact.seeBid(this,bid)
             return[numOfBuyer+1]
          }]

      })
      .timeout(absoluteTime(close), () => {
          Anybody.publish();
           Auctioneer.interact.showTimeout()
          return[numOfBuyer]
      });

      Auctioneer.interact.winnerReady();
      const end= lastConsensusTime() + deadline
      const [lastBid,who,count] =
     parallelReduce([0,Auctioneer,0])
      .invariant(balance(nftId) == supply)
      //.invariant(buyersSet.Map.size() == numOfBuyer)
      //.while(count <=numOfBuyer)
      .while(lastConsensusTime() <= end)
      .api_(Buyer.claimItem, () => {
        check(buyersSet.member(this),"You are not eligible to claim item")
          return [0, (k) => {
            const bid = fromSome(buyersMap[this],0)
            //check(bid > highestBid, "bid is too low");

            const address = bid > lastBid ? this : Auctioneer
             const highestbid =bid >lastBid? bid :lastBid
             if(balance() >= bid){
              transfer(bid).to(this)
             }
            // transfer(bid).to(this)
             const value=bid >lastBid ?true :false
             k(value)

             
             return[highestbid,address,count+1]
          }]

      })
      .timeout(absoluteTime(end), () => {
        Anybody.publish();
         Auctioneer.interact.claimTimeout()
        return[lastBid,who,count]
    });
      transfer(supply, nftId).to(who);
      transfer(balance()).to(Auctioneer)
      commit()
      // write your program here
       Auctioneer.interact.seeWinner(who,lastBid );
       const [ [], k ] = call(Buyer.showHighestBidder);
         k([who,lastBid]);
  commit();
  exit();
});