import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

import RETAlumni from '../../assets/Image/RETAlumni.jpg';
import REUAlumni from '../../assets/Image/REUAlumni.jpg';
import REUAlumni_2021 from '../../assets/Image/REUAlumni_2021.jpg';

import Omninano from '../../assets/Image/omni-nano.jpeg';
import Construction from '../../assets/Image/construction.png'

const K12 = (
    <div>
        <p className="title"><b>K-12 Curriculum</b></p>
        <p>
            <span className="programs-span"><b>National NanoTechnology Coordinated Infrastructure {"(NNCI)"}</b></span><br />
            We encourage educators to visit the <a href="nano.gov"><span className="nano-gov">nano.gov</span></a> website for existing nationwide resources. A large amount of educational materials and links to nanotechnology networks are available at:
            <br /><br />
            <a href="https://www.nano.gov/education-training"><button className="programs-button">NNCI Educational Resources</button></a>
            <a href="https://www.nnci.net/resources-educators-k-16"><button className="programs-button">Resource for Educators (K-16)</button></a>
            <br /><br />
            <span className="programs-span"><b>Omni Nano</b></span><br />
            <img className="img-fluid" style={{ width: 150, height: 150 }} src={Omninano}></img><br />
            Omni Nano and SDNI are partnering for Nanotechnology curriculum development and educational outreach. We invite you to visit the <a href="https://omninano.org">Omni Nano Website</a>
            <br /><br />
            <span className="programs-span"><b>SDNI</b></span><br />
            The following section will build gradually over the years and contain curriculum and activities that are developed by SDNI or its school/college partners, or jointly with such school/college partners.
            <br /><br />
        </p>
        <table>
            <tbody>
                <tr>
                    <td width="75%" className="text">A Sprinkle of Nano with your Bio?</td>
                    <td with="25%">
                        <a href="https://drive.google.com/file/d/11mmt_kViVQWUBN96DtJR3VRlqR-z5HCT/view?usp=sharing">
                            <button className="programs-small-button">Learn More</button>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td width="75%" className="text">Colors: Wonderful Phenomena</td>
                    <td with="25%">
                        <a href="https://drive.google.com/file/d/1bzWZt4ClP-qsIlwu7CkdWhJuTJgfYEM5/view?ts=5edfc4c6">
                            <button className="programs-small-button">Learn More</button>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        <br /><br />
    </div>
)

