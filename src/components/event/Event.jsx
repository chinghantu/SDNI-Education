import React, { Component } from 'react';
import _ from 'underscore'
import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

import CalPink from '../../assets/Image/CaliforniaPink.png'

const CAL_EVENTS = [
    {
        year: 2019,
        date: 'Sept 18 - 19',
        name: 'Advanced & Nanomaterials Conference',
        place: 'San Diego, CA',
        link: 'https://www.meetingsint.com/nanotechnology-conferences/nanomaterials'
    },
    {
        year: 2019,
        date: 'Nov 14 - 15',
        name: 'Annual Conference on Nanotechnology and Advanced Materials',
        place: 'San Francisco, CA',
        link: 'https://biomat.net/site2/events/annual-conference-on-nanotechnology-and-advanced-materials-2/'
    },
    {
        year: 2019,
        date: 'Nov 20 - 21',
        name: 'IDTechEx Graphene & 2D Materials 2019',
        place: 'Santa Clara, CA',
        link: 'https://www.idtechex.com/graphene-2d-materials-usa/show/en/'
    },
    {
        year: 2019,
        date: 'Dec 20 - 21',
        name: 'International Conference on Nanoscience, Nanotechnology and Advanced Materials (IC2NM)',
        place: 'San Diego, CA',
        link: 'http://www.academicsworld.org/Conference2019/USA/18/IC2NM/'
    }
]

const US_EVENTS = [
    {
        year: 2019,
        date: 'Sept 23',
        name: 'International Technology and Nanoscience Conference',
        place: 'Chicago, IL',
        link: 'https://www.evensi.us/international-nanotechnology-nanoscience-conference-chicago/283561197'
    },
    {
        year: 2019,
        date: 'Oct 8 - 9',
        name: 'Nanomanufacturing Conference',
        place: 'Greensboro, NC',
        link: 'https://10times.com/nano-manufacturing-conference'
    },
    {
        year: 2019,
        date: 'Oct 14 - 16',
        name: 'Nanoimprint and Nanoprint Technologies',
        place: 'Boston, MA',
        link: 'https://nnt2019.org/'
    },
    {
        year: 2019,
        date: 'Oct 21 - 22',
        name: '691st International Conference on Nanoscience, Nanotechnology andAdvanced Materials',
        place: 'Washington, DC',
        link: 'http://www.academicsworld.org/Conference2019/USA/15/IC2NM/'
    },
    {
        year: 2019,
        date: 'Nov 3 - 7',
        name: 'International Symposium on Clusters and Nanomaterials',
        place: 'Richmond,VA',
        link: 'https://iscan.vcu.edu/'
    },
    {
        year: 2019,
        date: 'Nov 12 - 14',
        name: 'World Congress on Materials Science and Engineering',
        place: 'Las Vegas, NV',
        link: 'https://10times.com/wcmse'
    },
    {
        year: 2020,
        date: 'Apr 25 - 26',
        name: 'USA Science & Engineering Festival',
        place: 'Washington, DC',
        link: 'https://usasciencefestival.org/why-sponsor/'
    },
    {
        year: 2020,
        date: 'Jun 21 - 26',
        name: 'Gordon Research Conference- Nanoscale Science and Engineering for Agriculture and Food Systems',
        place: 'Manchester, NH',
        link: 'https://www.grc.org/nanoscale-science-and-engineering-for-agriculture-and-food-systems-conference/2020/'
    },
    {
        year: 2020,
        date: 'Jun 29',
        name: 'NanoTech Conference & Expo',
        place: 'Forest Heights, MD',
        link: 'https://10times.com/nanotech-expo'
    }
]

