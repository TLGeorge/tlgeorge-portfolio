import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

function Aboutme() {
    return (
        <React.Fragment>
            <MDBContainer className="articles text-center py-5" >
                <h2 id="AboutMe" className="h1-responsive text-uppercase mb-4 text-success">About Me</h2>
                <MDBRow>
                    <MDBCol xl="4" md="4" mb="3"></MDBCol>
                    <MDBCol xl="4" md="4" mb="3" >
                        <img src="./assets/headshot.jpeg" class="img-fluid z-depth-1 rounded-circle"
                            alt="TLG Pic"></img>
                    </MDBCol>
                    <MDBCol xl="4" md="4" mb="3"></MDBCol>
                </MDBRow>


                <MDBRow>
                    <MDBCard>
                        <MDBCardBody>
                            <p class="card-text text-center">
                                I am a Junior Full Stack Web Developer currently enrolled in the UPENN LPS
                                Full-Stack Web Development Coding Bootcamp. I am knowledgeable
                                in Browser-Based Technologies (HTML, CSS, JavaScript, jQuery), Deployment (Heroku, Git),
                                Java, Databases (MySQL, MongoDB), Server Side Development (Node.js, Express, MERN
                                Stack),
                                and Quality Assurance (Writing Tests).
                        </p>

                            <p class="card-text text-center">
                                Before becoming a Web Developer, I received a Bachelor of Science Health
                                Information Management degree from Temple University and obtained a
                                Registered Health Information
                                Administrator (RHIA) certification. I have previously worked in both Public Health and
                                Healthcare
                                IT. My goal has always been to deliver customer-focused systems to ensure performance &amp;
                            workflow optimization.</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
    )
}

export default Aboutme;