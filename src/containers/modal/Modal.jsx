import React from "react";
import { Animation } from "../../components/animation/Animation";
import { ModalAnimations } from "../../components/modalAnimations/ModalAnimations";
import './modal.css';

export const Modal= (props) => {
    const {openModal,handleOpenModal} = props;
    // const closeModal= () =>openModal ? setOpenModal(false) : null;
    // window.addEventListener('click', closeModal);
    const modalStyle= !openModal ? 'modal-container' : 'change-background';
    return (
        <div id={modalStyle}>
            { openModal && <React.Fragment>
                <section id= 'modal-box'>
                    <h1>Pasos</h1>
                    <ul id= 'list'>
                        <li>npm i react-animations</li>
                        <li>npm i styled-components</li>
                    </ul>
                    <ModalAnimations />
                </section>
                <button id='closeButton' onClick= {handleOpenModal}>x</button>
            </React.Fragment>
               
            }
            <Animation handleOpenModal= {handleOpenModal} />
        </div>
    )
}