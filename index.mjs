import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

console.log(`Creating test account for Auctiooner`);
const accAuctioneer = await stdlib.newTestAccount(startingBalance);

console.log(`Having auctioneer create testing NFT`);
const theNFT = await stdlib.launchToken(accAuctioneer, "Audio Mix Tape" ,"AMT", {supply:1});
const nftId = theNFT.id;
const startingBid = stdlib.parseCurrency(2);
const lenInBlock= 10;
const params = { 
  nftId,
  startingBid,
  lenInBlock};

let done = false;
const bidders = [];
const startAuction= async () => {
    let bid = startingBid;
    const runBidder = async (who) => {
        const inc = stdlib.parseCurrency(Math.random() * 10);
        bid = bid.add(inc);

        const acc = await stdlib.newTestAccount(startingBalance);
        acc.setDebugLabel(who);
        await acc.tokenAccept(nftId);
        bidders.push({who, acc});
        const ctc = acc.contract(backend, ctcAuctioneer.getInfo());
        const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));

        console.log(`${who} decides to bid ${stdlib.formatCurrency(bid)}.`);
        console.log(`${who} balance before is ${await getBal()}`);
        try {
          const owner = await ctc.v.NFT.owner();
           console.log(`${who} saw who the creator is ${stdlib.formatAddress(owner[1])}`);
   
           const prevBid= await ctc.apis.Bidder.seelastBid()
          console.log(`${who} saw last bid at ${prevBid}`)
            const [ lastBidder, lastBid ] = await ctc.apis.Bidder.bid(bid);
            console.log(`${who} out bid ${lastBidder} who bid ${stdlib.formatCurrency(lastBid)} Algo`);
        } catch (e) {
            console.log(`${who} failed to bid, because the auction is over`);
        }
        console.log(`${who} balance after is ${await getBal()}`);
    };

    await runBidder('Jon');
    await runBidder('Gabe');
    await runBidder('Conny');
    while ( ! done ) {
        await stdlib.wait(1);
    }
};
 const biddersSeeOutcome=async()=>{
  bidders.map(async(bid)=>{
    const acc =bid.acc
    const who=bid.who
     const ctc = acc.contract(backend, ctcAuctioneer.getInfo());
     acc.tokenAccept(nftId)
     try {
      const  [highestBidder,lastPrice]= await ctc.apis.Bidder.showHighestBidder()
      console.log(`${who} saw ${highestBidder} won the bid at ${stdlib.formatCurrency(lastPrice)} Algo`)
  
     
    } catch (error) {
     
    }
 })
}

const ctcAuctioneer = accAuctioneer.contract(backend);
await ctcAuctioneer.participants.Auctioneer({
    getAuction: () => {
        console.log(`Auctioneer sets parameters of sale:`, params);
        return params;
    },
    startBidding: () => {
        startAuction();
    },
    seeBid: (who, amt) => {
        console.log(`Auctioneer saw that ${stdlib.formatAddress(who)} bid ${stdlib.formatCurrency(amt)}.`);
    },
    seeOutcome: (winner, amt) => {
        console.log(`Auctioneer saw that ${stdlib.formatAddress(winner)} won with ${stdlib.formatCurrency(amt)}`);
        biddersSeeOutcome()
    },
});

// for ( const [who, acc] of bidders ) {
//     const [ amt, amtNFT ] = await stdlib.balancesOf(acc, [null, nftId]);
//     console.log(`${who} has ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit} and ${amtNFT} of the NFT`);
// }

(async()=>{
  
  bidders.map(async(bid)=>{
    const [ price, priceNFT ] = await stdlib.balancesOf(bid.acc, [null, nftId]);
        console.log(`${bid.who} has ${stdlib.formatCurrency(price)} ${stdlib.standardUnit} and ${priceNFT} of the NFT`);
     
  })
})()
done = true;
