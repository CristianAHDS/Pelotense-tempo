import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import DayOne from './pages/day1.jsx';
import DayTow from './pages/day1.jsx';

import { tercearyAlpha } from './constant/colors.jsx';

function App() {
  return (
    <>
      <DayOne />

      <div
        style={{
          width: '100%',
          height: '80px',
          position: 'fixed',
          bottom: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px',
            background: tercearyAlpha,
            padding: '10px',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}
        >
          <button
            style={{
              width: '50px',
              height: '50px',
              border: 'none',
              borderRadius: '8px',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: '0.2s',
            }}
          >
            <FiChevronLeft style={{ color: '#ffffff' }} />
          </button>

          <button
            style={{
              width: '50px',
              height: '50px',
              border: 'none',
              borderRadius: '8px',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: '0.2s',
            }}
          >
            <FiChevronRight style={{ color: '#ffffff' }} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
