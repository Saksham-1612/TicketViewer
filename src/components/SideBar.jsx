import React, { useState } from 'react';
import { PiFoldersFill } from "react-icons/pi";
import { BsPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../redux/slice/statusSlice';
import NewTicketModal from './NewTicketModal';

function SideBar() {
    const selectedStatus = useSelector(state => state.status.status);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const allStatus = [
        "All",
        "Unassigned",
        "All Pending",
        "All Complete",
        "All Junk",
        "Assigned to me",
        "Created by me",
        "Completed by me"
    ];

    const handleClick = (status) => {
        dispatch(setStatus(status));
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="w-1/4 border-r-2 h-screen">
            <div>
                <div className='flex items-center justify-between p-4 border-b-2'>
                    <h2 className="font-semibold text-blue-500">Views</h2>
                    <div className='flex space-x-4'>
                        <PiFoldersFill className='text-2xl cursor-pointer' />
                        <BsPlusCircleFill className='text-2xl cursor-pointer' onClick={handleOpen} />
                    </div>
                </div>
                <ul className='border-b-2 p-2'>
                    {allStatus.map((status) => (
                        <li
                            key={status}
                            className={`m-1 p-2 cursor-pointer rounded-md ${selectedStatus === status ? 'bg-blue-200 transition-all font-semibold' : 'hover:bg-gray-100'}`}
                            onClick={() => handleClick(status)}
                        >
                            {status}
                        </li>
                    ))}
                </ul>
                <div className='p-2'>
                    <h2 className="font-semibold mb-2">Filters saved for Designation</h2>
                </div>
            </div>

            <NewTicketModal open={open} handleClose={handleClose} />
        </div>
    );
}

export default SideBar;
