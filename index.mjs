import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accCreator=await stdlib.newTestAccount(startingBalance)
console.log("creating nft")

const audioNFT=await stdlib.launchToken(accCreator,"AudioMix","AMT",{supply:1})
const nftId =audioNFT.id 
const minBid =stdlib.parseCurrency(2);
const lenInBlock =10
const  params={nftId,minBid,lenInBlock}

let done=false
const bidders=[]
const startBidders=async()=>{
  let bid=minBid

  const runBidder=async(who)=>{
    const inc =stdlib.parseCurrency(Math.random()*10)
    bid=bid.add(inc)

    const acc=await stdlib.newTestAccount(startingBalance)
    acc.setDebugLabel(who)
    await acc.tokenAccept(nftId)
    bidders.push([who,acc])
    const ctc=acc.contract(backend,ctcCreator.getInfo())
  const getBal =async()=stdlib.formatCurrency(await stdlib.balanceOf(acc))

  console.log(`${who} decides to bid ${stdlib.formatCurrency(bid)}`)
  console.log(`${who} decides to before is ${await getBal()}`)
  try{
      const lastBid= await ctc.apis.Bidder.seelastBid()
      console.log(`${who} saw last bid at ${lastBid}`)
    const [lastBidder,lastBid] = await ctc.apis.Bidder.bid(bid)
     console.log(`${who} out bid ${lastBidder} who bid ${stdlib.formatCurrency(lastBid)}`) 
  }catch(e){
    console.log("Auction is over")
  }
  console.log(`${who} decides to after is ${await getBal()}`)
  }

  await runBidder("Alice")
  await runBidder("Bob")
  await runBidder("Claire")

  while(!done){
    await stdlib.wait(1)
  }
}

































const ctcCreator=accCreator.contract(backend)
await ctcCreator.p.Creator({

  getSale:()=>{
    console.log("set sale params")

    return params
  },

  auctionReady:()=>{
    startBidders();
  },

  seeBid:(who,amt)=>{
    console.log(`Creator saw that ${stdlib.formatAddress(who) }bid ${stdlib.formatCurrency(amt)}`)
  },
  showOutcome:(winner,amt)=>{
    console.log(`Creator saw that ${stdlib.formatAddress(winner) }bid ${stdlib.formatCurrency(amt)}`)

  }
})

for (const [who,acc] of bidders){
  const [amt,amtNFT]=await stdlib.balanceOf(acc,[null,nftId])
  console.log(`${who} has ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit} and ${amtNFT}`)
}

 done =true
