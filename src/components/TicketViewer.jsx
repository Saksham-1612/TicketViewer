import React, { useEffect } from 'react';
import Ticket from './Ticket';
import TopBar from './TopBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../redux/slice/ticketSlice';
import { Skeleton } from '@mui/material';

const TicketViewer = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets.tickets);
  const loading = useSelector(state => state.tickets.loading);
  const view = useSelector(state => state.view.view);
  const search = useSelector(state => state.search.search);

  useEffect(() => {
    if (tickets.length == 0)
      dispatch(fetchTickets());
  }, [dispatch]);

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(search.toLowerCase()) &&
    (view === "All" || ticket.view === view)
  );

  return (
    <div className="container mx-auto">
      <TopBar />
      <div className="bg-gray-100 rounded p-1 overflow-y-auto overflow-x-hidden h-[90%] flex flex-col items-center">
        {loading && (
          <div className='w-full'>
            {Array.from({ length: 20 }).map((_, index) => (
              <Skeleton key={index} className='w-full rounded-lg px-4 py-4' />
            ))}
          </div>
        )}
        {filteredTickets.map((ticket, index) => (
          <Ticket ticket={ticket} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TicketViewer;