const GLOBAL_EVENTS = [
    {
        year: 2019,
        date: "Oct 27 - 30",
        name: "IEEE NMDC 2019 -- 14th IEEE Nanotechnology Materials and Devices Conference",
        place: "Stockholm, Sweden",
        link: "https://ieeenmdc.org/nmdc-2019/"
    },
    {
        year: 2019,
        date: "Oct 27 - 31",
        name: "ICQNM 2019 -- The Thirteenth International Conference on Quantum, Nano/Bio, and Micro Technologies",
        place: "Nice, France",
        link: "https://www.iaria.org/conferences2019/NetWare19.html"
    },
    {
        year: 2019,
        date: "Oct 30 - 31",
        name: "Graphene and 3D Printing Technology (Symposium)",
        place: "Tokyo, Japan",
        link: "https://www.lexisconferences.com/graphene"
    },
    {
        year: 2019,
        date: "Nov 18 - 19",
        name: "World Congress on Nanotechnology (Euro Nano-2019)",
        place: "Milan, Italy",
        link: "https://materialscience.gavinconferences.com"
    },
    {
        year: 2019,
        date: "Nov 20 - 21",
        name: "Nanomaterials 2019 -- 3rd International Conference on Advanced Nanotechnology and Nanomaterials",
        place: "Dobai, United Arab Emirates",
        link: "https://www.coalesceresearchgroup.com/conferences/nanomaterials/"
    },
    {
        year: 2019,
        date: "Dec 2 - 3",
        name: "Advanced Materials and Simulation",
        place: "Barcelona, Spain",
        link: "https://advancedmaterials.euroscicon.com"
    },
    {
        year: 2019,
        date: "Dec 9 - 10",
        name: "World Congress on Advanced Nano Research and Nano Tech Applications",
        place: "Bangkok, Thailand",
        link: "https://world.nanotechconferences.org/"
    },
    {
        year: 2019,
        date: "Dec 10 - 13",
        name: "Smart Nanomaterials 2019",
        place: "Paris, France",
        link: "https://statnano.com/event/2225"
    },
    {
        year: 2020,
        date: "Jan 29 - 30",
        name: "NANO tech 2020",
        place: "Tokyo, Japan",
        link: "https://www.nanotechexpo.jp/"
    },
    {
        year: 2020,
        date: "Feb 26 - 28",
        name: "Future Materials -- Materials Science and Nanotechnology Conference",
        place: "Lisbon, Portugal",
        link: "https://materialsconference.yuktan.com/"
    },
    {
        year: 2020,
        date: "Apr 27 - 29",
        name: " 9th Edition of Nanotechnology and Materials Science 2020",
        place: "Toronto, Canada",
        link: "http://nanotekcongress.com/2020/index.php"
    },
    {
        year: 2020,
        date: "May 11 - 12",
        name: " Nanotechnology Conference: A Disruptive Technology Shaping the Future with New Innovations",
        place: "Frankfurt, Germany",
        link: "https://nanotechnology.euroscicon.com/"
    },
    {
        year: 2020,
        date: "Jun 21 - 26",
        name: " Gordon Research Conference -- Mechanical Systems in the Quantum Regime",
        place: "Hong Kong, China",
        link: "https://www.grc.org/mechanical-systems-in-the-quantum-regime-conference/2020/"
    },
    {
        year: 2020,
        date: "Oct 16 - 18",
        name: " NANOCON 2019 -- 11th International Conference on Nanomaterials - Research & Application",
        place: "Brno, Czech Republic",
        link: "https://www.nanocon.eu"
    }
]

class Event extends Component {

    constructor(props) {
        super(props)
        this.path = '/events'
        let { state } = this.props.location;
        let title = null;
        if (state) {
            title = state.title
        }
        this.state = {
            title: title == null ? 'ca' : title,
            data: []
        }
    }

    componentDidMount() {
        // TODO: Update data through request
        this.setState({
            data: CAL_EVENTS
        })
        this.scrollToTop()
    }

    scrollToTop = (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    handleChangeTab = (param) => {
        let data = CAL_EVENTS;
        switch(param) {
            case 'ca':
                data = CAL_EVENTS;
                break;
            case 'us':
                data = US_EVENTS;
                break;
            case 'global':
                data = GLOBAL_EVENTS;
                break;
        }
        this.setState({
            title: param,
            data: data
        });
    }

    render() {
        const { title, data } = this.state;
        const renderData = _.groupBy(data, function(item) { 
            return item.year;
        });
        return (
            <div>
                <NavBar path={this.path} handler={this.handleChangeTab}/>
                <div className="container1">
                    <div className="row">
                        <div className="col-sm-3 submenu-tabs">
                            <button onClick={() => this.handleChangeTab('ca')} className={title == 'ca' ? "event-active-tab first-tab" : "event-tab first-tab"}><span>California Events </span></button>
                            <button onClick={() => this.handleChangeTab('us')} className={title == 'us' ? "event-active-tab mt-3" : "event-tab mt-3"}><span>USA Events</span></button>
                            <button onClick={() => this.handleChangeTab('global')} className={title == 'global' ? "event-active-tab mt-3" : "event-tab mt-3"}><span>International Events</span></button>
                        </div>
                        <div className="col-sm-6">
                            <div className="typing">
                                <h5><br/><br/><br/><br/><br/><br/>Join in Nanotechnology...</h5>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <img className="img-fluid mx-auto d-block event-image" src={CalPink} alt="Image"/>
                        </div>
                    </div>
                
                    {
                        Object.keys(renderData).map((year, i) => {
                            const currentYear = renderData[year];
                            return (
                                <div key={i}>
                                    <h4 className="mt-5 mb-5">{year}</h4>
                                    <table className="mb-5">
                                        <thead>
                                            <tr>
                                                <th width="15%">Date</th>
                                                <th width="30%">Name</th>
                                                <th width="30%">Place</th>
                                                <th width="15%">Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                currentYear.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{item.date}</td>
                                                            <td>
                                                                {item.name}
                                                            </td>
                                                            <td>{item.place}</td>
                                                            <td>  
                                                                <a href={item.link}>
                                                                    <button className="button5">Join Event</button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>

                                    </table>
                                </div>
                            )
                        })
                    }
                
                    <a onClick={(e) => this.scrollToTop(e)} href="" className="text-center"><p><span className="event-back-to-top">Back to Top</span><br/><br/><br/></p></a>
                </div> 
                <Footer/>
            </div>
        );
    }
}

export default Event