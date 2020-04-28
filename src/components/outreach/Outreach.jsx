import React, { Component } from 'react';

import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

import OutreachMap from '../../assets/Image/outreach/map.png'
import Construction from '../../assets/Image/construction.png'
import Img_1 from '../../assets/Image/outreach/image5.png'
import Img_2 from '../../assets/Image/outreach/image6.jpg'
import Img_3 from '../../assets/Image/outreach/image4.jpg'

import Img_4 from '../../assets/Image/outreach/image7.jpeg'
import Img_5 from '../../assets/Image/outreach/image9.jpeg'
import Img_6 from '../../assets/Image/outreach/image10.jpeg'

const OTR2019 = (
    <div>
        <p className="title"><b>Outreach 2019</b></p>
        
        <p>
            We would like to thank our teacher partners and their respective schools as well as district administrators 
            and the San Diego county office of education for meeting with us and participating in our outreach program during the year 2019. 
            The map below depicts our coverage throughout San Diego county.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img className="img-fluid" style={{ marginTop: 30, marginBottom: 30 }} src={OutreachMap} alt=""/>
        </div>
        <p>
            Teacher partners conducted interactive remote Scanning Electron Microscopy (SEM) sessions 
            during which their students could control our high-end Zeiss 500 SEM from their own classrooms. 
            Looking at nature and man-made structures under the SEM is a great way to introduce students to the micro and nano world. 
            Please have a look at our image collections by clicking on the following link: SDNI-NANO3 SEM Image Gallery.
        </p>
        <p className="title" style={{ color: 'gray' }}><b>Educational and Outreach Events -- Selected Pictures</b></p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <img className="img-fluid" style={{ marginTop: 30, marginBottom: 30, width: '100%' }} src={Img_1} alt=""/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ margin: 'auto' }} className="img-fluid col-6" src={Img_2} alt=""/>
                    <img style={{ margin: 'auto' }} className="img-fluid col-6" src={Img_3} alt=""/>
                </div>
                <p style={{ width: '100%', paddingLeft: '15px', paddingRight: '15px' }}>
                    Patrica Moore, a Biology teacher from Southwestern College (SWC) and SDNI RET from summer 2018 who learned about the operations
                    and applications of scanning Electron Microscopy at SDNI, is now performing a SEM session with her own SWC students during a visit of SDNI (April 2019)
                </p>
                <img className="img-fluid" style={{ marginTop: 30, marginBottom: 30, width: '100%' }} src={Img_4} alt=""/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ margin: 'auto' }} className="img-fluid col-6" src={Img_5} alt=""/>
                    <img style={{ margin: 'auto' }} className="img-fluid col-6" src={Img_6} alt=""/>
                </div>
            </div>
        </div>
    </div>
)

const OTR2020 = (
    <div style={{ height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img className='img-fluid' src={Construction} alt=""/>
    </div>
)

const SEM = (
    <div style={{ height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img className='img-fluid' src={Construction} alt=""/>
    </div>
)

const HTML_MAP = {
    'otr-2019': OTR2019,
    'otr-2020': OTR2020,
    'sem': SEM
}

class Outreach extends Component {

    constructor(props) {
        super(props)
        this.path = '/outreach'
        let { state } = this.props.location
        let title = null
        if (state) {
            title = state.title
        }
        this.state = {
            title: title == null ? 'otr-2019' : title,
            renderHtml: null
        }
    }

    componentDidMount() {
        this.handleChangeTab(this.state.title)
        this.scrollToTop()
    }

    scrollToTop = (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    handleChangeTab = (param) => {
        this.setState({
            title: param,
            renderHtml: HTML_MAP[param]
        })
    }

    render() {
        let { title, renderHtml } = this.state
        return (
            <div>
                <NavBar path={this.path} handler={this.handleChangeTab}/>
                <div className="container1">
                    <div className="row">
                        <div className="col-sm-3 sidebar">
                            <button onClick={() => this.handleChangeTab('otr-2019')} className={title == 'otr-2019' ? "button1" : "button"}><span>Outreach 2019</span></button>
                            <button onClick={() => this.handleChangeTab('otr-2020')} className={title == 'otr-2020' ? "button1" : "button"}><span>Outreach 2020</span></button>
                            <button onClick={() => this.handleChangeTab('sem')} className={title == 'sem' ? "button1" : "button"}><span>SEM Image Gallery</span></button>
                        </div>
                        <div className="col-sm-7 main-content">
                            { renderHtml }
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