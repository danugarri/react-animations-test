import React from 'react';
import './animation.css';
import { BounceDiv, FadeDiv, PulseDiv, RollDiv } from './animationConsts';
 
export const Animation = (props) => {
    const {handleOpenModal} = props;

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
                <button id='ball' onClick= {handleOpenModal}>Empezar</button>
                </RollDiv>
            </PulseDiv>
        </React.Fragment>

    );
};