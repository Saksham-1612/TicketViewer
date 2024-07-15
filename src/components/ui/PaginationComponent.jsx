import React, { useState } from 'react';
import LeftArrowButton from './LeftArrowButton';
import { TextField } from '@mui/material';
import RightArrowButton from './RightArrowButton';

function PaginationComponent() {
    const [page, setPage] = useState(0);

    const handlePageDecrement = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const handlePageIncrement = () => {
        setPage(page + 1);
    };

    return (
        <div className='flex items-center space-x-2'>
            <LeftArrowButton action={handlePageDecrement} />
            <div className='m-1.5 w-12'>
                <TextField
                    size='small'
                    value={page}
                    onChange={(e) => setPage(Number(e.target.value))}
                />
            </div>
            <div>of 19</div>
            <RightArrowButton action={handlePageIncrement} />
        </div>
    );
}

export default PaginationComponent;