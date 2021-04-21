import React, { Component } from 'react';
import _ from 'underscore'
import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

import CalPink from '../../assets/Image/CaliforniaPink.png'
import USA from '../../assets/Image/USA.png'
import InternationalPink from '../../assets/Image/InternationalPink.png'

const CAL_EVENTS = [
    {
        year: 2021,
        date: "May 5 - 9",
        name: "International Conference on Nano science and Nanotechnology ( IC2N )",
        place: "San Jose, CA",
        link: "http://conferencefora.org/Conference/22384/IC2N/"
    },
    {
        year: 2021,
        date: "Jun 6 - 7",
        name: "International Conference on Agricultural Nanotechnology and Nanomaterials",
        place: "San Francisco, CA",
        link: "https://waset.org/agricultural-nanotechnology-and-nanomaterials-conference-in-june-2021-in-san-franciscoo"
    },
    {
        year: 2021,
        date: "Jun 14 - 16",
        name: "Nanotech Conference & Expo 2021",
        place: "Anaheim, CA",
        link: "https://www.neventum.com/tradeshows/nanotech-conference-expo"
    },
    {
        year: 2021,
        date: "Jun 20 - 21",
        name: "1072nd International Conference on Nanoscience, Nanotechnology and Advanced Materials",
        place: "San Diego, CA",
        link: "http://www.academicsworld.org/Conference2021/USA/7/IC2NM/"
    },
    {
        year: 2021,
        date: "Aug 1 - 5",
        name: "Optics + Photonics Technical Conferences",
        place: "San Diego, CA",
        link: "https://www.spie.org/conferences-and-exhibitions/optics-and-photonics/conferences?_ga=2.55502127.526027231.1602037106-946339812.1601880680&SSO=1"
    },
    {
        year: 2021,
        date: "Sep 27 - 28",
        name: "International Conference on Applications of Smart Nanomaterials",
        place: "San Francisco, CA",
        link: "https://waset.org/applications-of-smart-nanomaterials-conference-in-september-2021-in-san-francisco"
    },
    {
        year: 2021,
        date: "Oct 28 - 29",
        name: "International Conference on Nanotechnology, Optoelectronics and Photonics",
        place: "Los Angeles, CA",
        link: "https://waset.org/nanotechnology-optoelectronics-and-photonics-conference-in-october-2021-in-los-angeles"
    },
    {
        year: 2021,
        date: "Oct 28 - 29",
        name: "International Conference on Nanomedicine and Drug Delivery",
        place: "Los Angeles, CA",
        link: "https://waset.org/nanomedicine-and-drug-delivery-conference-in-october-2021-in-los-angeles"
    },
    {
        year: 2021,
        date: "Nov 1 - 2",
        name: "International Conference on Nanoscopic Fibers and Technology",
        place: "San Francisco, CA",
        link: "https://waset.org/nanoscopic-fibers-and-technology-conference-in-november-2021-in-san-francisco"
    },
        
]

