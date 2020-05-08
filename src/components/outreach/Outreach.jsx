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
import { Alert, Modal, Button, Image } from 'react-bootstrap'

function importAll(r) {
    return r.keys().map(r);
}
  
const ARACHNIDS = importAll(require.context('../../assets/Image/sem/Arachnids', false, /\.(png|jpe?g|svg)$/));

const BIRDS = importAll(require.context('../../assets/Image/sem/Birds', false, /\.(png|jpe?g|svg)$/));

const FUNGI = [
    importAll(require.context('../../assets/Image/sem/Fungi/Cytospora', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Fungi/Other Fungi', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Fungi/Penicillium On Orange', false, /\.(png|jpe?g|svg)$/))
]

const INSECTS = [
    importAll(require.context('../../assets/Image/sem/Insects/Ant', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Insects/Aphid', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Insects/Butterfly', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Insects/Flea', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Insects/Flour Beetle', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Insects/Fly Haltere', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Insects/Lice', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Insects/Mosquito Larva', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Insects/Moth', false, /\.(png|jpe?g|svg)$/))
]

const NANOPARTICLES = [
    importAll(require.context('../../assets/Image/sem/Nanoparticles/20190806_AuNanoParticles', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Nanoparticles/Nanoparticles (Silver)', false, /\.(png|jpe?g|svg)$/))
]

const OSAMPLES = [
    importAll(require.context('../../assets/Image/sem/Outreach Samples/Bee', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Outreach Samples/CCD', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Outreach Samples/CD', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Outreach Samples/Gecko', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Outreach Samples/Hair', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Outreach Samples/MEMS', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Outreach Samples/Shark', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Outreach Samples/Tungsten Wire', false, /\.(png|jpe?g|svg)$/))
]

const OTOLITH = importAll(require.context('../../assets/Image/sem/Otolith', false, /\.(png|jpe?g|svg)$/))

const PHYTOPLANKTON = [
    importAll(require.context('../../assets/Image/sem/Phytoplankton/Coccolith', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Phytoplankton/Diatoms', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Phytoplankton/Foraminifera_Coccoliths', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Phytoplankton/Hidden_Coccoliths', false, /\.(png|jpe?g|svg)$/))
    // importAll(require.context('../../assets/Image/sem/Phytoplankton/Radiolarians_Diatoms_Foraminifera', false, /\.(png|jpe?g|svg)$/))
]

const OCEANMIX = importAll(require.context('../../assets/Image/sem/Phytoplankton/Radiolarians_Diatoms_Foraminifera', false, /\.(png|jpe?g|svg)$/))

const POLLEN = importAll(require.context('../../assets/Image/sem/Pollen', false, /\.(png|jpe?g|svg)$/))

const ZOOPLANKTON = [
    importAll(require.context('../../assets/Image/sem/Zooplankton/Foram_Radiolaria', false, /\.(png|jpe?g|svg)$/)),
    importAll(require.context('../../assets/Image/sem/Zooplankton/SIO_Radiolarians_sediment', false, /\.(png|jpe?g|svg)$/))
]

const OTRLIST = [
    {
        "name": "John Spiegel",
        "school": "San Diego County Office of Education"
    },
    {
        "name": "Chelsea Cochrane",
        "school": "San Diego County Office of Education"
    },
    {
        "name": "Crystal Howe ",
        "school": "San Diego County Office of Education"
    },
    {
        "name": "Alec Baron ",
        "school": "Escondido Union High School District"
    },
    {
        "name": "Annika Goodin ",
        "school": "Grossmont Union High School District"
    },
    {
        "name": "Franz Ruiz ",
        "school": "Grossmont Union High School District"
    },
    {
        "name": "Jesus Leo ",
        "school": "Sweetwater Union High School District"
    },
    {
        "name": "Kellie Fleming ",
        "school": "Vista School District"
    },
    {
        "name": "David MacLeod ",
        "school": "Warner Unified School District"
    },
    {
        "name": "Cynthia Hoover ",
        "school": "Chaffey College"
    },
    {
        "name": "Angela Tsang ",
        "school": "Miramar College"
    },
    {
        "name": "Patricia Moore ",
        "school": "Miramar College"
    },
    {
        "name": "Sama Tamrakar ",
        "school": "Miramar College"
    },
    {
        "name": "Juan Gonzalez ",
        "school": "Southwestern College"
    },
    {
        "name": "Darci Kimball ",
        "school": "Castle Park High School"
    },
    {
        "name": "Rachel Meisner ",
        "school": "Castle Park High School"
    },
    {
        "name": "Angie Polmear ",
        "school": "Chula Vista High School"
    },
    {
        "name": "Leticia Tena ",
        "school": "Chula Vista High School"
    },
    {
        "name": "Roufieh Carmody ",
        "school": "Chula Vista High School"
    },
    {
        "name": "Catherine Spencer ",
        "school": "College Preparatory Middle School"
    },
    {
        "name": "Melizza Lozano ",
        "school": "East Lake High School"
    },
    {
        "name": "Lyn Smith ",
        "school": "El Cajon Valley High School"
    },
    {
        "name": "Patricia Stepanek ",
        "school": "Escondido High School"
    },
    {
        "name": "Brendan Casey ",
        "school": "Granite Hills High School"
    },
    {
        "name": "Jim Fisher ",
        "school": "Imperial College"
    },
    {
        "name": "Eileen Huffer-Ege ",
        "school": "Kearny High School"
    },
    {
        "name": "Lesli Horowitz ",
        "school": "Kearny High School"
    },
    {
        "name": "Shirley Miranda ",
        "school": "Kearny High School"
    },
    {
        "name": "Enrique Romero ",
        "school": "Montgomery High School"
    },
    {
        "name": "Alexandra Yerka ",
        "school": "Montgomery High School"
    },
    {
        "name": "Julio Avasan ",
        "school": "Olympian High School"
    },
    {
        "name": "Tony Claudio ",
        "school": "Olympian High School"
    },
    {
        "name": "Anne Artz ",
        "school": "Preuss School"
    },
    {
        "name": "Marcelo Kim ",
        "school": "Rancho Buena Vista High School"
    },
    {
        "name": "Nicole Kranzberg ",
        "school": "Sweetwater High School"
    },
    {
        "name": "Sharla Short ",
        "school": "Vista High School"
    },
    {
        "name": "Danielle Zurcher ",
        "school": "Warner Springs Middle School"
    }
]

const OTR2020 = (
    <div style={{ height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img className='img-fluid' src={Construction} alt=""/>
    </div>
)

const HTML_MAP = {
    'otr-2019': null,
    'otr-2020': OTR2020,
    'sem': null
}

const EXPAND_SCALER = 10

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
            renderHtml: null,
            showModal: false,
            accessDenied: false,
            showImageGallery: false,
            imageTitle: 'arachnids',
            imageGallery: ARACHNIDS,
            diverseTabs: [],
            currIndex: 0,
            renderOtrList: [],
            expandIndex: 1
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
            renderHtml: HTML_MAP[param],
            renderOtrList: param == 'otr-2019' ? OTRLIST.slice(0, this.state.expandIndex * EXPAND_SCALER) : []
        })
    }

    handleExpandOtrList = () => {
        this.setState(prevState => ({
            expandIndex: prevState.expandIndex + 1,
            renderOtrList: OTRLIST.slice(0, (prevState.expandIndex + 1) * EXPAND_SCALER)
        }))
    }

    handleShowModal = () => { this.setState({ showModal: true }) }

    handleHideModal = () => { this.setState({ showModal: false }) }

    handleDenyPolicies = () => { this.setState({ showModal: false, accessDenied: true }) }

    handleAllowPolicies = () => {
        this.setState({
            showModal: false,
            showImageGallery: true
        })
    }

    handleChangeImageTab = (param) => {
        let gallery, diverseTabs;
        switch(param) {
            case 'arachnids':
                gallery = ARACHNIDS
                break
            case 'otolith':
                gallery = OTOLITH
                break
            case 'birds':
                gallery = BIRDS
                break
            case 'fungi':
                gallery = FUNGI
                diverseTabs = ['Cytospora', 'Other Fungi', 'Penicillium On Orange']
                break
            case 'osamples':
                gallery = OSAMPLES
                diverseTabs = ['Bee', 'CCD', 'CD', 'Gecko', 'Hair', 'MEMS', 'Shark', 'Tungsten Wire']
                break
            case 'insects':
                gallery = INSECTS
                diverseTabs = ['Ant', 'Aphid', 'Butterfly', 'Flea', 'Flour Beetle', 'Fly Haltere', 'Lice', 'Mosquito Larva', 'Moth']
                break
            case 'nanoparticles':
                gallery = NANOPARTICLES
                diverseTabs = ['AuNanoParticles', 'NanoParticles (Silver)']
                break
            case 'phytoplankton':
                gallery = PHYTOPLANKTON
                diverseTabs = ['Coccolith', 'Diatoms', 'Foraminifera Coccoliths', 'Hidden Coccoliths']
                break  
            case 'pollen':
                gallery = POLLEN
                break
            case 'zooplankton':
                gallery = ZOOPLANKTON
                diverseTabs = ['Foram Radiolaria', 'SIO Radiolarians Sediment']
                break
            case 'ocean':
                gallery = OCEANMIX
                break
        }
        this.setState({
            imageTitle: param,
            imageGallery: gallery,
            diverseTabs: diverseTabs,
            currIndex: 0
        })
    }

    render() {
        let { title, renderHtml, showImageGallery, imageTitle, imageGallery, currIndex, diverseTabs, renderOtrList } = this.state
        if (title == 'sem') {
            let diverseGallery = Array.isArray(imageGallery[0])
            renderHtml = !showImageGallery ? (
                <div style={{ height: '50%', display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
                    {
                        !this.state.accessDenied ? (
                            <Button style={{ paddingLeft: 15, paddingRight: 15 }} variant="primary" onClick={this.handleShowModal}>
                                <span style={{ fontSize: 20 }}>Enter SEM Image Gallery</span>
                            </Button>
                        ) : null
                    }

                    <Modal show={this.state.showModal} onHide={this.handleHideModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>SEM Image Gallery Terms and Conditions</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>All images herein are the property of the Regents of UC San Diego. 
                            Permission to copy and use for non-commercial purpose without modification is granted to local 
                            schools and non-for-profit educational organizations. When using any of the images contained herein,
                            you agree to give credit as follows: <i>"Courtesy of UC San Diego Nano3 Facility"</i>. 
                            In order to acknowledge your understanding and agreement of the foregoing, 
                            please click on the "I Agree" button below.</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleDenyPolicies}>
                            I Do Not Agree
                        </Button>
                        <Button variant="primary" onClick={this.handleAllowPolicies}>
                            I Agree
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    {
                        this.state.accessDenied ? (
                            <Alert variant="danger" >
                                <Alert.Heading>Your access to the SEM Image Gallery is denied</Alert.Heading>
                                <p>
                                    You did not agree to the "SEM Image Gallery Terms and Conditions". To get access to the SEM Image Gallery, you have to agree the policies described in the popup window.
                                </p>
                            </Alert>
                        ) : null
                    }
                </div>
            ) : (
                <div>
                    <p className="title"><b>SEM Image Gallery</b></p>
                    <div className="row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <button className={imageTitle == 'arachnids' ? "sem-img-btn-active" : "sem-img-btn"} 
                                onClick={() => this.handleChangeImageTab('arachnids')}><span>Arachnids</span></button>
                        <button className={imageTitle == 'nanoparticles' ? "sem-img-btn-active" : "sem-img-btn"}
                                onClick={() => this.handleChangeImageTab('nanoparticles')}><span>Nanoparticles</span></button>
                        <button className={imageTitle == 'zooplankton' ? "sem-img-btn-active" : "sem-img-btn"}
                                onClick={() => this.handleChangeImageTab('zooplankton')}><span>Zooplankton</span></button>
                        <button className={imageTitle == 'pollen' ? "sem-img-btn-active" : "sem-img-btn"} 
                                onClick={() => this.handleChangeImageTab('pollen')}><span>Pollen</span></button>
                        <button className={imageTitle == 'fungi' ? "sem-img-btn-active" : "sem-img-btn"}
                                onClick={() => this.handleChangeImageTab('fungi')}><span>Fungi</span></button>
                        <button className={imageTitle == 'insects' ? "sem-img-btn-active" : "sem-img-btn"}
                                onClick={() => this.handleChangeImageTab('insects')}><span>Insects</span></button>
                        <button className={imageTitle == 'birds' ? "sem-img-btn-active" : "sem-img-btn"}
                                onClick={() => this.handleChangeImageTab('birds')}><span>Birds</span></button>
                        <button className={imageTitle == 'phytoplankton' ? "sem-img-btn-active" : "sem-img-btn"}
                                onClick={() => this.handleChangeImageTab('phytoplankton')}><span>Phytoplankton</span></button>
                        <button className={imageTitle == 'otolith' ? "sem-img-btn-active" : "sem-img-btn"}
                                onClick={() => this.handleChangeImageTab('otolith')}><span>Otolith</span></button>
                        <button className={imageTitle == 'osamples' ? "sem-img-btn-active" : "sem-img-btn"}
                                onClick={() => this.handleChangeImageTab('osamples')}><span>Potpourri</span></button>
                        <button className={imageTitle == 'ocean' ? "sem-img-btn-active" : "sem-img-btn"}
                                onClick={() => this.handleChangeImageTab('ocean')}><span>Ocean mix</span></button>                 
                    </div>
                    <hr/>
                    <div className='row'>
                        {
                            diverseGallery ? (
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {
                                        diverseTabs.map((tab, index) => (
                                            <button 
                                                key={index}
                                                className={currIndex == this.state.diverseTabs.indexOf(tab) ? "mb-5 mt-5 sem-img-btn-active" : "mb-5 mt-5 sem-img-btn"}
                                                onClick={() => {
                                                    this.setState({
                                                        currIndex: this.state.diverseTabs.indexOf(tab)
                                                    })
                                                }}><span>{tab}</span></button>
                                        ))
                                    }
                                </div>
                            ) : null
                        }
                        
                        {
                            diverseGallery ? imageGallery[currIndex].map((imgSrc, index) => (
                                <div className='col-4 mt-3 mb-3'>
                                    <Image key={index} src={imgSrc} fluid/>
                                </div>
                            )) : imageGallery.map((imgSrc, index) => (
                                <div className='col-4 mt-3 mb-3'>
                                    <Image key={index} src={imgSrc} fluid/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
        else if (title == 'otr-2019') {
            renderHtml = (
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
                    <table style={{ margin: 'auto', width: '100%' }}>
                        <thead>
                            <tr><td>Name</td><td>Institution</td></tr>
                        </thead>
                        <tbody>
                            {
                                renderOtrList.map((obj, index) => (
                                    <tr key={index}>
                                        <td>{obj.name}</td>
                                        <td>{obj.school}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button onClick={() => this.handleExpandOtrList()} 
                            type="button"
                            className="btn btn-primary"
                            style={{ marginTop: 20 }}>
                        Load More
                    </button>
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
        }
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