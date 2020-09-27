import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer/Footer";

import "./style.css";
import "./response.css";

export default function Home() {

    const history = useHistory();
    const [showGif, setShowGif] = useState(false)

    const handleProjectClick = () => {
        setShowGif(true);
        setTimeout(() => {
            renderRedirect();
        }, 3000); 
    }

    const renderRedirect = () => {
        history.push('/projects')
    };

    return (
        <div>
            <img
                src={require("../assets/home/re-mountain.png")}
                alt="re-mountain"
                id="re-mountain" 
            />
            <div className="firstNameContainer">
                <h1 className="firstName">Rupert</h1>
                <h1 className="lastName">Paterson</h1>
                <p>
                    I am a full-stack developer and UI/UX designer. I do not just stop at learning one element,
                    I strive to learn the entirety of a product development process. Currently I am doing a coding 
                    bootcamp through Monash University and have completed a UX bootcamp through PeakXD. With a background 
                    of seven years in the New Zealand Army as a heavy diesel mechanic, I developed a tenacity for hard 
                    work and determination, which I use to full effect when learning new skills.
                    My passion for problem solving has taught me to never shy away from a challenge, to learn new skills 
                    and build on those I already had. Skills like team building, communication and public speaking all became 
                    second nature after being put in high pressure situations in my profession this far. 
                </p>
            </div>
            <div className="about">
                <h1>About</h1>
            </div>
            <div>
                {showGif ? 
                    <img 
                        src={require("../assets/home/Car99.gif")}
                        alt="car-gif"
                        className="car-gif moving-gif"
                    />
                    :
                    <img 
                        src={require("../assets/home/Car.gif")}
                        alt="car-gif"
                        className="car-gif"
                    />
                }
            </div>
            <div 
                className="project-button"
                onClick={handleProjectClick}
            >
                See My Projects!
            </div>
            <Footer/>
        </div>
    );
}