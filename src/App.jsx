import React, { useState } from 'react';
import Map from './Map';
import './App.css';
import { HiOutlineMenu } from "react-icons/hi";


const layersData = [
  { name: 'gov', url: 'http://10.100.100.106:8051/geoserver/gov/wms', visible: true },
  { name: 'agri_point', url: 'http://10.100.100.106:8051/geoserver/agri_point/wms', visible: true },
  { name: 'total_m', url: 'http://10.100.100.106:8051/geoserver/total_m/wms', visible: true },
];

function App() {
  const [layers, setLayers] = useState(layersData);
  const [isOpen, setIsOpen] = useState(false);

  const toggleLayer = (layerName) => {
    setLayers(layers.map(layer => 
      layer.name === layerName ? { ...layer, visible: !layer.visible } : layer
    ));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button 
        className="toggle-button" 
        onClick={toggleSidebar} 
        style={{ right: isOpen ? '250px' : '10px' }} 
      >
        <HiOutlineMenu />
      </button>
      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <h3 className='h3'>Layers</h3>
        <ul>
          {layers.map(layer => (
            <li key={layer.name}>
              <input 
                type="checkbox" 
                checked={layer.visible} 
                onChange={() => toggleLayer(layer.name)} 
              />
              {layer.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="map-container">
        <h1 className="title">Base Map With Layers</h1>
        <Map layers={layers} />
      </div>
    </div>
  );
}

export default App;
