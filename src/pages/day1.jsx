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
          weather1: { top: 200, left: 1180 },
          weather2: { top: 140, left: 1595 },
          weather3: { top: 425, left: 1520 },
          weather4: { top: 650, left: 1465 },
        }
      : {
          weather1: { top: 180, left: 1100 },
          weather2: { top: 130, left: 1525 },
          weather3: { top: 410, left: 1470 },
          weather4: { top: 630, left: 1370 },
        };

  return (
    <Container>
      <Background />

      <Content>
        <div
          style={{
            position: 'absolute',
            top: `${positions.weather1.top}px`,
            left: `${positions.weather1.left}px`,
          }}
        >
          <WeatherCard1 id="weather1" />
        </div>

        <div
          style={{
            position: 'absolute',
            top: `${positions.weather2.top}px`,
            left: `${positions.weather2.left}px`,
          }}
        >
          <WeatherCard2 id="weather2" />
        </div>

        <div
          style={{
            position: 'absolute',
            top: `${positions.weather3.top}px`,
            left: `${positions.weather3.left}px`,
          }}
        >
          <WeatherCard3 id="weather3" />
        </div>

        <div
          style={{
            position: 'absolute',
            top: `${positions.weather4.top}px`,
            left: `${positions.weather4.left}px`,
          }}
        >
          <WeatherCard4 id="weather4" />
        </div>
      </Content>
    </Container>
  );
};

export default DayOne;
