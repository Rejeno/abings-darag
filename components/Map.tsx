'use client'
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
      <Marker position={center} />
    </MapContainer>
  );
};

export default Map;
