import React from 'react'
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../../reach-app/build/index.main.mjs'
import { collection, setDoc,doc,getDoc,addDoc} from  'firebase/firestore'
import { db } from '../../firebase/fireabse.util';
// import { useRecoilValue,useRecoilState } from 'recoil';
// import { AccountState, BidderState,BidOutcomeState,TimeoutState} from '../../recoilState/globalState';
// import Modal from '../../components/modal';
// import {Link} from "react-router-dom"

const reach = loadStdlib('ALGO');

export const deploy = {
  deployContract: async (options) => {
    if(options === null || options === undefined) return null;
    console.log("deploying");

    options.audioNFT.current = await reach.launchToken(options.account,"AudioMix","AMT",{supply:1})
      const deployerInteract = {
        getSale: () => ({
          nftId: options.audioNFT.current.id,
          minBid: reach.parseCurrency(Number(options.price)),
          lenInBlock: Number(options.deadline)
          
        }),
        auctionReady:()=>{
          options.setReady("Auction is open")
      },

      showBid:(who, amt)=>{
        console.log(`Creator saw that ${reach.formatAddress(who) }bid ${reach.formatCurrency(amt)}`)
        const bids =[]
        bids.push({
          address: reach.formatAddress(who),
          amount: reach.formatCurrency(amt)
        })
        options.setBids(bids);
      },
      showOutcome:(winner, amt)=>{
        console.log(`Creator saw that ${reach.formatAddress(winner) }bid ${reach.formatCurrency(amt)}`)
        options.setOutcome(`${reach.formatAddress(winner).slice(0,9)+"..." } won bid at ${reach.formatCurrency(amt)} Algo`)
      },
      showTimeout:()=>{
      },
    }
    options.setTrigger(true)
    try{
      const contract = options.account.contract(backend);
      backend.Creator(contract, deployerInteract);
      const cInfo = await contract.getInfo();
      options.setArrayctcInfo([JSON.stringify(cInfo,null,2)])
      options.setCtcInfo(JSON.stringify(cInfo,null,2))
    }
      catch(e){
        options.setErrorMsg(e.message)
    }
  },

  addToCollection: async(options) => {
    options.handleClose();
    const docRef = await addDoc(collection(db, "Nfts"), {
      title: options.title,
      description: options.description,
      ctcInfo: options.ctcInfo,
      price: options.price,
      date: Number(Date.now()),
      available: true,
      imgUrl: options.imgUrl,
      timeout: "Ongoing",
    });

    options.clearInputData({});
      // console.log(docRef)

      // options.setView(true)
      // options.setDeadline("")
      // options.setTitle("")
      // options.setDescription("")

      // options.setPrice("")
      // console.log(ctcInfo, options.account, "accccccc")
      // console.log(options.auctionReady)
    }
  }