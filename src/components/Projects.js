import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from "reactstrap";

function CardElement({projName, projDisc}) {
    return(
        <div className="md-col-4">
            <Card>
                <CardImg top width="100" src="" alt={projName} />
                <CardBody>
                    <CardTitle>{projName}</CardTitle>
                    <CardText className="aboutText">
                        {projDisc}
                    </CardText>
                    <div className="text-center">
                        <Button>Demo</Button>
                        <Button>GitHub</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="container">
            <h2 className="text-center">Projects</h2>
            <div className="md-col-4 mb-5">
                <CardElement 
                    projName="CardElement Component"
                    projDisc="This is an online store for a spaza shop
                            called Lisk.com its currently up and running 
                            it caters a rural community in a village called Mhlekazi"
                />
                <CardElement 
                    projName="CardElement 2"
                    projDisc="Isintu.org is a movement that aims to inform the youth from
                    rural areas about the possibilities of using technology as a tool instead 
                    of only consuming it as entertainment alone."
                />
                
            </div>
        </div>
    )
}

export default Projects
