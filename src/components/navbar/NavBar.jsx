import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import history from '../../history'
import sdniLogo from '../../assets/Image/sdniLogo.jpg'
import logo from '../../assets/Image/logo.png'

const allRoutes = ['/about', '/programs', '/events', '/news', '/donate', '/outreach', '/networking'];

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
        console.log(path, this.path)
        e.preventDefault()
        if (!allRoutes.includes(path)) {
            console.log('Invalid route');
            return;
        }
        if (path == this.path) {
            let { handler } = this.props;
            if (handler) { handler(param); }
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
            history.push(this.state.redirect.pathname);
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
            <div>
                <nav className="menu">
                    <input type="checkbox" id="tm" />
                    <ul className="main-menu clearfix">
                        <div className="logos">
                            <a href="http://sdni.ucsd.edu/"><img src={sdniLogo} height="40" id="logo" /></a>
                            <a href="/"><img src={logo} height="40" id="logo" /></a>
                        </div>
                        <div id='toggle-menu' className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/about">About</a>
                                <a className="dropdown-item" href="/programs">Programs</a>
                                <a className="dropdown-item" href="/events">Events</a>
                                <a className="dropdown-item" href="/news">News</a>
                                <a className="dropdown-item" href="/donate">Donate</a>
                                <a className="dropdown-item" href="/outreach">Outreach</a>
                                <a className="dropdown-item" href="/networking">Networking</a>
                                <a className="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSdFkcfMdw7jGtqX0GvhnyyZIizD4-m7Dt9v9iby7xYzMYPYTw/viewform?usp=sf_link">Get Involved</a>
                                <a className="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSe-ir9pHppIFmwUNMSIHg2_nOEOm4GCw2QCOSsKYt_YbblvbA/viewform?usp=sf_link">Contact Us</a>
                            </div>
                        </div>
                        <div className="tabs">
                            <li><a onClick={(e) => { e.preventDefault() }} href="">About
                        <span className="drop-icon">▾</span>
                                <label title="Toggle Drop-down" className="drop-icon" >▾</label>
                            </a>
                                <input type="checkbox" id="sm1" />
                                <ul className="sub-menu">
                                    <li><a onClick={(e) => this.handleRedirect(e, '/about', 'introduction')} href="">What is CENTER</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/about', 'management')} href="">Management</a></li>
                                </ul>
                            </li>
                            <li><a onClick={(e) => { e.preventDefault() }} href="#">Programs
                        <span className="drop-icon">▾</span>
                                <label title="Toggle Drop-down" className="drop-icon" >▾</label>
                            </a>
                                <input type="checkbox" id="sm1" />
                                <ul className="sub-menu">
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'k12')} href="">K-12 Curriculum</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'cc')} href="">College Curriculum</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'ret')} href="">RET</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'reu')} href="">REU</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'si')} href="">Summer Institute</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'ret-a')} href="">RET Alumni</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'reu-a')} href="">REU Alumni</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'nt2025')} href="">NanoTech 2025 Project</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', '2dt')} href="">Free Half-Day Workshops</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'r-sem')} href="">Remote SEM</a></li>
                                    <li><a onClick={(e) => this.handleRedirect(e, '/programs', 'sg')} href="">Seed Grants</a></li>
                                </ul>
                            </li>
                            <li><a onClick={(e) => { e.preventDefault() }} href="#">Events
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
                            <li><a onClick={(e) => { e.preventDefault() }} href="#">News
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
                            <li><a onClick={(e) => { e.preventDefault() }} href="#">Outreach
                        <span className="drop-icon">▾</span>
                                <label title="Toggle Drop-down" className="drop-icon" >▾</label>
                            </a>
                                <input type="checkbox" id="sm1" />
                                <ul className="sub-menu">
                                    <li><a onClick={(e) => this.handleRedirect(e, '/outreach', 'otr-2019')} href="">Outreach 2019 - 2021</a></li>
                                    {/* <li><a onClick={(e) => this.handleRedirect(e, '/outreach', 'otr-2020')} href="">Outreach 2020</a></li> */}
                                    <li><a onClick={(e) => this.handleRedirect(e, '/outreach', 'sem')} href="">SEM Image Gallery</a></li>
                                </ul>
                            </li>
                            <li><a onClick={(e) => this.handleRedirect(e, '/networking', '')} href="">Networking</a></li>
                            <li><a onClick={(e) => { e.preventDefault() }} href="#">Get Involved
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