import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import sdniLogo from '../../assets/Image/sdniLogo.jpg'
import logo from '../../assets/Image/logo.png'

const allRoutes = ['/about', '/programs', '/events', '/news', '/donate', '/seed_grants', '/networking'];

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.path = props.path;
        this.state = {
            doRedirect: false,
            redirect: {
                pathname: '',
                redirectProps: {}
            }
        }
    }

    componentDidMount() {
        
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
                }/>
            )
        }
        return (
            <div>
                <nav className="menu">
                    <label id="toggle-menu">Menu <span className="drop-icon">▾</span></label>
                    <input type="checkbox" id="tm" />
                    <ul className="main-menu clearfix">
                        <div className="logos">
                            <a href="http://sdni.ucsd.edu/"><img src={sdniLogo} height="40" id="logo" /></a>
                            <a href="/"><img src={logo} height="40" id="logo" /></a>
                        </div>
                        <div className="tabs">
                            <li><a href="">About
                        <span className="drop-icon">▾</span>
                                <label title="Toggle Drop-down" className="drop-icon" >▾</label>
                            </a>
                                <input type="checkbox" id="sm1" />
                                <ul className="sub-menu">
                                    <li><a onClick={(e) => this.handleRedirect(e, '/about', 'introduction')} href="">What is CENTER</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/about', 'management')} href="">Management</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Programs
                        <span className="drop-icon">▾</span>
                                <label title="Toggle Drop-down" className="drop-icon" >▾</label>
                            </a>
                                <input type="checkbox" id="sm1" />
                                <ul className="sub-menu">
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'k12')} href="">K-12 Curriculum</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'cc')} href="">College Curriculum</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'ret')} href="">RET</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'reu')} href="">REU</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'ret-a')} href="">RET Alumni</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'reu-a')} href="">REU Alumni</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'nt2025')} href="">NanoTech 2025 Project</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', '2dt')} href="">2-Day Training</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'r-sem')} href="">Remote SEM</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'oi')} href="">Outreach Impact</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Events
                        <span className="drop-icon">▾</span>
                                <label title="Toggle Drop-down" className="drop-icon" >▾</label>
                            </a>
                                <input type="checkbox" id="sm1" />
                                <ul className="sub-menu">
                                    <li><a onClick={(e) => this.handleRedirect(e, '/events', 'ca')} href="">California</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/events', 'us')} href="">USA</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/events', 'global')} href="">International</a></li>
                                </ul>
                            </li>
                            <li><a href="#">News
                        <span className="drop-icon">▾</span>
                                <label title="Toggle Drop-down" className="drop-icon" >▾</label>
                            </a>
                                <input type="checkbox" id="sm1" />
                                <ul className="sub-menu">
                                    <li><a onClick={(e) => this.handleRedirect(e, '/news', 'ca')} href="">California</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/news', 'us')} href="">USA</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/news', 'global')} href="">International</a></li>
                                </ul>
                            </li>
                            <li><a onClick={(e) => this.handleRedirect(e, '/donate', '')} href="">Donate</a></li>
                            <li><a onClick={(e) => this.handleRedirect(e, '/seed_grants', '')} href="">Seed Grants</a></li>
                            <li><a onClick={(e) => this.handleRedirect(e, '/networking', '')} href="">Networking</a></li>
                            <li><a href="#">Get Involved
                        <span className="drop-icon">▾</span>
                                <label title="Toggle Drop-down" className="drop-icon" >▾</label>
                            </a>
                                <input type="checkbox" id="sm1" />
                                <ul className="sub-menu">
                                    <li><a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSdFkcfMdw7jGtqX0GvhnyyZIizD4-m7Dt9v9iby7xYzMYPYTw/viewform?usp=sf_link">Bring
                            Nano Vision to your School!</a></li>
                                    <li><a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfY93n9hm3R0X8OFkyEx_Cjk4PXhR3HcuAK2MxO76Hn8RLlHQ/viewform?usp=sf_link">California
                            NanoTech 2025 Project</a></li>
                                </ul>
                            </li>
                            <li><a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSe-ir9pHppIFmwUNMSIHg2_nOEOm4GCw2QCOSsKYt_YbblvbA/viewform?usp=sf_link">Contact
                        Us</a></li>
                        </div>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default NavBar;