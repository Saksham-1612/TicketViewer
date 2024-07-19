import React, { useEffect } from 'react'
import TicketViewer from '../components/TicketViewer'
import SideBar from '../components/SideBar'

function TicketPage() {

    useEffect(() => {
        if (localStorage.getItem("token") == undefined) {
            window.location.href = "/login";
            return;
        }
    })

    return (
        <div className='flex h-[100vh] overflow-hidden'>
            <SideBar />
            <TicketViewer />
        </div>
    )
}

export default TicketPage