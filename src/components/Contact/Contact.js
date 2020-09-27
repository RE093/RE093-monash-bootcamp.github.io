import React from 'react';
import ContactContext from "../../utils/ContactContext";

import "./style.css";
import "../../pages/response.css";

export default function Contact() {

    const [contactTimer, setContactTimer] = React.useContext(ContactContext);

    const handleClickSubmit = (event) => {
        event.preventDefault();
        setContactTimer(false)
        console.log(contactTimer)
    }

    return (
        <div className="popup-container">
            <button 
                onClick={handleClickSubmit}
                className="close-popup">
                x
            </button>
            <img 
                src={require("../../assets/contact/popup-me.png")}
                alt="pop-up-rupert"
                className="contact-popup"
            />
            <div className="contact-info">
                <h1>Contact me here!</h1>
                <ul className="contact-list">
                <hr/>
                    <li className="list-item">
                        <a
                            href="mailto:re.paterson000@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="list-a-tag"
                        >
                        Email
                        <span>
                            <img
                                src={require("../../assets/contact/email2.png")}
                                alt="email"
                                className="email-img"
                            />
                        </span>
                        </a>
                    </li>
                    <hr/>
                    <li className="list-item">
                        <a
                        href="https://github.com/RE093"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="list-a-tag"
                    >Github
                        <span>
                            <img
                                src={require("../../assets/contact/github2.png")}
                                alt="github"
                                className="github-img"
                            />
                        </span>
                        </a>
                    </li>
                    <hr/>
                    <li className="list-item">
                        <a
                        href="https://linkedin.com/in/rupert-paterson-2b2b02165"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="list-a-tag"
                        >Linkedin
                            <span>
                                <img
                                    src={require("../../assets/contact/linkedin2.png")}
                                    alt="linkedin"
                                    className="linkedin-img"
                                />
                            </span>
                        </a>
                    </li>
                    <hr/>
                    <li className="list-item">
                        <a
                        href={require("../../assets/contact/RPatersonResume.png")}
                        className="list-a-tag"
                        download
                        >Download CV
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}