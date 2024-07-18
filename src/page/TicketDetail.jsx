import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { MdEmail, MdFlag } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useTicketDetails from '../hooks/UseTicketDetails';
import { BsArrowLeft } from 'react-icons/bs';


function TicketDetail() {
    const ticket = useTicketDetails();
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/dashboard");
    };

    if (!ticket) {
        return <div className="h-screen flex justify-center items-center">Ticket not found</div>;
    }

    const { email, status, subject, flag, date } = ticket;

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-md">
                <div
                    className="bg-gray-200 w-fit hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={goBack}
                >
                    <BsArrowLeft />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">{subject}</h2>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md">{status}</span>
                </div>
                <div className="flex items-center mb-2">
                    <MdEmail className="text-gray-600 mr-2" />
                    <span>{email}</span>
                </div>
                <div className="flex items-center mb-2">
                    <BiCalendar className="text-gray-600 mr-2" />
                    <span>{date}</span>
                </div>
                <div className="flex items-center mb-4">
                    <MdFlag className="text-red-500 mr-2" />
                    <span className="text-red-500">{flag}</span>
                </div>
                <hr className="my-4" />

            </div>
        </div>
    );
}

export default TicketDetail;
