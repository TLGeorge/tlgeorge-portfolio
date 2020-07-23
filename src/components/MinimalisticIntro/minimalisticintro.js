import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBFormInline,
    MDBBtn,
    MDBView,
    MDBContainer
} from 'mdbreact';
import './MinimalisticIntro.css';
import Aboutme from '../AboutMe/aboutme';
import Portfolio from '../Portfolio/portfolio';
import Contact from '../Contact/contact';
// import TestPortfolio from "../Portfolio/testportfolio";
// import projects from "../projects.json";


class MinimalisticIntro extends React.Component {
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        const { collapsed } = this.state;

        this.setState({
            collapsed: !collapsed
        });
    };

    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }

    render() {
        const { collapsed } = this.state;
        const navStyle = { marginTop: '4rem' };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id='minimalistintro'>
                <Router>
                    <div>
                        <MDBNavbar
                            style={navStyle}
                            dark
                            expand='md'
                            fixed='top'
                            transparent
                            sticky


                        >
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <strong className='white-text'>TLGeorge</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                                <MDBCollapse isOpen={collapsed} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <MDBNavLink to='#!'>Home</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='#Portfolio'>Portfolio</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='#Contact'>Contact</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>

                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                        {collapsed && overlay}
                    </div>
                </Router>
                <MDBView src='https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg'>
                    <MDBMask className='rgba-black-light' />
                    <MDBContainer
                        className='d-flex justify-content-center align-items-center'
                        style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
                    >
                        <MDBRow>
                            <MDBCol md='12' className='mb-4 white-text text-center'>
                                <h1 className='h1-reponsive text-warning text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown"
//                   data-wow-delay="0.3s'>
                                    <strong>Taneisha L. George</strong>
                                </h1>
                                <hr className='hr-light my-4' />
                                <h5 className='text-uppercase mb-4 white-text '>
                                    <strong>Full Stack Web Developer</strong>
                                </h5>
                                <MDBBtn outline color='yellow' to="#AboutMe">
                                    About Me
                </MDBBtn>
                                <MDBBtn outline color='yellow' to="#Portfolio">
                                    Portfolio
                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>

                < Aboutme />
                < Portfolio />
                < Contact />
            </div >
        );
    }
}

export default MinimalisticIntro;