import { useState } from 'react';
import Map from '../../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [58.9264, 25.6095], zoom: 7});

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.9264, 25.6095], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>

    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3779, 26.7305], zoom: 13})}>Tasku</button>
    <button onClick={() => setCoordinates({lngLat: [58.3864, 24.5031], zoom: 13})}>Port Artur</button>

    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;