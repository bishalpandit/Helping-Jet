import React from 'react'
import Navibar from '../Components/Navbar'
import Map from '../Components/Map'
import './MapsPage.css'

export default function BloodDonation() {
    return (
        <div>
            <Navibar />
            <h3 className="text-center my-4  blood-bank">Locate Blood Banks to Donate Blood for Elderly and Other People</h3>
            <p className="text-center">Click on map to move to your current location</p>
            <Map page="BloodBank" />
        </div>
    )
}