import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import 'react-leaflet' to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });

interface MapProps {
  center: [number, number];
  zoom: number;
}

// Custom marker icon definition
const customMarkerIcon = new L.Icon({
  iconUrl: '/images/image.png',  // Path to your custom marker image
  iconSize: [40, 40],  // Size of the icon (width, height)
  iconAnchor: [20, 40],  // Anchor point, centered at the bottom
  popupAnchor: [0, -40],  // Popup position relative to the marker
});

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // Mark the component as client-side after mounting
  }, []);

  if (!isClient) {
    return null;  // Return null on the server side to avoid the error
  }

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={customMarkerIcon} /> {/* Use custom marker */}
    </MapContainer>
  );
};

export default Map;
