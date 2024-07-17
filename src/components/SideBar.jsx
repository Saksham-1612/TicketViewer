import React, { useState } from 'react';
import { PiFoldersFill } from "react-icons/pi";
import { BsPlusCircleFill } from "react-icons/bs";
import { Modal, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setView } from '../redux/slice/viewSlice';

function SideBar() {
    const selectedView = useSelector(state => state.view.view)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);

    const views = [
        "All",
        "Unassigned",
        "All Pending",
        "All Complete",
        "All Junk",
        "Assigned to me",
        "Created by me",
        "Completed by me"
    ];

    const handleClick = (view) => {
        dispatch(setView(view))
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
                    {views.map((view) => (
                        <li
                            key={view}
                            className={`m-1 p-2 cursor-pointer rounded-md ${selectedView === view ? 'bg-blue-200 transition-all font-semibold' : 'hover:bg-gray-100'}`}
                            onClick={() => handleClick(view)}
                        >
                            {view}
                        </li>
                    ))}
                </ul>
                <div className='p-2'>
                    <h2 className="font-semibold mb-2">Filters saved for Designation</h2>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                className="flex justify-center items-center"
            >
                <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                    <Typography id="modal-title" variant="h6" component="h2" className="font-semibold">
                        Add New View
                    </Typography>
                    <Typography id="modal-description" className="mt-2">
                        Here you can add a new view.
                    </Typography>
                    <Button onClick={handleClose} variant="contained" className="mt-4 bg-blue-500 hover:bg-blue-700">
                        Close
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

export default SideBar;