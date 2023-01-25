import { ImSpinner9 } from 'react-icons/im';
import styled from 'styled-components';
export const SpinnerIcon = styled(ImSpinner9)`
margin-right: auto;
margin-left:auto;
animation-name: spinner-icon-rotate;
animation-duration: 3000ms;
@keyframes spinner-icon-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;