const CC = (
    <div>
        <p className="title"><b>College Curriculum</b></p>
        <p>
            <span className="programs-span"><b>Please notice:</b></span><br />
            We encourage educators to visit the <a href="nano.gov"><span className="nano-gov">nano.gov</span></a> website for existing nationwide resources. A large amount of educational materials and links to nanotechnology networks are available at:
            <br /><br />
            <a href="https://www.nano.gov/education-training"><button className="programs-button">Nano Education Training</button></a>
            <a href="https://www.nnci.net/resources-educators-k-16"><button className="programs-button">Resource for Educators (K-16)</button></a>
            <br /><br />
            The following section will build gradually over the years and contain curriculum and activities that are developed by SDNI or its school/college partners, or jsgntly with such school/college partners.
        </p>
        <span className="programs-span"><b>Omni Nano</b></span><br />
        <img className="img-fluid" style={{ width: 150, height: 150 }} src={Omninano}></img><br />
        Omni Nano and SDNI are partnering for Nanotechnology curriculum development and educational outreach. We invite you to visit the <a href="https://omninano.org">Omni Nano Website</a>
        <br /><br />
        <span className="programs-span"><b>SDNI</b></span><br />
        The following section will build gradually over the years and contain curriculum and activities that are developed by SDNI or its school/college partners, or jointly with such school/college partners.
        <br /><br />
        <h4><br />Integrated Photonics Education Kit<br /><br /></h4>
        <a href="https://drive.google.com/file/d/0B-PWal97iJz6RmluUDVRM1J2b19sUDhKTVM0b2F6Vlc2b1V3/view?usp=sharing"><button className="programs-button">Learn More</button></a>
        <p></p>
        <table>
            <tbody>
                <tr>
                    <td width="75%" className="text">Assessing Water Quality - Is Nano Better</td>
                    <td with="25%">
                        <a href="https://drive.google.com/open?id=1nNyH2uSvtrCla0OAJ-8V_NdNnuC-NwrX">
                            <button className="programs-small-button">Learn More</button>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td width="75%" className="text">Effect of Silver Nanoparticles on Bacterial Growth</td>
                    <td with="25%">
                        <a href="https://drive.google.com/file/d/1XsiF6OkocY1d5077Vp-MTxlUSh7ff4Dn/view?usp=sharing">
                            <button className="programs-small-button">Learn More</button>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td width="75%" className="text">Flower Phenotype Diversity and Pollen Types</td>
                    <td with="25%">
                        <a href="https://drive.google.com/file/d/1_lzt3ErQ1KgPog4P0Nu4KfKnbHx9SP0g/view?usp=sharing">
                            <button className="programs-small-button">Learn More</button>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td width="75%" className="text">Gecko Feet Adhesion - Scientific Method, Biomimecry, Nanotechnology</td>
                    <td with="25%">
                        <a href="https://drive.google.com/file/d/1XNqv6p9lqfGyH_Qjq2gk0eZhVAP5V8Hf/view?usp=sharing">
                            <button className="programs-small-button">Learn More</button>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td width="75%" className="text">Gold Nanoparticles - Size-Dependent Colors</td>
                    <td with="25%">
                        <a href="https://drive.google.com/file/d/15Jy42tGLHkvceFUFl68CoFO0Y8pWXX_Q/view?usp=sharing">
                            <button className="programs-small-button">Learn More</button>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td width="75%" className="text">Fluorescence and Quantum Dots</td>
                    <td with="25%">
                        <a href="https://drive.google.com/file/d/1acOjiJRsb-_N3mp4Q_-0oiuRVs-VkNdB/view?usp=sharing">
                            <button className="programs-small-button">Learn More</button>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td width="75%" className="text">Synthesis and Characterization of Calcium Nanoparticles</td>
                    <td with="25%">
                        <a href="https://drive.google.com/file/d/1ISCLp_7yRAFJSgnrWeR67lwepz8Gjcxs/view?usp=sharing">
                            <button className="programs-small-button">Learn More</button>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        <br /><br />
    </div>
)

const RET = (
    <div>
        {/*<p className="title"><b>2021 - SDNI Summer Nano-SUIT Program for Community College Teachers</b></p>*/}
        <p>
            <p className="title"><b>Research Education for Teachers (RET)</b></p>
            <b className="programs-span">2022 - SDNI Summer Nano-SUIT Program for Community College Teachers</b>
            <br /><br /><br />
            <b className="programs-span">About the program:</b>
            <br /><br />
            <b className="programs-span">SDNI Nano Summer Institute for Teachers (Nano-SUIT) & Research Education for Teachers (RET)</b>
            <br /><br />
            The Nano-SUIT program combines the classic RET hands-on research experience for teachers with a comprehensive series of seminars in the broad field of nanotechnology. At the end of the program, participants produce a lesson plan, based on their research experience or another nanotechnology topic of their choice, that they must bring back to their respective schools/colleges for implementation in their class as well as sharing with their peers. This program hence acts as a catalyst for the “The California NanoTech 2025 Project”, which ultimately aims to integrate nanotechnology contents with the current college science curricula/programs across California. Please take note that each participant will be matched with an appropriate SDNI professor-mentor for the entire 6 weeks of the program, and the seminars will be provided by Dr. Yves Theriault, SDNI Director of Education Programs and Outreach.
            <br /><br />
            <b className="programs-span">Dates:</b> July 5 – August 12, 2022
            <br /><br />
            <b className="programs-span">Eligibility:</b> Must be an active Community College Teacher, recommended by 2 recommenders, and must be able to commit to the entire 6 weeks program. In addition, applicants must be United States citizens or U.S. permanent residents.
            <br /><br />
            <b className="programs-span">Housing:</b> Not provided for Nano-SUIT participants
            <br /><br />
            <b className="programs-span">Travel Expenses:</b> Not provided for Nano-SUIT participants
            <br /><br />
            <b className="programs-span">Stipends:</b> Participants will receive a $4,500 stipend in addition to a $1,000 materials budget.
            <br /><br /><br /><br /><br />
        </p>
    </div>
)

