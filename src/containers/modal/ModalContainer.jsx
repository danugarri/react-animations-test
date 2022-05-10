import React from "react";
import { Animation } from "../../components/animation/Animation";
import { Modal } from "../../components/modal/Modal";
import '../../components/modal/modal.css';

export const ModalContainer= (props) => {
    const {openModal,handleOpenModal} = props;
    const modalStyle= !openModal ? 'modal-container' : 'change-background';
    return (
        <div id={modalStyle}>
            <Modal  handleOpenModal= {handleOpenModal} openModal= {openModal} />
            <Animation handleOpenModal= {handleOpenModal} />
        </div>
    )
}