import React from 'react';
import './animation.css';
import { BounceDiv, FadeDiv, PulseDiv, RollDiv } from './animationConsts';
 
export const Animation = (props) => {


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
                    <div id='ball'>Empezar</div>
                  </RollDiv>
            </PulseDiv>
        </React.Fragment>

    );
};