import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    tickets: [],
    loading: false,
    error: null,
};

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async () => {
        try {
            const response = await axios.get("https://ticket-api-production-0c8e.up.railway.app/tickets");
            return response.data;
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw error;
        }
    }
);

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        addTicket: (state, action) => {
            state.tickets.push(action.payload);
        },
        removeTicket: (state, action) => {
            state.tickets = state.tickets.filter(ticket => ticket.id !== action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTickets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTickets.fulfilled, (state, action) => {
                state.loading = false;
                state.tickets = action.payload;
            })
            .addCase(fetchTickets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export const { addTicket, removeTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
