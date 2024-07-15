import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

function RightArrowButton({ action }) {
    return (
        <div className='bg-gray-100 p-2 rounded-md' onClick={action}>
            <MdOutlineKeyboardArrowRight />
        </div>
    )
}

export default RightArrowButton