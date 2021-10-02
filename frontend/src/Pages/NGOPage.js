import React from 'react'
import Map from '../Components/Map'
import './MapsPage.css'
import 'leaflet/dist/leaflet.css';
import Navibar from '../Components/Navbar';
import "./HomeScreen.css";


export default function MapsPage() {
    return (
        <div className="ngo">
            <Navibar />
            <h2 className="text-center my-3">Find Nearby NGOs and Old Age Homes</h2>
            <p className="text-center">Click on map to move to your current location</p>
            <Map page="NGO"/>
        </div>
    )
}
