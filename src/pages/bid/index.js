import React ,{useState,useRef}from 'react'
import Player from '../../components/player'
import equals from "../../assests/Pictures/Ed-Sheeran-Equals.webp"
import { useLocation,useParams} from "react-router-dom";
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../../reach-app/build/index.main.mjs'
import { AccountState} from '../../recoilState/globalState';
import { useRecoilValue,useRecoilState } from 'recoil';
import Modal from '../../components/modal'
import {AiOutlineCloseCircle} from "react-icons/ai"
import {RiAuctionFill} from "react-icons/ri"
import { BsConeStriped } from 'react-icons/bs';

const reach = loadStdlib('ALGO');

export default function Bid() {

  const location =useLocation()
  const [locationState,setlocationState] = useState(location.state)

  const connectedCtc = useRef();

  const [trigger,setTrigger] =useState(false)
  const account =useRecoilValue(AccountState)
  const [ctcInfo,setctcInfo]=useState({})
  const [hasAttach,setHasAttach] =useState(false)
  const [hasBidded,setBidded]=useState(false)
  const  [bid,setBid]=useState("")
  const [outcome,setOutcome]=useState("")
  const attach=async (contractInfo) => {
     
    connectedCtc.current = account.contract(backend, JSON.parse(contractInfo));
    //console.log(connectedCtc.current)
    const nftId = await connectedCtc.current.apis.Bidder.optIn();
    await account.tokenAccept(nftId);

    setHasAttach(true)
    }

    const submit=async()=>{
      try{
        const [lastBidder,lastBid] = await  connectedCtc.current.apis.Bidder.bid(reach.parseCurrency(Number(bid)))
        console.log(lastBid,lastBidder,"eafhaebh")
        if(bid >lastBid){
          setOutcome(`You out bid ${lastBidder} who bidded ${reach.formatCurrency(Number(lastBid))}`)
        }else{
          setOutcome(`You bid was less than last bid,${reach.formatCurrency(Number(lastBid))} Algo`)
        }
       
      }catch(e){
         console.log(e)
      }
          
      setBidded(true)
         
    }

    const ok=()=>{
      setHasAttach(false)

       setTrigger(false)
  }

  return (
    <div>
    <div className='flex px-16 py-10'>
        <main className='w-3/5 flex flex-col space-y-4'>
          <Player  songName={location.state.item.title} />
          <main className='flex flex-col space-y-4'>
             <h5 className='text-sm '>Title: {location.state.item.title}</h5>
              <h5 className='text-sm '>NFT ID: {location.state.item.id}</h5>
              <h5 className='text-sm  '>Minimum Bid: {location.state.item.price} Algo</h5>
              <main>
                 <h5 className='text-sm  '>Description</h5>
                 <p className='text-xs px-1'>{location.state.item.description}</p>
              </main>

        </main>
        </main>
       
       <main className="w-2/5 ">
        <div className='flex flex-col w-full space-y-4'>
            
          <main className='flex flex-col space-y-4  w-full'>
          <h5 className='text-lg text-slate-600 '> Song cover</h5>
            <img src={location.state.item.imgUrl} alt="" className='w-3/4 h-36 rounded-md shadow'/>
          </main>
          <h5 className='text-lg text-slate-600 '>Status: <span className='text-yellow-700 text-sm'>{location.state.item.timeout}</span></h5>
          <main className='flex px-12'>
            <button onClick={()=>setTrigger(true)} className='py-0.5 px-2 border bg-blue-800 rounded-lg hover:bg-white hover:text-blue-800 text-white w-56'>Bid</button>
          </main>
            
        </div>
      </main>
    </div>
    
    <Modal trigger={trigger} cname="h-72 w-1/2 shadow rounded-lg py-4 px-4">
        
      <div className='modal-div '>
        <main className='flex justify-end'>
          <button onClick={()=>setTrigger(false)}><AiOutlineCloseCircle className="text-md" /></button>
        </main>
            {hasAttach===false&&
              <div>
                  <div className='flex flex-col justify-center items-center space-y-4'>
                      <h5>Contract information</h5>
                      <h5>{locationState.item.ctcInfo}</h5>
                        <textarea 
                          type='text'
                          onChange={(e)=>setctcInfo(e.target.value)}
                          name="ctcInfo"
                          value={ctcInfo}
                          className="text-black rounded-lg border"
                        />
                      <button onClick={()=>attach(ctcInfo)} className='px-3 py-0.5 border rounded-full text-sm text-white bg-blue-600 hover:bg-white hover:text-blue-600'>Attach</button>
                    </div>
              </div>
              }
                  
              {hasAttach===true&&
              <div className='flex flex-col justify-center items-center space-y-6'>
                <RiAuctionFill className='text-7xl text-slate-500'  />
                {hasBidded===false&&
                  <>
                      <input 
                        type="text"
                        placeholder='Place your bid (Algo)'
                        className='border h-8  text-sm outline-none rounded-lg px-6 py-4'
                        name='bid'
                        value={bid}
                        onChange={(e)=>setBid(e.target.value)}
                      />
                      <button onClick={submit} className='active:bg-blue-600 bg-blue-600 px-2 py-0.5 rounded-lg text-white text-sm hover:bg-white hover:text-blue-600'>Submit</button>

                      <h5 className='text-xs'>Minimum Bid: {`${locationState.item.price} Algo`}</h5>
                  </>
                }

                {hasBidded===true&&
                 
              <>
                <h5>You bid with {bid} Algo</h5>
                <h5>{outcome} </h5>
                <button onClick={ok} className='text-sm text-white hover:bg-white hover:text-blue-600 bg-blue-600 px-2 py-0.5 rounded-lg'>Ok</button>
              </>

              }
          </div>
        } 
      </div>
    </Modal>
</div>
)
}
