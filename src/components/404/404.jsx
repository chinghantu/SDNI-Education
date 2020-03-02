import React, { Component } from 'react';

class Error404 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container container404">
                <h1 className="errMsg404">404 - THE PAGE CAN'T BE FOUND</h1>
                <h5 className="link404"><a href="/">Go Home</a></h5>
            </div>
        )
    }
}

export default Error404;