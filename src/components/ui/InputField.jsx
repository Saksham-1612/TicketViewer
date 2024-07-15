import { TextField } from '@mui/material'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

function InputField({ className, label }) {
    return (
        <div className={`m-1.5 ${className}`}>
            <TextField size='small' id="outlined-basic" placeholder={label} variant="outlined" />
        </div>
    )
}

export default InputField