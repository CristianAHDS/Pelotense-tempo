import styled from 'styled-components';
import Mapa from '../assets/mapa.png';

export const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
  position: relative;
`;

/* fundo */
export const Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${Mapa});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  z-index: 0;
`;

/* cards na lateral direita */
export const Content = styled.div``;
