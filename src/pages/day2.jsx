import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdPin } from 'react-icons/io';
import DatePicker from 'react-datepicker';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

import {
  Container,
  Background,
  Content,
  CardDay,
  TextTop,
  TextBottom,
} from './pages.styled.jsx';

import WeatherCard5 from '../components/weather/Weather5';
import WeatherCard6 from '../components/weather/Weather6';
import WeatherCard7 from '../components/weather/Weather7';
import WeatherCard8 from '../components/weather/Weather8';

const DayTwo = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const initialDate = localStorage.getItem('day2_date')
    ? new Date(localStorage.getItem('day2_date'))
    : new Date();

  const [selectedDate, setSelectedDate] = useState(initialDate);

  const [title, setTitle] = useState(() =>
    format(initialDate, 'EEEE dd/MM', {
      locale: ptBR,
    }).replace(/^\w/, (c) => c.toUpperCase()),
  );

  const handleDate = (date) => {
    setSelectedDate(date);

    const formatted = format(date, 'EEEE dd/MM', {
      locale: ptBR,
    }).replace(/^\w/, (c) => c.toUpperCase());

    setTitle(formatted);

    localStorage.setItem('day2_title', formatted);
    localStorage.setItem('day2_date', date.toISOString());
  };

  const positions =
    width === 2048 && height === 1152
      ? {
          weather1: { top: 230, left: 1200 },
          weather2: { top: 170, left: 1615 },
          weather3: { top: 455, left: 1540 },
          weather4: { top: 680, left: 1485 },
        }
      : {
          weather1: { top: 180, left: 1100 },
          weather2: { top: 130, left: 1525 },
          weather3: { top: 410, left: 1470 },
          weather4: { top: 630, left: 1370 },
        };

  const cardAnimation = (delay) => ({
    initial: {
      opacity: 0,
      y: -20,
      scaleY: 0.8,
      transformOrigin: 'top center',
    },
    animate: {
      opacity: 1,
      y: 0,
      scaleY: 1,
    },
    transition: {
      duration: 0.4,
      delay,
      ease: 'easeOut',
    },
  });

  return (
    <Container>
      <Background />

      <Content>
        <motion.div
          {...cardAnimation(0.15)}
          style={{
            position: 'absolute',
            top: `${positions.weather1.top}px`,
            left: `${positions.weather1.left}px`,
          }}
        >
          <WeatherCard5 id="weather1" />
        </motion.div>

        <motion.div
          {...cardAnimation(0.3)}
          style={{
            position: 'absolute',
            top: `${positions.weather2.top}px`,
            left: `${positions.weather2.left}px`,
          }}
        >
          <WeatherCard6 id="weather2" />
        </motion.div>

        <motion.div
          {...cardAnimation(0.45)}
          style={{
            position: 'absolute',
            top: `${positions.weather3.top}px`,
            left: `${positions.weather3.left}px`,
          }}
        >
          <WeatherCard7 id="weather3" />
        </motion.div>

        <motion.div
          {...cardAnimation(0.6)}
          style={{
            position: 'absolute',
            top: `${positions.weather4.top}px`,
            left: `${positions.weather4.left}px`,
          }}
        >
          <WeatherCard8 id="weather4" />
        </motion.div>
      </Content>

      <CardDay>
        <DatePicker
          selected={selectedDate}
          onChange={handleDate}
          locale={ptBR}
          dateFormat="dd/MM/yyyy"
          customInput={
            <TextTop
              style={{
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              {title}
            </TextTop>
          }
        />

        <TextBottom>
          <IoMdPin size={28} style={{ marginRight: 5 }} />
          Zona sul do RS
        </TextBottom>
      </CardDay>
    </Container>
  );
};

export default DayTwo;
