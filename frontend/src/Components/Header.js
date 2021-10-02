import React from 'react'
import HelpingOld1 from './Images/helping-old-1.svg'
import HelpingOld2 from './Images/helping-old-2.svg'
import Navibar from './Navbar'
import {Container, Image } from 'react-bootstrap'

export default function Header() {
    return (
        <div className="header">
            <Navibar />
            <Container>
                    <h1 className="text-center mt-5 ">Helping Needy Elderly for their Welfare and Empowering them.</h1>
                    <div className="header-img">
                        <Image className="col-lg-6 header-img img-fluid img1" src={HelpingOld1} width="450px" height="450px"></Image>
                        <Image className="col-lg-6 header-img img-fluid img2" src={HelpingOld2} width="450px" height="450px"></Image>
                    </div>
            </Container>
        </div>
    )
}
