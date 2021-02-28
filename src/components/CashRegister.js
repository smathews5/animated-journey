import React from 'react'

import {useContext} from 'react';
import CashRegisterContext from "../context/CashRegisterContext";
import lotteryBall1 from "../images/lottery-balls-on-yellow-background.jpg"



const CashRegister = () => {

    const {tickets,ticketCount,ticketPrice,storeTicketPrice,storeTickets,getButtonStatus,
        ticketStatus,payCash,clearRegister} = useContext(CashRegisterContext);
  
    const activeTickets = ticketStatus.filter( tkt=>{ return tkt.isActive})
    //alert(JSON.stringify(activeTickets));
    let activeTicketsDisplay = activeTickets.map((tkt,i) => {
        return   <p key={i}>Mark: {tkt.name}</p>
       }); 
     //  alert(activeTicketsDisplay);

    return (
        <div className="container">
            <section id="second-section">
                <div>

                    <img className="imageCSS" src={lotteryBall1} alt="lotteryBall"/>
                    <p><center>
                        <button className="buttonRound buttonRound5" name="1" onClick={() => { storeTicketPrice('1') }}
                        >$1</button>


                        <button className="buttonRound buttonRound5" name="5" onClick={() => {storeTicketPrice('5') }}>$5</button><br /><br />


                        <button className="buttonRound buttonRound5" name="10" onClick={() => {storeTicketPrice('10') }}>$10</button>


                        <button className="buttonRound buttonRound5" name="20" onClick={() => {storeTicketPrice('20') }}>$20</button>
                    </center></p>
                </div>
                <div>

                    <p> <center>
                        <div >

                            <button className={ticketStatus[0].isActive ? "button-Active" : "button-Num"} name="1" onClick={() => {storeTickets("1") }}
                            >1

                            </button>


                            <button className={ticketStatus[1].isActive ? "button-Active" : "button-Num"} name="2" onClick={() => {storeTickets("2") }}
                            >2</button>

                            <button className={ticketStatus[2].isActive ? "button-Active" : "button-Num"} name="3" onClick={() => { storeTickets("3") }}
                            >3</button>

                            <button className={ticketStatus[3].isActive ? "button-Active" : "button-Num"} name="4" onClick={() => { storeTickets("4") }}
                            >4</button>

                            <button className={ticketStatus[4].isActive ? "button-Active" : "button-Num"} name="5" onClick={() => {storeTickets("5") }}
                            >5</button>

                            <button className={ticketStatus[5].isActive ? "button-Active" : "button-Num"} name="6" onClick={() => { storeTickets("6") }}
                            >6</button>

                            <button className={ticketStatus[6].isActive ? "button-Active" : "button-Num"} name="7" onClick={() => { storeTickets("7") }}
                            >7</button>

                            <button className={ticketStatus[7].isActive ? "button-Active" : "button-Num"} name="8" onClick={() => { storeTickets("8") }}
                            >8</button>

                            <button className={ticketStatus[8].isActive ? "button-Active" : "button-Num"} name="9" onClick={() => { storeTickets("9") }}
                            >9</button>

                            <button className={ticketStatus[9].isActive ? "button-Active" : "button-Num"} name="10" onClick={() => { storeTickets("10") }}
                            >10</button>

                            <button className={ticketStatus[10].isActive ? "button-Active" : "button-Num"} name="11" onClick={() => { storeTickets("11") }}
                            >11</button>

                            <button className={ticketStatus[11].isActive ? "button-Active" : "button-Num"} name="12" onClick={() => {storeTickets("12") }}
                            >12</button>


                            <button className={ticketStatus[12].isActive ? "button-Active" : "button-Num"} name="13" onClick={() => { storeTickets("13") }}
                            >13</button>

                            <button className={ticketStatus[13].isActive ? "button-Active" : "button-Num"} name="14" onClick={() => {storeTickets("14") }}
                            >14</button>

                            <button className={ticketStatus[14].isActive ? "button-Active" : "button-Num"} name="15" onClick={() => { storeTickets("15") }}
                            >15</button>

                            <button className={ticketStatus[15].isActive ? "button-Active" : "button-Num"} name="16" onClick={() => { storeTickets("16") }}
                            >16</button>

                            <button className={ticketStatus[16].isActive ? "button-Active" : "button-Num"} name="17" onClick={() => { storeTickets("17") }}
                            >17</button>

                            <button className={ticketStatus[17].isActive ? "button-Active" : "button-Num"} name="18" onClick={() => { storeTickets("18") }}
                            >18</button>


                            <button className={ticketStatus[18].isActive ? "button-Active" : "button-Num"} name="19" onClick={() => { storeTickets("19") }}
                            >19</button>

                            <button className={ticketStatus[19].isActive ? "button-Active" : "button-Num"} name="20" onClick={() => { storeTickets("20") }}
                            >20</button>

                            <button className="button-Cash-Clear" name="cash" onClick={() => {

                                payCash();
                               

                            }}>Cash</button>

                            <button className="button-Cash-Clear" name="clear" onClick={() => {

                               clearRegister();
                                //clear the state after movie is added

                            }}>Clear</button>

                        </div>
                    </center> </p>
                </div>
                <div >
                    <p>
                        <h3>Numbers Selected: </h3>
                        <span >{activeTicketsDisplay}</span><br />
                    </p>
                  <p> </p>
                  <p></p>
                    <p>
                        <h3 >Total $:{ticketPrice * ticketCount} </h3>
                    </p>
                                     
                </div>

            </section>
        </div>
    )
}

export default CashRegister
