import React, { Component } from 'react';

import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

class SeedGrants extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="container1">
                    <div className="row">
                        <div className="col-sm-3 sidebar">
                        </div>
                        <div className="col-sm-7">
                            <p className="title"><b>Seed Grants</b></p>		
                            <p>
                                <b className="subtitle">Academic Seed Grant:</b>
                                <br/><br/>
                                SDNI has established a Seed Grant program to provide access to nanofabrication facilities, equipment, and expertise for educators and researchers. The Seed Grant will provide access to SDNI at no charge up to the value of the award. SDNI will accept and review all Seed Grant applications as they arrive. SDNI encourages applications from the following:
                                <br/><br/>
                                • High school science and engineering educators and students<br/>
                                • Community college science and engineering educators and students<br/>
                                • Researchers from academic institutes having limited facilities and/or research funding<br/>
                                <br/><br/>
                                All student applications must include a teacher or faculty member who will guide and supervise the student's project. Additionally, only adults will be allowed to perform work in SDNI laboratory facilities.
                                <br/><br/>
                                For more information or to apply for the SDNI Academic Seed Grant, click below:
                                <br/><br/>
                                <a href="https://docs.google.com/forms/d/1Si_2MGoNhshbYIAZooO-Wivf1qDf1Xs_EIuOG_W-RLU/viewform?ts=5d09087a&edit_requested=true"><button className="programs-button">SDNI Seed Grant - Academic</button></a>
                                <br/><br/><br/>
                                <b className="subtitle">Commercial Seed Grant:</b>
                                <br/><br/>
                                SDNI has established a Seed Grant program to provide access to nanofabrication facilities, equipment, and expertise for small businesses, startups, or other enterprises that lack sufficient funds for a traditional SDNI relationship. The Seed Grant will provide access to SDNI at no charge up to the value of the award.
                                <br/><br/>
                                • High school science and engineering educators and students<br/>
                                • Community college science and engineering educators and students<br/>
                                • Researchers from academic institutes having limited facilities and/or research funding<br/>
                                <br/><br/>
                                SDNI will accept and review all Seed Grant applications.
                                <br/><br/>
                                For more information or to apply for the SDNI Commercial Seed Grant, click below:
                                <br/><br/>
                                <a href="https://docs.google.com/forms/d/1UrEailWvk1Bkt-9L1aXLZfBiUF2kgmCN12EQqfJbqVQ/viewform?ts=5d09081f&edit_requested=true"><button className="programs-button">SDNI Seed Grant - Commercial</button></a>
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

export default SeedGrants;