import { InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

function LimitComponent() {
    const [value, setValue] = useState(50);
    const handleChange = (event) => {
        setValue(Number(event.target.value));
    };
    return (
        <div className='flex items-center space-x-2' >
            <InputLabel id="demo-simple-select-label">Show</InputLabel>
            <Select
                size='small'
                sx={{ width: 80, height: '40px' }}
                value={value}
                onChange={handleChange}
            >
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={150}>150</MenuItem>
            </Select>
            <p className=''>1-50 of 995</p>
        </div>
    )
}

export default LimitComponent;