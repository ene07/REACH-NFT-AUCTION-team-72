import React from 'react'
import heroImg from "../../assests/Pictures/img2.png"
export default function Home() {
  return (
    <div>
       <div>
          <div className='top flex px-10 py-20'>
             <main className='w-3/5 border flex flex-col space-y-4'>
              <h5 className='text-3xl font-semibold text-slate-700'>Welcome to the world of <br></br><span className='text-4xl font-bold text-slate-900 py-0.5'>Audio NFT's.</span></h5>
               <p className='text-slate-700 text-2xl font-semibold '>
               We're a team of talented <br></br>
               musical creators. Music is art and art is music.
               <br></br>
               Own your space.
               </p>
               <div className='flex px-6 py-3 '>
                  <button className='py-0.5 px-2 bg-blue-700 text-white rounded-sm text-sm hover:bg-white hover:text-blue-700'>Explore</button>
                
               </div>
             </main>
             <main className='w-2/5'>

             </main>

          </div>
          <div>
            
            </div>
       </div>
    </div>
  )
}
