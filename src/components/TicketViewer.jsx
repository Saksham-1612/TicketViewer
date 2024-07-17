import React, { useEffect, useState } from 'react';
import Ticket from './Ticket';
import TopBar from './TopBar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTickets } from '../redux/slice/ticketSlice';
import { Skeleton } from '@mui/material';


const TicketViewer = () => {
  const dispatch = useDispatch()
  const tickets = useSelector(state => state.tickets.tickets)
  const [loading, setLoading] = useState(false)
  const view = useSelector(state => state.view.view)
  const search = useSelector(state => state.search.search)

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://ticket-api-production-0c8e.up.railway.app/tickets")
      dispatch(setTickets(res.data));
      // console.log(res.data)
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (tickets.length == 0) {
      fetchData()
    }

  }, [])

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(search.toLowerCase()) &&
    (view === "All" || ticket.view === view)
  );

  return (
    <div className="container mx-auto ">
      <TopBar />
      <div className="bg-gray-100 rounded p-1 overflow-y-auto overflow-x-hidden h-[90%] flex flex-col items-center">
        {loading && (
          <div className='w-full'>
            {Array.from({ length: 20 }).map((_, index) => (
              <Skeleton key={index} className='w-full rounded-lg px-4 py-4' />
            ))}
          </div>
        )}
        {filteredTickets?.map((ticket, index) => (
          <Ticket ticket={ticket} key={index} />
        ))}
      </div>
    </div >
  );
};

export default TicketViewer;