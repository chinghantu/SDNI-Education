import React, { Component } from 'react';

import whatIsCenter from '../../assets/Image/whatIsCenter.png';
import firstIcon from '../../assets/Image/1.png';
import secondIcon from '../../assets/Image/2.png';

import YvesTheriault from '../../assets/Image/YvesTheriault.png';
import AlbertoVasquez from '../../assets/Image/AlbertoVasquez.png';
import OscarVazquezMena from '../../assets/Image/OscarVazquezMena.png';

import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

class About extends Component {
    constructor(props) {
        super(props)
        let { state } = this.props.location;
        let title = null;
        if (state) {
            title = state.title
        }
        this.state = {
            title: title == null ? 'introduction' : title
        }
    }

    handleChangeTab = (param) => {
        this.setState({
            title: param
        });
    }

    render() {
        return (
            <div>
                <NavBar path='/about' handler={this.handleChangeTab} />
                <div className="container1">
                    <div className="row">
                        <div className="col-sm-3 sidebar submenu-tabs">
                            <button onClick={() => this.handleChangeTab('introduction')} className={this.state.title == 'introduction' ? "button1" : "button"}><span>What is CENTER </span></button>
                            <button onClick={() => this.handleChangeTab('management')} className={this.state.title == 'introduction' ? "button mt-3" : "button1 mt-3"}><span>Management</span></button>
                        </div>
                        <div className="col-sm-7">
                            {
                                this.state.title == 'introduction' ?
                                    <div>
                                        <img id='what-is-center-img' src={whatIsCenter} className="img-fluid mx-auto d-block" alt="Image" />
                                        <h5><br /><b>C.E.N.T.E.R.</b> is the Education arm of the <a href="http://sdni.ucsd.edu/"><span className="subtitle">San Diego Nanotechnology Infrastructure</span></a> (SDNI) and is intended to be a Center of Excellence for NanoTechnology Educational Resources.</h5>
                                        <p><i><br />“Nanotechnology is the application of scientific knowledge to engineer systems enabling the investigation of structures and behaviors on the nanoscale, and to manipulate and control matter in such scale to make use of size and structure dependent properties distinct from those of smaller or larger scales.”</i> (ISO 2010, modified by Theriault 2019).</p>
                                        <p><br />Starting with an updated definition of Nanotechnology (As cited above), this site aims to provide guidance and assistance to educators (K-12, Community Colleges, and 4-years Universities) desirous of developing nanotechnology curriculum and providing education in the field. In the process, we have been and will continue to be very thorough about ensuring the alignment of nanotechnology content with the Next Generation Science Standards for K-12 education.</p>
                                        <p><br />The SDNI outreach program’s goal is to facilitate the development of Nanotechnology curriculum and its integration to the entire K-12 and Community College education systems across California by 2025 (The California NanoTech 2025 Project). In order to achieve this ambitious goal, SDNI intends to create strategic alliances with teachers and administrators operating in schools, community colleges, school district offices, and county offices of education. Eventually, SDNI along with its alliance, intends to convince the California Department of Education(Sacramento) to include Nanotechnology as part of the regular K-12 science curriculum and approve Only science textbooks that meet nanotechnology requirements.

                                        <br /><br />
                                            SDNI, as part of the National Nanotechnology Coordinated Infrastructure, is also desirous of expanding its relationship with the other 15 centers of the network and stimulate the development and expansion of educational programs and outreach. SDNI is also involved with other national networks sharing common endeavors. Such networks include the Nanotechnology Applications and Career Knowledge (NACK), the Remotely Accessible Instruments for Nanotechnology (RAIN), and MNTeSIG (Micro Nano Technology education Special Interest Group).
                                        </p>
                                        <p><br />Nanotechnology is by nature a multidisciplinary science that integrate several STEM disciplines. Nanotechnology endeavors perfectly align with one the National Science Foundation 10 Big Ideas aiming the integration of Convergent Sciences, as nanotechnology innovations are products of such convergence. Another of the 10 big ideas is “Success through Diversity”. SDNI is proud to inform that its outreach program in California has brought (and will continue to bring) nanotechnology to numerous institutions with high numbers of URM students.
                                        <br /><br /><br />
                                            <b>Yves Theriault PhD, PMP</b>
                                            <br />
                                            <b>Director, Education Programs and Outreach</b>
                                            <br />
                                            <b>San Diego NanoTechnology Infrastructure</b>
                                            <br />
                                            <b>Program Manager, Education and Outreach Programs</b>
                                            <br />
                                            <b>The Qualcomm Institute</b>
                                            <br />
                                            <b>UC San Diego</b>

                                        </p>
                                        <h6 className="subtitle"><br /><br /><br />JOIN US</h6>
                                        <p><br />We hope that you will find the resources made available to you on this site useful.</p>
                                        <div className="container1">
                                            <div className="row">
                                                <div className="col-sm-1">
                                                    <p><img src={firstIcon} className="number" alt="One" width="25" height="25" /></p>
                                                </div>
                                                <div className="col-sm-11">
                                                    <p>If you are an educator or an administrator of the California K-12 or Community College education systems, and would like to know how you can be actively involved in the SDNI-driven California NanoTech 2025 Project, please contact me today using the form available from the <span className="subtitle">Get Involved</span> tab. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container1">
                                            <div className="row">
                                                <div className="col-sm-1">
                                                    <p><img src={secondIcon} className="number" alt="One" width="25" height="25" /></p>
                                                </div>
                                                <div className="col-sm-11">
                                                    <p>If you are outside of California but would like to partnership with us for nationwide outreach, please email me at <span className="subtitle">ytheriault@ucsd.edu</span>, and I will enthusiastically and promptly get back to you. <br /><br /><br /><br /><br /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className="container1">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <img src={YvesTheriault} className="center" alt="Image" />
                                                    <h4 className="staff-name"><br /><br /><b>Yves Theriault</b></h4>
                                                    <h6 className="staff-title"><b>Executive Director <br /> Education Programs and Outreach</b></h6>
                                                </div>
                                                <div className="col-sm-4">
                                                    <img src={AlbertoVasquez} className="center" alt="Image" />
                                                    <h4 className="staff-name"><br /><br /><b>Oscar Vazquez Mena</b></h4>
                                                    <h6 className="staff-title"><b>Faculty Director <br /> Education & Outreach</b></h6>
                                                </div>
                                                <div className="col-sm-4">
                                                    <img src={OscarVazquezMena} className="center" alt="Image" />
                                                    <h4 className="staff-name"><br /><br /><b>Alberto "Beto" Vasquez</b></h4>
                                                    <h6 className="staff-title"><b>Associate Director <br /> Educational Equity</b></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            <br />
                                            <b><span className="subtitle"><br />Yves Theriault, PhD, PMP, Director of Education Programs and Outreach</span></b>
                                            <br /><br />
                                            Yves obtained his PhD in Chemistry from University of Montreal in 1989 and was a postdoctoral fellow at the Scripps Research Institute from 1989 to 1991 where he worked on the determination of three- dimensional structures of proteins by NMR spectroscopy.
                                            <br /><br />
                                            Following his postdoc, Yves performed rational drug design at Abbott Laboratories for 2 years where he solved the 3-dimensional solution structure of the cyclophilin-cyclosporin complex which remains to date the most challenging structure ever solved by NMR. He then came back to California where he was involved in the startup of Ontogen Corporation, a combinatorial chemistry biotech, funded by Amgen. He then founded Jouvence Pharmaceuticals, a San Diego based biotech that focused on genomics of aging and regenerative medicine (1995-1998). He then consulted with a broad range of companies with a focus on performance management (1998-2009).
                                            <br /><br />
                                            In 2009, Yves founded the California Institute for Performance Management (CALIPM), a non-for-profit educational organization, providing continued education in the fields of Leadership, Drug Development, Biotechnology, Nanotechnology, Systems Engineering, Project, Program, and Portfolio Management. He also created a tutoring component within CALIPM, The California Institute for Academic Excellence, and helped several students to obtain and maintain A grades and be admitted to the colleges of their choice. In the process, he learned about the California K-12 education system.
                                            <br /><br />
                                            Yves is Program Manager for Education and Outreach Programs at the UC San Diego-based Qualcomm Institute (QI). At QI, he develops and implements educational programs focused on convergence education, highly integrated multidisciplinary science and engineering program and project management, leadership in the science and technology environments, and nanotechnology convergence and its multiple distributive applications. He also currently serves as Director of Education Program and Outreach at the San Diego Nanotechnology Infrastructure (SDNI), located at UC San Diego. Yves brings to SDNI his knowledge of the California Education system and his extensive professional and academic background and knowledge of Science & Technology, Leadership, and Organizational Performance. SDNI is actively involved in bringing nanotechnology contents that can be integrated to current California high school and community college STEM curricula.
                                            <br /><br />
                                            Yves is a certified Project Management Professional and an Active member of the International Council On System Engineering (INCOSE). He also has been Instructor at UCSD Extension since 2008 where he developed and taught courses in the fields of Leadership in the scientific/research environment, Drug Development, Medicinal Chemistry, and Biotech/Pharma Projec Management.
                                            <br /><br />
                                            <b><span className="subtitle"><br />Oscar Vazquez Mena, Faculty Advisor</span></b>
                                            <br /><br />
                                            Oscar obtained his Master of Science, majoring in Nanoscale Science and Engineering form Chalmers University of Technology in 2003 and his PhD degree in Microtechnolgy from the Swiss Federal Institute of Technology of Lausanne in 2010.He was a postdoctoral fellow in the Physics Department at UC Berkley from 2011 to 2015 and in 2015 was postdoctoral researcher at the Institute of Photonic Sciences (ICFO) at Barcelona, Spain. Since 2016 he has held the position of Assistant Professor of Nanoengineering at UC San Diego.
                                            <br /><br />
                                            Oscar is recipient of several awards to include DARPA Young Faculty Award (2018); UC San Diego Cesar Chavez Faculty Award for Community Work (2018); Marie Sklodowska-Curie EU Fellowship (2015); Swiss National Science Foundation Fellowship (2012-2014); Huygens Scholarship (The Netherlands, 2002-2003; and the STINT Fellowship (Sweden, 2000-2001).
                                            <br /><br />
                                            Oscar has recently joined the Educational Program and Outreach of UCSD-based SDNI as Faculty Advisor.
                                            Oscar was also involved in other outreach initiatives to include the Indigenous Pipeline to UC Berkeley (2013-2014) and has been actively involved with the Bridges to Education at UC San Diego since 2016. Oscar is also Associate Editor in Micro- and Nanoelectromechanical Systems for the Journal “Frontiers in Mechanical Engineering”.
                                            <br /><br />
                                            <b><span className="subtitle"><br />Alberto ("Beto") Vasquez, Associate Director, Educational Equity</span></b>
                                            <br /><br />
                                            Alberto Vasquez, “Beto”, has been Outreach Coordinator for the San Diego County College District since 2016 where is developing the Outreach Department for San Diego Continuing Education’s (SDCE) seven campuses throughout San Diego. There, he is cultivating community partnerships and educating the public about the affordability and accessibility of the programs within SDCE.
                                            <br /><br />
                                            Beto has also been Academic Preparation Specialist III for the UC San Diego-based CREATE (Center for Research on Educational Equity, Assessment & Teaching Excellence) since 2017, and was promoted to the position of Community Outreach & Engagement Coordinator at UC San Diego in March 2019.
                                            <br /><br />
                                            As part of the Education Team, Beto brings to SDNI his extensive pedagogical knowledge as well as his passion for educational equity and for promoting STEM education among underrepresented minorities.
                                            <br /><br />
                                            Beto obtained his Master’s of Science Biology/Biological Sciences from UCSD in 2016.
                                            <br /><br /><br /><br /><br />
                                        </p>
                                    </div>
                            }

                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;