const REU = (
    <div>
        <span><p className="title"><b>Research Education for Undergrads (REU)</b></p></span>
        <p>
            <b className="programs-span">2023 – SDNI Research Education for Undergrads (REU)</b>
            <br /><br />
            The goal of this program is to provide undergrads with research experience in the field of nanotechnology as well as professional development through programmatic activities which will enrich their experiential learning and better prepare them for graduate school. Please take note that each selected participant will be assigned to a faculty mentor involved with nanotechnology research, and specific research area will depend on faculty’s availability. Participation in all weekly programmatic activities is essential to successfully complete the program. At the end of the program, REU students will have the opportunity to present their research project outcomes at the NNCI Annual REU convocation as well as the UCSD Summer Research Conference.
            <br /><br />
            Application start November 7, 2022. SDNI will accept 6 candidates to its REU program in 2023.

            <br /><br />
            <b className="programs-span">To apply, please click on the following link:&nbsp;</b>
            <a href="https://sdni.reumanager.co/" target="_blank">SDNI REU 2023 - Apply</a>
        </p>
    </div>
)

const SI = (
    <div>
        <p className="title"><b>Summer Institute</b></p>
        <div>

            <b className="programs-span">2022 SDNI Nanotechnology Summer Institute for Middle and High School Teachers</b><br /><br />
            <p>Participant in the SDNI Nanotechnology Summer Institute for Middle and High School Teachers will learn how nanotechnology content can integrate
                with their current California K-12 NGSS science curricula. During the program, teachers will acquire knowledge that will enable them to prepare a
                lesson plan that integrates nanotechnology with their science programs and implement such lesson plan during the school year 2022-2023.  The instructor
                will be available to assist in the creation and implementation of the lesson plans not only during the training, but during the entire school year
                2022-2023 and beyond.<br /><br />
                In order to qualify, applicants must be ready to attend the 5-day program every day of the program (mandatory), and attend a one-day event where
                participants will highlight their lesson plan ideas (optional day 6; to be scheduled about one week after day 5). Teachers must also implement their
                lessons during the school year 2022-2023.
                <br /><br />
                No travel or lodging expenses are covered for this program.</p>
            <b className="programs-span">Provided Stipend/Materials: </b>
            <li>$500 at completion of the 5-day program</li>
            <li>$300 after in-class implementation of the lesson plan (or upon attending the optional day 6)</li>
            <li>Materials for hands-on activities (up to $200 value)</li>

            <br />
            <p>The training will be online with possibility to meet in person on Day 5.

                Optional Day 6 will be in-person.

                We will prepare materials kits that teachers will use from home or from their classroom.

                All hands-on activities will be facilitated by live monitoring from Instructor.</p>
            <b className="programs-span">Application Period:</b> February 1, 2022 – March 30, 2022 	&gt;&gt;&gt; <span style={{color: "red"}}>EXTENDED to May 16, 2022</span>
            <br /><br />
            <b className="programs-span">To apply, please email Yves Theriault at <a href={"mailto:ytheriault@ucsd.edu"}>ytheriault@ucsd.edu</a> and provide the following information:
                <li>Full name</li>
                <li>Name of School where teaching</li>
                <li>Grade level(s)</li>
                <li>Science or Math Topic(s) taught</li></b>
            <br /><br />


        </div>
    </div>
)

const REU_A_2019 = (
    <div>
        <p className="title"><b>2019 REU Alumni</b></p>
        <img className="img-fluid" src={REUAlumni} alt="Image" />
        <p>
            <span className="programs-span">
                <b>Top Row: </b>(Left to right) Jason (Tyler) Arias, John Conan Minihan, Ismael Chavez<br />
                <b>Mid Row: </b>(Left to Right) Leilani Kwe, Flavia DePlachett, Amaris Paramo, Daniel Heredia<br />
                <b>Front Row: </b>(Left to Right) Angel Ha, Jenny Gonzalez, Arantxa Gomez Ferrer, Armando Urbina
            </span>
            <br /><br />
            At the end of the program, each REU student made a presentation at the 2019 UC San Diego Summer Research Conference, summarizing their respective research projects and accomplishments to include lessons learned.
            <br /><br />
            SDNI anticipates that all participants will share their unique and exciting hands-on research experience and other components of the program to include presentation skills and the writing of a personal statement with several students at their respective colleges, and by doing so will promote STEM and more specifically nanotechnology education. This type of impact is in line with The California NanoTech 2025 Project general mission.
            <br /><br />
            <b>The participants’ final presentations can be found below.</b>
            <br /><br />
            <a href="https://drive.google.com/open?id=1Ydaa5r5KhPeKj5T_nfGCj-54VVyfRq6A"><button className="programs-button">REU Final Presentation</button></a>
            <br /><br /><br /><br /><br />
        </p>
    </div>
)


