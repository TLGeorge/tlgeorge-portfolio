import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBCardText } from "mdbreact";
import project from "../../projects.json";
import Project from "../Project/projects";

function Portfolio() {
    return (
        <React.Fragment>
            <MDBContainer className="articles text-center py-5" >
                <h2 id="Portfolio" className="h1-responsive text-uppercase mb-4 text-success Portfolio">Portfolio</h2>
                <MDBRow>
                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <Project
                                name={project[0].name}
                                deployed={project[0].deployed}
                                image={project[0].image}
                                description={project[0].description}
                                technologies={project[0].technologies}
                                github={project[0].github}
                            />
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <Project
                                name={project[1].name}
                                deployed={project[1].deployed}
                                image={project[1].image}
                                description={project[1].description}
                                technologies={project[1].technologies}
                                github={project[1].github}
                            />
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <Project
                                name={project[2].name}
                                deployed={project[2].deployed}
                                image={project[2].image}
                                description={project[2].description}
                                technologies={project[2].technologies}
                                github={project[2].github}
                            />
                        </MDBCard>
                    </MDBCol>
                </MDBRow>



                <MDBRow>
                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <Project
                                name={project[3].name}
                                deployed={project[3].deployed}
                                image={project[3].image}
                                description={project[3].description}
                                technologies={project[3].technologies}
                                github={project[3].github}
                            />
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <Project
                                name={project[4].name}
                                deployed={project[4].deployed}
                                image={project[4].image}
                                description={project[4].description}
                                technologies={project[4].technologies}
                                github={project[4].github}
                            />
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <Project
                                name={project[5].name}
                                deployed={project[5].deployed}
                                image={project[5].image}
                                description={project[5].description}
                                technologies={project[5].technologies}
                                github={project[5].github} />
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </React.Fragment >
    )
}

export default Portfolio;

