import React,{useState,useEffect,useRef} from 'react'
import { loadStdlib } from '@reach-sh/stdlib';
import {AiOutlineCloseCircle} from "react-icons/ai" 
import "./createnft.css"
import * as backend from '../../reach-app/build/index.main.mjs'
import { collection, setDoc,doc,getDoc,addDoc} from  'firebase/firestore'
import { db } from '../../firebase/fireabse.util';
import { useRecoilValue,useRecoilState } from 'recoil';
import { AccountState,BidderState,BidOutcomeState,TimeoutState} from '../../recoilState/globalState';
import Modal from '../../components/modal';
import {Link} from "react-router-dom"


const reach = loadStdlib('ALGO');

export default function CreateNft() {


  const account =useRecoilValue(AccountState)
  const [auctionReady,setReady]=useState("")
  const [Bids,setBids]=useRecoilState(BidderState)
  const [Outcome,setOutcome]=useRecoilState(BidOutcomeState)
  const [timeOut,setTimeOut]=useRecoilState(TimeoutState)
  const [ctcInfo,setCtcInfo] =useState("")
  const [ArrayctcInfo,setArrayctcInfo]=useState([])
  const [deadline,setDeadline]=useState("")
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [trigger,setTrigger] =useState(false)
  const [price,setPrice]=useState("")
  const [ErrorMsg,setErrorMsg]=useState("")
  const [imgUrl,setUrl]=useState("")
  const [showView,setView]=useState(false)
  const audioNFT= useRef();
  const deployContract = async () => {
    console.log("deploying")

audioNFT.current=await reach.launchToken(account,"AudioMix","AMT",{supply:1})
  const deployerInteract = {
    getSale: () => ({
      nftId:audioNFT.current.id,
      minBid:reach.parseCurrency(Number(price)),
      lenInBlock:Number(deadline)
      
    }),
    auctionReady:()=>{
      setReady("Auction is open")
   },

   showBid:(who,amt)=>{
    console.log(`Creator saw that ${reach.formatAddress(who) }bid ${reach.formatCurrency(amt)}`)
    const bids =[]
    bids.push({
      address:reach.formatAddress(who),
      amount:reach.formatCurrency(amt)
    })
    setBids(bids)
  },
  showOutcome:(winner,amt)=>{
    console.log(`Creator saw that ${reach.formatAddress(winner) }bid ${reach.formatCurrency(amt)}`)
    setOutcome(`${reach.formatAddress(winner) } won bid at ${reach.formatCurrency(amt)} Algo`)
  },
  showTimeout:()=>{
    console.log("deadline")
    setTimeOut("Deadline reached")
 },



    }
setTrigger(true)
try{
const contract = account.contract(backend);
backend.Creator(contract, deployerInteract);
  const cInfo = await contract.getInfo();
  setArrayctcInfo([JSON.stringify(cInfo,null,2)])
  setCtcInfo(JSON.stringify(cInfo,null,2))

  
}catch(e){
console.log(e)
setErrorMsg(e.message)
}
}

const AddToCollection= async()=>{
  console.log("pushing to firebase")
  setTrigger(false)
 const docRef = await addDoc(collection(db, "Nfts"), {
  // nftId:audioNFT.current.id,
  title:title,
  description:description,
  ctcInfo:ctcInfo,
   price:price,
   date:Number(Date.now()),
   available:true,
   imgUrl:imgUrl
  
   });
   console.log("pushed to firebase")
   console.log(docRef)
 
    
   setView(true)
setDeadline("")
setTitle("")
setDescription("")

setPrice("")


}
console.log(ctcInfo,account,"accccccc")
console.log(auctionReady)
  return (
   <div>
        <div className='py-20'>
          <div className='flex flex-col space-y-6 '>
            <main className='flex justify-center'>
              <div className='bg-slate-100 flex justify-center h-16 w-16 p-2 items-center rounded-md shadow-lg'>
               <div className='hover:bg-slate-400 rounded-full p-1 '>
                 <Link to="/collections"> <AiOutlineCloseCircle  className='text-2xl text-slate-700 hover:text-white'/></Link>
               </div>
               </div>
            </main>
             <main className='flex justify-center'>
                <h5 className='text-2xl '>Create an Auction</h5>
             </main>
            <main className='flex flex-col items-center justify-center space-y-4'>
              <div className='grid grid-flow-row grid-cols-2 gap-x-8 gap-y-4 w-1/2'>
                 <input  
                   placeholder='Title*'
                   className='border h-16  py-3 px-4 rounded-lg shadow'
                   type="text"
                   name="title"
                   value={title}
                   onChange={(e)=>setTitle(e.target.value)}
                 />
                 <input
                    placeholder='Minimum bid*'
                    className='border h-16 py-3 px-4 rounded-lg shadow'
                    type="text"
                    name="price"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                 />
                 <input 
                   placeholder='Deadline*'
                  className='border h-16 py-3 px-4 rounded-lg shadow'
                  type="text"
                  name="deadline"
                  value={deadline}
                  onChange={(e)=>setDeadline(e.target.value)}
                 />
                 <input 
                   placeholder='Image Url*'
                   className='border h-16 py-3 px-4 rounded-lg shadow'
                   type="text"
                   name="deadline"
                   value={imgUrl}
                   onChange={(e)=>setUrl(e.target.value)}
                 />
              </div>
              <div className='flex justify-center rounded-lg shadow w-1/2'>
                <textarea
                  placeholder='Description*'
                  className='border  w-full h-16 rounded-md shadow py-2 px-4 '
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                 
                />
              </div>
            </main>
            <main className='flex flex-col items-center justify-center space-y-4'>
               <div className='flex space-x-4'>
               <input type="checkbox" className='border'/>
               <label> I confirm all information are correct</label>
               </div>
               <div>
                {showView===false&&
                   <button className='py-1 text-sm hover:bg-slate-300 hover:text-white px-6 border w-72 rounded-md'
                   onClick={deployContract}
                  >Deploy NFT</button>
                }
                 {showView===true&&
                 <Link to="/yournft">
                  <button className='py-1 text-sm hover:bg-slate-300 hover:text-white px-6 border w-72 rounded-md'
                  >View NFT</button>
                  </Link>
                 }
                  
               </div>
            </main>
          </div>
       
          

        </div>

        <Modal trigger={trigger} cname="h-72 w-1/2 shadow rounded-lg py-4 px-4">
           <div className='modal-div '>
                <main className='flex justify-end'>
                 <button onClick={()=>setTrigger(false)}><AiOutlineCloseCircle className="text-md" /></button>
                </main>

                 <div  className='flex flex-col justify-center items-center space-y-4'>
                    <h5>Contract information</h5>
                    
                       <h5>{ArrayctcInfo[0]}</h5>
                       <h5>{ErrorMsg}</h5>
                      <h5>{auctionReady}</h5>
                      <button className='rounded-full hover:text-black py-0.5 px-3 text-sm border hover:bg-white'
                       onClick={AddToCollection}
                      >ok</button>
                 </div>
            </div>
           </Modal>
   </div>
  )
}