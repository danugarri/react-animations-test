import React from 'react'
import './modalTest.css';

export const ModalTest = (props) => {
    // HERE we use the prop children
    const {children} = props;
    
  return (
    <section className='modal is-open'>
        <div className="modal-container">
           <button className="modal-close">X</button>
            {children}
        </div>
    </section>
  )
}
