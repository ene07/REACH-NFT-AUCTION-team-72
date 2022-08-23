import React from 'react'
import Header from '../components/Header'
export default function Layout({children}) {
  return (
    <div>
        <div className='w-full'>
            <Header />
            <div>
                {children}
            </div>
        </div>

    </div>
  )
}
