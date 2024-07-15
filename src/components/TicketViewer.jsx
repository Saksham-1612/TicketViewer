import React from 'react';
import Ticket from './Ticket';
import TopBar from './TopBar';

const tickets = [
  { email: "somnath678@gmail.com", status: "INBOX", subject: "Linkedin-Mihul Singh Sol...", flag: "RES", date: "Jun 20" },
  { email: "himanshu.gupta@kapture...", status: "INBOX", subject: "Re:Test Email", flag: "RES", date: "Jul 05" },
  { email: "Priya Saxena", status: "INBOX", subject: "Raised a concern", flag: "RES", date: "Jul 03" },
  { email: "somnath678@gmail.com", status: "INBOX", subject: "Linkedin-Mihul Singh Sol...", flag: "RES", date: "Jun 20" },
  { email: "himanshu.gupta@kapture...", status: "INBOX", subject: "Re:Test Email", flag: "RES", date: "Jul 05" },
  { email: "Priya Saxena", status: "INBOX", subject: "Raised a concern", flag: "RES", date: "Jul 03" },
  { email: "somnath678@gmail.com", status: "INBOX", subject: "Linkedin-Mihul Singh Sol...", flag: "RES", date: "Jun 20" },
  { email: "himanshu.gupta@kapture...", status: "INBOX", subject: "Re:Test Email", flag: "RES", date: "Jul 05" },
  { email: "Priya Saxena", status: "INBOX", subject: "Raised a concern", flag: "RES", date: "Jul 03" },
  { email: "somnath678@gmail.com", status: "INBOX", subject: "Linkedin-Mihul Singh Sol...", flag: "RES", date: "Jun 20" },
  { email: "himanshu.gupta@kapture...", status: "INBOX", subject: "Re:Test Email", flag: "RES", date: "Jul 05" },
  { email: "Priya Saxena", status: "INBOX", subject: "Raised a concern", flag: "RES", date: "Jul 03" },
  { email: "somnath678@gmail.com", status: "INBOX", subject: "Linkedin-Mihul Singh Sol...", flag: "RES", date: "Jun 20" },
  { email: "himanshu.gupta@kapture...", status: "INBOX", subject: "Re:Test Email", flag: "RES", date: "Jul 05" },
  { email: "Priya Saxena", status: "INBOX", subject: "Raised a concern", flag: "RES", date: "Jul 03" },
];

const TicketViewer = () => {
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