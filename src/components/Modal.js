import React from 'react'
import {useState} from 'react'

const Modal = (props) => {

    const [cashReceived,setCashReceived] = useState("");
    const [changeGiven,setChangeGiven] = useState("");


    return (
        <div className= {props.modalState.visible===true ? "" : "hide"} onClick ={()=>{
            props.onHide()
        }}>
            <div className="modal" >
            
            <form>
            <div className="">

            <div className="modal-container"> 

            <section id="modal-section">
      
           
            <div>

          <div>&nbsp;&nbsp;&nbsp;Enter Amount Received :</div> <br/>
          <div> Total $:{props.ticketPrice * props.ticketCount} </div><br/>
           <label htmlFor="cashReceived">  Received&nbsp;&nbsp;</label>
           <input className="form-control " type="text" id="cashReceived"  value = {cashReceived} onChange={(event)=>{
            setCashReceived(event.target.value);
            }} />
<br/>
            <label htmlFor="changeAmt"> Change&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input className="form-control " type="text" id="changeGiven"  value = {changeGiven} onChange={(event)=>{
             setChangeGiven(event.target.value);
             }} /> <br/><br/><br/>

             <button  class="button-modal" name="cash">Confirm</button>&nbsp;&nbsp;

        <button class="button-modal" name="clear" >Close</button><br/><br/><br/><br/>
            </div>
            <div>

          I am another
            </div>
            
            
            </section>
            
            
            
            
            </div>

                

                

            </div>













           
                    
                     </form>
            </div>
        </div>
    )
}

export default Modal
