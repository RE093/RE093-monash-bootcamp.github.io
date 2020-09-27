import React from 'react';

import { Card } from 'react-bootstrap';
import "./style.css";

export default function Work() {
    return (
        <>
            <div className="work-container">
                <Card>
                <Card.Header as="h4">Previous Work</Card.Header>
                <Card.Body>
                    <img 
                        src={require("../../assets/icons/nzdf.png")}
                        alt="nzdf"
                        className="nzdf-image"
                    />
                    <ul className="work-list">
                        <br/>
                        <li><h5>Team Leader - Heavy Diesel Mechanic</h5></li>
                        <br/>
                        <li>2013 - 2020</li>
                        <li>Fleet Maintenance</li>
                        <li>Managing a team of soldiers</li>
                    </ul>
                </Card.Body>
                </Card>
            </div>

            <div className="work-container">
                <Card>
                <Card.Header as="h4">Education</Card.Header>
                <Card.Body>
                    <img 
                        src={require("../../assets/icons/peak.png")}
                        alt="peak"
                        className="peak-image"
                    />
                    <ul className="work-list">
                        <br/>
                        <li><h5>UX Accelerator Program - User Experience Design</h5></li>
                        <li>2020</li>
                    </ul>
                    <img 
                        src={require("../../assets/icons/monash.png")}
                        alt="monash"
                        className="monash-image"
                    />
                    <ul className="work-list">
                        <br/>
                        <li><h5>Certificate - Full Stack Development</h5></li>
                        <li>2020</li>
                    </ul>
                </Card.Body>
                </Card>
            </div>
        </>
    );
}