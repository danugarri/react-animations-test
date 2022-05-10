import styled, { keyframes } from 'styled-components';
import { bounce,pulse,rollIn,fadeIn} from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;
const pulseAnimation = keyframes`${pulse}`;
const rollAnimation=  keyframes`${rollIn}`;
const fadeAnimation=  keyframes`${fadeIn}`;
    

export const BounceDiv = styled.div`
    animation: 2s ${bounceAnimation};
    text-align: center;
    margin-top: 60px;
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
