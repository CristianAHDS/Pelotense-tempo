import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import DayOne from './pages/day1.jsx';
import DayTwo from './pages/day2.jsx';

import { tercearyAlpha } from './constant/colors.jsx';

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      {page === 1 ? <DayOne /> : <DayTwo />}

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
            onClick={() => setPage(1)}
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
            onClick={() => setPage(2)}
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
