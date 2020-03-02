import React, { Component } from 'react';

import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

class Donate extends Component {
    constructor(props) {
        super(props)
        this.path = '/donate';
    }

    render() {
        return (
            <div>
                <NavBar path={this.path} />
                <div className="container1">
                    <div className="row">
                        <div className="col-sm-3 sidebar">
                        </div>
                        <div className="col-sm-7 main-content">
                            <p className="title"><b>Donate</b></p>	
                            <p>
                                Please help us to reach our $150,000 funding goal for year 2020.<br/><br/>
                                The funding is to support SDNI and Nano3 which offers unique fabrication and analytical capabilities to prove science and engineering ideas at the molecular scale, and promotes educational programs, equality and diversity by training thousands of students annually in Nanotechnology and related STEM fields.
                                <br/><br/>
                                Here is how to donate: <br/>
                                <a href="https://giveto.ucsd.edu/"><span className="donate-span">Donate to SDNI-Nano3</span></a>
                                <br/><br/>
                                1. In the middle of the page, in the blank square where you see: “More Donation Options” enter "SDNI" and hit enter.<br/>
                                2. In the middle of the page, a new window will appear: under "Please Select a Fund", click on the scroll down arrow and select  "Nano3 and SDNI (San Diego Nanotechnology Infrastructure)" (It is the only one option so far).<br/>
                                3. Click on the amount you want to donate or click “Other” to enter a specific amount that is not listed.<br/>
                                4. Click on the “Save Gift” button at the bottom of the page.<br/>
                                5. This will bring you to a new page. Just enter your information to make your donation.
                                <br/><br/><br/><br/><br/>
                            </p>	
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Donate;