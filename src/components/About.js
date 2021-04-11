import React, { useState } from 'react'
import { Button, Fade } from "reactstrap";

const Home = () => {

    const [fadeIn, setFadeIn] = useState(false);
    const toggle = () => setFadeIn(!fadeIn);

    const [pfFadeIn, setPfFadeIn] = useState(false);
    const pfToggle = () => setPfFadeIn(!pfFadeIn);

    return (
        <div className="container text-center">
            <p className="aboutText">
                <div className="container md-hide">
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
                        <Button color="primary" onClick={pfToggle} outline>View Projects that I have built</Button>
                        <Fade in={pfFadeIn} className="mt-3">
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
