import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allchecked: false,
};

const checkSlice = createSlice({
    name: 'check',
    initialState,
    reducers: {
        setAllChecked: (state, action) => {
            state.allchecked = action.payload
        },
    },
});

export const { setAllChecked } = checkSlice.actions

export default checkSlice.reducer