const REU_A_2021 = (
    <div>
        <p className="title"><b>2021 REU Alumni</b></p>
        <img className="img-fluid" src={REUAlumni_2021} alt="Image" />
        <p>

            <br /><br />
            At the end of the program, each REU student made a presentation at the 2021 UC San Diego Summer Research Conference, summarizing their respective research projects and accomplishments to include lessons learned.
            <br /><br />
            SDNI anticipates that all participants will share their unique and exciting hands-on research experience and other components of the program to include presentation skills and the writing of a personal statement with several students at their respective colleges, and by doing so will promote STEM and more specifically nanotechnology education.
            <br /><br />
            <b>The participants’ final presentations can be found below.</b>
            <br /><br />
            <a href="https://drive.google.com/drive/folders/1WvEch3otnf2rOrHsUgSkjfvoLnz5Jfs4?usp=sharing"><button className="programs-button">REU Final Presentation</button></a>
            <br /><br /><br /><br /><br />
        </p>
    </div>
)

const NT2025 = (
    <div>
        <p className="title"><b>The California NanoTech 2025 Project</b></p>
        <h5><br /><br /><b>The ultimate goal of the California NanoTech 2025 Project (the “Project”) is:</b></h5>
        <p>
            <br />
            (1) To ensure that quality nanotechnology contents is integrated to the K-12 NGSS-aligned current and future science curricula in every school district across California by year 2025.
            <br /><br />
            (2) The Project intends to help California community colleges to establish general nanotechnology programs aligned with 4- years university programs for efficient transfer as well as technical education programs aiming to develop hands-on nanofabrication skills that the current and future job market demand.
            <br /><br />
        </p>
        <h4>1. K-12 California Education System and NGSS-Aligned Science Curricula</h4>
        <p>
            <br />
            <b>Our outreach strategy consists of:</b>
            <br /><br />
            Creating awareness about nanotechnology at all level of the education system, from administrators and science specialists of offices of education and school districts, school principals, teachers and TOSAs, and ultimately reach the students. This awareness will be realized via presentations, seminars, in-person meeting, web meetings, webinars to the parties to be reached. One of the great engagement tools that SDNI has used so far consists of remote access to its high-end Scanning Electron Microscope whereby students and teachers can remotely control SDNI SEM (with Focus and Zoom functions) and observe specimen at the micro and nano scale.
            <br /><br />
            Creating nanotechnology contents that can be integrated to the current K-12 science curricula. Such contents is/will be distributed in the form of Open Educational Resources in electronic format for affordable and efficient distribution. This step in essential for a sustainable program aiming to make nanotechnology a part of the pre-college students’ education and a possible career choice.
            <br /><br />
        </p>
        <h4>2. California Community College System</h4>
        <p>
            <br />
            <span className="programs-span"><b>(1) Diversity among colleges in regard to nanotechnology awareness.</b></span>
            <br /><br />
            Some community colleges have nanotechnology classes and are well led by pioneers such as Jared Ashcroft at the Pasadena City College. However, most community colleges do not have such nanotechnology program and the majority of students attending these colleges do not know about nanotechnology or they heard about it as a buzz word only.
            <br /><br />
            <span className="programs-span"><b>(2) Options: General Program or Technical Education.</b></span>
            <br /><br />
            The authorization of new courses at community college is a lengthy process that takes approximately 2 years. Consequently, the establishment of standalone general nanotechnology program (in view of accredited transfer to a 4-year college) will take some time. However, the process should start now. We suggest starting the authorization process immediately based on 2 of the fundamental nano-engineering courses that are currently provided at UCSD and will be credited to any community college student desirous of transferring to UCSD. Upon successful enrollment and course completion, more classes can be added and eventually a full 2-year program can be established.
            <br /><br />
            These programs can aim general education such as nanochemistry, nanoengineering and the like in view of <b>transferring to a 4-year university or technical education</b> such as nanofabrication leading directly to the marketplace.
            <br /><br />
            <span className="programs-span"><b>(3) SDNI Outreach Strategy.</b></span>
            SDNI has established a partnership with Southwestern College (SWC) aiming to pilot the gradual development of a nanotechnology program at SWC. SDNI also intends to approach Miramar College, San Diego City College, and Mesa College located in the greater San Diego area and involve these 3 additional colleges in the pilot program. A successful implementation of pilot programs at these institutions, will pave the way to the implementation of nanotechnology programs across California based on lessons learned and success stories.
            <br /><br />
        </p>
        <h4><b>CONTACT US</b></h4>
        <p>
            <br />
            If you want to promote nanotechnology education at your school, college, school district or county, please <b>complete the request form</b><a href="https://docs.google.com/forms/d/e/1FAIpQLSfY93n9hm3R0X8OFkyEx_Cjk4PXhR3HcuAK2MxO76Hn8RLlHQ/viewform?usp=sf_link"><span className="nano-gov"> California Nanotech 2025 Project Inquiry</span></a> and we will arrange for a meeting and discuss a strategy to get you involved in The California NanoTech 2025 Project.
            <br /><br /><br /><br /><br />
        </p>
    </div>
)

