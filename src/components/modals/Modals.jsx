import React from 'react'
import { useModal } from '../../hooks/useModal';
import { GitHubModal } from './gitHubModal/GitHubModal'
import { MainModal } from './mainModal/MainModal';

export const Modals = (props) => {
    
    const {closeMainModal,isOpenMainModal} = props;
    const [isOpen, openModal, closeModal] = useModal(false);
    const openGitHub = () => {
        window.open('https://github.com/danugarri/react-animations-test');
    };

    return (
        <div className='custom-modal'>
            <h2>Github</h2>
            <button onClick= {openModal}>open Modal</button>
            <GitHubModal isOpen= {isOpen} closeModal= {closeModal} >
                {/* here we are using the children prop. Se trata de un prop que traen todos los componentes de React*/}
                <h3>Follow this code</h3>
                <p>If you want to look at my code click on the link bellow</p>
                <button onClick= {openGitHub} id='github-button'>Github</button>
            </GitHubModal>
            <MainModal closeMainModal= {closeMainModal} isOpenMainModal= {isOpenMainModal} />
            
        </div>
    )
}
