import { TextField } from '@mui/material';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/slice/searchSlice';

function InputField({ className, label }) {
    const search = useSelector(state => state.search.search);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setSearch(e.target.value));
    };

    return (
        <div className={`m-1.5 ${className}`}>
            <TextField
                size='small'
                id="outlined-basic"
                placeholder={label}
                value={search}
                variant="outlined"
                onChange={handleChange}
            />
        </div>
    );
}

export default InputField;