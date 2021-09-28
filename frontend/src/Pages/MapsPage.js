import React from 'react'
import MapComponent from '../Components/Map'
import './MapsPage.css'
import 'leaflet/dist/leaflet.css';
import Navibar from '../Components/Navbar';


export default function MapsPage() {
    return (
        <div className="map">
            <Navibar />
            <h1 className="text-center my-3 ngo-head">Find Nearby NGOs and Old Age Homes</h1>
            <MapComponent />
        </div>
    )
}
