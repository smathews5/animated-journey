import React from 'react'
import { useState } from 'react'

const Modal = (props) => {

   
    const totalAmt = props.ticketPrice * props.ticketCount;
    const [cashReceived, setCashReceived] = useState("");
    const [changeGiven, setChangeGiven] = useState("");
    const [keyinput, setKeyInput] = useState("");
   
    const getCashReceived = (cash)=> {
        alert(" getCashReceived"+cash);
        //let tempCashReacived= cashReceived+ cash;
        //setCashReceived(cash);
        //return;
    }

    const getKeypadValue = (input) =>{
    
        let inputValue = keyinput + input;  
        setKeyInput(inputValue);
      }
    
   

    return (
        <div className={(props.modalState.visible=== true ? "" : "hide")} >
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
                                 
                                
                                    <button  class="button-modal" onClick={() => {
                                        alert("Cash Received"+cashReceived);
                                        setChangeGiven(cashReceived-totalAmt)
                                    }}>Confirm</button>&nbsp;

                                    
                                  <button class="button-modal" name="close" onClick={() => {
                                        props.onHide()
                                    }}>Close</button><br /><br /><br /><br />
                                </div>



                                <div className="modal-button">
                                    <p >
                                        <button name="7" onClick={() => {
                                            setCashReceived(cashReceived+"7");
                                       }}>7</button>



                                        <button name="8" onClick={(event) => {
                                             setCashReceived(cashReceived+"8");
                                        }}>8</button>                                       

                                        <button name="9" onClick={(event) => {
                                            setCashReceived(cashReceived+"9");
                                       }}>9</button><br />

                                        <button name="4" onClick={(event) => {
                                             setCashReceived("4");
                                        }}>4</button>

                                        <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                                        <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button> <br />
                                        <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                                        <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                                        <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button> <br />
                                        <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                                        <button name="." onClick={(event) => {
                                            setCashReceived(cashReceived+".");
                                       }}>.</button>
                                        <button name="cl" onClick={(event) => {
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
