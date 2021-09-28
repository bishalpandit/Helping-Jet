import React from 'react'
import Map from '../Components/Map'
import './MapsPage.css'
import 'leaflet/dist/leaflet.css';
import Navibar from '../Components/Navbar';


export default function MapsPage() {
    return (
        <div className="ngo">
            <Navibar />
            <h2 className="text-center my-3">Find Nearby NGOs and Old Age Homes</h2>
            <Map page="NGO"/>
        </div>
    )
}
