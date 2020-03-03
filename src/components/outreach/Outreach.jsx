import React, { Component } from 'react';

import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

class Outreach extends Component {
    constructor(props) {
        super(props);
        this.path = '/outreach';
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
                            <p className="description"><b>THIS SECTION IS UNDER CONSTRUCTION.</b></p>

                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Outreach;