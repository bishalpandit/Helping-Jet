import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Navbar, Nav, Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import L from 'leaflet';
import NGOicon from './Images/Icons/building.png'
import OldAgeHomeicon from './Images/Icons/grandfather.png'
import orgs from '../Data/orgs'
import 'leaflet/dist/leaflet.css'

const NGO = new L.Icon({
    iconUrl: NGOicon,
    iconSize: [40, 50]

});

const OldAgeHome = new L.Icon({
    iconUrl: OldAgeHomeicon,
    iconSize: [40, 50]

});

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : ""
}

export default function Map() {

    const CENTER = [23.775448, 86.412964];
    const ZOOM = 11;

    return (
        <MapContainer center={CENTER} zoom={ZOOM} className="map mx-auto w-75 mt-4" style={{ height: 450, width: 700 }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {orgs.map((org) => (
                <Marker position={[org.lat, org.lon]} icon={org.type === "NGO" ? NGO : OldAgeHome} >
                    <Popup className="leaflet-popup-content-wrapper">
                        <div className="leaflet-popup-content">
                            <h4>{org.name}</h4>
                            <p>{org.address}</p>
                            <div className="phone-number">
                                <a href="tel:{org.contact}">{org.contact}</a>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}

            <LocationMarker />
        </MapContainer>
    )
}
