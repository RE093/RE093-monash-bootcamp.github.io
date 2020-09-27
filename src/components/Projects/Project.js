import React from 'react';

import "./style.css";

export default function Project(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 proContainer">
      <img 
        src={ props.image } 
        className="project-image" 
        alt={ props.name } 
      />
      <div className="overlay">
          <a 
            href={ props.deployed } 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h2>{ props.name }</h2>
          </a>
          <a 
            href={ props.github } 
            target="_blank" 
            rel="noopener noreferrer">
              <i className="fa fa-github-alt"></i>
          </a>
      </div>
    </div>
  )
}
