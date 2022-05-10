import React from "react";
import { ModalAnimations } from "../../animations/ModalAnimations";
import './mainModal.css';

export const MainModal= (props) => {
    const {closeMainModal,isOpenMainModal} = props;
     // stopping the click event propagation in order to handle how the modal is closed 
    const handleCloseModalEvent = e => e.stopPropagation();
    
    return (
        
         <section className={`main-modal ${isOpenMainModal && 'main-is-open'}`} onClick= {closeMainModal}>
            <div className="main-modal-container" onClick= {handleCloseModalEvent}>
                <button id='closeButton' onClick= {closeMainModal}>x</button>
                <h1>Pasos</h1>
                    <ul id= 'list'>
                        <li>npm i react-animations</li>
                        <li>npm i styled-components</li>
                    </ul>
                    <ModalAnimations/>
            </div> 
        </section>
        
    )
}


