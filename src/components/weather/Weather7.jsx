import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiDayCloudy,
  WiStrongWind,
  WiNightClear,
} from 'react-icons/wi';

import {
  Container,
  Top,
  Bottom,
  Min,
  Max,
  Icon,
  Value,
  Editable,
  IconMenu,
  IconValue,
  IconItem,
  TempMenu,
  TempButton,
} from './weather.styled.jsx';

const iconList = {
  sunny: <WiDaySunny />,
  cloudy: <WiCloud />,
  partlyCloudy: <WiDayCloudy />,
  rain: <WiRain />,
  storm: <WiThunderstorm />,
  snow: <WiSnow />,
  fog: <WiFog />,
  wind: <WiStrongWind />,
  night: <WiNightClear />,
};

export const Weather7 = () => {
  const PREFIX = 'weather2';
  const [showIcons, setShowIcons] = useState(false);
  const [showMinMenu, setShowMinMenu] = useState(false);
  const [showMaxMenu, setShowMaxMenu] = useState(false);

  const [min, setMin] = useState(
    () => localStorage.getItem(`${PREFIX}_min-3`) || '9',
  );
  const [max, setMax] = useState(
    () => localStorage.getItem(`${PREFIX}_max-3`) || '17',
  );
  const [city, setCity] = useState(
    () => localStorage.getItem(`${PREFIX}_city-3`) || 'PELOTAS',
  );
  const [icon, setIcon] = useState(
    () => localStorage.getItem(`${PREFIX}_icon-3`) || 'sunny',
  );

  const increaseMin = () => {
    const value = Number(min) + 1;
    setMin(String(value));
    localStorage.setItem(`${PREFIX}_min-3`, String(value));
  };

  const decreaseMin = () => {
    const value = Number(min) - 1;
    setMin(String(value));
    localStorage.setItem(`${PREFIX}_min-3`, String(value));
  };

  const increaseMax = () => {
    const value = Number(max) + 1;
    setMax(String(value));
    localStorage.setItem(`${PREFIX}_max-3`, String(value));
  };

  const decreaseMax = () => {
    const value = Number(max) - 1;
    setMax(String(value));
    localStorage.setItem(`${PREFIX}_max-3`, String(value));
  };

  const handleCity = (value) => {
    const v = value.toUpperCase();
    setCity(v);
    localStorage.setItem(`${PREFIX}_city-3`, v);
  };

  const handleIcon = (value) => {
    setIcon(value);
    localStorage.setItem(`${PREFIX}_icon-3`, value);
    setShowIcons(false);
  };

  return (
    <Container>
      <Top>
        <Min
          onClick={() => {
            setShowMinMenu(!showMinMenu);
            setShowMaxMenu(false);
            setShowIcons(false);
          }}
        >
          <Value>{min}º</Value>

          {showMinMenu && (
            <TempMenu>
              <TempButton
                onClick={(e) => {
                  e.stopPropagation();
                  increaseMin();
                }}
              >
                <FiPlus />
              </TempButton>

              <TempButton
                onClick={(e) => {
                  e.stopPropagation();
                  decreaseMin();
                }}
              >
                <FiMinus />
              </TempButton>
            </TempMenu>
          )}
        </Min>

        <Max
          onClick={() => {
            setShowMaxMenu(!showMaxMenu);
            setShowMinMenu(false);
            setShowIcons(false);
          }}
        >
          <Value>{max}º</Value>

          {showMaxMenu && (
            <TempMenu>
              <TempButton
                onClick={(e) => {
                  e.stopPropagation();
                  increaseMax();
                }}
              >
                <FiPlus />
              </TempButton>

              <TempButton
                onClick={(e) => {
                  e.stopPropagation();
                  decreaseMax();
                }}
              >
                <FiMinus />
              </TempButton>
            </TempMenu>
          )}
        </Max>

        <Icon
          onClick={() => {
            setShowIcons(!showIcons);
            setShowMinMenu(false);
            setShowMaxMenu(false);
          }}
        >
          <IconValue className={icon}>{iconList[icon]}</IconValue>

          {showIcons && (
            <IconMenu>
              {Object.keys(iconList).map((key) => (
                <IconItem
                  key={key}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIcon(key);
                  }}
                >
                  {iconList[key]}
                </IconItem>
              ))}
            </IconMenu>
          )}
        </Icon>
      </Top>

      <Bottom>
        <Editable value={city} onChange={(e) => handleCity(e.target.value)} />
        <Value>{city}</Value>
      </Bottom>
    </Container>
  );
};

export default Weather7;
