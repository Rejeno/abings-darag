import L from 'leaflet'; // Leaflet's Icon for custom marker images
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

// Path to your custom marker image
const customMarkerIcon = new L.Icon({
  iconUrl: '/images/image.png', // Replace with your image path
  iconSize: [40, 40], // Size of the custom marker (width, height)
  iconAnchor: [20, 40], // Anchor point, centered at the bottom of the marker
  popupAnchor: [0, -40], // Popup position relative to the marker
});

interface MapProps {
  center: [number, number];
  zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={customMarkerIcon} />
    </MapContainer>
  );
};

export default Map;
