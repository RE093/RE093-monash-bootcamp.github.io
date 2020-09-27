import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import ContactContext from "../../utils/ContactContext";

import Navbar from 'react-bootstrap/Navbar';
import "./style.css";


function Index() {
  const history = useHistory();
  const [contactTimer, setContactTimer ] = useContext(ContactContext);

  const handleClick = () => {
    history.push('/')
  }

  const handleContactClick = () => {
    setContactTimer(true)
    console.log(contactTimer)
  }

    return (
        <>
          <Navbar className="navBar">
            <Navbar.Brand 
              href="#"
              onClick={handleClick}
            >
              <img 
                src={require("../../assets/home/RE.png")} 
                alt="re-logo"
                id="re-logo"
              />
            </Navbar.Brand>
            <div 
              className="nav-contact"
              onClick={handleContactClick}
            >
              <p className="contactButton" >Contact</p>
            </div>
          </Navbar>
        </>
    );
}

export default Index;