import React, { Component } from 'react';

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
                    "date": "May 10, 2022",
                    "title": "Research Associate/Scientist I for Microscopy",
                    "company": "Palamedrix, Inc.",
                    "has_url": false,
                    "expanded": false,
                    "description": `The cell phone sitting in your pocket is a modern miracle. It dominates every aspect of your life, from driving, to dining, to dating. At heart, your cell phone is the answer to a question: 
                    What would be possible if we could integrate billions of transistors with light and motion sensors, a high-resolution display, and access to a radio network? 
                    Fifty years ago, few anticipated that the answer would be so central to our lives. Today, we at Palamedrix believe that fifty years from now, our lives will be deeply impacted by a new question: 
                    What would be possible if we could integrate billions of biological molecules with those billions of transistors? 
                    If history is a guide then reality will exceed our imaginations, but science fiction has provided a glimpse: the Star Trek tricorder is something like a cell phone but, because of its interface to biologically important molecules, it has the magical ability to diagnose any disease, and could measure every aspect of their health, from fitness to fertility. 
                    Inspired by such questions, Palamedrix has brought together a world class team of experts in Next-generation sequencing, biochemistry, molecular biology, nanofabrication, molecular programming, and instrument engineering to leverage the unique power of DNA nanotechnology for developing a modular solution to counting all the different proteins in any fluid. The technology is designed to offer proteomics insights at a scale rivaling that of next-gen sequencing and across all scales ranging from population wide studies to investigations into the fundamental workings of single cell. Development of our platform will require innovation in the areas of molecular sensors, sensor integration on CMOS chips, the microfluidic delivery of samples to these chips, chip-reading instrumentation, and data analytics. Palamedrix is building teams in all these areas and has core DNA-based technologies that provide for the integration of molecular biosensors onto chips. 
                    We are currently looking for a Research Associate/Scientist I to join our substrate technology development team. You will work with a collaborative team of scientists to characterize chip surfaces routinely used for the development of our multi-omic platform primarily using fluorescence microscopy. As part of the most downstream process in the routine pipeline, this position will primarily be responsible for surface characterization (fluorescence microscopy) and quality control to support platform development, data analysis, and documenting standard operating procedures (SOPs). 
                    The ideal candidate would be a surface characterization specialist with strong analytical, experimental, and metrology skills who has preferably worked on projects involving microfluidic devices or developing bioassays. They will have a background in surface
                    chemistry, materials science or related engineering discipline, physics or biophysics, and will report directly to a Staff Scientist. The position will require coordination with multiple teams and their respective samples and execution of experiments in a methodical manner using established SOPs as we push forward with development of our proprietary single molecule flowcells. Strong experimental and analytical skills, intuition, as well as excellent communication skills, and ability to work on a team are required.
                    
                    Role and Responsibilities: 
                    ● Plan and execute various metrology-oriented laboratory activities with initial training and limited instruction thereafter. 
                    ● Maintain, track, and document all SOPs for materials, substrates, and reagents with appropriate QC. Prepare and maintain comprehensive technical reports for presenting at weekly meetings. 
                    ● Prepare reagents and consumables for ongoing experiments with substrates and flow cells, including the most upstream process of chip preparation for flow cell creation. 
                    ● Analyze data using Excel, imageJ, MATLAB, or other equivalent analytical tools specific to fluorescence microscopy, document and present results to the team. 
                    
                    Qualifications and Education Requirements: 
                    ● BS with 2+ years’ experience, MS with 0-2+ years’, PhD with 0-2 years’ experience in Materials Science or related engineering discipline, Bioengineering, Physics or Biophysics, or closely related field. 
                    ● Hands-on experience in high-resolution optical microscopy is required (80% or more of role). Experience with biodevice micro-to-nanofabrication strongly preferred (up to 20% of role). 
                    ● Demonstrated ability to troubleshoot, optimize, and solve challenging microscopy-oriented research problems. 
                    ● Experience working in any of the following areas are desired: Product development, surface chemistry, microfabrication, microfluidics, DNA nanotechnology, proteins, antibodies, and bioconjugations. 
                    ● Knowledge of DNA and protein characterization methods are desired: Gel electrophoresis, DNA amplification, PCR/qPCR, ELISA, SDS-PAGE, western blotting, Protein quantification, chromatography, fluorescence plate readers. 
                    ● Must be a creative, passionate, detail-oriented person with excellent analytical, verbal, and written communications skills (Word, Powerpoint, and Excel). 
                    ● Desire and ability to work in a small interdisciplinary team to develop new technologies at a rapid pace.
                    
                    Benefits 
                    ● 401(k) 
                    ● 100% premiums covered for medical, dental, and vision 
                    ● 15 vacation days per year 
                    ● 12 paid holidays per year 
                    ● Paid sick leave in accordance with CA and San Diego laws 
                    
                    Palamedrix is an equal opportunity employer. Applicants will be considered without regard to race, color, sex, orientation, gender, presentation, religion, national origin, veteran status, or disability. As a company we are dedicated to the intellectual, professional, and personal growth of our team members. We will publish results with academic users of our technology in top journals, engage all team members with an opportunity to shape our strategic plans, and provide flexible time off. Our lab is currently situated in San Diego at 11149 N. Torrey Pines Blvd, La Jolla. "
                    If you are interested in being considered for one of these opportunities, please send a cover letter and a copy of your resume to hires@palamedrix.com.`,
                    "POC": "Palamedrix Hires",
                    "email": "hires@palamedrix.com"
                },
                {
                    "date": "Feb 28, 2022",
                    "title": "Fault Isolation/Debug Engineer",
                    "company": "Intel Corporation - Fault Isolation Lab",
                    "has_url": false,
                    "expanded": false,
                    "description": "Dear ECE Students, \n" +
                        "Fault Isolation Lab (Intel, Hillsboro-Oregon), is looking for ECE CG (graduated or graduating in couple" +
                        "months) with MS or PhD. We work on exciting electrical and optical techniques for isolating and" +
                        "detecting physical defects in the latest process. If you are interested and want to get screened for Fault" +
                        "Isolation/Debug Engineer positions, please send your resume to me (samia.n.rahman@intel.com). I will" +
                        "arrange a phone screen to start the conversation and next steps. Please send your resume by March 5th.",
                    "POC": "Samia Rahman (Alumni UCSD, Graduated in 2014)",
                    "email": "samia.n.rahman@intel.com"
                },
                {
                    "date": "Jan 17, 2022",
                    "title": "Engineer 1 - Development",
                    "company": "Illumina",
                    "has_url": true,
                    "description": "https://illumina.wd1.myworkdayjobs.com/illumina-careers/job/US---California---San-Diego/Engineer-1---Development_30162-JOB",
                },
                // {
                //     "date": "Dec 06, 2021",
                //     "title": "Engineering Associate – Nanopore",
                //     "company": "Iridia, Inc.",
                //     "has_url": true,
                //     "description": "https://www.linkedin.com/jobs/view/2816515167/",
                // },
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
                <NavBar path={this.path} />
                <div className="container1">
                    <div className="row">
                        <div className="col-sm-3 sidebar"></div>
                        <div className="col-sm-7">
                            <p className="title" style={{ fontSize: "30px" }}><b>SDNI Job Bulletin Board</b></p>
                            <p><b className="programs-span">DISCLAIMER:</b> This job posting section is intended to be a service to our institutional users and individuals seeking jobs to include, without limitation, students and postdocs. Please be aware that the posting of an employment opportunity on this webpage does not constitute an endorsement of such employment opportunity by UC San Diego, the Qualcomm Institute, Nano3, or the San Diego Nanotechnology Infrastructure.</p>
                            <p>For Job Opportunities with UCSD, including all SDNI facilities (e.g. Nano3), please search postings at:&nbsp;
                                <a href="https://employment.ucsd.edu/" className="bold-blue">Careers at UC San Diego</a></p><br />
                            <p><b className="programs-span">Institutional users: To post a job, please proceed as follows:</b><br />
                                Send an email to Yves Theriault at <a href={"mailto:ytheriault@ucsd.edu"} className="bold-blue">ytheriault@ucsd.edu</a> with the following info:<br />
                                1. A compete Job Title<br />
                                2. Complete name of your Company (include Inc., LLC and the like if any)<br />
                                3. Provide <span className="bold-blue">ONE</span> of the following:<br />
                                &emsp;1. A link to your own website for applicant to apply directly with you; <span className="bold-blue">OR</span><br />
                                &emsp;2. A job description in the core of your email AND the name of the contact person <span className="bold-blue">AND</span> contact person’s email address where applicant can send their resumes; <span className="bold-blue">OR</span><br />
                                &emsp;3. An email attachment containing the job description <span className="bold-blue">AND</span> the name of the contact person <span className="bold-blue">AND</span> contact person’s email address where applicant can send their resumes<br />
                                <br />
                                <b className="programs-span">The deadline for submitting a Job Opportunity is 6 pm on Thursday of the preceding week for Monday postings.
                                    Posting a job on our billboard is free of charge and we are happy to bring this valuable tool to our users.</b></p><br />

                            <table>
                                <tbody>
                                    {
                                        this.state.jobs.map((job, index) =>
                                            job.has_url ?
                                                <tr>
                                                    <td width="10%" className="text">
                                                        <h className="job-title">{job.title}</h>
                                                        <br />
                                                        <h className="job-company">{job.company}</h>
                                                        <br />
                                                        <h className="job-date">{"Posted on " + job.date}</h>
                                                        <br />
                                                        <a href={job.description} target="_blank" className="job-btn">View
                                                        Description and Apply >>></a>
                                                    </td>
                                                </tr>
                                                :
                                                <tr>
                                                    <td width="10%" className="text">
                                                        <h className="job-title">{job.title}</h>
                                                        <br />
                                                        <h className="job-company">{job.company}</h>
                                                        <br />
                                                        <h className="job-date">{"Posted on " + job.date}</h>
                                                        <br /><br style={{ display: job.expanded ? "block" : "none" }} />

                                                        {job.description.split("\n").map((item, idx) => (
                                                            <p style={{ display: job.expanded ? "block" : "none"}} className="job-description">{item}</p>
                                                        ))}
                                                        {/*<p style={{display: job.expanded ? "block" : "none"}} className="job-description">{job.description}</p>*/}

                                                        <p style={{ display: job.expanded && job.POC && job.email ? "inline-block" : "none", fontWeight: "bold" }} className="job-description">To apply, please email&nbsp;</p>
                                                        <p style={{ display: job.expanded && job.POC && job.email ? "inline-block" : "none", fontWeight: "bold", color: "#3b74ec" }} className="job-description">{job.POC}</p>
                                                        <p style={{ display: job.expanded && job.POC && job.email ? "inline-block" : "none", fontWeight: "bold" }} className="job-description">&nbsp;at&nbsp;</p>
                                                        <a href={"mailto:" + job.email} style={{ display: job.expanded && job.POC && job.email ? "inline-block" : "none", fontWeight: "bold", color: "#3b74ec" }} className="job-description">{job.email}</a>
                                                        <br style={{ display: job.expanded ? "block" : "none" }} />

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
                <br /><br />
                <Footer />
            </div>
        )
    }
}

export default Jobs;