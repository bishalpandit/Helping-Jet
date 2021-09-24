import React from 'react'
import Header from '../Components/Header';
import './HomeScreen.css';
import Content from  '../Components/content-body';
export default function HomeScreen() {
    return (
        <div>
        <div>
           <Header />
        </div>
        <div>
            <Content/>
        </div>
        </div>
    )
}
