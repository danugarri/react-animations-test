import React from 'react';
import '../animations/modalAnimations.css';
import { BounceDiv, FadeDiv, PulseDiv, RollDiv } from '../animations/animationConsts';

 
export const Home = (props) => {

    const {openMainModal} = props;

    return (
        <React.Fragment>
            <BounceDiv >
                <h1>Bienvenid@</h1>
            </BounceDiv>
            <FadeDiv>
            <h2> Aquí podrá ver algunas de las animaciones disponibles</h2>
            </FadeDiv>
             <PulseDiv >
                <RollDiv>
                <button id='ball' onClick= {openMainModal}>Empezar</button>
                </RollDiv>
            </PulseDiv>
        </React.Fragment>

    );
};