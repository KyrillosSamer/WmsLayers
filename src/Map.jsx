import React from 'react';
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


const Map = ({ layers }) => {
  return (
    <MapContainer center={[28.003633, 31.212829]} zoom={7} style={{ height: "93vh", width: "100%" }}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; <a href="https://www.esri.com/en-us/home">Esri</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {layers.map((layer, index) => (
        layer.visible && (
          <WMSTileLayer
            key={index}
            url={layer.url}
            layers={layer.name}
            format="image/png"
            transparent={true}
            attribution={`&copy; ${layer.name}`}
          />
        )
      ))}
    </MapContainer>
  );
};

export default Map;
