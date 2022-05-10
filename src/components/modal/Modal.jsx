import React from "react";
import { ModalAnimations } from "../modalAnimations/ModalAnimations";
// import './modal.css';

export const Modal= (props) => {
    const {openModal,handleOpenModal} = props;
   
    return (
        <>
         { openModal && <React.Fragment>
                <section id= 'modal-box'>
                    <h1>Pasos</h1>
                    <ul id= 'list'>
                        <li>npm i react-animations</li>
                        <li>npm i styled-components</li>
                    </ul>
                    <ModalAnimations/>
                </section>
                <button id='closeButton' onClick= {handleOpenModal}>x</button>
            </React.Fragment>
               
            }
        </>
    )
}


