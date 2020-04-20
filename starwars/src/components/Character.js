// Write your Character component here
import React from "react";
import {Card,CardBody,Col,CardImg,CardText} from 'reactstrap';
import styled from 'styled-components';



const Character = (props)=>{
    return(
        <Col xs="12" md="4" xl="3">
            <Card style={{height:'500px',margin:'0px 0px 20px 0px'}}>
                <CardBody>
                <CardImg className="ricky-image" alt="img" src={props.image}/>
                <h5>{props.name}</h5>
                <CardText>Status: {props.status} </CardText>
                <CardText>Gender: {props.gender} </CardText>
                <CardText>Species: {props.species} </CardText>
                </CardBody>
            </Card>
        </Col>
    )
    
}
export default Character;
