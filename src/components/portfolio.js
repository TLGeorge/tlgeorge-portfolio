import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBCardText } from "mdbreact";

function Portfolio() {
    return (
        <React.Fragment>
            <MDBContainer className="articles text-center py-5" >
                <h2 id="Portfolio" className="h1-responsive text-uppercase mb-4 text-success">Portfolio</h2>
                <MDBRow>
                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <div className="view-cascade">
                                <a href="https://personal-trainer-portal.herokuapp.com/login">
                                    <img className="card-img-top img-fluid" src="./assets/fitlevin.png"
                                        alt="Card image cap"></img>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <MDBCardBody className="card-body-cascade">
                                <h4 class="font-weight-bold card-title">Fit Levin Training</h4>
                                <MDBCardText>
                                    <p>Personal Trainers' reliable
                                    tool for organizing, updating &amp; creating clients. Clients can log in as well
                                    to view
                                    their
                                    personal goals, history, fitness plan &amp; any notes their trainer has
                                given them about their last session. </p>
                                    <p>Technologies used: HTML5, CSS3, JavaScript, jQuery, Sequelize, Heroku and
                                Materialize framework.</p>
                                </MDBCardText>
                                <MDBBtn className="btn-unique text-success">
                                    <a href="https://github.com/BrianLevin/Personal-Trainer-Portal">View GitHub</a>
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <div className="view-cascade">
                                <a href="https://dolinay1.github.io/Covid-19-Donation-App/">
                                    <img className="card-img-top img-fluid" src="./assets/C19RI.jpg"
                                        alt="Card image cap"></img>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <MDBCardBody className="card-body-cascade">
                                <h4 class="font-weight-bold card-title">The Covid-19 Relief Initiative</h4>
                                <MDBCardText>
                                    <p></p>
                                </MDBCardText>
                                <p>Find local medical and health charities to aid in the
                                fight
                                against Covid-19! You can also get current Covid-19 stats for each state.
                            </p>
                                <p> Technologies used: HTML5, CSS3, JavaScript, jQuery; Foundations
                                framework;
                                Covid-19 Monitor Pro and Charity Navigator's APIs.
                            </p>
                                <MDBBtn className="btn-unique text-success">
                                    <a href="https://dolinay1.github.io/Covid-19-Donation-App/">View GitHub</a>
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <div className="view-cascade">
                                <a href="https://github.com/TLGeorge/Eat-Da-Burger">
                                    <img className="card-img-top img-fluid" src="./assets/eatdaburger.jpg"
                                        alt="Card image cap"></img>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <MDBCardBody className="card-body-cascade">
                                <h4 class="font-weight-bold card-title">Eat-Da-Burger</h4>
                                <MDBCardText>
                                    <p></p>
                                </MDBCardText>
                                <p>A restaurant app that lets users input the names of burgers
                                they'd like to eat.</p>
                                <p> Technologies used: HTML5, CSS3, JavaScript, jQuery; SQL,
                                Heroku,NodeJS, MySQL, Express, Handlebars,
                                Bootstrap
                                framework.
                            </p>
                                <MDBBtn className="btn-unique text-success">
                                    <a href="https://github.com/TLGeorge/Eat-Da-Burger">View GitHub</a>
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>



                <MDBRow>
                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <div className="view-cascade">
                                <a href="https://github.com/TLGeorge/EmployeeCMS">
                                    <img className="card-img-top img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                                        alt="Card image cap"></img>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <MDBCardBody className="card-body-cascade">
                                <h4 class="font-weight-bold card-title">Employee CMS</h4>
                                <MDBCardText>
                                    <p class="card-text">An application which allows you to view and manage the
                                departments, roles, and employees in a company.</p>
                                    <p> Technologies used: HTML5, CSS3, JavaScript, jQuery; Node, MySQL.</p>
                                </MDBCardText>
                                <MDBBtn className="btn-unique text-success">
                                    <a href="https://github.com/TLGeorge/EmployeeCMS">View GitHub</a>
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <div className="view-cascade">
                                <a href="https://arcane-tundra-29946.herokuapp.com/">
                                    <img className="card-img-top img-fluid" src="./assets/notetaker.jpg"
                                        alt="Card image cap"></img>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <MDBCardBody className="card-body-cascade">
                                <h4 class="font-weight-bold card-title">Note Taker</h4>
                                <MDBCardText>
                                    <p>Never forget
                                    important information again! Quickly make
                                    notes of information that you need to review or remember. Dates,
                                passwords, activities etc!</p>
                                    <p>Technologies used: HTML5, CSS3, JavaScript, jQuery, Express.js, UUID and
                                Heroku.</p>
                                </MDBCardText>
                                <MDBBtn className="btn-unique text-success">
                                    <a href="https://github.com/TLGeorge/Note-Taker">View GitHub</a>
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="4" md="12" mb="4">
                        <MDBCard className="card-cascade narrower">
                            <div className="view-cascade">
                                <a href="https://github.com/TLGeorge/Employee-Summary-Template-Engine">
                                    <img className="card-img-top img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                                        alt="Card image cap"></img>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <MDBCardBody className="card-body-cascade">
                                <h4 class="font-weight-bold card-title">Employee Summary Template Engine</h4>
                                <MDBCardText>
                                    <p>A Node CLI that takes in information about employees and
                                generates an HTML webpage that displays summaries for each employee.</p>
                                    <p> Technologies used: HTML5, CSS3, JavaScript, jQuery; Node.</p>
                                </MDBCardText>
                                <MDBBtn className="btn-unique text-success">
                                    <a href="https://github.com/TLGeorge/Employee-Summary-Template-Engine">View GitHub</a>
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </React.Fragment >
    )
}

export default Portfolio;

