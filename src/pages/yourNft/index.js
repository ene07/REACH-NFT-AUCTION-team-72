import React,{useEffect,useState} from 'react'
import Player from '../../components/player'
import equals from "../../assests/Pictures/Ed-Sheeran-Equals.webp"
import { collection, onSnapshot, doc,getDocs,query, orderBy, limit } from 'firebase/firestore'
import {BidderState,BidOutcomeState,TimeoutState} from '../../recoilState/globalState';
import { db } from '../../firebase/fireabse.util'
import { useRecoilValue } from 'recoil'
import { Oval } from  'react-loader-spinner'

export default function YourNft() {
  const [ArrayNft,ArraysetNft] =useState([])
  const [nft,setNft]=useState({})
  const timeout=useRecoilValue(TimeoutState )
  const Bids=useRecoilValue(BidderState)
  const Outcome=useRecoilValue(BidOutcomeState)


  useEffect(()=>{
   
    const getNft=async()=>{
       const q = query(collection(db, "Nfts"), orderBy("date", "desc"), limit(1));
       const querySnapshot = await getDocs(q);
       // console.log(querySnapshot)
       querySnapshot.docs.map((doc)=>{
          // console.log(doc.data())
          setNft({...doc.data(),id:doc.id})
          ArraysetNft([{...doc.data(),id:doc.id}])
        })
      // setproposal( querySnapshot.docs)
    }

    getNft()
},[])
  return (
    <div>
        <div className='flex px-16 py-10 space-x-6'>
            <main className='w-3/5 flex flex-col space-y-4'>
              <Player  />
              <main className='flex flex-col space-y-4'>
                 <h5 className='text-sm '>Title: {nft.title}</h5>
                  <h5 className='text-sm '>NFT ID: {nft.id}</h5>
                  <h5 className='text-sm  '>Minimum Bid: {nft.price} Algo</h5>
                  <main>
                     <h5 className='text-lg  '>Description</h5>
                     <p className='text-xs pl-1 pr-6'>{nft.description}</p>
                  </main>

            </main>
            </main>
           
           <main className="w-2/5 ">
               <div className='flex flex-col w-full space-y-4'>
                 
                  <main className='flex flex-col space-y-4  w-full'>
                  <h5 className='text-lg text-slate-600 '> Song cover</h5>
                    <img src={nft.imgUrl} alt="" className='w-3/4 h-36 rounded-md shadow'/>
                  </main>
                   <h5 className='text-lg text-slate-600 '>Status: <span className='text-yellow-700 text-sm'>{timeout}</span></h5>

                   <main className='flex flex-col'>
                    <h5 className='text-lg text-slate-600 '>Bids</h5>
                    <div className='grid grid-flow-row grid-cols-2 gap-x-8 gap-y-10 px-16 py-6'>
                      {Bids.length>0&&
                        <>
                        {Bids.map((bid)=>{
                          return(
                            <div className='flex flex-col justify-center'>
                                 <h5 className='text-sm'>{bid.address}</h5>
                                 <h5 className='text-sm'>{bid.amount}</h5>
                            </div>
                          )
                        })}
                      
                      </>
                       

                      }
                      {Bids.length===0&&
                        <>
                         <div className='flex justify-center items-center'>
                         <Oval height="50" width="50" color='gray' ariaLabel='loading'/>
                         </div>
                      
                        </>
                       

                      }

                    </div>
                 

                   </main>
                   <h5 className='text-lg text-slate-600 '>Auction Outcome: <span className='text-sm'>{Outcome}</span></h5>
               </div>
           </main>
        </div>
    </div>
  )
}
