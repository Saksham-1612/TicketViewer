import React, { useEffect, useState } from 'react';
import Ticket from './Ticket';
import TopBar from './TopBar';
import axios from 'axios';


const TicketViewer = () => {
  const [tickets, setTickets] = useState([])

  const fetchData = async () => {
    const res = await axios.get("https://ticket-api-production-0c8e.up.railway.app/tickets")
    console.log(res.data)
    setTickets(res.data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container mx-auto ">
      <TopBar />
      <div className="bg-gray-100 rounded p-1 overflow-y-auto overflow-x-hidden h-[90%] flex flex-col items-center">
        {tickets.map((ticket, index) => (
          <Ticket ticket={ticket} key={index} />
        ))}
      </div>
    </div >
  );
};

export default TicketViewer;