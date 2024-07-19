import React, { useState } from 'react';
import { Modal, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTicket } from '../redux/slice/ticketSlice';

function NewTicketModal({ open, handleClose }) {
    const dispatch = useDispatch();

    const allStatus = [
        "All",
        "Unassigned",
        "All Pending",
        "All Complete",
        "All Junk",
        "Assigned to me",
        "Created by me",
        "Completed by me"
    ];

    const [newTicketData, setNewTicketData] = useState({
        email: '',
        subject: '',
        flag: 'NEW',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        status: 'All'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTicketData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const newTicket = newTicketData;
        dispatch(addTicket(newTicket));
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className="flex justify-center items-center"
        >
            <div className="bg-white rounded-lg flex flex-col space-y-3 p-6 w-96 shadow-lg">
                <TextField
                    size='small'
                    name="email"
                    placeholder="Email"
                    variant="outlined"
                    value={newTicketData.email}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    size='small'
                    name="subject"
                    placeholder="Subject"
                    variant="outlined"
                    value={newTicketData.subject}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel>Flag</InputLabel>
                    <Select
                        name="flag"
                        value={newTicketData.flag}
                        onChange={handleChange}
                        label="Flag"
                    >
                        <MenuItem value="NEW">NEW</MenuItem>
                        <MenuItem value="READ">READ</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel>Status</InputLabel>
                    <Select
                        name="status"
                        value={newTicketData.status}
                        onChange={handleChange}
                        label="Status"
                    >
                        {allStatus.map(status => (
                            <MenuItem key={status} value={status}>
                                {status}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button onClick={handleSubmit} variant="contained" className="mt-4 bg-blue-500 hover:bg-blue-700" fullWidth>
                    Submit
                </Button>
                <Button onClick={handleClose} variant="contained" className="mt-4 bg-blue-500 hover:bg-blue-700" fullWidth>
                    Close
                </Button>
            </div>
        </Modal>
    );
}

export default NewTicketModal;
