import React, { useState } from 'react';
import { BsHddStack } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';

function GroupButton() {
    const [active, setActive] = useState('list');

    return (
        <div className='flex rounded-md'>
            <div
                className={`p-2 rounded-l-md rounded-t-md rounded-b-md ${active === 'list' ? 'bg-gray-200' : ''}`}
                onClick={() => setActive('list')}
            >
                <FaListUl />
            </div>
            <div
                className={`p-2 rounded-t-md rounded-b-md ${active === 'stack' ? 'bg-gray-200' : ''}`}
                onClick={() => setActive('stack')}
            >
                <BsHddStack />
            </div>
        </div>
    );
}

export default GroupButton;