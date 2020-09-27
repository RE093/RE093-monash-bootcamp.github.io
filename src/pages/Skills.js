import React from 'react';
import Skill from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";

import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";
import "./response.css";

export default function Skills() {

    return (
        <div className="skills-section">
            <Container>
                <Row>
                    <Col>
                        <h1>Skills</h1>
                    </Col>
                    <Col md={12}>
                        <div className="skills-container">
                            <div className="skills-cont">
                                <Skill 
                                    name="Front-End-Development"
                                />
                            </div>
                            <div className="skills-cont">
                                <Skill 
                                    name="Back-End-Development"
                                />
                            </div>
                            <div className="skills-cont">
                                <Skill 
                                    name="Design"
                                />
                            <div className="skills-cont">
                                <Work/>
                            </div>
                            </div>
                            <Footer/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}