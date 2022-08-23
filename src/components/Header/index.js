import React from 'react'
import {Link} from "react-router-dom"
import ConnectAccount from '../connectAccount'
export default function Header() {
  return (
    <div className='py-6 px-10 '>
       <div className='nav flex justify-between items-center '> 
          <div className='flex space-x-10 items-center '>
              <main >
              <h5 className='text-lg'>Audio NFT</h5>
              </main>
              <main className='flex space-x-6 items-center'>
                
                 <Link to="/"><h5 className='text-slate-400'>Home</h5></Link>
                 <Link to="/collections"><h5 className='text-slate-400'>Collection</h5></Link>
                 <Link to="/createnft"><h5 className='text-slate-400'>Create</h5></Link>
              </main>

            </div>
            <div className=''>
                <ConnectAccount />
            </div>

     
     </div>
    </div>
   
  )
}
