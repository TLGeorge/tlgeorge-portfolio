import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBCardText } from "mdbreact";
// import "../../assets"

function Project(props) {
    return (
        <MDBCard className="card-cascade narrower">
            <div className="view-cascade">
                <a href={props.deployed} className="deployed">
                    <img className="card-img-top img-fluid photo thumbnail" src={props.image}
                        alt={props.name}></img>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>
            <MDBCardBody className="card-body-cascade">
                <h4 class="font-weight-bold card-title name">{props.name}</h4>
                <MDBCardText className="description technologies">
                    <p>{props.description}</p>
                    <p>{props.technologies}</p>
                </MDBCardText>
                <MDBBtn className="btn-unique text-success github">
                    <a href={props.github}>View GitHub</a>
                </MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )

}
export default Project;