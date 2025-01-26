import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapWithLocation = () => {
  const position = [28.605210811155885, 77.05400256663229]; // Example coordinates (latitude, longitude)

  return (
    <div className="p-8">
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "350px", width: "100%", zIndex: 0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Exact Location <br /> Latitude: {position[0]}, Longitude: {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default MapWithLocation;
