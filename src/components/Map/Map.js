import React from 'react';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});



export default function Map({ data, isLoading }) {
  return (
    isLoading ? '' : (
      <MapContainer className="z-0" style={{ height: "100%"}} center={[data['location']['lat'], data['location']['lng']]} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='Map data &copy;'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
          id='mapbox/streets-v11'
        />
        <Marker position={[data['location']['lat'], data['location']['lng']]}>
          <Popup>
            Location of given IP address
          </Popup>
        </Marker>
      </MapContainer>
    )
  );
}

