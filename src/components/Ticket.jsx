import { Checkbox, Tooltip } from '@mui/material'
import React from 'react'
import { BiArchive } from 'react-icons/bi'
import { BsFlagFill } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'


function Ticket({ ticket }) {
    return (
        <div className='w-full grid m-1  grid-cols-12   items-center bg-white rounded-lg justify-between px-4'>
            <Checkbox className='col-span-1' />
            <p className='col-span-3'>{ticket.email}</p>
            <MdMail className='text-xl col-span-1' />
            <Tooltip title={ticket.status} className='col-span-1'>
                <div className='w-16 text-center'>
                    <p className='bg-red-100 cursor-pointer text-red-400 px-1 rounded-md'>{ticket.status}</p>
                </div>
            </Tooltip>
            <div className='col-span-3'>
                <p>{ticket.subject}</p>
            </div>
            <Tooltip title="Resolved" className='col-span-1'>
                <div className='w-14 text-center'>
                    <p className='bg-blue-100 cursor-pointer text-blue-400 px-1 rounded-md'>{ticket.flag}</p>
                </div>
            </Tooltip>
            <BsFlagFill className='text-red-500 col-span-1' />
            <BiArchive className='text-lg col-span-1' />
        </div>
    )
}

export default Ticket