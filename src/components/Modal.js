import React from 'react'
import { useState } from 'react'

import {useContext} from "react";
import ModalContext from "../context/ModalContext";

const Modal = () => {

    const {modal,hideModal,showModal,ticketCount,ticketPrice} = useContext(ModalContext);

    const totalAmt = ticketPrice * ticketCount;
    const [cashReceived, setCashReceived] = useState("");
    const [changeGiven, setChangeGiven] = useState("");
  
           

    return (
        <div className={(modal.visible=== true ? "" : "hide")} >
            <div className="modal" >
               
                    <div className="">
                        <div className="modal-container">

                            <section id="modal-section">

                                <div>
                                    <div className="modal-font">Cash </div> <br />
                                    <div className="modal-font2">Enter Amount Received </div> <br />
                                    <div className="modal-font2"> Total $:{totalAmt} </div><br />
                                    <label htmlFor="cashReceived">  Received&nbsp;&nbsp;</label>
                                    <input className="form-control" type="text" disabled = "true"  id="cashReceived" value={cashReceived} onChange={(event) => {
                                        setCashReceived(event.target.value);
                                    }} />
                                    <br />
                                    
                                    <label htmlFor="changeAmt"> Change&nbsp;&nbsp;&nbsp;&nbsp;</label>
   
                                    <input className="form-control" type="text" disabled = "true"  value={changeGiven} /> <br /><br /><br />
                                 
                                
                                    <button  className="button-modal" onClick={() => {
                                        //alert("Cash Received"+cashReceived);
                                        setChangeGiven(cashReceived-totalAmt)
                                    }}>Confirm</button>&nbsp;

                                    
                                  <button className="button-modal" name="close" onClick={() => {
                                    hideModal()
                                    }}>Close</button><br /><br /><br /><br />
                                </div>

                                <div className="modal-button">
                                    <p >
                                        <button className="modal-buttonKeyPad" name="7" onClick={() => {
                                            setCashReceived(cashReceived+"7");
                                       }}>7</button>
                                        <button className="modal-buttonKeyPad" name="8" onClick={() => {
                                             setCashReceived(cashReceived+"8");
                                        }}>8</button>                                       

                                        <button className="modal-buttonKeyPad" className="modal-buttonKeyPad" name="9" onClick={() => {
                                            setCashReceived(cashReceived+"9");
                                       }}>9</button><br />

                                        <button className="modal-buttonKeyPad" name="4" onClick={() => {
                                             setCashReceived(cashReceived+"4");
                                        }}>4</button>

                                        <button className="modal-buttonKeyPad" name="5" onClick={() => {
                                            setCashReceived(cashReceived+"5");
                                       }}>5</button>

                                        <button className="modal-buttonKeyPad" name="6" onClick={() => {
                                             setCashReceived(cashReceived+"6");
                                        }}>6</button> <br />

                                        <button className="modal-buttonKeyPad" name="1" onClick={() => {
                                            setCashReceived(cashReceived+"1");
                                       }}>1</button>

                                        <button className="modal-buttonKeyPad" name="2" onClick={() => {
                                            setCashReceived(cashReceived+"2");
                                       }}>2</button>

                                        <button className="modal-buttonKeyPad" name="3" onClick={() => {
                                            setCashReceived(cashReceived+"3");
                                       }}>3</button> <br />

                                        <button className="modal-buttonKeyPad" name="0" onClick={() => {
                                            setCashReceived(cashReceived+"4");
                                       }}>0</button>

                                        <button className="modal-buttonKeyPad" name="." onClick={(event) => {
                                            setCashReceived(cashReceived+".");
                                       }}>.</button>
                                        <button className="modal-buttonKeyPadClr" name="cl" onClick={(event) => {
                                            setCashReceived("");
                                            setChangeGiven("");
                                       }}>cl</button>
                                    </p>
        
                              </div>
                            </section>
                        </div>
                    </div>           
            </div>
        </div>
    )
}

export default Modal
