import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

import banner1 from '../../assets/Image/banner1.png';
import banner2 from '../../assets/Image/banner2.png';

const allRoutes = ['/about', '/programs', '/events', '/news', '/donate', '/outreach', '/networking'];
class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doRedirect: false,
            redirect: {
                pathname: '',
                redirectProps: {}
            }
        }
    }

    handleRedirect = (e, path, param) => {
        e.preventDefault()
        if (!allRoutes.includes(path)) {
            console.log('Invalid route');
            return;
        }
        if (path == this.path) {
            this.props.handler(param);
            return;
        }
        this.setState({
            doRedirect: true,
            redirect: {
                pathname: path,
                redirectProps: { title: param }
            }
        })
    }

    render() {
        if (this.state.doRedirect) {
            return (
                <Redirect to={
                    {
                        pathname: this.state.redirect.pathname,
                        state: this.state.redirect.redirectProps
                    }
                } />
            )
        }
        return (
            <div id="home-wrapper">
                <NavBar path='/' />
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="banner-item">
                                <img className="d-block w-100" src={banner1} alt="" />
                                <div className="banner1-img-inner-container">
                                    <button onClick={() => { window.location.href = 'https://www.eventbrite.com/e/sdni-nnci-educational-symposium-2020-tickets-94687786719' }} className="banner1-btn"><span className="banner-btn-text">Registration</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="banner-item">
                                <img className="d-block w-100" src={banner2} alt="" />
                                <div className="banner2-img-inner-container">
                                    <button onClick={(e) => this.handleRedirect(e, '/news', 'ca')} className="banner2-btn"><span className="banner-btn-text">See "News" Section</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="bg">
                    <div className="container bg-content">
                        <div>
                            <h1><b>Welcome to the Education Arm of the </b></h1>
                            <h1><b>San Diego Nanotechnology Infrastructure</b></h1>
                            <br />
                            <h3>A Center of Excellence in NanoTechnology Educational Resources</h3>
                            <h3>C.E.N.T.E.R.</h3>
                        </div>
                    </div>

                </div>
                
                <Footer />
            </div>

        );
    }
}

export default Home;