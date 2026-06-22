import styled from 'styled-components';

import { primary, secondary, terceary } from '../../constant/colors';

export const Container = styled.div`
  width: 270px;

  margin-bottom: 20px;
`;

export const Top = styled.div`
  width: 270px;
  height: 90px;

  display: flex;
`;

const CommonStyle = `
  display:flex;
  justify-content:center;
  align-items:center;

  position:relative;

  color:#fff;
`;

export const Min = styled.div`
  width: 90px;
  height: 90px;

  background: ${primary};

  ${CommonStyle}

  font-size:24pt;
  font-weight: 900;
`;

export const Max = styled.div`
  width: 90px;
  height: 90px;

  background: ${secondary};

  ${CommonStyle}

  font-size:24pt;
  font-weight: 900;
`;

export const Icon = styled.div`
  width: 90px;
  height: 90px;

  background: #fff;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const Bottom = styled.div`
  width: 270px;
  height: 45px;

  background: ${terceary};

  ${CommonStyle}

  font-size:18pt;
  font-weight: 680;

  text-transform: uppercase;
`;

export const Value = styled.div`
  pointer-events: none;
`;

export const Editable = styled.input`
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

export const IconValue = styled.div`
  font-size: 56px;
  color: #444;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
  }

  /* Correção para os ícones de chuva */
  &.rain svg,
  &.storm svg,
  &.snow svg {
    transform: translateX(3px);
  }
`;

export const IconSelector = styled.select`
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  opacity: 0;

  cursor: pointer;

  border: none;
  outline: none;
`;

export const IconMenu = styled.div`
  position: absolute;

  top: 95px;

  right: 0;

  width: 180px;

  padding: 10px;

  background: #fff;

  border-radius: 10px;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 8px;

  z-index: 999;
`;

export const IconItem = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 34px;

  border-radius: 8px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #f0f0f0;

    transform: scale(1.1);
  }
`;

export const TempMenu = styled.div`
  position: absolute;

  top: 95px;
  left: 50%;

  transform: translateX(-50%);

  width: 70px;

  padding: 10px;

  background: #fff;

  border-radius: 10px;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  gap: 8px;

  z-index: 999;
`;

export const TempButton = styled.div`
  width: 50px;
  height: 50px;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;

  border-radius: 8px;

  cursor: pointer;

  transition: 0.2s;

  color: #444;

  &:hover {
    background: #f0f0f0;
    transform: scale(1.1);
  }
`;
