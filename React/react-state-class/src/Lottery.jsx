import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import TicketNum from "./TicketNum";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningSum = 15, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));

  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (  
    
    <>
      <h1>Lottery Game!</h1>

      <Ticket ticket={ticket} />

      <button onClick={buyTicket}>Buy new ticket</button>
      

      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </>
  );
}