const US_EVENTS = [
    {
        year: 2021,
        date: "Apr 19 - 21",
        name: "2nd Edition of World Nanotechnology Conference",
        place: "Virtual",
        link: "https://worldnanotechnologyconference.com/"
    },
    {
        year: 2021,
        date: "Apr 21 - 22",
        name: "1034th International Conference on Nanoscience, Nanotechnology and Advanced Materials (IC2NM)",
        place: "Washington DC",
        link: "http://www.academicsworld.org/Conference2021/USA/6/IC2NM/"
    },
    {
        year: 2021,
        date: "Apr 21 - 23",
        name: "AMO Virtual Workshop Series on Semiconductor R&D: Workshop 2 - Ultra Precision Control for Ultra Efficient Devices",
        place: "Virtual",
        link: "https://ww2.eventrebels.com/er/Registration/StepRegInfo.jsp?ActivityID=36249&StepNumber=1&v=YWQ2ZWU4MDktOGY5NS00NzY1LWE3Y2MtOWYyMTZlYTAxYTQ2"
    },
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Biomaterials, Microstructure and Macrostructure",
        place: "Boston, MA",
        link: "https://waset.org/biomaterials-microstructure-and-macrostructure-conference-in-april-2021-in-boston"
    },
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Materials and Electrolytic Extraction",
        place: "Boston, MA",
        link: "https://waset.org/materials-and-electrolytic-extraction-conference-in-april-2021-in-boston"
    },
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Nanotechnology Textiles and Applications",
        place: "Boston, MA",
        link: "https://waset.org/nanotechnology-textiles-and-applications-conference-in-april-2021-in-boston"
    },
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Chemical and Food Engineering",
        place: "New York, NY",
        link: "https://waset.org/chemical-and-food-engineering-conference-in-april-2021-in-new-york"
    },
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Materials Design",
        place: "New York, NY",
        link: "https://waset.org/materials-design-conference-in-april-2021-in-new-york"
    },
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Nanomaterials and Atomic Structure",
        place: "New York, NY",
        link: "https://waset.org/nanomaterials-and-atomic-structure-conference-in-april-2021-in-new-york"
    },
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Applications of Nanotechnology in Food Science and Technology",
        place: "New York, NY",
        link: "https://waset.org/applications-of-nanotechnology-in-food-science-and-technology-conference-in-april-2021-in-new-york"
    },
    {
        year: 2021,
        date: "May 21 -22",
        name: "International Conference on Nano science and Nanotechnology (IC2N-2021)",
        place: "Oklahoma City, OK",
        link: "http://conferencefora.org/Conference/22891/IC2N/"
    },
    {
        year: 2021,
        date: "Jun 07",
        name: "International Conference on Nanotechnology and Smart Materials, Design Artificial Intelligence, Manufacturing and Engineering (ICNSMDAIME-21)",
        place: "Chicago, IL",
        link: "https://internationalconferencealerts.com/eventdetails.php?id=1329179"
    },
    {
        year: 2021,
        date: "Jun 23",
        name: "International Conference on Nanotechnology and Smart Materials, Design Artificial Intelligence, Manufacturing and Engineering (ICNSMDAIME-21)",
        place: "Washington DC",
        link: "https://internationalconferencealerts.com/eventdetails.php?id=1329670"
    },
    {
        year: 2021,
        date: "Jun 23 - 24",
        name: "1075th International Conference on Nanoscience, Nanotechnology and Advanced Materials",
        place: "Miami, FL",
        link: "http://www.academicsworld.org/Conference2021/USA/8/IC2NM/"
    },
    {
        year: 2021,
        date: "Jul 15 - 16",
        name: "World Conference on Materials Science, Nanotechnology and Nanomaterials",
        place: "Chicago, IL",
        link: "https://10times.com/wcmsnn"
    },
    {
        year: 2021,
        date: "Jul 28 - 29",
        name: "KY NANO + Additive Manufacturing Symposium 2021",
        place: "Louisville, KY",
        link: "http://www.kymultiscale.net/new-events/3d4j8ja2w69p4dbkxz9nmn6hew2ps2"
    },
    {
        year: 2021,
        date: "Aug 16 - 17",
        name: "International Conference on Nanoscience, Nanotechnology & Advanced Material",
        place: "Boston, MA",
        link: "https://10times.com/ic-naminternational"
    },
    {
        year: 2021,
        date: "Sep 07",
        name: "Nano Tech Summit 2021 (Future Tech Week)",
        place: "New York, NY",
        link: "https://www.eventbrite.com/e/nano-tech-summit-2021-future-tech-week-tickets-137497140649"
    },
    {
        year: 2021,
        date: "Oct 07 - 08",
        name: "International Conference on Nanotechnology and Materials Engineering",
        place: "New York, NY",
        link: "https://waset.org/nanotechnology-and-materials-engineering-conference-in-october-2021-in-new-york"
    },
    {
        year: 2021,
        date: "Oct 13 - 14",
        name: "The Nanotechnology Show and The Advanced Materials Show USA",
        place: "Edison, NJ",
        link: "https://www.med-technews.com/events/the-nanotechnology-show-and-the-advanced-materials-show-usa/"
    },
    {
        year: 2021,
        date: "Oct 18 - 20",
        name: "7th NANO Boston Conference",
        place: "Boston, MA",
        link: "https://nanoworldconference.com/"
    },
    {
        year: 2021,
        date: "Oct 18 - 20",
        name: "NanoTech Conference & Expo",
        place: "Washington DC",
        link: "https://10times.com/nanotech-expo"
    },                      
]

