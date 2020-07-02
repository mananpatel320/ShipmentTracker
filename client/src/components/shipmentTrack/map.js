import React from 'react';
import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';
import * as pointData from './mapdata.json';

export default function Mpp() {
  const [activePoint, setActivePoint] = React.useState(null);
  const getLatLngBounds = () => {
    return [
      [12.9716, 77.5946],
      [19.075983, 72.877655],
      [17.385044, 78.486671],
      [13.08268, 80.270721]
    ];
  };
  return (
    <Map zoom={25} bounds={getLatLngBounds()}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="topright" />
      {pointData.features.map((point) => (
        <Marker
          key={point.properties.POINT_ID}
          position={[
            point.geometry.coordinates[1],
            point.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePoint(point);
          }}
          // icon={skater}
        />
      ))}
      {activePoint && (
        <Popup
          position={[
            activePoint.geometry.coordinates[1],
            activePoint.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePoint(null);
          }}
        >
          <div>
            <h6 style={{ textAlign: 'center' }}>
              {activePoint.properties.NAME}
            </h6>
            <h3 style={{ textAlign: 'center' }}>
              {activePoint.properties.DESCRIPTION}
            </h3>
          </div>
        </Popup>
      )}
    </Map>
  );
}
