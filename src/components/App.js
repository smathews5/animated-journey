import React from 'react'
import KeyPad from "./KeyPad";
import Header from "./Header";
import CashRegister from "./CashRegister";
import Modal from "./Modal";
import '../css/App.css';
import { useState, useEffect } from 'react';


const App = () => {

  const [modal, setModal] = useState({
    msg: '',
    visible: false
  });

  const buttonStaus = false;
  const initialTicketSatus = [
 { "name": "1", "isActive": false }, { "name": "2", "isActive": false },{ "name": "3", "isActive": false },
 { "name": "4", "isActive": false }, { "name": "5", "isActive": false },{ "name": "6", "isActive": false },
 { "name": "7", "isActive": false }, { "name": "8", "isActive": false },{ "name": "9", "isActive": false },
 { "name": "10", "isActive": false }, { "name": "11", "isActive": false },{ "name": "12", "isActive": false },
 { "name": "13", "isActive": false }, { "name": "14", "isActive": false },{ "name": "15", "isActive": false },
 { "name": "16", "isActive": false }, { "name": "17", "isActive": false },{ "name": "18", "isActive": false },
 { "name": "19", "isActive": false }, { "name": "20", "isActive": false }
  ];



  let [tickets, setTicketsSelected] = useState([]);
  const [ticketCount, setTicketCount] = useState([0]);
 //const [totalAmount, setTotalAmount] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketStatus, setTicketStatus] = useState(initialTicketSatus);

 

  const clearRegister = ()=>{
    setTicketStatus(initialTicketSatus);
    setTicketPrice(0);
    setTicketCount(0);
    
  }

  const storeTickets = (ticketNo) => {
   // alert("ticketNo:"+ ticketNo);
   //alert("getButtonStatus()"+ getButtonStatus(ticketNo));
    if (ticketCount+1 > 5  && !getButtonStatus(ticketNo).isActive) {
     alert("Only 5 tickets can be bought at a time");
      return;
    }

    toggleButtonStatus(ticketNo);
   
    let ticketsSelected = tickets + '\n Mark: ' + ticketNo;
    setTicketsSelected(ticketsSelected);
    const activeTickets = ticketStatus.filter( tkt=>{ return tkt.isActive});
    setTicketCount(activeTickets.length);
  }


  const getButtonStatus = (buttonId) => {
    //alert("getButtonStatus:")
    let currentTicketStatus = ticketStatus.filter((ticket) => {
      return ticket.name == buttonId
    })
  //  alert("getButtonStatus:"+ JSON.stringify(currentTicketStatus));
    //alert("getButtonStatus:"+ currentTicketStatus[0].isActvie);
    return currentTicketStatus[0];
  }


  const toggleButtonStatus = (buttonId) => {
    let clonedTicketStatus = ticketStatus;
    clonedTicketStatus[parseInt(buttonId) - 1].isActive = !(clonedTicketStatus[parseInt(buttonId) - 1].isActive);
    setTicketStatus(clonedTicketStatus);
  }

 
  const storeTicketPrice = (priceEntered) => {
    //alert ( "ticketPrice:"+ ticketPrice  +   "  priceEntered:"+ priceEntered + " ticketCount:");
    //const activeTickets = ticketStatus.filter( tkt=>{ return tkt.isActive});
     let finalPrice = ticketPrice + (1*  priceEntered);
    // alert ( "finalPrice:"+ finalPrice);
     setTicketPrice(finalPrice);
    //const total = finalPrice * ticketCount;
    //alert (total);
    //setTotalAmount(total );
   //alert ( "totalAmount:"+ totalAmount);
  }



 

  const payCash = () => {

    setModal({
      msg: `Payment was made successfully`,
      visible: true
    })
  }
  const hideModal = () => {
    setModal({
      msg: "",
      visible: false
    })
  }

  const showModal = () => {
    setModal({
      msg: "",
      visible: true
    })
  }

  return (
    <>
      <Header />
      <Modal modalState={modal} onHide={hideModal} onShow={showModal} ticketCount={ticketCount}
       ticketPrice={ticketPrice} />
      <CashRegister tickets={tickets} ticketCount={ticketCount} ticketPrice={ticketPrice}
        onDollarClick={storeTicketPrice} onAddTickets={storeTickets} 
        getButtonStatus={getButtonStatus} ticketStatus={ticketStatus} onPayCash={payCash}
        clearRegister={clearRegister}

        
      />

    </>
  )
}
export default App

