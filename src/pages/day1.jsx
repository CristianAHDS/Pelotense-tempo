import { motion } from 'framer-motion';

import { Container, Background, Content } from './pages.styled.jsx';

import WeatherCard1 from '../components/weather/Weather1';
import WeatherCard2 from '../components/weather/Weather2';
import WeatherCard3 from '../components/weather/Weather3';
import WeatherCard4 from '../components/weather/Weather4';

const DayOne = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

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
          {...cardAnimation(0)}
          style={{
            position: 'absolute',
            top: `${positions.weather1.top}px`,
            left: `${positions.weather1.left}px`,
          }}
        >
          <WeatherCard1 id="weather1" />
        </motion.div>

        <motion.div
          {...cardAnimation(0.15)}
          style={{
            position: 'absolute',
            top: `${positions.weather2.top}px`,
            left: `${positions.weather2.left}px`,
          }}
        >
          <WeatherCard2 id="weather2" />
        </motion.div>

        <motion.div
          {...cardAnimation(0.3)}
          style={{
            position: 'absolute',
            top: `${positions.weather3.top}px`,
            left: `${positions.weather3.left}px`,
          }}
        >
          <WeatherCard3 id="weather3" />
        </motion.div>

        <motion.div
          {...cardAnimation(0.45)}
          style={{
            position: 'absolute',
            top: `${positions.weather4.top}px`,
            left: `${positions.weather4.left}px`,
          }}
        >
          <WeatherCard4 id="weather4" />
        </motion.div>
      </Content>
    </Container>
  );
};

export default DayOne;
