import React, { Component } from 'react';

import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"


class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="home-wrapper">
                <NavBar path='/' />
                <div className="bg">
                    <div className="container bg-content">
                        <div>
                            <h1><b>Welcome to the Education Arm of the </b></h1>
                            <h1><b>San Diego Nanotechnology Infrastructure</b></h1>
                            <br/>
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