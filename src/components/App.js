import React from 'react'
import CashRegisterContext from "../context/CashRegisterContext";
import ModalContext from "../context/ModalContext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "../pages/Home";

import '../css/App.css';
import { useState} from 'react';



const App = () => {

  const [modal, setModal] = useState({
    msg: '',
    visible: false
  });
  

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
  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketStatus, setTicketStatus] = useState(initialTicketSatus);
  

  const [popupModaMessage, setPopupModalMessage] = useState({
    msg: '',
    visible: false
  });

 
  const clearRegister = ()=>{
    setTicketStatus(initialTicketSatus);
    setTicketPrice(0);
    setTicketCount(0);      
  }

  const storeTickets = (ticketNo) => {
   // alert("ticketNo:"+ ticketNo);
   //alert("getButtonStatus()"+ getButtonStatus(ticketNo));
    if (ticketCount+1 > 5  && !getButtonStatus(ticketNo).isActive) {
      setPopupModalMessage({"msg":"Sorry,only 5 tickets can be bought at a time!", "visible":true});
  
      return;
    }

    toggleButtonStatus(ticketNo);
   
    let ticketsSelected = tickets + '\n Mark: ' + ticketNo;
    setTicketsSelected(ticketsSelected);
    const activeTickets = ticketStatus.filter( tkt=>{ return tkt.isActive});
    setTicketCount(activeTickets.length);
  }


  const getButtonStatus = (buttonId) => {
   let currentTicketStatus = ticketStatus.filter((ticket) => {
      return ticket.name === buttonId
    })
     return currentTicketStatus[0];
  }


  const toggleButtonStatus = (buttonId) => {
    let clonedTicketStatus = ticketStatus;
    clonedTicketStatus[parseInt(buttonId) - 1].isActive = !(clonedTicketStatus[parseInt(buttonId) - 1].isActive);
    setTicketStatus(clonedTicketStatus);
  }

 
  const storeTicketPrice = (priceEntered) => {
      let finalPrice = ticketPrice + (1*  priceEntered);
     setTicketPrice(finalPrice);
  
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

  const hidePopupModal = () => {
    setPopupModalMessage({
      msg: "",
      visible: false
    })
  }

 /* const showPopupModal = () => {
    setPopupModalMessage({
      msg: "",
      visible: true
    })
  } */

  return (
    <>
    <CashRegisterContext.Provider value = {{ticketCount,ticketPrice,storeTicketPrice,storeTickets,
      ticketStatus,payCash,clearRegister}}>
     <ModalContext.Provider value = {{modal,hideModal,showModal,ticketCount,ticketPrice,popupModaMessage,hidePopupModal}}>
            <Router>
               <Switch>
                    <Route exact path = "/">
                        <Home />
                    </Route >
                </Switch>
             </Router>
      </ModalContext.Provider>
    </CashRegisterContext.Provider>
    </>
  )
}
export default App

