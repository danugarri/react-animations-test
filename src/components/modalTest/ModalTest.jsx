import React from 'react'
import './modalTest.css';

export const ModalTest = (props) => {
    // HERE we use the prop children
    const {children, closeModal, isOpen} = props;
    
  return (
    <section className={`modal ${isOpen && 'is-open'}`}>
        <div className="modal-container">
           <button className="modal-close" onClick= {closeModal}>X</button>
            {children}
        </div>
    </section>
  )
}
