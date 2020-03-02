import React, { Component } from 'react';

import logoFooter from '../../assets/Image/logoFooter.png';

class Footer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <img src={logoFooter} className="maxWidth" alt="footer" />
            </div>
        );
    }
}

export default Footer;