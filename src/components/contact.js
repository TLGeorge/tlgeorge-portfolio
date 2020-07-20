import React, { Component } from "react";
import { MDBFooter } from "mdbreact";
// import "./style.css";

function Contact() {
    return (
        <React.Fragment>
            <MDBFooter>
                <div className="grid-container fluid main-section">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell text-dark text-center footer-text">
                            <h2 id="Contact" className="h1-responsive text-uppercase mb-4 text-success">Contact</h2>
                            <div className="mb-4 text-dark">
                                <p>Feel free to contact me regarding any professional endeavors or opportunities.</p>
                                <br></br>
                                <a href="mailto:taneishalg@gmail.com">TaneishaLG@gmail.com</a> |
                                <a href="tel:2152785611">(215) 278-5611</a> |
                                <a href="https://docs.google.com/document/d/1u4KrINLFFiSrbYeM-DxxIiYEV5QKHeKjuBfQPeGxJ04/edit?usp=sharing">Resume</a> |
                                <a href="https://www.linkedin.com/in/taneishalgeorge/">
                                    <img src="./assets/LI-Logo.png" class="img-responsive" width="10%"></img></a> |
                                    <iframe className="github-btn"
                                    src="https://ghbtns.com/github-btn.html?user=TLGeorge&type=follow&count=true"
                                    frameBorder="0" scrolling="0" width="170px" height="18px"></iframe>
                            </div>
                            <div className="large-12 cell text-success text-center footer-text">
                                <p><strong>&copy; Copyright 2020 by Taneisha L. George </strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </MDBFooter>
        </React.Fragment>
    );

}

export default Contact;