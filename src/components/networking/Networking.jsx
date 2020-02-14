import React, { Component } from 'react';

import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

class Networking extends Component {
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
                            <p className="title"><b>Networking</b></p>
                            <p>
                                <b className="subtitle">NNCI</b>
                                <br /><br />
                                SDNI is one of the 16 centers of the National Nanotechnology Coordinated Infrastructure (NNCI) supported by the National Science Foundation. The centers all have interesting educational components, and we invite you to visit the sites.
                                <br /><br />
                                Here are the links to the 15 other sites:
                                <br /><br />
                            </p>
                            <table>
                                <tr>
                                    <td width="100%" className="text"><a href="https://www.nnci.net/sites/cns">Center for Nanoscale Systems (CNS)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/cnf">Cornell Nanoscale Science and Technology Facility (CNF)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/view-all">Kentucky Multi-Scale Manufacturing and Nano Integration Node (KY MMNIN)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/manth">Mid-Atlantic Nanotechnology Hub (MANTH)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/minic">Mid-West Nanotechnology Infrastructure Corridor (MINIC) </a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/mont">Montana Nanotechnology Facility (MONT)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/nanostanford">Nano@Stanford</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/nci-sw">Nanotechnology Collaborative Infrastructure Southwest (NCI-SW)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/nnf">Nebraska Nanoscale Facility (NNF)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/nni">Northwest Nanotechnology Infrastructure (NNI)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/rtnn">Research Triangle Nanotechnology Network (RTNN)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/shyne-resource">Soft and Hybrid Nanotechnology Experimental (SHyNE) Resource</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/senic">Southeastern Nanotechnology Infrastructure Corridor (SENIC)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href="https://www.nnci.net/sites/tnf">Texas Nanofabrication Facility (TNF)</a></td>
                                </tr>
                                <tr>
                                    <td className="text"><a href=" https://www.nnci.net/sites/nanoearth">Virginia Tech National Center for Earth and Environmental Nanotechnology Infrastructure (NanoEarth)</a></td>
                                </tr>
                            </table>
                            <p>
                                <br /><br />
                                <b className="subtitle">RAIN</b>
                                <br /><br />
                                SDNI is also a member of the Remotely Accessible Instruments for Nanotechnology (RAIN) network.
                                <br /><br />
                                As part of the network, we offer remote access to our Scanning Electron Microscope. Remote SEM sessions are an integrated into our Outreach program in California, but we are also open to the rest of the nation. We encourage you to visit the RAIN website where you can request remote access to other nanotechnology instruments through the network.
                                <br /><br />
                                RAIN is part of the Nano4Me.org website driven by the NACK (Nanotechnology Applications and Career Network) Network.
                                <br /><br />
                                Here is the link for <a href="https://www.nano4me.org">NACK and Nano4Me.org</a><br />
                                Here is the link for <a href="http://nano4me.org/remoteaccess">RAIN</a>
                                <br /><br />
                                <b className="subtitle">MNTeSIG</b>
                                <br /><br />
                                SDNI is also involved with the Micro Nano Technology Education Special Interest Group (MNTeSIG).
                                <br /><br />
                                Here is the link for <a href="https://www.mntesig.net/">MNTeSIG</a>

                                <br /><br /><br /><br /><br />
                            </p>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Networking;