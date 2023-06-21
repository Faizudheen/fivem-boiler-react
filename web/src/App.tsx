import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [coords, setCoords] = useState<any>(null);

  const handleGetCoords = async () => {
    const response = await fetch('https://Sample/getCoords', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      setCoords(data);
    }
  };

  return (
    <div style={{ width: 'fit-content', height: 'fit-content', backgroundColor: 'black',color:'white',fontWeight:"bold", left: '50%', top: '50%' }}>
      <button style={{ padding: '10px' }} onClick={handleGetCoords}>Get Coords</button>
      {coords &&
        <>
          <p>X: {coords.x}</p>
          <p>Y: {coords.y}</p>
          <p>Z: {coords.z}</p>
        </>
      }
    </div>
  );
};

export default App;
