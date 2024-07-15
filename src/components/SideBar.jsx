import React, { useState } from 'react';
import { PiFoldersFill } from "react-icons/pi";
import { BsPlusCircleFill } from "react-icons/bs";

function SideBar() {
    const [selectedView, setSelectedView] = useState("Unassigned");

    const views = [
        "Unassigned",
        "All Pending",
        "All Complete",
        "All Junk",
        "Assigned to me",
        "Created by me",
        "Completed by me"
    ];

    const handleClick = (view) => {
        setSelectedView(view);
    };

    return (
        <div className="w-1/4 border-r-2 h-screen">
            <div className="">
                <div className='flex items-center justify-between p-2 py-3.5 border-b-2'>
                    <h2 className="font-semibold text-blue-500">Views</h2>
                    <div className='flex space-x-6'>
                        <PiFoldersFill className='text-2xl cursor-pointer' />
                        <BsPlusCircleFill className='text-2xl cursor-pointer' />
                    </div>
                </div>
                <ul className='border-b-2 p-1'>
                    {views.map((view) => (
                        <li
                            key={view}
                            className={`m-1 p-2 cursor-pointer rounded-md ${selectedView === view ? 'bg-blue-200 transition-all font-semibold ' : 'hover:bg-gray-100'}`}
                            onClick={() => handleClick(view)}
                        >
                            {view}
                        </li>
                    ))}
                </ul>
                <div className='p-1'>
                    <h2 className="font-semibold mb-2">Filters saved for Designation</h2>
                </div>
            </div>
        </div>
    );
}

export default SideBar;