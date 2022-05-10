import React from 'react'
import { useModal } from '../../hooks/useModal';
import { ModalTest } from './ModalTest'

export const Modals = () => {
    const [isOpen, openModal, closeModal] = useModal(false);
    const openGitHub = () => {
        window.open('https://github.com/danugarri/react-animations-test');
    };

    return (
        <div className='custom-modal'>
            <h2>modals</h2>
            <button onClick= {openModal}>Modal1</button>
            <ModalTest isOpen= {isOpen} closeModal= {closeModal} >
                {/* here we are using the children prop. Se trata de un prop que traen todos los componentes de React*/}
                <h3>Follow this code</h3>
                <p>If you want to look at my code click on the link bellow</p>
                <button onClick= {openGitHub}>Github</button>
            </ModalTest>
        </div>
    )
}
