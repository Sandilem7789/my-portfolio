import React, { useState } from 'react'
import { Button, Fade } from "reactstrap";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Projects from "./Projects";
library.add(fab, faCheckSquare, faCoffee);

const Home = () => {

    const [fadeIn, setFadeIn] = useState(false);
    const toggle = () => {
        setFadeIn(!fadeIn);
        setPfFadeIn(false);
    }

    const [pfFadeIn, setPfFadeIn] = useState(false);
    const pfToggle = () => setPfFadeIn(!pfFadeIn);

    return (
        <div className="container text-center">
            <p className="aboutText">
                <div className="container">
                    <div >
                    Hi there my name is Sandile Mathenjwa, I am a front end web developer.
                    <br/>
                    I build websites and web apps
                    <br/>
                    <br/>
                    In my builds I mainly use the JavaScript Stack: HTML, CSS, vanilla JavaScript, React.js, Bootstrap,
                    Node.js, Express.js, SCSS, Gulp, npm, and a little bit of PHP and MySQL.
                    <hr/>
                    
                    <Button color="primary" onClick={toggle} outline>More About Me</Button>
                    <Fade in={fadeIn}  className="mt-3">
                        My services are available for businesses looking for websites/web apps, and also for 
                        employers looking to add a valuable member on their development team
                        <br/><br/>
                        Feel free to contact me via <a href="mailto:sandilem_1@live.com">email</a> if you want get in touch. <br/>
                        
                        <a href="mailto:sandilem_1@live.com">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#1DA1F2"/>
                        </a>
                        <br/><br/>

                        <Button color="primary" onClick={pfToggle} outline>View Projects that I have built</Button>
                        <Fade in={pfFadeIn} className="mt-3">
                            <Projects />
                            <div>
                                <div className="row">
                                    <div className=" md-col-4">
                                        <h1>Project 1</h1>
                                    </div>
                                    <div className=" md-col-4">
                                        <h1>Project 2</h1>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </Fade>
                    </div>
                </div>
                
            </p>
        </div>
    )
}

export default Home
