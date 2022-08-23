import React,{useState,useEffect} from 'react'
import discImg from "../../assests/Pictures/img.png"
import { collection, onSnapshot, doc,getDocs,query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../firebase/fireabse.util'
import { Link } from 'react-router-dom'
export default function Collection() {
  const [collections,setCollections]=useState([1,2,3,4,5,6])
  const [collectionNft,setCollection] =useState([])
  const [nft,setNft]=useState({})

  useEffect(()=>{
    const getNft=async()=>{
      const q = query(collection(db, "Nfts"), orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      const nfts=[]
      // console.log(querySnapshot)
      querySnapshot.docs.map((doc)=>{
         // console.log(doc.data())
         nfts.push({...doc.data(),id:doc.id})
         setNft({...doc.data(),id:doc.id})

         
       })
       setCollection(nfts)
     // setproposal( querySnapshot.docs)
   }

   getNft()
  },[])
  console.log(collectionNft)

  return (
    <div>
      <div>
        <main className='flex justify-center w-full pt-10 font-bold text-slate-800'>
           <h5 className="text-2xl ">Collections</h5>
        </main>
      </div>
      <div>
      <div className='grid grid-flow-row grid-cols-3 gap-x-8 gap-y-10 px-16 py-12'>
         {collectionNft.map((item)=>{
            return(
              <div className='flex flex-col border space-y-6 py-12 rounded-lg shadow-md'>
                 <main className='flex justify-end px-4'>
                  {item.available===true&&
                    <h5 className='text-sm text-blue-600'>Available</h5>
                  }
                   {item.available===false&&
                    <h5 className='text-sm text-blue-600'>Unavailable</h5>
                  }
                    
                 </main>
                <main className='w-full flex justify-center px-4'>
                <img src={ item.imgUrl } alt="" className='w-32 h-32'/>
                </main>
                <main className=' px-4 space-y-4'>
                  <h5 className='font-semibold text-lg '>{item.title}</h5>
              
               
                <p>{item.description.slice(0,60)+"..."}</p>
                </main>
                <main className='flex justify-center'>
                <Link to={`/bid/${item.id}`}
                state={{
                 item
                   }}
                 >
                <button className='py-0.5 px-4 border rounded-full bg-blue-700 text-sm text-white hover:bg-white hover:text-blue-700'>View</button>
                </Link>
                </main>
                
                
              </div>
            )
         })

         }
       </div>
      </div>

    </div>
  )
}
