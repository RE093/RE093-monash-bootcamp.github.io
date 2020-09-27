import React from 'react';
import skillsList from "../../utils/skills-list";

import { Card } from 'react-bootstrap';
import "./style.css";


export default function Skills(props) {

    return (
        <>
        <Card>
        <Card.Header as="h4">{props.name}</Card.Header>
        <Card.Body>
            <div className="icons">
                {    
                    skillsList.map(icons => {
                        if (icons.type === props.name) {
                            return (
                                <img
                                    key={icons.name}
                                    className={icons.class}
                                    src={icons.image}
                                    alt={icons.name}
                                />
                            )
                        }
                    })
                }
            </div>
        </Card.Body>
        </Card>
        </>
    );
}