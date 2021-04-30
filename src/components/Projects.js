import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from "reactstrap";

function CardElement({projName, projDisc}) {
    return(
        <div className="pb-3">
            <Card>
                <CardImg top width="100" src="" alt={projName} />
                <CardBody>
                    <CardTitle>{projName}</CardTitle>
                    <CardText className="aboutText" style={{color: "black" }}>
                        {projDisc}
                    </CardText>
                    <div className="text-center" style={{display: "flex", justifyContent: "space-around"}}>
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
        <div className="container pb-3">
            <h2 className="text-center pb-4">Projects</h2>
            <div className="row pb-5">
                <div className="col-md-4">
                    <CardElement 
                        projName="CardElement Component"
                        projDisc="This is an online store for a spaza shop
                                called Lisk.com its currently up and running 
                                it caters a rural community in a village called Mhlekazi"
                    />
                </div>
                <div className="col-md-4">
                    <CardElement 
                        projName="CardElement 2"
                        projDisc="Isintu.org is a movement that aims to inform the youth from
                        rural areas about the possibilities of using technology as a tool instead 
                        of only consuming it as entertainment alone."
                    />
                </div>
                <div className="col-md-4">
                    <CardElement 
                        projName="CardElement 2"
                        projDisc="Isintu.org is a movement that aims to inform the youth from
                        rural areas about the possibilities of using technology as a tool instead 
                        of only consuming it as entertainment alone."
                    />
                </div>
                
                
            </div>
        </div>
    )
}

export default Projects
