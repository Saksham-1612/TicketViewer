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
            const response = await axios.get("https://ticket-springboot-production.up.railway.app/tickets/");
            return response.data;
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw error;
        }
    }
);

export const addTicket = createAsyncThunk(
    'tickets/addTicket',
    async (newTicket) => {
        try {
            console.log(newTicket);
            const response = await axios.post("https://ticket-springboot-production.up.railway.app/tickets/add", newTicket);
            return response.data;
        } catch (error) {
            console.error('Error adding ticket:', error);
            throw error;
        }
    }
);

export const removeTicket = createAsyncThunk(
    'tickets/removeTicket',
    async (ticketId) => {
        try {
            await axios.delete(`https://ticket-springboot-production.up.railway.app/tickets/remove/${ticketId}`);
            return ticketId;
        } catch (error) {
            console.error('Error removing ticket:', error);
            throw error;
        }
    }
);

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {},
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
            .addCase(addTicket.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTicket.fulfilled, (state, action) => {
                state.loading = false;
                state.tickets.push(action.payload);
            })
            .addCase(addTicket.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(removeTicket.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeTicket.fulfilled, (state, action) => {
                state.loading = false;
                state.tickets = state.tickets.filter(ticket => ticket.id !== action.payload);
            })
            .addCase(removeTicket.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default ticketSlice.reducer;
