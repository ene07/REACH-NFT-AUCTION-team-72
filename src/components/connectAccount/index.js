import React,{useState} from 'react'
import Modal from "../modal"
import {AiOutlineCloseCircle} from "react-icons/ai"
import { AccountState } from '../../recoilState/globalState';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import { ALGO_PeraConnect as PeraConnect } from '@reach-sh/stdlib';
import {useRecoilState} from "recoil"
import Button from "@mui/material/Button";

// const reach = loadStdlib('ALGO');
const ConnectAccount= () =>{
  const [trigger,setTrigger] =useState(false)
  const [account,setAccount] =useRecoilState( AccountState)
  const [address,setAddress] =useState("")

  const useMyAlgo=async(secret, mnemonic = false)=>{
    delete window.algorand;
    const reach = loadStdlib('ALGO');
     reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
     try {
      const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
       console.log(account.getAddress(),"acc>>>")
       setAccount(account)
       setAddress(account.getAddress())
    } catch (error) {
     
    }
  }
  const usePera=async(secret, mnemonic = false)=>{
    delete window.algorand;
    const reach = loadStdlib('ALGO');
     reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', PeraConnect } ));

     try {
      const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
      console.log(account.getAddress(),"acc>>>")
      setAccount(account)
      setAddress(account.getAddress())
    } catch (error) {
     
    }
  }
  const useWalletConnect=async(secret, mnemonic = false)=>{
    delete window.algorand;
    const reach = loadStdlib('ALGO');
     reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet',  WalletConnect } ));
     try {
      const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
      console.log(account.getAddress(),"acc>>>")
      setAccount(account)
      setAddress(account.getAddress())
    } catch (error) {
      console.log(error)
    }
  }
  return(
    <div className='connect'>
      { address.length===0&& <Button 
        variant='contained'
        disableElevation
        sx={{background: 'purple', "&:hover": { transition: '0.2sec ease-in-out', background: 'white', color: 'purple', fontWeight: "bold"}}}
        onClick={()=>setTrigger(true)}
      >
        Connect Wallet 
      </Button>}
       
      {address.length>1&&
        <Button variant='contained' className='py-1 px-4 text-sm border border-slate-400 rounded-full hover:bg-rose-400 hover:border-0'
            onClick={()=>setTrigger(true)}
        >
            {address.slice(0,9)+"..."}
        </Button>}
        
         <Modal trigger={trigger} cname="h-80 w-3/5 shadow rounded-lg py-4 px-4">
            <div className='connect-modal '>
               <main className='flex justify-end'>
                 <button onClick={()=>setTrigger(false)}><AiOutlineCloseCircle className="text-md" /></button>
                </main>

                <div className='flex justify-center items-center space-x-8'>
                    <main className='flex flex-col items-center py-12 space-y-4'>
                       <h5 className='text-3xl font-bold'>Connect  your wallet <br />account</h5>
                       <p className='text-slate-500 px-3 text-sm font-light'>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit   "}</p>
                    </main>
                    <main className='flex flex-col justify-center space-y-8'>
                        <div className='flex rounded-lg shadow-lg space-x-4 px-8 py-2 hover:bg-slate-900 active:bg-white'
                           onClick={useMyAlgo}
                        >
                             <img src="https://algorand-governance-platform-web.s3.amazonaws.com/static/media/MyAlgoLogo.30ab0664.svg"
                               alt="myAlgowallet"
                             />
                             <h5>My Algo Wallet</h5>
                        </div>
                        <div className='flex rounded-lg  shadow-lg space-x-4 px-8 py-2  hover:bg-slate-900 active:bg-white'
                           onClick={usePera}
                         >
                             <img src="https://algorand-governance-platform-web.s3.amazonaws.com/static/media/peraMobileWalletLogo.2a3002f0.svg" alt='' />
                             <h5>Pera Wallet</h5>
                        </div>

                        <div className='flex rounded-lg  shadow-lg  space-x-4 px-8 py-2 hover:bg-slate-900 active:bg-white'
                            onClick={ useWalletConnect}
                          >
                             <img src="https://algorand-governance-platform-web.s3.amazonaws.com/static/media/Other.eac2bef4.svg" alt='' className='bg-white rounded-full' />
                             <h5>Other Wallet</h5>
                        </div>
                    </main>
                </div>
            </div>
         </Modal>
    </div>
  )  
  
}

export default ConnectAccount  