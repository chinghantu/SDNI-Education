import React, {Component} from 'react';

import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.path = '/jobs';
        this.state = {
            // \B: bold, \t: indent, \n: line break
            jobs: [
                {
                    "date": "Dec 06",
                    "title": "Engineering Associate – Nanopore",
                    "company": "Iridia, Inc.",
                    "has_url": true,
                    "description": "https://www.linkedin.com/jobs/view/2816515167/",
                },
                {
                    "date": "Nov 22",
                    "title": "Advanced Packaging and Integration Scientist",
                    "company": "HRL Laboratories, LLC",
                    "has_url": true,
                    "description": "https://www.hrl.com/current-openings/2019/05/07/scientist-vi-advanced-packaging-and-integration-scientist",
                },
                {
                    "date": "Nov 22",
                    "title": "Scalable Optical Material and Devices Scientist",
                    "company": "HRL Laboratories, LLC",
                    "has_url": true,
                    "description": "https://www.hrl.com/current-openings/2021/10/18/scientist-iv-scalable-optical-material-and-devices",
                },
                {
                    "date": "Nov 22",
                    "title": "Multifunctional Materials and Structures Scientist",
                    "company": "HRL Laboratories, LLC",
                    "has_url": true,
                    "description": "https://www.hrl.com/current-openings/2021/09/02/scientist-iv-multifunctional-materials-and-structures",
                },
                {
                    "date": "Nov 22",
                    "title": "Research Chemist",
                    "company": "HRL Laboratories, LLC",
                    "has_url": true,
                    "description": "https://www.hrl.com/current-openings/2021/10/08/research-chemist",
                },
                {
                    "date": "Nov 22",
                    "title": "Micromagnetic Modeling Scientist",
                    "company": "HRL Laboratories, LLC",
                    "has_url": true,
                    "description": "https://www.hrl.com/current-openings/2021/09/24/micromagnetic-modeling-scientist-iv",
                },
                {
                    "date": "Nov 22",
                    "title": "Process Engineer",
                    "company": "HRL Laboratories, LLC",
                    "has_url": true,
                    "description": "https://www.hrl.com/current-openings/2021/11/17/process-engineer",
                },
                {
                    "date": "Nov 22",
                    "title": "Electron Microscopist",
                    "company": "HRL Laboratories, LLC",
                    "has_url": true,
                    "description": "https://www.hrl.com/current-openings/2021/10/22/engineer-iv-ee",
                },
                {
                    "date": "Nov 22",
                    "title": "Postdoctoral Researcher",
                    "company": "General Atomics",
                    "has_url": false,
                    "expanded": false,
                    "description": "General Atomics (GA) is one of the world’s leading resources for high-technology systems development ranging from the nuclear fusion to remotely piloted aircraft, airborne sensors, and advanced electric, electronic, wireless and laser technologies. \n" +
                        "We have two exciting postdoctoral research opportunities for a Thin Film Deposition Scientist within our Inertial Fusion Technology (IFT) group. In these positions, the scientists participate in the development, fabrication, characterization, and analysis of novel materials required for: 1) laser-driven fusion research, 2) biomedical applications, and 3) solid-state hydrogen storage and quantum technologies. \n" +
                        "The ideal candidate should be able to conduct research in a multidisciplinary team under general supervision with limited review. And it is going to be responsible for determining and developing effective approaches for resolving a wide range of nanofabrication, photolithography, and sputtering deposition coating challenges, as well as to employing these techniques to build complex samples with minimum defects. \n\n" +
                        "\B DUTIES AND RESPONSIBILITIES: \n" +
                        "• Develop sputtering processes to create graded composition films and multilayers including composition optimization, stress optimization, and contamination control. \n" +
                        "• Perform characterization of coating defects, composition, film stress, and substrate roughness by using SEM, Optical Microscopy, AFM, and Ellipsometry. \n" +
                        "• Understand and master nanofabrication and photolithography techniques. \n" +
                        "• Pursue research projects under the direction of senior staff and management. Work with and provide support to the wider IFT team and National Laboratory collaborators in the above topic areas. \n" +
                        "• Perform equipment maintenance, repair, and upgrade and maintain safe, clean, and organized coating laboratories. \n" +
                        "• Document findings, communicate results to scientific staff and make technical presentations as required. \n" +
                        "• Publish in recognized scientific journals and present work at conferences. \n\n" +
                        "\BREQUIREMENTS \n" +
                        "• Ph.D. recently received or close to be received in Physical Sciences in areas such as Chemistry, Physics, Material Science, Chemical Engineering, or Nano Engineering.  \n" +
                        "• Understand and apply general scientific principles and be willing to learn and explore new scientific approaches. \n" +
                        "• Prior hands-on experience in one or more of these: \n" +
                        "- Vacuum coating equipment - This includes but is not limited to sputtering, electron-beam deposition, thermal evaporation, atomic layer deposition. \n" +
                        "- Photolithography and nanofabrication techniques. \n" +
                        "- Prior experience in a cleanroom environment. \n" +
                        "• Software experience with LabVIEW, and/or Solid Work can be helpful. \n" +
                        "• Must possess the ability to: \n" +
                        "- Communicate comfortably in English \n" +
                        "- Strong communication, computer, presentation, and interpersonal skills are required to enable an effective interface with other departments and/or professionals \n" +
                        "- Ability to provide leadership and guidance to less experienced professionals. \n\n" +
                        "The appointment is renewable on a yearly basis based upon the performance of the candidate. \n",
                    "POC": "Dr. Carlos Monton",
                    "email": "carlos.monton@ga.com"
                },
                {
                    "date": "Nov 08",
                    "title": "Biophysics Scientist",
                    "company": "Avery Digital Data, Inc.",
                    "has_url": false,
                    "expanded": false,
                    "description": "\BCompany Description\n" +
                        "Avery is a fast-paced start-up developing a semiconductor-based Synthetic Biology" +
                        "platform to power the Bio Revolution. Avery’s leadership includes pioneers in SynBio" +
                        "and biochips, with unmatched experience in developing high impact technologies and" +
                        "companies. Join the team that will synthesize biology’s future." +
                        "\BJob Description\n" +
                        "We are seeking a Scientist to join our research and development group. The individual" +
                        "will drive the development of a proprietary technology for the assembly and" +
                        "manipulation of DNA. The Scientist is a critical part of the team developing methods to" +
                        "interface biochemistry with electronics. The ideal candidate can thrive in a fast paced," +
                        "dynamic environment, as part of a team of highly skilled, focused, and motivated people" +
                        "who believe in changing the world by creating truly disruptive technology.\n" +
                        "\BMajor Responsibilities\n" +
                        "• Lead development of on-chip biophysics for DNA manipulation\n" +
                        "• Contribute to chip conceptual design and development efforts\n" +
                        "• Interface with multi-disciplinary scientists, engineers, and developers\n" +
                        "• Design, perform, analyze, and interpret experiments\n" +
                        "• Generate proof-of-concept and milestone data\n" +
                        "• Develop intellectual property\n" +
                        "• Prepare presentation and papers\n" +
                        "• Write grant and contract proposals\n" +
                        "• Maintain an organized, clean, safe, and functional lab environment\n" +
                        "\BPreferred Skills & Attributes\n" +
                        "• Experience with electrophoresis and dielectrophoresis\n" +
                        "• Experience with chip-based biophysics, electrochemistry, and digital microfluidics\n" +
                        "• Experience with Multiphysics modelling of electrochemical systems, such as with\n" +
                        "COMSOL or similar modelling platforms\n" +
                        "• Experience in synthetic biology\n" +
                        "• Experience with DNA assembly methods\n" +
                        "• Excellent oral and written communication skills\n" +
                        "• Independent, organized, reliable\n" +
                        "• Solution-oriented, positive attitude, highly motivated" +
                        "\BQualifications\n" +
                        "• A Ph.D. or equivalent in bioengineering, biophysics, physics, chemistry, " +
                        "biochemistry, electrochemistry or similar disciplines, with at least 2 years of post-" +
                        "doctoral experience in industry or academia.\n" +
                        "• Authorized to work in the U.S. for any employer\n" +
                        "• The position is located in the San Diego, CA area",
                    "POC": "Ryan de Ridder",
                    "email": "ryan.deridder@avery.tech"
                },
                {
                    "date": "Oct 30",
                    "title": "Senior Protein Biochemist",
                    "company": "Quidel",
                    "has_url": true,
                    "description": "https://jobs.lever.co/quidel/30701124-8192-4878-8246-ec60b1c7d655",
                },
                {
                    "date": "Oct 22",
                    "title": "Development Engineer",
                    "company": "Illumina",
                    "has_url": true,
                    "description": "https://illumina.wd1.myworkdayjobs.com/illumina-careers/job/US---California---San-Diego/Development-Engineer_28259-JOB",
                },
                {
                    "date": "Oct 22",
                    "title": "Internship",
                    "company": "Dimension Genomics",
                    "has_url": false,
                    "expanded": false,
                    "description": "Internship opportunities for students who desire to be exposed to the dynamic and exciting environment of an early-stage interdisciplinary biotech startup and be part of a team developing cutting edge genomics technology. This opportunity is available to all students, however preference will be given for students with a demonstrated proficiency in any of the following fields: nano3 cleanroom and associated tool set use; scanning electron microscopy, cell culture and manipulation, DNA/RNA extraction and analysis, optical microscopy, rapid prototyping of microfluidics, 3D printing, instrumentation automation, image analysis, and most importantly, students with drive, initiation and attention to details.  The intern should be willing and available to work at least 15 hours a week, with at least 8 hours a week during normal business hours (9am – 5pm).",
                    "POC": "Michael Austin",
                    "email": "mdaustin@dimensiongen.com"
                },
                {
                    "date": "Oct 22",
                    "title": "Bioengineer",
                    "company": "Quidel",
                    "has_url": true,
                    "description": "https://jobs.lever.co/quidel/db4ea42f-93c2-4254-9144-8b4e6c78be4f",
                },
                {
                    "date": "Oct 22",
                    "title": "Plasma Deposition Scientist",
                    "company": "General Atomics",
                    "has_url": false,
                    "expanded": false,
                    "description": "General Atomics (GA), and its affiliated companies, is one of the world’s leading resources for high-technology systems development ranging from the nuclear fuel cycle to remotely piloted aircraft, airborne sensors, and advanced electric, electronic, wireless and laser technologies.\n" +
                        "\n" +
                        "We currently have an exciting opportunity for an experienced Plasma Deposition Scientist within our Inertial Fusion Technology (IFT) group. This position participates in the development, production, characterization and analysis of novel materials required for laser driven fusion research. The ideal candidate under general supervision with limited review, is responsible for determining and developing effective approaches for resolving a wide range of Plasma Enhanced Chemical Vapor Deposition (PECVD) coating challenges, employing techniques to build complex targets with minimum defects.\n" +
                        "\n" +
                        "\B DUTIES AND RESPONSIBILITIES:\n" +
                        "•\tDevelop processes for PECVD coating of Diamond-Like Carbon (DLC), including composition optimization, stress optimization, and contamination control. Deposition of DLC coatings utilizing Hollow Cathode PECVD is an integral component of this position.\n" +
                        "•\tPerform characterization of coating defects, composition, film stress, and substrate roughness by using SEM, Optical Microscopy, Xray fluorescence, Radiography and Interferometry.\n" +
                        "•\tUnderstand and master characterization techniques to support the generation of a comprehensive metrology data package for the products.\n" +
                        "•\tExplore new scientific methods and adapt them to the production and characterization of DLC coatings.\n" +
                        "•\tPursue research projects under the direction of senior staff and management. Work with and provide support to the wider IFT team and national laboratory collaborators in the above topic areas.\n" +
                        "•\tWork with a high degree of independence in project management while incorporating inputs and constraints from others in a team environment.\n" +
                        "•\tDevelop deposition techniques for doped, or advanced multilayer coatings.\n" +
                        "•\tPerform failure analysis, implement and carry out mitigation plans in timely manner.\n" +
                        "•\tPerform equipment maintenance, repair and upgrade.  Maintain safe, clean and organized coating laboratories.\n" +
                        "•\tDocument findings, communicates results to scientific staff and makes technical presentations as required.  Publish in recognized scientific journals, present work at conferences.\n" +
                        "•\tPerforms other duties as assigned or required.\n" +
                        "We recognize and appreciate the value and contributions of individuals with diverse backgrounds and experiences and welcome all qualified individuals to apply.\n\n" +
                        "\BJob Qualifications :\n" +
                        "•\tTypically requires a Bachelors degree, Masters degree or PhD in a scientific or related technical field and progressively complex scientific experience as follows; four or more years experience with a Bachelors degree, two or more years experience with a Masters degree. Equivalent scientific experience may be substituted in lieu of education.\n" +
                        "•\tA degree in Physical Science is desirable, in areas such as Chemistry, Physics, Material Science, Chemical Engineering, Nano Engineering.  Understand and apply general scientific principles. Be willing to learn and explore new scientific approaches.\n" +
                        "•\tPrior hands-on experience in coating equipment and PECVD/PVD coating processes highly desired.  This includes, but is not limited to, plasma polymer deposition and doping, sputtering, e-beam, thermal evaporative coatings, ALD etc.\n" +
                        "•\tExperience with experimental design and analysis, including statistically driven methods and software tools (e.g. DOE, JMP, or similar tools) is highly desired.\n" +
                        "•\tSoftware experience can be helpful, such as LabVIEW, SolidWork, AutoCAD.\n" +
                        "•\tThe ability to learn and perform target characterization using optical and x-ray based metrology tools.  This could include Xray absorption spectroscopy, XRF, Radiography, Scanning electron microscopy with EDAX/EDS, various forms of interferometry and confocal microscopy methods, in addition of conventional optical microscopes, Stylus and AFM tools.  Prior experience in this area is desirable, but not required.\n" +
                        "•\tMust possess the ability to; (1) understand new concepts quickly and apply them accurately throughout an evolving environment; (2) strong communication, computer, presentation, and interpersonal skills are required enabling an effective interface with other departments and/or professionals; (3) and, the capability of representing the organization as a prime technical contact; and, (4) and the ability to provide leadership and guidance to less experienced professionals.",
                    "POC": "Carlos Monton",
                    "email": "carlos.monton@ga.com"
                },
                {
                    "date": "Oct 22",
                    "title": "Research Associate – Surface Chemistry",
                    "company": "Iridia Inc.",
                    "has_url": false,
                    "expanded": false,
                    "description": "\BTo Apply:\n" +
                        "Please send an email titled “Application for Iridia Research Associate – Surface Chemistry” with Resume attached to both:\n" +
                        "•\tHayden Black (hblack@iridia.com)\n" +
                        "•\tMischa Locklear (mischa@raindancepartners@com)\n" +
                        "\n" +
                        "\BIridia Overview:\n" +
                        "Our mission is to pioneer the use of DNA to solve big challenges in data-storage with robust, sustainable, and scalable solutions. We believe that nature has optimized DNA as the ultimate long-term, high-fidelity, high density data storage tool. We are combining DNA polymer synthesis technology, electronic nano-switches, and semiconductor fabrication technologies to develop the world’s first integrated-chip that can write, read, and store data in a single device at an exceptionally high density. We are well-funded and guided by renowned investors, industry pioneers and scientific thought leaders to develop the first commercially viable, DNA based microchip that will change the way the world stores and retrieves data forever.\n" +
                        "\n" +
                        "\BPosition Summary:\n" +
                        "We are seeking a highly motivated Research Associate to play a key role in technology development at Iridia by contributing to Iridia’s surface chemistry research. The individual will be responsible for conducting experiments and QA/QC tests focusing on surface analysis, surface modification and bioconjugation. This position will interact closely with biochemistry and nanofabrication/engineering groups to solve interdisciplinary problems in surface science. The individual will help drive the success of Iridia’s technology platform.\n" +
                        "\n" +
                        "\BHow you will contribute:\n" +
                        "•\tCarry out experiments to understand and optimize surface chemistry processes and improve surface functionality\n" +
                        "•\tIntegrate surface chemistry processes with functional prototype devices \n" +
                        "•\tHelp identify new tools and protocols for surface modification and analysis \n" +
                        "•\tAssist in analysis and summarization of results to provide feedback to the relevant team(s)\n" +
                        "•\tCarefully maintain up-to-date documentation of all laboratory activities in a written or electronic format\n" +
                        "•\tMaintain reagent and equipment stocks as needed\n" +
                        "•\tAssist in the conception and planning of experiments and design prototypes\n" +
                        "•\tTroubleshoot equipment and procedures consistent with level of experience\n" +
                        "•\tPerform additional job-related duties as required\n" +
                        "\n" +
                        "\BRequired Qualifications:\n" +
                        "•\tBachelor’s or Masters degree in Chemistry or Materials Science\n" +
                        "•\tTeam player with a positive outlook\n" +
                        "•\tProficiency with computers, MS Suite, etc.\n" +
                        "•\tStrong problem-solving, critical thinking, and analytical capabilities\n" +
                        "•\tWell organized and detail oriented, with strong written and oral communication skills\n" +
                        "•\tSelf-motivated with a “hands-on” mindset\n" +
                        "•\tAbility to perform at a high level in both independent and collaborative team environments\n" +
                        "•\tAbility to organize and prioritize multiple tasks to consistently hit deadlines\n" +
                        "\n" +
                        "\BDesired Qualifications:\n" +
                        "•\t1-2 years Industry experience\n" +
                        "•\tExperience with surface modification and analysis\n" +
                        "•\tExperience with DNA chemistry and common molecular biology techniques such as PCR and gel electrophoresis\n" +
                        "•\tExperience with microscopy (fluorescence, SEM, AFM, etc.)\n" +
                        "•\tExperience with electrochemical techniques (cyclic voltammetry, potentiometry, etc.)\n" +
                        "•\tExperience with Matlab, Python, R, or other scripting language\n" +
                        "\n" +
                        "\BAbout Iridia:\n" +
                        "We have developed strong IP around a nanopore-based single-molecule device that enables vastly large datasets to be stored and retrieved in an integrated format. We are guided in our mission by our board chairman, Jay Flatley (Executive Chairman, illumina) and thought leaders in life sciences and data-storage. We recently came out of stealth-mode with backing from prominent institutional investors and market leading corporate partners in the data-storage industry. We are now keenly focused on developing a transformative product at the intersection of biology and technology.",
                },
            ]
        };
    }

    expandJob = (index) => {
        this.state.jobs[index].expanded = !this.state.jobs[index].expanded;
        this.setState({
            jobs: this.state.jobs
        });
    }

    render() {
        return (
            <div>
                <NavBar path={this.path}/>
                <div className="container1">
                    <div className="row">
                        <div className="col-sm-3 sidebar"></div>
                        <div className="col-sm-7">
                            <p className="title" style={{fontSize: "30px"}}><b>SDNI Job Bulletin Board</b></p>
                            <p><b className="programs-span">DISCLAIMER:</b> This job posting section is intended to be a service to our institutional users and individuals seeking jobs to include, without limitation, students and postdocs. Please be aware that the posting of an employment opportunity on this webpage does not constitute an endorsement of such employment opportunity by UC San Diego, the Qualcomm Institute, Nano3, or the San Diego Nanotechnology Infrastructure.</p>
                            <p>For Job Opportunities with UCSD, including all SDNI facilities (e.g. Nano3), please search postings at:&nbsp;
                                <a href="https://employment.ucsd.edu/" className="bold-blue">Careers at UC San Diego</a></p><br/>
                            <p><b className="programs-span">Institutional users: To post a job, please proceed as follows:</b><br/>
                                    Send an email to Yves Theriault at <a href={"mailto:ytheriault@ucsd.edu"} className="bold-blue">ytheriault@ucsd.edu</a> with the following info:<br/>
                                    1. A compete Job Title<br/>
                                    2. Complete name of your Company (include Inc., LLC and the like if any)<br/>
                                3. Provide <span className="bold-blue">ONE</span> of the following:<br/>
                                &emsp;1. A link to your own website for applicant to apply directly with you; <span className="bold-blue">OR</span><br/>
                                &emsp;2. A job description in the core of your email AND the name of the contact person <span className="bold-blue">AND</span> contact person’s email address where applicant can send their resumes; <span className="bold-blue">OR</span><br/>
                                &emsp;3. An email attachment containing the job description <span className="bold-blue">AND</span> the name of the contact person <span className="bold-blue">AND</span> contact person’s email address where applicant can send their resumes<br/>
                                <br/>
                                <b className="programs-span">The deadline for submitting a Job Opportunity is 6 pm on Thursday of the preceding week for Monday postings.
                                    Posting a job on our billboard is free of charge and we are happy to bring this valuable tool to our users.</b></p><br/>

                                    <table>
                                <tbody>
                                {
                                    this.state.jobs.map((job, index) =>
                                        job.has_url ?
                                            <tr>
                                                <td width="10%" className="text">
                                                    <h className="job-title">{job.title}</h>
                                                    <br/>
                                                    <h className="job-company">{job.company}</h>
                                                    <br/>
                                                    <h className="job-date">{"Posted on " + job.date}</h>
                                                    <br/>
                                                    <a href={job.description} target="_blank" className="job-btn">View
                                                        Description and Apply >>></a>
                                                </td>
                                            </tr>
                                            :
                                            <tr>
                                                <td width="10%" className="text">
                                                    <h className="job-title">{job.title}</h>
                                                    <br/>
                                                    <h className="job-company">{job.company}</h>
                                                    <br/>
                                                    <h className="job-date">{"Posted on " + job.date}</h>
                                                    <br/><br style={{display: job.expanded ? "block" : "none"}}/>

                                                    {job.description.split("\n").map((item, idx) => (
                                                        item.startsWith("•") || item.startsWith("-")?
                                                            <p style={{display: job.expanded ? "block" : "none", fontWeight: item.startsWith("\B") ? "bold" : "normal" }} className="job-description">&emsp;{item.startsWith("\B") ?item.substring(1) : item}</p> :
                                                            <p style={{display: job.expanded ? "block" : "none", fontWeight: item.startsWith("\B") ? "bold" : "normal"}} className="job-description">{item.startsWith("\B") ? item.substring(1) : item}&nbsp;</p>
                                                    ))}
                                                    {/*<p style={{display: job.expanded ? "block" : "none"}} className="job-description">{job.description}</p>*/}

                                                    <p style={{display: job.expanded && job.POC && job.email? "inline-block" : "none", fontWeight: "bold"}} className="job-description">To apply, please email&nbsp;</p>
                                                    <p style={{display: job.expanded && job.POC && job.email ? "inline-block" : "none", fontWeight: "bold", color: "#3b74ec"}} className="job-description">{job.POC}</p>
                                                    <p style={{display: job.expanded && job.POC && job.email ? "inline-block" : "none", fontWeight: "bold"}} className="job-description">&nbsp;at&nbsp;</p>
                                                    <a href={"mailto:" + job.email} style={{display: job.expanded && job.POC && job.email ? "inline-block" : "none", fontWeight: "bold", color: "#3b74ec"}} className="job-description">{job.email}</a>
                                                    <br style={{display: job.expanded ? "block" : "none"}}/>

                                                    {job.expanded ?
                                                        <h className="job-btn"
                                                           onClick={() => this.expandJob(index)}>Hide Description</h> :
                                                        <h className="job-btn"
                                                           onClick={() => this.expandJob(index)}>View
                                                            Description and Apply >>>
                                                        </h>}

                                                </td>
                                            </tr>)}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <br/><br/>
                <Footer/>
            </div>
        )
    }
}

export default Jobs;