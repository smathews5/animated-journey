import React from 'react'
//import lotteryBall1 from  "../images/lotteryBallClip.png"
import lotteryBall1 from "../images/lottery-balls-on-yellow-background.jpg"



const CashRegister = (props) => {
    const text = props.tickets + '';
    const activeTickets = props.ticketStatus.filter( tkt=>{ return tkt.isActive})
    //alert(JSON.stringify(activeTickets));
    let activeTicketsDisplay = activeTickets.map((tkt,i) => {
        return   <p key={i}>Mark: {tkt.name}</p>
       }); 
     //  alert(activeTicketsDisplay);
   let totalTicketCount = activeTickets.length;
  
 
    let newText = text.split('\n').map((item, i) => <p key={i}>{item}</p>);
    return (
        <div className="container">
            <section id="second-section">
                <div>

                    <img className="imageCSS" src={lotteryBall1} />
                    <p><center>
                        <button class="buttonRound buttonRound5" name="1" onClick={() => { props.onDollarClick('1') }}
                        >$1</button>


                        <button class="buttonRound buttonRound5" name="5" onClick={() => { props.onDollarClick('5') }}>$5</button><br /><br />


                        <button class="buttonRound buttonRound5" name="10" onClick={() => { props.onDollarClick('10') }}>$10</button>


                        <button class="buttonRound buttonRound5" name="20" onClick={() => { props.onDollarClick('20') }}>$20</button>
                    </center></p>
                </div>
                <div>

                    <p> <center>
                        <div >



                            <button className={props.ticketStatus[0].isActive ? "button-Active" : "button-Num"} name="1" onClick={() => { props.onAddTickets("1") }}
                            >1

                            </button>


                            <button className={props.ticketStatus[1].isActive ? "button-Active" : "button-Num"} name="2" onClick={() => { props.onAddTickets("2") }}
                            >2</button>

                            <button className={props.ticketStatus[2].isActive ? "button-Active" : "button-Num"} name="3" onClick={() => { props.onAddTickets(3) }}
                            >3</button>

                            <button className={props.ticketStatus[3].isActive ? "button-Active" : "button-Num"} name="4" onClick={() => { props.onAddTickets("4") }}
                            >4</button>

                            <button className={props.ticketStatus[4].isActive ? "button-Active" : "button-Num"} name="5" onClick={() => { props.onAddTickets("5") }}
                            >5</button>

                            <button className={props.ticketStatus[5].isActive ? "button-Active" : "button-Num"} name="6" onClick={() => { props.onAddTickets("6") }}
                            >6</button>

                            <button className={props.ticketStatus[6].isActive ? "button-Active" : "button-Num"} name="7" onClick={() => { props.onAddTickets("7") }}
                            >7</button>

                            <button className={props.ticketStatus[7].isActive ? "button-Active" : "button-Num"} name="8" onClick={() => { props.onAddTickets("8") }}
                            >8</button>

                            <button className={props.ticketStatus[8].isActive ? "button-Active" : "button-Num"} name="9" onClick={() => { props.onAddTickets("9") }}
                            >9</button>

                            <button className={props.ticketStatus[9].isActive ? "button-Active" : "button-Num"} name="10" onClick={() => { props.onAddTickets("10") }}
                            >10</button>

                            <button className={props.ticketStatus[10].isActive ? "button-Active" : "button-Num"} name="11" onClick={() => { props.onAddTickets("11") }}
                            >11</button>

                            <button className={props.ticketStatus[11].isActive ? "button-Active" : "button-Num"} name="12" onClick={() => { props.onAddTickets("12") }}
                            >12</button>


                            <button className={props.ticketStatus[12].isActive ? "button-Active" : "button-Num"} name="13" onClick={() => { props.onAddTickets("13") }}
                            >13</button>

                            <button className={props.ticketStatus[13].isActive ? "button-Active" : "button-Num"} name="14" onClick={() => { props.onAddTickets("14") }}
                            >14</button>

                            <button className={props.ticketStatus[14].isActive ? "button-Active" : "button-Num"} name="15" onClick={() => { props.onAddTickets("15") }}
                            >15</button>

                            <button className={props.ticketStatus[15].isActive ? "button-Active" : "button-Num"} name="16" onClick={() => { props.onAddTickets("16") }}
                            >16</button>

                            <button className={props.ticketStatus[16].isActive ? "button-Active" : "button-Num"} name="17" onClick={() => { props.onAddTickets("17") }}
                            >17</button>

                            <button className={props.ticketStatus[17].isActive ? "button-Active" : "button-Num"} name="18" onClick={() => { props.onAddTickets("18") }}
                            >18</button>


                            <button className={props.ticketStatus[18].isActive ? "button-Active" : "button-Num"} name="19" onClick={() => { props.onAddTickets("19") }}
                            >19</button>

                            <button className={props.ticketStatus[19].isActive ? "button-Active" : "button-Num"} name="20" onClick={() => { props.onAddTickets("20") }}
                            >20</button>

                            <button class="button-Cash-Clear" name="cash" onClick={() => {

                                props.onPayCash();
                                //clear the state after movie is added

                            }}>Cash</button>

                            <button class="button-Cash-Clear" name="clear" onClick={e => this.props.onClick(e.target.name)}>Clear</button><br />



                        </div>
                    </center> </p>
                </div>
                <div >
                    <p>
                        <h3>Numbers Selected: </h3>
                        <span >{activeTicketsDisplay}</span><br />
                    </p>
                    <p>{props.ticketCount}</p>
                    <p>
                        <h3 >Total $:{props.ticketPrice * props.ticketCount} </h3>
                    </p>
                    <p>Final Price: {props.ticketPrice}</p>

                  
                </div>

            </section>
        </div>
    )
}

export default CashRegister
