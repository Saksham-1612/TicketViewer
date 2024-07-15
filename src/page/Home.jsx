import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='flex justify-center font-sans items-center space-y-6 flex-col h-[100vh] background-image'>
            <h2 className='text-6xl text-white/80'>Welcome to Kapture CX</h2>
            <Link to="/dashboard" className='text-white/80 px-2 py-1 border-2 rounded-lg'>Dashboard</Link>
        </div>
    )
}

export default Home