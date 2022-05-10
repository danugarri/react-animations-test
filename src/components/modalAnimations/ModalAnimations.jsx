import React from 'react';
import './modalAnimations.css';
import { PulseDiv,BounceOutDiv,FadeDiv2, RotateDiv} from '../animation/animationConsts';
 
export const ModalAnimations = () => {
   

    return (
        <React.Fragment>
            <div id='bounce-container'>
                <BounceOutDiv >
                <div id='ball2'></div>
                </BounceOutDiv>
                <FadeDiv2 >
                <div id='ball2'></div>
                </FadeDiv2>
                <PulseDiv >
                    <div id='ball2'></div>
                </PulseDiv>
            </div>
            <RotateDiv>
                <span id= 'you'>Ahora tú</span>
            </RotateDiv>
        </React.Fragment>

    );
};