import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

console.log(`Creating test account for Auctiooner`);
const accAuctioneer = await stdlib.newTestAccount(startingBalance);

console.log(` Auctioneer minting testing NFT`);

const AudioNFT = await stdlib.launchToken(accAuctioneer, "Audio Mix Tape" ,"AMT", {supply:1});
const nftId =AudioNFT.id;
const deadline= 20;

const props = { 
  nftId,
  deadline};

let done = false;
const buyers = [];
const startAuction= async () => {
  const createBuyers = async (who) => {
    const bid= stdlib.parseCurrency(Math.random() * 10);
    const acc = await stdlib.newTestAccount(startingBalance);
    acc.setDebugLabel(who);
    await acc.tokenAccept(nftId);
    buyers.push({who, acc});
    const ctc = acc.contract(backend, ctcAuctioneer.getInfo());
    const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));
    console.log(`${who} bids ${stdlib.formatCurrency(bid)} Algo`);
    console.log(`${who} balance before is ${await getBal()} Algo`);

    try {
      const owner = await ctc.v.NFT.owner();
       console.log(`${who} saw who the creator :${stdlib.formatAddress(owner[1])}`);
       const hasBidded = await ctc.apis.Buyer.submitBid(bid);
       const word= hasBidded==true? "has bidded " :"has not bidded"
      console.log(`${who} ${word} :${bid} Algo`);
    } catch (e) {
        console.log(e)
        console.log(`${who} failed to bid, because the auction is over`);
    }
      console.log(`${who} balance after is ${await getBal()} Algo`);
   };
  await createBuyers('Jon');
  await createBuyers('Gabe');
  await createBuyers('Conny');
   while ( ! done ) {
    await stdlib.wait(1);
   }

  }

  const buyerSeeOutcome=async()=>{
    buyers.map(async(bid)=>{
      const acc =bid.acc
      const who=bid.who
       const ctc = acc.contract(backend, ctcAuctioneer.getInfo());
       acc.tokenAccept(nftId)
       try {
        const  [winner,price]= await ctc.apis.Buyer.showHighestBidder()
        console.log(`${who} saw ${winner} won the bid at ${stdlib.formatCurrency(price)} Algo`)
    
       
      } catch (error) {
        //console.log(error)
        console.log("Something went wrong")
      }
   })
  }

  const claimAuctionItem=()=>{ 
    buyers.map(async(bid)=>{
      const acc =bid.acc
      const who=bid.who
       const ctc = acc.contract(backend, ctcAuctioneer.getInfo());
       acc.tokenAccept(nftId)
       try {
        const  value= await ctc.apis.Buyer.claimItem()
        const word =value===true ?"you won the bid" :"you lose the bid"
        console.log(`${who} :${word}`)
    
       
      } catch (error) {
       // console.log(error)
        console.log("You re not eligible to claim item")
      }
   })

  }

const ctcAuctioneer = accAuctioneer.contract(backend);

await ctcAuctioneer.participants.Auctioneer({
  ...stdlib.hasConsoleLogger ,
  ...stdlib.hasRandom,
  getAuctionProps: () => {
        console.log(`Auctioneer sets props for:`, props);
        return props;
    },
    getBids: () => {
       console.log("Auction is open, place your bids")
        startAuction();
    },
    seeBid: (who, amt) => {
        console.log(`Auctioneer saw that ${stdlib.formatAddress(who)} bid ${stdlib.formatCurrency(amt)}.`);
    },
    showTimeout:()=>{
       console.log("Deadline is reached,Auction is closed")
    },
    winnerReady:()=>{
      console.log("Sorting for winner")
      claimAuctionItem()
    },
    claimTimeout:()=>{
      console.log("Claim window is closed, Nft is transferred back to Auctioneer")
    },
    seeWinner: (winner, amt) => {
        console.log(`Auctioneer saw that ${stdlib.formatAddress(winner)} won with ${stdlib.formatCurrency(amt)}`);
        buyerSeeOutcome()
    },

});


(async()=>{
  
  buyers.map(async(bid)=>{
    const [ price, priceNFT ] = await stdlib.balancesOf(bid.acc, [null, nftId]);
        console.log(`${bid.who} has ${stdlib.formatCurrency(price)} ${stdlib.standardUnit} and ${priceNFT} of the NFT`);
     
  })
})()
done = true;