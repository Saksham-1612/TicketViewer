import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

function LeftArrowButton({ action }) {
    return (
        <div className='bg-gray-200 p-2 rounded-md' onClick={action}>
            <MdOutlineKeyboardArrowLeft />
        </div>
    )
}

export default LeftArrowButton