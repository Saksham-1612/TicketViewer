import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function useTicketDetails() {
    const { id } = useParams();
    const tickets = useSelector(state => state.tickets.tickets);
    const ticket = tickets.find(t => t.id == id);

    return ticket;
}

export default useTicketDetails;