const GLOBAL_EVENTS = [
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Biomaterials and Atomic Structure",
        place: "London, United Kingdom",
        link: "https://panel.waset.org/conference/2021/04/london/program"
    },
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Biomaterials and Magnetic Materials",
        place: "London, United Kingdom",
        link: "https://waset.org/biomaterials-and-magnetic-materials-conference-in-april-2021-in-london"
    },
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Nanoscience and Nanotechnology",
        place: "London, United Kingdom",
        link: "https://waset.org/nanoscience-and-nanotechnology-conference-in-april-2021-in-london"
    },
    {
        year: 2021,
        date: "Apr 22 - 23",
        name: "International Conference on Nanocomposites, Nanotubes and Nanowires",
        place: "London, United Kingdom",
        link: "https://waset.org/nanocomposites-nanotubes-and-nanowires-conference-in-april-2021-in-london"
    },
    {
        year: 2021,
        date: "Apr 23",
        name: "29th International Conference on Nanomedicine and Nanomaterials",
        place: "Virtual",
        link: "https://nanomaterials.nanotechconferences.org/"
    },
    {
        year: 2021,
        date: "Apr 26",
        name: "24th World Nanotechnology Congress",
        place: "Virtual",
        link: "https://nanotechnologycongress.conferenceseries.com/"
    },
    {
        year: 2021,
        date: "Apr 26 - 27",
        name: "17th International Conference and Exhibition on Nanomedicine and Pharmaceutical Nanotechnology",
        place: "Virtual",
        link: "https://nanotechnology.pharmaceuticalconferences.com/"
    },
    {
        year: 2021,
        date: "Apr 28 - 29",
        name: "33rd Nano Congress for Future Advancements",
        place: "Virtual",
        link: "https://nanocongress.nanotechconferences.org/"
    },
    {
        year: 2021,
        date: "Apr29 - 30",
        name: "International Conference on Nanotechnology and Polymetric Materials",
        place: "Jerusalem, Israel",
        link: "https://waset.org/nanotechnology-and-polymetric-materials-conference-in-april-2021-in-jerusalem"
    },
    {
        year: 2021,
        date: "May 03 - 04",
        name: "International Conference on Nanotechnology",
        place: "Rome, Italy",
        link: "https://waset.org/nanotechnology-conference-in-may-2021-in-rome"
    },   
    {
        year: 2021,
        date: "May 03 - 04",
        name: "International Conference on Nanotechnology and Biosensors",
        place: "Rome, Italy",
        link: "https://waset.org/nanotechnology-and-biosensors-conference-in-may-2021-in-rome"
    },
    {
        year: 2021,
        date: "May 06 - 07",
        name: "International Conference on Nanomaterials, Microstructure and Macrostructure",
        place: "Dubai, United Arab Emirates",
        link: "https://waset.org/nanomaterials-microstructure-and-macrostructure-conference-in-may-2021-in-dubai"
    },     
    {
        year: 2021,
        date: "May 12",
        name: "Quantum Dots: Material Innovations & Commercial Applications",
        place: "Virtual",
        link: "https://www.techblick.com/event-details/quantum-dot-material-innovations-commercial-applications"
    },
    {
        year: 2021,
        date: "May 17 - 18",
        name: "7th Edition of International Conference on Catalysis, Chemical Engineering and Technology ",
        place: "Tokyo, Japan",
        link: "https://catalysis-conferences.com/"
    },
    {
        year: 2021,
        date: "May 17 - 18",
        name: "International Conference on Composites and Nanoengineering",
        place: "Paris, France",
        link: "https://waset.org/composites-and-nanoengineering-conference-in-may-2021-in-paris"
    },
    {
        year: 2021,
        date: "May 17 - 18",
        name: "International Conference on Nanochemistry and Nanoengineering",
        place: "Sydney, Australia",
        link: "https://waset.org/nanochemistry-and-nanoengineering-conference-in-may-2021-in-sydney"
    },
    {
        year: 2021,
        date: "May 17 - 18",
        name: "International Conference on Nanotechnology and Nanomaterials for Energy Applications",
        place: "Sydney, Australia",
        link: "https://waset.org/nanotechnology-and-nanomaterials-for-energy-applications-1-conference-in-may-2021-in-sydney"
    },
    {
        year: 2021,
        date: "May 17 - 18",
        name: "International Conference on Nanotechnology, Optoelectronics and Photonics",
        place: "Sydney, Australia",
        link: "https://waset.org/nanotechnology-optoelectronics-and-photonics-conference-in-may-2021-in-sydney"
    },
    {
        year: 2021,
        date: "May 19 - 21",
        name: "The 10th Annual World Congress of Nano Science & Technology - 2021",
        place: "Osaka, Japan",
        link: "https://bitcongress.com/NanoBioX2020/"
    },
    {
        year: 2021,
        date: "May 20 - 21",
        name: "International Conference on Carbon Nanoscience and Nanotechnology",
        place: "Berlin, Germany",
        link: "https://waset.org/carbon-nanoscience-and-nanotechnology-conference-in-may-2021-in-berlin"
    },
    {
        year: 2021,
        date: "May 23 - 25",
        name: "5th International Conference of Theoretical and Applied Nanoscience and Nanotechnology (TANN’21)",
        place: "Virtual",
        link: "https://tannconference.com/"
    },
    {
        year: 2021,
        date: "May 24 - 25",
        name: "International Conference on Nanotechnology in Materials Sciences",
        place: "Barcelona, Spain",
        link: "https://waset.org/nanotechnology-in-materials-sciences-conference-in-may-2021-in-barcelona"
    },
    {
        year: 2021,
        date: "May 24 - 25",
        name: "International Conference on Nanotechnology and Low Temperature Physics",
        place: "Montreal, Canada",
        link: "https://waset.org/nanotechnology-and-low-temperature-physics-conference-in-may-2021-in-montreal"
    },
    {
        year: 2021,
        date: "May 24 - 25",
        name: "International Conference on Nanomaterials",
        place: "Montreal, Canada",
        link: "https://waset.org/nanomaterials-conference-in-may-2021-in-montreal"
    },
    {
        year: 2021,
        date: "May 24 - 25",
        name: "International Conference on Nanomaterials, Microstructure, Macrostructure and Atomic Structure",
        place: "Montreal, Canada",
        link: "https://waset.org/nanomaterials-microstructure-macrostructure-and-atomic-structure-conference-in-may-2021-in-montreal"
    },
    {
        year: 2021,
        date: "May 25 - 26",
        name: "25th World Congress on Nanomaterials and Nanotechnology",
        place: "Virtual",
        link: "https://nanomaterials.materialsconferences.com/"
    },
    {
        year: 2021,
        date: "Jun 10 - 11",
        name: "International Conference on Applied Nanotechnology and Nanoscience",
        place: "Copenhagen, Denmark",
        link: "https://waset.org/applied-nanotechnology-and-nanoscience-conference-in-june-2021-in-copenhagen"
    },
    {
        year: 2021,
        date: "Jun 10 - 11",
        name: "International Conference on Nanotechnology and Materials Sciences",
        place: "Copenhagen, Denmark",
        link: "https://waset.org/nanotechnology-and-materials-sciences-conference-in-june-2021-in-copenhagen"
    },
    {
        year: 2021,
        date: "Jun 10 - 11",
        name: "International Conference on Nanoscience, Nanoengineering and Applications",
        place: "Copenhagen, Denmark",
        link: "https://waset.org/nanoscience-nanoengineering-and-applications-conference-in-june-2021-in-copenhagen"
    },
    {
        year: 2021,
        date: "Jun 10 - 11",
        name: "International Conference on Nanotechnology and Advanced Materials",
        place: "Barcelona, Spain",
        link: "https://waset.org/nanotechnology-and-advanced-materials-1-conference-in-june-2021-in-barcelona"
    },
    {
        year: 2021,
        date: "Jun 10 - 11",
        name: "International Conference on Nanotechnology and Metallurgy",
        place: "Tokyo, Japan",
        link: "https://waset.org/nanotechnology-and-metallurgy-conference-in-june-2021-in-tokyo"
    },
    {
        year: 2021,
        date: "Jun 14 - 15",
        name: "International Conference on Advanced Nanomaterials Science, Engineering and Technology",
        place: "Montreal, Canada",
        link: "https://waset.org/advanced-nanomaterials-science-engineering-and-technology-conference-in-june-2021-in-montreal"
    },
    {
        year: 2021,
        date: "Jun 14 - 16",
        name: "6th World Congress on Recent Advances in Nanotechnology (RAN 2021)",
        place: "Virtual",
        link: "https://lisbon2021.rancongress.com/"
    },
    {
        year: 2021,
        date: "Jun 15 - 16",
        name: "International Conference on Theoretical and Applied Nanotechnology",
        place: "Toronto, Canada",
        link: "https://waset.org/theoretical-and-applied-nanotechnology-conference-in-june-2021-in-toronto"
    },
    {
        year: 2021,
        date: "Jun 21 - 22",
        name: "International Conference on Advanced Nanomaterials and Polymer Nanocomposites",
        place: "Vienna, Austria",
        link: "https://waset.org/advanced-nanomaterials-and-polymer-nanocomposites-conference-in-june-2021-in-vienna"
    },
    {
        year: 2021,
        date: "Jun 21 - 22",
        name: "International Conference on Nanotechnology and Nanomedicine",
        place: "Vienna, Austria",
        link: "https://waset.org/nanotechnology-and-nanomedicine-conference-in-june-2021-in-vienna"
    },
    {
        year: 2021,
        date: "Jun 21 - 22",
        name: "International Conference on Nanostructured Materials",
        place: "Venice, Italy",
        link: "https://waset.org/nanostructured-materials-conference-in-june-2021-in-venice"
    },
    {
        year: 2021,
        date: "Jun 21 - 22",
        name: "International Conference on Smart Materials and Nanotechnology",
        place: "Venice, Italy",
        link: "https://waset.org/smart-materials-and-nanotechnology-conference-in-june-2021-in-venice"
    },
    {
        year: 2021,
        date: "Jun 21 - 22",
        name: "International Conference on Smart Materials, Nanotechnology and Nanoscience",
        place: "Venice, Italy",
        link: "https://waset.org/smart-materials-nanotechnology-and-nanoscience-conference-in-june-2021-in-venice"
    },
    {
        year: 2021,
        date: "Jun 28 - 29",
        name: "International Conference on Nanostructured Materials and Applications",
        place: "Istanbul, Turkey",
        link: "https://waset.org/nanostructured-materials-and-applications-conference-in-june-2021-in-istanbul"
    },
    {
        year: 2021,
        date: "Jun 28 - 29",
        name: "International Conference on Nanostructured Materials and Engineering Applications",
        place: "Istanbul, Turkey",
        link: "https://waset.org/nanostructured-materials-and-engineering-applications-conference-in-june-2021-in-istanbul"
    },
    {
        year: 2021,
        date: "Jun 29 - 30",
        name: "International Conference on Advanced Materials and Nanotechnology",
        place: "Dubai, United Arab Emirates",
        link: "https://waset.org/advanced-materials-and-nanotechnology-1-conference-in-june-2021-in-dubai"
    },
    {
        year: 2021,
        date: "Jul 08 - 09",
        name: "International Conference on Nanoscience, Engineering and Technology",
        place: "Prague, Czechia",
        link: "https://waset.org/nanoscience-engineering-and-technology-conference-in-july-2021-in-prague"
    },
    {
        year: 2021,
        date: "Jul 08 - 09",
        name: "International Conference on Nanoscience, Nanotechnology and Advanced Materials",
        place: "Prague, Czechia",
        link: "https://waset.org/nanoscience-nanotechnology-and-advanced-materials-conference-in-july-2021-in-prague"
    },
    {
        year: 2021,
        date: "Jul 08 - 09",
        name: "International Conference on Nanostructures, Nanomaterials and Nanoengineering",
        place: "Prague, Czechia",
        link: "https://waset.org/nanostructures-nanomaterials-and-nanoengineering-conference-in-july-2021-in-prague"
    },
    {
        year: 2021,
        date: "Jul 12 - 13",
        name: "International Conference on Nanotechnology Innovations and Industrial Applications",
        place: "Ottawa, Canada",
        link: "https://waset.org/nanotechnology-innovations-and-industrial-applications-conference-in-july-2021-in-ottawa"
    },
    {
        year: 2021,
        date: "Jul 12 - 13",
        name: "International Conference on Nanomaterials Science and Engineering",
        place: "Ottawa, Canada",
        link: "https://waset.org/nanomaterials-science-and-engineering-conference-in-july-2021-in-ottawa"
    },
    {
        year: 2021,
        date: "Jul 19 - 20",
        name: "International Conference on Nano and Materials Science",
        place: "Paris, France",
        link: "https://waset.org/nano-and-materials-science-conference-in-july-2021-in-paris"
    },
    {
        year: 2021,
        date: "Jul 22 - 23",
        name: "International Conference on Chemical Engineering, Multidisciplinary and Nanomaterials",
        place: "Tokyo, Japan",
        link: "https://waset.org/chemical-engineering-multidisciplinary-and-nanomaterials-conference-in-july-2021-in-tokyo"
    },
    {
        year: 2021,
        date: "Jul 26 - 27",
        name: "18th Nanotechnology and Nanomedicine Congress",
        place: "Osaka, Japan",
        link: "https://nanomedicine.healthconferences.org/"
    },
    {
        year: 2021,
        date: "Jul 28 - 30",
        name: "The IEEE International Conference on Nanotechnology",
        place: "Montreal, Canada",
        link: "https://10times.com/ieeenano"
    },
    {
        year: 2021,
        date: "Jul 29 - 30",
        name: "International Conference on Biomedical Nanoscience and Nanotechnology",
        place: "Zurich, Switzerland",
        link: "https://waset.org/biomedical-nanoscience-and-nanotechnology-conference-in-july-2021-in-zurich"
    },
    {
        year: 2021,
        date: "Jul 29 - 30",
        name: "International Conference on Nanotechnology and Biotechnology",
        place: "Dubai, United Arab Emirates",
        link: "https://waset.org/nanotechnology-and-biotechnology-conference-in-july-2021-in-dubai"
    },
    {
        year: 2021,
        date: "Jul 29 - 30",
        name: "International Conference on Nanostructures and Condensed Matter Theory",
        place: "Dubai, United Arab Emirates",
        link: "https://waset.org/nanostructures-and-condensed-matter-theory-conference-in-july-2021-in-dubai"
    },
    {
        year: 2021,
        date: "Jul 29 - 30",
        name: "International Conference on Nanotechnology and Therapeutics",
        place: "Istanbul, Turkey",
        link: "https://waset.org/nanotechnology-and-therapeutics-conference-in-july-2021-in-istanbul"
    },
    {
        year: 2021,
        date: "Jul 29 - 30",
        name: "International Conference on Recent Advances in Polymer Nanocomposites",
        place: "Zurich, Switzerland",
        link: "https://waset.org/recent-advances-in-polymer-nanocomposites-conference-in-july-2021-in-zurich"
    },
    {
        year: 2021,
        date: "Aug 05 - 06",
        name: "International Conference on Nanostructured Materials for Engineering Applications",
        place: "Amsterdam, Netherlands",
        link: "https://waset.org/nanostructured-materials-for-engineering-applications-conference-in-august-2021-in-amsterdam"
    },
    {
        year: 2021,
        date: "Aug 05 - 06",
        name: "International Conference on Nanostructured Materials for Electronics and Photonics",
        place: "Amsterdam, Netherlands",
        link: "https://waset.org/nanostructured-materials-for-electronics-and-photonics-conference-in-august-2021-in-amsterdam"
    },
    {
        year: 2021,
        date: "Aug 05 - 06",
        name: "International Conference on Nanostructured Materials and Nanotechnology",
        place: "Amsterdam, Netherlands",
        link: "https://waset.org/nanostructured-materials-and-nanotechnology-conference-in-august-2021-in-amsterdam"
    },
    {
        year: 2021,
        date: "Aug 05 - 06",
        name: "International Conference on Nanostructured Materials and Nanotechnology Applications",
        place: "Amsterdam, Netherlands",
        link: "https://waset.org/nanostructured-materials-and-nanotechnology-applications-conference-in-august-2021-in-amsterdam"
    },            
    {
        year: 2021,
        date: "Aug 05 - 06",
        name: "International Conference on Nanostructured Materials, Nanoclusters, Nanocrystals and Nanocomposites",
        place: "Amsterdam, Netherlands",
        link: "https://waset.org/nanostructured-materials-nanoclusters-nanocrystals-and-nanocomposites-conference-in-august-2021-in-amsterdam"
    },
    {
        year: 2021,
        date: "Aug 05 - 06",
        name: "International Conference on Nanostructured Materials, Processing and Characterization",
        place: "Amsterdam, Netherlands",
        link: "https://waset.org/nanostructured-materials-processing-and-characterization-conference-in-august-2021-in-amsterdam"
    },
    {
        year: 2021,
        date: "Aug 05 - 06",
        name: "International Conference on Nanotechnology and Materials Science",
        place: "Amsterdam, Netherlands",
        link: "https://waset.org/nanotechnology-and-materials-science-conference-in-august-2021-in-amsterdam"
    },
    {
        year: 2021,
        date: "Aug 05 - 06",
        name: "International Conference on Nanostructured Materials and Technological Applications",
        place: "Amsterdam, Netherlands",
        link: "https://waset.org/nanostructured-materials-and-technological-applications-conference-in-august-2021-in-amsterdam"
    },
    {
        year: 2021,
        date: "Aug 05 - 06",
        name: "International Conference on Nanostructured Materials, Nanoclusters and Nanocrystals",
        place: "Montreal, Canada",
        link: "https://waset.org/nanostructured-materials-nanoclusters-and-nanocrystals-conference-in-august-2021-in-montreal"
    },
    {
        year: 2021,
        date: "Aug 16 - 17",
        name: "37th International Conference on Advanced Nanotechnology",
        place: "London, UK",
        link: "https://advancednano.nanotechconferences.org/"
    },
    {
        year: 2021,
        date: "Aug 16 - 17",
        name: "International Conference on Nanomaterials in Analytical Chemistry",
        place: "Dubai, United Arab Emirates",
        link: "https://waset.org/nanomaterials-in-analytical-chemistry-conference-in-august-2021-in-dubai"
    },
    {
        year: 2021,
        date: "Aug 16 - 17",
        name: "International Conference on Nanostructured Materials and Nanotechnologies",
        place: "Barcelona, Spain",
        link: "https://waset.org/nanostructured-materials-and-nanotechnologies-conference-in-august-2021-in-barcelona"
    },
    {
        year: 2021,
        date: "Aug 22 - 25",
        name: "15th International Conference on the Environmental Effects of Nanoparticles and Nanomaterials (ICEENN2020)",
        place: "Montréal, Québec, Canada",
        link: "https://www.iceenn2020.ca/"
    },
    {
        year: 2021,
        date: "Aug 23 - 24",
        name: "International Conference on MEMS, Nano and Smart Systems",
        place: "Budapest, Hungary",
        link: "https://waset.org/mems-nano-and-smart-systems-conference-in-august-2021-in-budapest"
    },
    {
        year: 2021,
        date: "Aug 23 - 24",
        name: "International Conference on Nano Science and Technology",
        place: "Budapest, Hungary",
        link: "https://waset.org/nano-science-and-technology-conference-in-august-2021-in-budapest"
    },
    {
        year: 2021,
        date: "Sep 09 - 10",
        name: "International Conference on Nanostructured Materials and Materials Engineering",
        place: "Singapore, Singapore",
        link: "https://waset.org/nanostructured-materials-and-materials-engineering-conference-in-september-2021-in-singapore"
    },        
    {
        year: 2021,
        date: "Sep 09 - 10",
        name: "International Conference on Nanostructured Materials and Nanostructures",
        place: "Tokyo, Japan",
        link: "https://waset.org/nanostructured-materials-and-nanostructures-conference-in-september-2021-in-tokyo"
    },
    {
        year: 2021,
        date: "Sep 16 - 17",
        name: "International Conference on Nanoengineering and Chemical Engineering",
        place: "Rome, Italy",
        link: "https://waset.org/nanoengineering-and-chemical-engineering-conference-in-september-2021-in-rome"
    },
    {
        year: 2021,
        date: "Sep 16 - 17",
        name: "International Conference on Nanostructured Materials for Technological Applications",
        place: "Amsterdam, Netherlands",
        link: "https://waset.org/nanostructured-materials-for-technological-applications-conference-in-september-2021-in-amsterdam"
    },
    {
        year: 2021,
        date: "Sep 20 - 21",
        name: "International Conference on Chemical Engineering, Multidisciplinary and Nanotechnology",
        place: "Lisbon, Portugal",
        link: "https://waset.org/chemical-engineering-multidisciplinary-and-nanotechnology-conference-in-september-2021-in-lisbon"
    },
    {
        year: 2021,
        date: "Sep 20 - 21",
        name: "International Conference on Nanostructured Materials and Nanosynthesis",
        place: "Lisbon, Portugal",
        link: "https://waset.org/nanostructured-materials-and-nanosynthesis-conference-in-september-2021-in-lisbon"
    },
    {
        year: 2021,
        date: "Oct 04 - 05",
        name: "International Conference on Smart Materials, Nanoscience and Nanotechnology",
        place: "Dubrovnik, Croatia",
        link: "https://waset.org/smart-materials-nanoscience-and-nanotechnology-conference-in-october-2021-in-dubrovnik"
    },
    {
        year: 2021,
        date: "Oct 06 - 07",
        name: "International Conference on Nanomaterials and Structures",
        place: "Beijing, China",
        link: "https://waset.org/nanomaterials-and-structures-conference-in-october-2021-in-beijing"
    },
    {
        year: 2021,
        date: "Oct 21 - 22",
        name: "International Conference on Microtechnology, Nanotechnology and Biotechnology",
        place: "London, United Kingdom",
        link: "https://waset.org/microtechnology-nanotechnology-and-biotechnology-conference-in-october-2021-in-london"
    },
    {
        year: 2021,
        date: "Oct 25 - 26",
        name: "32nd World Nano Conference",
        place: "Zurich, Switzerland",
        link: "https://nano.expertconferences.org/"
    },
    {
        year: 2021,
        date: "Oct 25 - 26",
        name: "International Conference on Polymer Science and Nanomaterials",
        place: "Barcelona, Spain",
        link: "https://waset.org/polymer-science-and-nanomaterials-conference-in-october-2021-in-barcelona"
    },
    {
        year: 2021,
        date: "Nov 11 - 12",
        name: "International Conference on Micro and Nano Technology",
        place: "Venice, Italy",
        link: "https://waset.org/micro-and-nano-technology-conference-in-november-2021-in-venice"
    },
    {
        year: 2021,
        date: "Nov 15 - 16",
        name: "International Conference on Nanomaterials Science, Engineering and Technology",
        place: "Jeddah, Saudi Arabia",
        link: "https://waset.org/nanomaterials-science-engineering-and-technology-conference-in-november-2021-in-jeddah"
    },            
    {
        year: 2021,
        date: "Dec 27 - 28",
        name: "International Conference on Nanomaterials for Analytical Chemistry",
        place: "Vienna, Austria",
        link: "https://waset.org/nanomaterials-for-analytical-chemistry-conference-in-december-2021-in-vienna"
    },
    {
        year: 2021,
        date: "Dec 27 - 28",
        name: "International Conference on Nanoengineered Composites and Applications",
        place: "Vienna, Austria",
        link: "https://waset.org/nanoengineered-composites-and-applications-conference-in-december-2021-in-vienna"
    },
 
                       
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