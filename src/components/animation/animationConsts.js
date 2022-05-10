import styled, { keyframes } from 'styled-components';
import { bounce,pulse,rollIn,fadeIn,bounceOutDown} from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;
const pulseAnimation = keyframes`${pulse}`;
const rollAnimation=  keyframes`${rollIn}`;
const fadeAnimation=  keyframes`${fadeIn}`;
const bounceOutAnimation=  keyframes`${bounceOutDown}`;
    

export const BounceDiv = styled.div`
    animation: 2s ${bounceAnimation};
    text-align: center;
    margin-top: 60px;
`;
export const BounceOutDiv = styled.div`
    animation: 2s ${bounceOutAnimation};
    text-align: center;
    margin-top: 60px;
    animation-iteration-count: infinite;
`;
export const PulseDiv = styled.div`
    animation: 1s ${pulseAnimation};
    animation-iteration-count: infinite;
    text-align: center;
    margin-top: 30px;
`;
export const RollDiv = styled.div`
    animation: 2s ${rollAnimation};
`;
export const FadeDiv = styled.div`
    animation: 8s ${fadeAnimation};
    animation-iteration-count: 1;
    text-align: center;
    margin-top: 30px;
`;
export const FadeDiv2 = styled.div`
    animation: 2s ${fadeAnimation};
    animation-iteration-count: infinite;
    text-align: center;
    margin-top: 30px;
`;
