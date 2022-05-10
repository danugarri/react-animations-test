import React from 'react'
import './modal.css';

export const ModalTest = (props) => {
    // HERE we use the prop children
    const {children} = props;
    
  return (
    <section className='modal is-open'>
        <div className="modal-container"></div>
        <button className="modal-close">X</button>
        {children}
    </section>
  )
}