const DT2 = (
    <div>
        <p className="title"><b>Free Half-Day Workshops</b></p>
        <div style={{ height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img className='img-fluid' src={Construction} alt="" />
        </div>
    </div>

)

const R_SEM = (
    <div>
        <p className="title"><b>Remote SEM</b></p>
        <p>
            School teachers are invited to benefit of our program consisting of Remote Access to our high-end Scanning Electron Microscope (SEM). This program enables you to control the Zoom and Focus functions of our SEM from the comfort of your classroom. The only thing you need is a connection to the internet and a display screen (or LCD; you can also simply use your computer screen if nothing else is available). We have conducted several remote SEM sessions and all teachers and students have found this experience very engaging and eye opening. The observation of specimens at the micro and nano scale provide student with a unique knowledge tool that has proven to change the way students think about science.
            <br /><br />
            In order to schedule a remote SEM session, please go to the <span className="subtitle">Get Involved</span> tab and select the subtab: <span className="subtitle">Bring Nano Vision to Your School!</span> and fill the form. We will get back to you within 24 hours.
            <br /><br /><br /><br /><br />
        </p>
    </div>
)

const SG = (
    <div>
        <p className="title"><b>Seed Grants</b></p>
        <p>
            <b className="subtitle">Academic Seed Grant:</b>
            <br /><br />
            SDNI has established a Seed Grant program to provide access to nanofabrication facilities, equipment, and expertise for educators and researchers. The Seed Grant will provide access to SDNI at no charge up to the value of the award. SDNI will accept and review all Seed Grant applications as they arrive. SDNI encourages applications from the following:
            <br /><br />
            • High school science and engineering educators and students<br />
            • Community college science and engineering educators and students<br />
            • Researchers from academic institutes having limited facilities and/or research funding<br />
            <br /><br />
            All student applications must include a teacher or faculty member who will guide and supervise the student's project. Additionally, only adults will be allowed to perform work in SDNI laboratory facilities.
            <br /><br />
            For more information or to apply for the SDNI Academic Seed Grant, click below:
            <br /><br />
            <a href="https://docs.google.com/forms/d/1Si_2MGoNhshbYIAZooO-Wivf1qDf1Xs_EIuOG_W-RLU/viewform?ts=5d09087a&edit_requested=true"><button className="programs-button">SDNI Seed Grant - Academic</button></a>
            <br /><br /><br />
        </p>
    </div>
)

class Programs extends Component {
    constructor(props) {
        super(props)
        let { state } = this.props.location;
        let title = null;
        if (state) {
            title = state.title
        }
        this.state = {
            title: title == null ? 'k12' : title,
            renderHtml: title == null ? K12 : this.handleChangeRenderHtml(title),
        }
    }

    componentWillMount() { }

    componentDidMount() { }

    handleChangeTab = (param) => {
        this.setState({
            title: param,
            renderHtml: this.handleChangeRenderHtml(param)
        });
    }

    handleChangeRenderHtml = (param) => {
        switch (param) {
            case 'k12':
                return K12;
            case 'cc':
                return CC;
            case 'ret':
                return RET;
            case 'reu':
                return REU;
            case 'si':
                return SI;
            case 'ret-a':
                return (
                    <div>
                        <p className="title"><b>RET 2019 Alumni</b></p>
                        <img className="img-fluid" src={RETAlumni} alt="Image" />
                        <p>
                            <span className="programs-span">
                                <b>Back: </b>Lesli Horowitz<br />
                                <b>Left to right: </b>Angela Tsang, Patricia Beller, Lilia Ornelas, Gabriela Mansfield, Kerson Perez
                            </span>
                            <br /><br />
                            During the RET 2019 program teacher students received a solid series of lessons covering the fundamentals of nanotechnology as well as life sciences-focused nanotechnology seminars.
                            <br /><br />
                            At the end of the program, each RET student produce a lesson plan that they brought to their respective colleges/schools for implementation. In dsgng so SDNI hopes that the respective nanotechnology lessons will plant the seed for a growing nanotechnology program at each respective institution.
                            <br /><br />
                            <b>The lessons developed by the 2019 RET can be found in the section:</b>
                            <br /><br />
                            <button onClick={() => this.handleChangeTab('k12')} className="programs-button">K-12 Curriculum</button>
                            <br /><br />
                            <button onClick={() => this.handleChangeTab('cc')} className="programs-button">College Curriculum</button>
                            <br /><br /><br /><br /><br />
                        </p>
                    </div>
                );
            case 'reu-a-2019':
                return REU_A_2019;
            case 'reu-a-2021':
                return REU_A_2021;
            case 'nt2025':
                return NT2025;
            case '2dt':
                return DT2;
            case 'r-sem':
                return R_SEM;
            case 'sg':
                return SG;
        }
    }

    render() {
        const { renderHtml, title } = this.state;
        return (
            <div>
                <NavBar path='/programs' handler={this.handleChangeTab}></NavBar>
                <div className="container1">
                    <div className="row">
                        <div className="col-sm-3 submenu-tabs sidebar">
                            <button onClick={() => this.handleChangeTab('k12')} className={title == 'k12' ? "button1" : "button"}><span>K-12 Curriculum</span></button>
                            <button onClick={() => this.handleChangeTab('cc')} className={title == 'cc' ? "button1" : "button"}><span>College Curriculum</span></button>
                            <button onClick={() => this.handleChangeTab('ret')} className={title == 'ret' ? "button1" : "button"}><span>RET</span></button>
                            <button onClick={() => this.handleChangeTab('reu')} className={title == 'reu' ? "button1" : "button"}><span>REU</span></button>
                            <button onClick={() => this.handleChangeTab('si')} className={title == 'si' ? "button1" : "button"}><span>Summer Institute</span></button>
                            <button onClick={() => this.handleChangeTab('ret-a')} className={title == 'ret-a' ? "button1" : "button"}><span>RET Alumni</span></button>
                            <button onClick={() => this.handleChangeTab('reu-a-2019')} className={title.startsWith('reu-a') ? "button1" : "button"}><span>REU Alumni</span></button>
                            {
                                title.startsWith('reu-a') ?
                                    (<div style={{ marginLeft: 20, marginTop: 0 }}>
                                        <ul style={{ listStyleType: 'none', color: "#48457a" }}>
                                            <li className="sub-menu" style={title === 'reu-a-2019' ? { fontWeight: 'bold' } : {}} onClick={() => this.handleChangeTab('reu-a-2019')}>
                                                2019 SDNI REU
                                            </li>
                                            <li className="sub-menu" style={title === 'reu-a-2021' ? { fontWeight: 'bold' } : {}} onClick={() => this.handleChangeTab('reu-a-2021')}>
                                                2021 SDNI REU
                                            </li>
                                        </ul>
                                    </div>) : null
                            }
                            <button onClick={() => this.handleChangeTab('nt2025')} className={this.state.title == 'nt2025' ? "button1" : "button"}><span>NanoTech 2025 Project</span></button>
                            <button onClick={() => this.handleChangeTab('2dt')} className={this.state.title == '2dt' ? "button1" : "button"}><span>Free Half-Day Workshops</span></button>
                            <button onClick={() => this.handleChangeTab('r-sem')} className={this.state.title == 'r-sem' ? "button1" : "button"}><span>Remote SEM</span></button>
                            <button onClick={() => this.handleChangeTab('sg')} className={this.state.title == 'sg' ? "button1" : "button"}><span>Seed Grants</span></button>
                        </div>
                        <div className="col-sm-7 main-content">
                            {renderHtml}
                        </div>
                        <div className="col-sm-2">
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Programs