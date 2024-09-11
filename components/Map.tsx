'use client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

// Dynamically import MapContainer, TileLayer, and Marker for client-side rendering only
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this code runs only on the client
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

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
