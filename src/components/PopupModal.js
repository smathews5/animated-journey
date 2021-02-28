import React from 'react'
import { useState } from 'react'

const Modal = (props) => {


    return (
        <div className={(props.popupModaMessage.visible=== true ? "" : "hide")} >
            <div className="popUp-Modal" >            
             <div className="popUp-Modal-container">                         
                  <div> <p>                            
                    {props.popupModaMessage.msg}
                      </p>                              
                        <button className="button-modal" name="close" onClick={() => {
                           props.onHidePopup()
                          }}>Close</button>
                   </div>
              </div>                               
            </div>
        </div>
    )
}

export default Modal
