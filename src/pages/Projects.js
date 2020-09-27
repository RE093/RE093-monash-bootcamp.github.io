import React from 'react';
import Project from "../components/Projects/Project";
import projectsList from '../utils/projects-list';

import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Projects() {
    return (
        <div>
            <Container>
                <div className="project-examples col-md-12 flex">
                    <Row>
                        <h1 className="projects">Projects</h1>
                    </Row>
                    <Row className="example-items">
                        {projectsList.map(list => {
                            return (
                                <Project
                                    key={list.name}
                                    name={list.name}
                                    image={list.image}
                                    deployed={list.deployed}
                                    github={list.github}
                                />
                            )
                        })}
                    </Row>
                </div>
            </Container>
        </div>
    );
}