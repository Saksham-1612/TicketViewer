import React from 'react'
import TicketViewer from '../components/TicketViewer'
import SideBar from '../components/SideBar'

function TicketPage() {

    return (
        <div className='flex h-[100vh] overflow-hidden'>
            <SideBar />
            <TicketViewer />
        </div>
    )
}

export default TicketPage