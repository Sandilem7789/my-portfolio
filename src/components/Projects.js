import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from "reactstrap";

//Animations
import Zoom from 'react-reveal/Zoom';
import Jello from 'react-reveal/Jello';

function CardElement({projName, projDisc, demoLink, gitRepo}) {
    return(
        <div className="pb-3">
            <Jello>
                <Card>
                    {/*<CardImg top width="100" src="" alt={projName} />*/}
                    <CardBody>
                        <CardTitle className="display-4 mt-0 text-center hello-text" style={{fontFamily: "'Pacifico', cursive"}}>{projName}</CardTitle>
                        <CardText className="aboutText" style={{color: "black" }}>
                            {projDisc}
                        </CardText>
                        <div className="text-center" style={{display: "flex", justifyContent: "space-around"}}>
                            <Button href={demoLink}>Demo</Button>
                            <Button href={gitRepo}>GitHub</Button>
                        </div>
                    </CardBody>
                </Card>
            </Jello>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="container pb-3">
            <Zoom>
                <h1 className="text-center pb-4">Projects</h1>
            </Zoom>
            <div className="row pb-5 pt-4">
                {/*<div className="col-md-4">
                    <CardElement 
                        projName="Project 1"
                        projDisc="This is an online store for a spaza shop
                                called Lisk.com its currently up and running 
                                it caters a rural community in a village called Mhlekazi"
                    />
                </div>
                <div className="col-md-4">
                    <CardElement 
                        projName="Project 2"
                        projDisc="Isintu.org is a movement that aims to inform the youth from
                        rural areas about the possibilities of using technology as a tool instead 
                        of only consuming it as entertainment alone."
                    />
                </div>
                <div className="col-md-4">
                    <CardElement 
                        projName="Project 2"
                        projDisc="Isintu.org is a movement that aims to inform the youth from
                        rural areas about the possibilities of using technology as a tool instead 
                        of only consuming it as entertainment alone."
                    />
                </div>*/}

                <div className="col-md-4 mx-auto">
                    <CardElement 
                        projName="Hello, I'm Sandile"
                        projDisc="This is my portfolio website. Tools that were used in this build 
                        include: ReactJS, Reactsrap, CSS, Framer-Motion and Fontawesome Icons"
                        demoLink="/"
                        gitRepo="https://github.com/Sandilem7789/my-portfolio"
                    />
                </div>
                
                
            </div>
        </div>
    )
}

export default Projects
