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

export const Card = styled.div`
  position: absolute;
  top: 95px;
  right: 0px;
  width: 180px;
  padding: 10px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0) 0px 4px 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  z-index: 999;

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  text-transform: uppercase;
  color: #505050;
`;

export const CardDay = styled.div`
  width: 300px;
  height: 80px;
  background-color: #fff;

  position: absolute;

  //bottom: 120px;
  top: 40px;
  left: 800px;

  padding: 10px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0) 0px 4px 15px;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  z-index: 999;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-transform: uppercase;
  color: #075885;
`;

export const TextTop = styled.div`
  width: 100%;
  height: 40px;

  font-weight: 700;
  font-size: 30px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const TextBottom = styled.div`
  width: 100%;
  height: 40px;

  font-size: 22px;
  font-weight: 400;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const EditableText = styled.input`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  opacity: 0;

  cursor: text;

  border: none;
  outline: none;
  background: transparent;
`;
