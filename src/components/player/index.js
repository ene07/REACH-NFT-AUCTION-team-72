import React, { useRef,useState } from 'react';
import discImg from "../../assests/Pictures/img.png"
import spiningDisc from "../../assests/Pictures/spinning disc.gif"

import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill,BsFillSkipEndCircleFill} from 'react-icons/bs';

export default function Player({songName}) {
  const [playing,setPlaying]=useState(false)
  return (
    <div>
        <div className='flex space-x-4'>
          {playing===false&&
             <img src={discImg} alt="" className='w-56 h-56'/>
          }
          {playing===true&&
             <img src={spiningDisc} alt="" className='w-56 h-56'/>
          }
           
           
            <main className='flex flex-col justify-center items-center space-y-2'>
                <h5>{songName}</h5>
             
                <div className='flex space-x-4'>
                    <BsFillSkipStartCircleFill className='text-2xl'/>
                    {playing===false&&
                        <BsFillPlayCircleFill className='text-2xl hover:text-3xl' onClick={()=>setPlaying(true)}/>
                    }
                     {playing===true&&
                        < BsFillPauseCircleFill className='text-2xl hover:text-3xl' onClick={()=>setPlaying(false)}/>
                    }
                  
                    <BsFillSkipEndCircleFill className='text-2xl'/>

                </div>
            </main>

        </div>
    </div>
  )
}
