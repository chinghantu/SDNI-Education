import React, { Component } from 'react';
import _ from 'underscore'
import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

import CalPink from '../../assets/Image/CaliforniaPink.png'
import USA from '../../assets/Image/USA.png'
import InternationalPink from '../../assets/Image/InternationalPink.png'

const CAL_EVENTS = [
    {
        year: 2020,
        date: 'Sept 12 - 13',
        name: 'SDNI-NNCI Educational Symposium',
        place: 'Online',
        link: 'https://www.eventbrite.com/e/sdni-nnci-educational-symposium-2020-tickets-115864430631'
    },
    {
        year: 2020,
        date: 'Sept 27 - 30',
        name: 'IEEE-NEMS 2020 (15th IEEE international Conference on Nano/Micro Engineered and Molecular Systems) ',
        place: 'San Diego, CA',
        link: 'https://ieee-nems.org/2020/'
    },
]

const US_EVENTS = [
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
    },
    {
        year: 2020,
        date: 'Aug 17 - 18',
        name: '9th Global Nanotechnology Congress and Expo',
        place: 'Miami, USA',
        link: 'https://www.scientificfederation.com/nanotech-2020/'
    },
    {
        year: 2020,
        date: 'Aug 19 - 20',
        name: 'Global Meeting on Nanotechnology Nanotechnology 2020',
        place: 'Massachusetts, US',
        link: 'https://mecglobalevents.com/conferences/nanotechnology/'
    },
    {
        year: 2020,
        date: 'Oct 05 - 06',
        name: 'World Nanotech Summit 2020',
        place: 'Texas, USA',
        link: 'https://wns2020.org'
    },
    {
        year: 2020,
        date: 'Oct 29 - 31',
        name: '2nd Edition of World Nanotechnology Conference',
        place: 'Orlando, USA',
        link: 'https://worldnanotechnologyconference.com'
    }
]

const GLOBAL_EVENTS = [
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
        date: "May 07 - 09",
        name: "International Conference on Mining, Material & Metallurgical Engineering",
        place: "Milan, Italy",
        link: "http://worldmaterialsconference.com/2020/"
    },
    {
        year: 2020,
        date: "May 08 - 09",
        name: "3rd Word Congress on Nanomaterials",
        place: "Prague, Czech Republic",
        link: "https://nanomaterials.alliedacademies.com"
    },
    {
        year: 2020,
        date: "May 11 - 12",
        name: "14th Edition of International Conference on Nanomedicine and Advanced Drug Delivery",
        place: "Vienna, Austria",
        link: "https://nano-drugdelivery.euroscicon.com"
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
        date: "Jun 03 - 05",
        name: "8th International Symposium on Sensor Science",
        place: "Dresden, Germany",
        link: "https://sciforum.net/conference/I3S2020Dresden"
    },
    {
        year: 2020,
        date: "Jun 09 - 10",
        name: "23rd World Nanotechnology Congress",
        place: "Istanbul, Turkey",
        link: "https://nanotechnologycongress.conferenceseries.com"
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
        date: "Jun 22 - 23",
        name: "15th International Congress on Laser Advanced Materials Processing",
        place: "Osaka, Japan",
        link: "https://www.meetingsint.com/conferences/materialsprocessing"
    },
    {
        year: 2020,
        date: "Jul 30 - 31",
        name: "3rd Global meeting on Nanotechnology and Advanced Materials",
        place: "Paris, France",
        link: "https://larixconferences.com/nanotechnology/"
    },
    {
        year: 2020,
        date: "Jul 31 - Aug 01",
        name: "International Conference on Nanomedicine & Nanotechnology",
        place: "Dublin, Ireland",
        link: "https://nanomedicine-nanotechnology.pulsusconference.com"
    },
    {
        year: 2020,
        date: "Aug 24 - 25",
        name: "15th World Congress on Nanophotonics and Electronics",
        place: "Zurich, Switzerland",
        link: "https://www.meetingsint.com/conferences/nanophotonics"
    },
    {
        year: 2020,
        date: "Sep 29 - Oct 01",
        name: "ImagineNano 2020",
        place: "Bilbao, Spain",
        link: "http://www.imaginenano.com/2020/index.php"
    },
    {
        year: 2020,
        date: "Oct 16 - 18",
        name: " NANOCON 2019 -- 11th International Conference on Nanomaterials - Research & Application",
        place: "Brno, Czech Republic",
        link: "https://www.nanocon.eu"
    },
    {
        year: 2020,
        date: "Oct 19 - 22",
        name: "Graphene2020 ",
        place: "Grenoble, France",
        link: "http://www.grapheneconf.com/2020/index.php"
    },
    {
        year: 2020,
        date: "Nov 25 - 27",
        name: "Nano Singapore 2020 Intl. Conference & Exhibition",
        place: "Suntec, Singapore",
        link: "https://www.setcor.org/conferences/Nano-Singapore"
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
            data: [],
            image: CalPink
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
        let data = CAL_EVENTS;
        let image= CalPink;
        switch(param) {
            case 'ca':
                data = CAL_EVENTS;
                image = CalPink;
                break;
            case 'us':
                data = US_EVENTS;
                image = USA;
                break;
            case 'global':
                data = GLOBAL_EVENTS;
                image = InternationalPink;
                break;
        }
        this.setState({
            title: param,
            data: data,
            image: image
        });
    }

    render() {
        const { title, data, image } = this.state;
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
                            <img className="img-fluid mx-auto d-block event-image" src={image} alt="Image"/>
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