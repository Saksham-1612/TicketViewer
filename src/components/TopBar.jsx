import { Checkbox } from '@mui/material'
import React from 'react'
import InputField from './ui/InputField'
import LimitComponent from './ui/LimitComponent'
import PaginationComponent from './ui/PaginationComponent'
import Filter from './ui/Filter'
import GroupButton from './ui/GroupButton'

function TopBar() {
    return (
        <div className="bg-white border-b-2 flex items-center justify-between ">
            <div className='flex '>
                <Checkbox />
                <InputField label={"Search Tickets ..."} />
                <LimitComponent />
            </div>
            <div className='flex items-center px-2 space-x-2'>
                <PaginationComponent />
                <Filter />
                <GroupButton />
            </div>
        </div>
    )
}

export default TopBar