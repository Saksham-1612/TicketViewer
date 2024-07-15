import { MenuItem, Select } from '@mui/material';
import React from 'react'
import { ImSortAmountAsc } from 'react-icons/im';

function Filter() {
    const [value, setValue] = React.useState('Last Conversation');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div>
            <Select
                size='small'
                sx={{ width: 1, height: '40px' }}
                id=""
                value={value}
                onChange={handleChange}
            >
                <MenuItem value={"Last Conversation"} > <span className='flex items-center gap-x-2' > <ImSortAmountAsc className='' />Last Conversation</span></MenuItem>
                <MenuItem value={"First Conversation"}> <span className='flex items-center gap-x-2' > <ImSortAmountAsc className='' /> First Coversation</span></MenuItem>
                <MenuItem value={"Second Conversation"}><span className='flex items-center gap-x-2' > <ImSortAmountAsc className='' />Second Conversation</span></MenuItem>
            </Select>
        </div>
    )
}

export default Filter