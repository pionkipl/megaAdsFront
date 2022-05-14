import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';

import 'leaflet/dist/leaflet.css';
import './Map.css';

export const Map = () => {
    return (
        <div className='map'>
            <MapContainer center={[52.4231573,16.9377912]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[52.4231573,16.9377912]}>
                    <Popup>
                        <h1>Park cytadela</h1>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}