import { Checkbox, Tooltip, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { BiArchive, BiInfoCircle } from 'react-icons/bi'
import { BsFlagFill } from 'react-icons/bs'
import { MdDelete, MdMail } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { truncateEmail } from '../utils/utils'
import { removeTicket } from '../redux/slice/ticketSlice'
import { Alert } from '@mui/material'

function Ticket({ ticket }) {
    const [checked, setChecked] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const dispatch = useDispatch()
    const handleCheck = () => {
        setChecked(!checked)
    }
    const handleDelete = () => {
        dispatch(removeTicket(ticket.id))
        setSnackbarOpen(true)
    }
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false)
    }
    const allChecked = useSelector(state => state.check.allchecked)
    return (
        <>
            <div className='w-full grid m-1  grid-cols-12   items-center bg-white rounded-lg justify-between px-4'>
                <Checkbox className='col-span-1' checked={checked || allChecked} onChange={handleCheck} />
                <p className='col-span-3'>{truncateEmail(ticket.email)}</p>
                <MdMail className='text-xl col-span-1' />
                <Tooltip title={"INBOX"} className='col-span-1'>
                    <div className='w-16 text-center'>
                        <p className='bg-red-100 cursor-pointer text-red-400 px-1 rounded-md'>{"INBOX"}</p>
                    </div>
                </Tooltip>
                <div className='col-span-2'>
                    <p>{ticket.subject}</p>
                </div>
                <Tooltip title="Resolved" className='col-span-1'>
                    <div className='w-14 text-center'>
                        <p className='bg-blue-100 cursor-pointer text-blue-400 px-1 rounded-md'>{ticket.flag}</p>
                    </div>
                </Tooltip>
                <BsFlagFill className='text-red-500 col-span-1' />
                <Link to={`/ticket/${ticket.id}`}>
                    <BiInfoCircle className='text-lg col-span-1' />
                </Link>
                <MdDelete className='col-span-1 cursor-pointer' onClick={handleDelete} />
            </div>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Ticket deleted successfully!
                </Alert>
            </Snackbar>
        </>
    )
}

export default Ticket
