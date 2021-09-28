import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../Pages/MapsPage.css';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';


export default function Map() {
    const center = [22.572645, 88.363892]
    const position1 = [22.565315, 88.351986]
    const position2 = [22.602287, 88.3713632]
    return (
        <MapContainer center={center} zoom={14} scrollWheelZoom={false} className="map mx-auto w-75 mt-4">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position1}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Marker position={position2}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
