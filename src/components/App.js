import React from 'react'
import KeyPad from "./KeyPad";
import Header from "./Header";
import CashRegister from "./CashRegister";
import Modal from "./Modal";
import '../css/App.css';
import {useState,useEffect} from 'react';


const App = () => {

  const [modal,setModal]=useState({
    msg: '',
    visible: false
  });

  const buttonStaus = false;
const initialTicketSatus = [{ "name":"1", "isActive":"true" },  { "name":"2", "isActive":"false" }];

  let [tickets, setTicketsSelected]= useState([]);
  const[ticketCount, setTicketCount] =  useState([0]);
  const[totalAmount, setTotalAmount] =  useState(0);
  const[ticketPrice, setTicketPrice] =  useState([]);
  const[ticketStatus, setTicketStatus] =  useState(initialTicketSatus);
 

  
  const storeTickets = (ticketNo) =>{
    let count =parseInt(ticketCount) +1;
    if(count>5)
    {
      alert("Only 5 tickets can be bought at a time");
      return;
    }
   // alert(count);
   // parseInt(fields[0].value)
   setTicketCount(count);
   toggleButtonStatus(ticketNo);
   // alert(ticketNo);
     //count ++;
    // count = ticketCount+1;
     //alert(count);
    
     //alert(ticketCount);
    let ticketsSelected = tickets+'\n Mark: ' + ticketNo;
  
    
  
    //alert(ticketsSelected);
    setTicketsSelected(ticketsSelected);
  }
   

  const getButtonStatus= (buttonId)=> {
   
     let currentTicketStatus = ticketStatus.filter((ticket)=>{
      return ticket.name==buttonId
     })
         return currentTicketStatus[0].isActvie;
  }


  const toggleButtonStatus= (buttonId)=> {
    alert( 'toggleButtonStatus:'+ buttonId);

    //  let currentTicketStatus = ticketStatus.filter((ticket)=>{
    //   return ticket.name==buttonId
    //  }).
    //  this.state.ticketSatus[0].isActvie =! currentTicketStatus[0].isActvie ;

    let clonedTicketStatus = ticketStatus;
    alert(   "before clonedTicketStatus:"+ JSON.stringify(clonedTicketStatus));
      for (var i = 0; i < clonedTicketStatus.length; i++) {
        if (clonedTicketStatus[i].name == buttonId) {
          alert ("matching1:"+  clonedTicketStatus[i].isActive);
        
         alert("matching2: " + ( clonedTicketStatus[i].isActive.trim() =="true".trim()));
         // {props.ticketStatus[0].isActive==="true"?"button-Active":"button-Num"}
         
          if ( clonedTicketStatus[i].isActive.trim() =="true".trim()) {
            alert ("matching2:");
             clonedTicketStatus[i]["isActive"] =  "false".trim();
            // jsonObj[i]['Username'] = 'Thomas';
          } else {
            alert ("not matching2:");
            clonedTicketStatus[i]["isActvie"] =  "true".trim();
          }
          break;
        }
      }
      alert(   "afters clonedTicketStatus:"+ JSON.stringify(clonedTicketStatus));
     setTicketStatus(clonedTicketStatus);

     
     alert(   "Final:"+ JSON.stringify(ticketStatus));
  }



  const storeTicketPrice = (priceEntered) =>{
    alert("Ticket Price:"+ticketCount);
    alert("Price entered:"+priceEntered);
    let finalPrice =totalAmount +(ticketCount*priceEntered);
    alert ("Final Price:"+finalPrice)
    setTotalAmount(finalPrice);
  }


  const payCash= () =>{
   
    setModal({
      msg: `Payment was made successfully`,
      visible: true
    })
  }
  const hideModal = ()=>{
    setModal({
      msg: "",
      visible: false
    })
  }
  
    return (
        <>
        <Header/> 
        <Modal modalState = {modal} onHide= {hideModal} ticketPrice={totalAmount}/> 
         <CashRegister tickets ={tickets} ticketCount = {ticketCount}  ticketPrice={totalAmount}
         onDollarClick={storeTicketPrice}   onAddTickets = {storeTickets}
         getButtonStatus = {getButtonStatus}  ticketStatus = {ticketStatus} onPayCash = {payCash}
         />
     
        </>
    )
}
export default App

