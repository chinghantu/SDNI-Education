import React, { Component } from "react";
import _ from 'underscore'
import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"
import CalBlue from '../../assets/Image/CaliforniaBlue.png'
import USA from '../../assets/Image/USA.png'
import InternationalBlue from '../../assets/Image/InternationalBlue.png'
const CAL_NEWS = {
    '2020': [
        {
            "date": "Nov 30",
            "name": "Virus-Like Probes Could Help Make Rapid COVID-19 Testing More Accurate, Reliable",
            "place": "University of California - San Diego",
            "description": "Nanoengineers at the University of California San Diego have developed new and improved probes, known as positive controls, that could make it easier to validate rapid, point-of-care diagnostic tests for COVID-19 across the globe.",
            "link": "https://ucsdnews.ucsd.edu/pressrelease/virus-like-probes-could-help-make-rapid-covid-19-testing-more-accurate-reliable"
        },
        {
            "date": "Nov 24",
            "name": "Scientists Design New Framework for Clean Water",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "We rely on water to quench our thirst and to irrigate bountiful farmland. But what do you do when that once pristine water is polluted with wastewater from abandoned copper mines?",
            "link": "https://newscenter.lbl.gov/2020/11/24/new-framework-for-clean-water/"
        },
        {
            "date": "Nov 23",
            "name": "Direct visualization of quantum dots reveals shape of quantum wave function",
            "place": "University of California - Santa Cruz",
            "description": "Researchers used a scanning tunneling microscope to visualize quantum dots in bilayer graphene, an important step toward quantum information technologies",
            "link": "https://news.ucsc.edu/2020/11/quantum-dots.html#:~:text=Direct%20visualization%20of%20quantum%20dots%20reveals%20shape%20of%20quantum%20wave%20function,-Researchers%20used%20a&text=Researchers%20at%20UC%20Santa%20Cruz,function%20of%20the%20trapped%20electrons."
        },   
        {
            "date": "Sep 24",
            "name": "Metal wires of carbon complete toolbox for carbon-based computers",
            "place": "University of California - Berkeley",
            "description": "Transistors based on carbon rather than silicon could potentially boost computers’ speed and cut their power consumption more than a thousandfold — think of a mobile phone that holds its charge for months — but the set of tools needed to build working carbon circuits has remained incomplete until now.",
            "link": "https://news.berkeley.edu/2020/09/24/metal-wires-of-carbon-complete-toolbox-for-carbon-based-computers/#:~:text=A%20team%20of%20chemists%20and,transistors%20and%2C%20ultimately%2C%20computers."
        }, 
        {
            "date": "Sep 16",
            "name": "From CO2 to Ethylene — UCLA and Caltech Researchers Discover Effective Pathway to Convert Greenhouse Gas into Valuable Products",
            "place": "University of California - Los Angeles",
            "description": "A research team from Caltech and the UCLA Samueli School of Engineering has demonstrated a promising way to efficiently convert carbon dioxide into ethylene — an important chemical used to produce plastics, solvents, cosmetics and other important products globally.",
            "link": "https://samueli.ucla.edu/from-co2-to-ethylene/"
        }, 
        {
            "date": "Aug 20",
            "name": "2D Electronics Get an Atomic Tuneup",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "To tune the band gap, a key parameter in controlling the electrical conductivity and optical properties of semiconductors, researchers typically engineer alloys, a process in which two or more materials are combined to achieve properties that otherwise could not be achieved by a pristine material.",
            "link": "https://newscenter.lbl.gov/2020/08/20/2d-electronics-atomic-tuneup/"
        },
        {
            "date": "Aug 17",
            "name": "Stanford scientists slow and steer light with resonant nanoantennas",
            "place": "Stanford University",
            "description": "Researchers have fashioned ultrathin silicon nanoantennas that trap and redirect light, for applications in quantum computing, LIDAR and even the detection of viruses.",
            "link": "https://news.stanford.edu/press-releases/2020/08/17/slow-light-beam-steering/#:~:text=Stanford%20scientists%20slow%20and%20steer%20light%20with%20resonant%20nanoantennas,-Researchers%20have%20fashioned&text=17%2C%20in%20Nature%20Nanotechnology%2C%20Stanford,to%20direct%20it%20at%20will."
        },  
        {
            "date": "Aug 06",
            "name": "A Closer Look at Water-Splitting’s Solar Fuel Potential",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "Scientists at Berkeley Lab and the Joint Center for Artificial Photosynthesis zero in on bismuth vanadate’s role in renewable energy at the nanoscale",
            "link": "https://newscenter.lbl.gov/2020/08/06/water-splitting-solar-fuel/"
        }, 
        {
            "date": "Jul 15",
            "name": "A Nanomaterial Path Forward for COVID-19 Vaccine Development",
            "place": "University of California - San Diego",
            "description": "From mRNA vaccines entering clinical trials, to peptide-based vaccines and using molecular farming to scale vaccine production, the COVID-19 pandemic is pushing new and emerging nanotechnologies into the frontlines and the headlines. ",
            "link": "https://ucsdnews.ucsd.edu/pressrelease/a-nanomaterial-path-forward-for-covid-19-vaccine-development"
        }, 
        {
            "date": "Jun 17",
            "name": "Nanosponges Could Intercept Coronavirus Infection",
            "place": "University of California - San Diego",
            "description": "Nanoparticles cloaked in human lung cell membranes and human immune cell membranes can attract and neutralize the SARS-CoV-2 virus in cell culture, causing the virus to lose its ability to hijack host cells and reproduce. ",
            "link": "https://ucsdnews.ucsd.edu/pressrelease/nanosponges-2020"
        },
        {
            "date": "Jun 15",
            "name": "Nanomaterial gives robots chameleon skin",
            "place": "University of California - Riverside",
            "description": "A new film made of gold nanoparticles changes color in response to any type of movement. Its unprecedented qualities could allow robots to mimic chameleons and octopi — among other futuristic applications.",
            "link": "https://news.ucr.edu/articles/2020/06/15/nanomaterial-gives-robots-chameleon-skin"
        },
  
        {
            "date": "Jun 04",
            "name": "Scientists Aim Gene-Targeting Breakthrough Against COVID-19",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "A team of scientists from Stanford University is working with researchers at the Molecular Foundry, a nanoscience user facility located at the Department of Energy’s Lawrence Berkeley National Laboratory (Berkeley Lab), to develop a gene-targeting, antiviral agent against COVID-19.",
            "link": "https://www.sciencedaily.com/releases/2020/06/200604095651.htm"
        }, 
        {
            "date": "May 25",
            "name": "New Double-Contrast Technique Picks Up Small Tumors on MRI",
            "place": "University of California - Davis",
            "description": "Early detection of tumors is extremely important in treating cancer. A new technique developed by researchers at the University of California, Davis, offers a significant advance in using magnetic resonance imaging to pick out even very small tumors from normal tissue.",
            "link": "https://www.ucdavis.edu/news/new-double-contrast-technique-picks-small-tumors-mri/"
        },
        {
            "date": "May 14",
            "name": "Making Quantum ‘Waves’ in Ultrathin Materials",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "Study co-led by Berkeley Lab reveals how wavelike plasmons could power up a new class of sensing and photochemical technologies at the nanoscale.",
            "link": "https://newscenter.lbl.gov/2020/05/14/plasmon-waves-ultrathin-materials/"
        },
        {
            "date": "May 08",
            "name": "To climb like a gecko, robots need toes",
            "place": "University of California - Berkeley",
            "description": "Robots with toes? Experiments suggest that climbing robots could benefit from having flexible, hairy toes, like those of geckos, that can adjust quickly to accommodate shifting weight and slippery surfaces.",
            "link": "https://news.berkeley.edu/2020/05/08/to-climb-like-a-gecko-robots-need-toes/"
        },
        {
            "date": "May 06",
            "name": "Second skin protects against chem, bio agents",
            "place": "Lawrence Livermore National Laboratory",
            "description": "Recent events such as the COVID-19 pandemic and the use of chemical weapons in the Syria conflict have provided a stark reminder of the plethora of chemical and biological threats that soldiers, medical personnel and first responders face during routine and emergency operations.",
            "link": "https://www.llnl.gov/news/second-skin-protects-against-chem-bio-agents"
        }, 
        {
            "date": "Apr 22",
            "name": "Researchers discover ferroelectricity at the atomic scale",
            "place": "University of California - Berkeley",
            "description": "A team of researchers have managed to grow ultra-thin material on silicon that can power small electronic devices.",
            "link": "https://engineering.berkeley.edu/news/2020/04/researchers-discover-ferroelectricity-at-the-atomic-scale/"
        },
        {
            "date": "Apr 22",
            "name": "UCLA scientists invent nanoparticle that could improve treatment for bone defects",
            "place": "University of California, Los Angeles",
            "description": "A team of biomaterials scientists and dentists at the UCLA School of Dentistry has developed a nanoparticle that, based on initial experiments in animals, could improve treatment for bone defects.",
            "link": "https://newsroom.ucla.edu/releases/sterosome-nanoparticle-bone-defects-treatment"
        },
        {
            "date": "Apr 21",
            "name": "Controlling ion transport for energy, environment",
            "place": "Lawrence Livermore National Laboratory",
            "description": "Understanding and controlling ion transport in porous materials and at hydrophobic interfaces is critical to a wide variety of energy and environmental technologies, ranging from ion selective membranes, drug delivery and biosensing to ion batteries and supercapacitors.",
            "link": "https://www.llnl.gov/news/controlling-ion-transport-energy-environment"
        },
        {
            "date": "Apr 20",
            "name": "'Decoy' nanoparticles can block HIV and prevent infection",
            "place": "University of California - San Diego",
            "description": "Flipping the standard viral drug targeting approach on its head, engineers at the University of California San Diego have developed a promising new “nanosponge” method for preventing HIV from proliferating in the body: coating polymer nanoparticles with the membranes of T helper cells and turning them into decoys to intercept viral particles and block them from binding and infiltrating the body’s actual immune cells. ",
            "link": "https://jacobsschool.ucsd.edu/news/news_releases/release.sfe?id=3019"
        },    
        {
            "date": "Apr 13",
            "name": "UCI-led team designs carbon nanostructure stronger than diamonds",
            "place": "University of California - Irvine",
            "description": "Researchers at the University of California, Irvine and other institutions have architecturally designed plate-nanolattices – nanometer-sized carbon structures – that are stronger than diamonds as a ratio of strength to density.",
            "link": "https://news.uci.edu/2020/04/13/uci-led-team-designs-carbon-nanostructure-stronger-than-diamonds/"
        },
        {
            "date": "Apr 09",
            "name": "Scientists Capture 3D Images of Nanoparticles, Atom by Atom, With Unprecedented Precision",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "Since their invention in the 1930s, electron microscopes have helped scientists peer into the atomic structure of ordinary materials like steel, and even exotic graphene. But despite these advances, such imaging techniques cannot precisely map out the 3D atomic structure of materials in a liquid solution, such as a catalyst in a hydrogen fuel cell, or the electrolytes in your car’s battery.",
            "link": "https://newscenter.lbl.gov/2020/04/09/3d-nanoparticles-atom-by-atom/"
        },  
        {
            "date": "Mar 31",
            "name": "On Mars or Earth, biohybrid can turn CO2 into new products",
            "place": "University of California - Berkeley",
            "description": "If humans ever hope to colonize Mars, the settlers will need to manufacture on-planet a huge range of organic compounds, from fuels to drugs, that are too expensive to ship from Earth. University of California, Berkeley, and Lawrence Berkeley National Laboratory (Berkeley Lab) chemists have a plan for that.",
            "link": "https://news.berkeley.edu/2020/03/31/on-mars-or-earth-biohybrid-can-turn-co2-into-new-products/"
        }, 
        {
            "date": "Mar 30",
            "name": "Tiny Optical Cavity Could Make Quantum Networks Possible",
            "place": "California Institute of Technology",
            "description": "Engineers at Caltech have shown that atoms in optical cavities—tiny boxes for light—could be foundational to the creation of a quantum internet. Their work was published on March 30 by the journal Nature.",
            "link": "https://www.caltech.edu/about/news/tiny-optical-cavity-could-make-quantum-networks-possible"
        },
        {
            "date": "Mar 24",
            "name": "As electronics shrink to nanoscale, will they still be good as gold?",
            "place": "Stanford University",
            "description": "Engineers wonder whether this tried and true precious metal, found in the bowels of most electronic devices, can stand up to the strain of next-generation data processing.",
            "link": "https://engineering.stanford.edu/magazine/article/electronics-shrink-nanoscale-will-they-still-be-good-gold"
        }, 
        {
            "date": "Mar 19",
            "name": "Nature-Inspired Green Energy Technology Clears Major Development Hurdle",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "A new design has put the long-sought idea of artificial photosynthesis within reach.",
            "link": "https://newscenter.lbl.gov/2020/03/19/green-energy-clears-hurdle/"
        },
        {
            "date": "Mar 13",
            "name": "Pathways Toward Realizing the Promise of All-Solid-State Batteries",
            "place": "University of California - San Diego",
            "description": "In a review article published in the March 2020 issue of Nature Nanotechnology, nanoengineers at the University of California San Diego offer a research roadmap that includes four challenges that need to be addressed in order to advance a promising class of batteries—all-solid-state batteries—to commercialization. This article summarizes the team’s work to tackle these challenges over the past three years, which have been reported in several peer-reviewed articles published in various journals.",
            "link": "https://ucsdnews.ucsd.edu/pressrelease/pathways-toward-realizing-the-promise-of-all-solid-state-batteries"
        },
        {
            "date": "Mar 11",
            "name": "A Graphene Innovation That Is Music to Your Ears",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "A commercially licensed technology developed by Berkeley Lab and UC Berkeley researchers could be available to consumers within the next couple of years",
            "link": "https://newscenter.lbl.gov/2020/03/11/graphene-innovation-music-to-your-ears/"
        },
        {
            "date": "Mar 09",
            "name": "UCLA-led research team produces most accurate 3D images of ‘2D materials’",
            "place": "University of California, Los Angeles",
            "description": "A UCLA-led research team has produced in unprecedented detail experimental three-dimensional maps of the atoms in a so-called 2D material — matter that isn’t truly two-dimensional but is nearly flat because it’s arranged in extremely thin layers, no more than a few atoms thick.",
            "link": "https://newsroom.ucla.edu/releases/3d-images-of-2d-materials"
        },
        {
            "date": "Mar 04",
            "name": "Graphene: A Talented 2D Material Gets a New Gig",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "Berkeley Lab scientists tap into graphene’s hidden talent as an electrically tunable superconductor, insulator, and magnetic device for the advancement of quantum information science",
            "link": "https://newscenter.lbl.gov/2020/03/04/2d-material-gets-a-new-gig/"
        },
        {
            "date": "Feb 25",
            "name": "Light-Shrinking Device Enables Detection of Ultra-Tiny Substances",
            "place": "University of California - San Diego",
            "description": "Engineers at the University of California San Diego and the University of California Berkeley have created light-based technology that can detect biological substances with a molecular mass more than two orders of magnitude smaller than previously possible. The advance was made possible by building a device that shrinks light while exploiting mathematical singularities known as exceptional points (EPs).",
            "link": "https://ucsdnews.ucsd.edu/pressrelease/light-shrinking-device-enables-detection-of-ultra-tiny-substances"
        },
        {
            "year": 2020,
            "date": "Jan 17",
            "name": "UCI chemists find fungal shrapnel in the air",
            "place": "University of California - Irvine",
            "description": "In a discovery that has implications for our understanding of the air we breathe, UCI chemists report that they’ve found nanoscale fragments of fungal cells in the atmosphere. ",
            "link": "https://news.uci.edu/2020/01/17/uci-chemists-find-fungal-shrapnel-in-the-air/"
        },
        {
            "year": 2020,
            "date": "Jan 02",
            "name": "Stanford researchers build a particle accelerator that fits on a chip, miniaturizing a technology that can now find new applications in research and medicine",
            "place": "Stanford University",
            "description": "Just as engineers once compressed some of the power of room-sized mainframes into desktop PCs, so too have Stanford researchers shown how to pack some of the punch delivered by today’s ginormous particle accelerators onto a tiny silicon chip.",
            "link": "https://news.stanford.edu/2020/01/02/accelerator-chip-research-fight-cancer/"
        },
    ],
    '2019': [
        {
            "year": 2019,
            "date": "Dec 11",
            "name": "Heat energy leaps through empty space, thanks to quantum weirdness",
            "place": "University of California - Berkeley",
            "description": "Researchers show that heat energy can travel through a complete vacuum thanks to invisible quantum fluctuations.",
            "link": "https://news.berkeley.edu/2019/12/11/heat-energy-leaps-through-empty-space-thanks-to-quantum-weirdness/"
        },
        {
            "year": 2019,
            "date": "Dec 11",
            "name": "Heat energy leaps through empty space, thanks to quantum weirdness",
            "place": "University of California - Berkeley",
            "description": "Researchers show that heat energy can travel through a complete vacuum thanks to invisible quantum fluctuations.",
            "link": "https://news.berkeley.edu/2019/12/11/heat-energy-leaps-through-empty-space-thanks-to-quantum-weirdness/"
        },
        {
            "year": 2019,
            "date": "Dec 04",
            "name": "Freeze Frame: Scientists Capture Atomic-Scale Snapshots of Artificial Proteins",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "Scientists adapt microscopy technique to build and image peptoid nanosheets with unprecedented atomic precision.",
            "link": "https://newscenter.lbl.gov/2019/12/04/atomic-scale-artificial-proteins/"
        },
        {
            "year": 2019,
            "date": "Dec 02",
            "name": "Making higher-energy light to fight cancer",
            "place": "University of California - Riverside",
            "description": "Researchers use nontoxic silicon nanocrystals to convert low-energy photons into high-energy ones, bringing scientists closer to developing photodynamic treatments for cancer.",
            "link": "https://news.ucr.edu/articles/2019/12/02/making-higher-energy-light-fight-cancer"
        },
        {
            "year": 2019,
            "date": "Dec 02",
            "name": "When solids and liquids meet: In nanoscale detail",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "Infrared technique probes active chemistry at the solid-liquid interface.",
            "link": "https://newscenter.lbl.gov/2019/12/02/solids-and-liquids-in-nanoscale/"
        },
        {
            "year": 2019,
            "date": "Nov 13",
            "name": "Precisely poking cells en masse to cure cancer",
            "place": "University of California - Riverside",
            "description": "Engineers have invented a device that holds potential for mass-producing engineered cells at lower cost, a tipping point for these lifesaving therapies. ",
            "link": "https://news.ucr.edu/articles/2019/11/13/precisely-poking-cells-en-masse-cure-cancer"
        },
        {
            "year": 2019,
            "date": "Oct 25",
            "name": "Micromotors Push Around Single Cells and Particles",
            "place": "University of California - San Diego",
            "description": "A new type of micromotor—powered by ultrasound and steered by magnets—can move around individual cells and microscopic particles in crowded environments without damaging them. The technology could open up new possibilities for targeted drug delivery, nanomedicine, tissue engineering, regenerative medicine and other biomedical applications.",
            "link": "https://ucsdnews.ucsd.edu/pressrelease/micromotors-push-around-single-cells-and-particles"
        },
        {
            "year": 2019,
            "date": "Oct 18",
            "name": "Novel nanoprobes show promise for optical monitoring of neural activity",
            "place": "University of California - Santa Cruz",
            "description": "Researchers have developed ultrasensitive nanoscale optical probes to monitor the bioelectric activity of neurons and other excitable cells. This novel readout technology could enable scientists to study how neural circuits function at an unprecedented scale by monitoring large numbers of individual neurons simultaneously. It could also lead to high-bandwidth brain-machine interfaces with dramatically enhanced precision and functionality.",
            "link": "https://news.ucsc.edu/2019/10/optical-nanoprobes.html"
        },
        {
            "year": 2019,
            "date": "Sep 26",
            "name": "Use of nanopores could lead to cleaner water",
            "place": "Lawrence Livermore National Laboratory",
            "description": "A better understanding of transport at the nanoscale can lead to innovative technologies such as new membranes for water purification, new gas-permeable materials and energy storage devices.",
            "link": "https://www.llnl.gov/news/use-nanopores-could-lead-cleaner-water"
        },
        {
            "year": 2019,
            "date": "Sep 20",
            "name": "NASA Sale Launches HRL Laboratories’ Commercial 3D-Printed Aluminum Effort",
            "place": "HRL Laboratories",
            "description": "A new process for 3D-printing things could pave the way for lighter, faster aircraft that potentially fly further on the same amount of fuel.",
            "link": "http://www.hrl.com/news/2019/09/30/nasa-sale-launches-hrl-laboratories-commercial-3d-printed-aluminum-effort"
        },
        {
            "year": 2019,
            "date": "Aug 21",
            "name": "Deep learning enables scientists to identify cancer cells in blood in milliseconds",
            "place": "University of California, Los Angeles",
            "description": "Technique could allow cells to be extracted in real time, help prevent cancer from spreading",
            "link": "https://newsroom.ucla.edu/releases/deep-learning-identifies-cancer-cells-in-blood"
        },
        {
            "year": 2019,
            "date": "Aug 21",
            "name": "Dr. Meng Group Discover Reason for Lithium Battery Failure",
            "place": "University of California, San Diego",
            "description": "NanoEngineering professor, Dr. Shirley Meng and colleagues have discovered the reason behind the failure of lithium metal batteries. UC San Diego researchersfound that bits of lithium metal deposits are breaking off from the anode surface during discharging and being trapped where the battery can no longer access it. The technique used by the group to measure inactive lithium species was also momentous in that it was the first in the field of battery research.  Study findings were published in Nature.",
            "link": "http://nanoengineering.ucsd.edu/node/695"
        },
        {
            "year": 2019,
            "date": "Aug 20",
            "name": "Technique could make better membranes for next-generation filtration",
            "place": "University of California, Los Angeles",
            "description": "The key to the process is the membrane filter — a thin, semi-porous film that allows certain substances such as water to pass through while separating out other, unwanted substances. But in the past 30 years, there have been no significant improvements in the materials that make up the key layers of commercially produced membrane filters.",
            "link": "http://newsroom.ucla.edu/releases/t-flo-technique-better-membranes-filtration"
        },
        {
            "year": 2019,
            "date": "Aug 16",
            "name": "Optofluidic chip with nanopore 'smart gate' developed for single molecule analysis",
            "place": "University of California, Santa Cruz",
            "description": "Programmable device enables on-demand delivery of individual biomolecules with feedback-controlled gating for high-throughput analysis",
            "link": "https://news.ucsc.edu/2019/08/nanopore-optofluidics.html"
        },
        {
            "year": 2019,
            "date": "Aug 14",
            "name": "Nanocapsule reaches cancer that has spread to central nervous system in mice",
            "place": "University of California, Los Angeles",
            "description": "UCLA RESEARCH BRIEF",
            "link": "https://newsroom.ucla.edu/releases/nanocapsule-cancer-central-nervous-system"
        },
        {
            "year": 2019,
            "date": "Aug 12",
            "name": "NanoEngineering Research Lab Develops Thinnest Optical Device in the World 8/12/2019",
            "place": "University of California, San Diego",
            "description": "UC San Diego - Researchers led by NanoEngineering professor, Dr. Ert. Cubukcu, have developed a wave guide that is three layers of atoms thin - the thinnest optical device in the world. To create it, researchers used advanced micro- and nanofabrication techniques. This breakthrough could lead to the development of higher density and capacity photonic chips. The study findings were published in Nature Nanotechnology.",
            "link": "http://nanoengineering.ucsd.edu/node/692"
        },
        {
            "year": 2019,
            "date": "Jul 07",
            "name": "Darren Lipomi Named Recipient of Presidential Early Career Award",
            "place": "University of California, San Diego",
            "description": "UC San Diego - Congratulations to NanoEngineering professor, Darren Lipomi for being named recipient of the Presidential Early Career Award for Scientists and Engineers (PECASE). This award is the highest honor bestowed by the U.S. government on scientists and engineers in recognition for their contributions to the advancement of science, technology and engineering.",
            "link": "http://nanoengineering.ucsd.edu/node/684"
        }
    ]
}
const US_NEWS = {
    '2020': [
        {
            "date": "Dec 07",
            "name": "Harnessing Quantum Properties to Create Single-Molecule Devices",
            "place": "Columbia University",
            "description": "Researchers, led by Columbia Engineering Professor Latha Venkataraman, report today that they have discovered a new chemical design principle for exploiting destructive quantum interference. They used their approach to create a six-nanometer single-molecule switch where the on-state current is more than 10,000 times greater than the off-state current—the largest change in current achieved for a single-molecule circuit to date.",
            "link": "https://www.apam.columbia.edu/press-releases/venkataraman-quantum-single-molecule-device"
        },
        {
            "date": "Dec 07",
            "name": "Researchers develop unique process for producing light-matter mixture",
            "place": "University of Minnesota",
            "description": "In groundbreaking new research, an international team of researchers led by the University of Minnesota Twin Cities has developed a unique process for producing a quantum state that is part light and part matter. ",
            "link": "https://twin-cities.umn.edu/news-events/researchers-develop-unique-process-producing-light-matter-mixture#:~:text=In%20groundbreaking%20new%20research%2C%20an,part%20light%20and%20part%20matter.&text=Quantum%20science%20studies%20natural%20phenomena,matter%20at%20the%20smallest%20scales."
        },
        {
            "date": "Dec 04",
            "name": "Paper-based electrochemical sensor can detect COVID-19 in less than five minutes",
            "place": "University of Illinois Grainger College of Engineering",
            "description": "As the COVID-19 pandemic continues to spread across the world, testing remains a key strategy for tracking and containing the virus. Bioengineering graduate student, Maha Alafeef, has co-developed a rapid, ultrasensitive test using a paper-based electrochemical sensor that can detect the presence of the virus in less than five minutes. The team led by professor Dipanjan Pan reported their findings in ACS Nano.",
            "link": "https://bioengineering.illinois.edu/news/article/paper-based-electrochemical-sensor-covid-19"
        },
        {
            "date": "Dec 03",
            "name": "Chemists get peek at novel fluorescence",
            "place": "Rice University",
            "description": "That carbon nanotubes fluoresce is no longer a surprise. Finding a second level of fluorescence is surprising and potentially useful.",
            "link": "https://news.rice.edu/2020/12/03/chemists-get-peek-at-novel-fluorescence/"
        },
        {
            "date": "Dec 03",
            "name": "New Platform Generates Hybrid Light-Matter Excitations in Highly Charged Graphene",
            "place": "Columbia University ",
            "description": "Columbia researchers are the first to use static charge between 2D atomic layers to provide a new route for generating graphene plasmon polaritons without an external power source or chemical dopants; discovery has broad application in nanotechnology",
            "link": "https://www.engineering.columbia.edu/press-releases/hybrid-light-matter-excitations"
        },
        {
            "date": "Dec 02",
            "name": "Nanomaterials Enable Passive Dual-Mode Heating and Cooling Device",
            "place": "Duke University",
            "description": "Engineers at Duke University have demonstrated a dual-mode heating and cooling device for building climate control that, if widely deployed in the U.S., could cut HVAC energy use by nearly 20%.",
            "link": "https://mems.duke.edu/about/news/nanomaterials-enable-passive-dual-mode-heating-and-cooling-device"
        },
        {
            "date": "Dec 02",
            "name": "No nanoparticle risks to humans found in field tests of spray sunscreens",
            "place": "Penn State",
            "description": "People can continue using mineral-based aerosol sunscreens without fear of exposure to dangerous levels of nanoparticles or other respirable particulates, according to Penn State research published in the journal Aerosol Science and Engineering.",
            "link": "https://news.psu.edu/story/640588/2020/12/02/research/no-nanoparticle-risks-humans-found-field-tests-spray-sunscreens#:~:text=No%20nanoparticle%20risks%20to%20humans%20found%20in%20field%20tests%20of%20spray%20sunscreens,-AddThis%20Sharing%20Buttons&text=Penn%20State%20researchers%20field%20tested,related%20to%20exposure%20to%20nanoparticles."
        },
        {
            "date": "Dec 01",
            "name": "New Glue Sticks Easily, Holds Strongly, and is a Gas to Pull Apart",
            "place": "Dartmouth College",
            "description": "Temporary glues may not steal headlines, but they can make everyday life easier.",
            "link": "https://www.dartmouth.edu/press-releases/new-glue-sticks-easily-holds-strongly-gas-pull-apart.html#:~:text=Molecular%20solids%20being%20studied%20by,without%20disturbing%20the%20bonded%20surfaces."
        },
        {
            "date": "Nov 24",
            "name": "Creating Higher Energy Density Lithium-Ion Batteries for Renewable Energy Applications",
            "place": "American Institute of Physics",
            "description": "Lithium-ion batteries (LIBs) that function as high-performance power sources for renewable applications, such as electric vehicles and consumer electronics, require electrodes that deliver high energy density without compromising cell lifetimes.",
            "link": "https://publishing.aip.org/publications/latest-content/creating-higher-energy-density-lithium-ion-batteries-for-renewable-energy-applications/"
        },
        {
            "date": "Nov 19",
            "name": "Predicting Forces between Oddly Shaped Nanoparticles",
            "place": "Duke University",
            "description": "Materials scientists at Duke University have devised a simplified method for calculating the attractive forces that cause nanoparticles to self-assemble into larger structures.",
            "link": "https://pratt.duke.edu/about/news/faceted-nanoparticles-energy"
        },
        {
            "date": "Nov 18",
            "name": "UIC researchers describe fundamental processes behind movement of magnetic particles",
            "place": "University of Illinois at Chicago",
            "description": "The motion of magnetic particles as they pass through a magnetic field is called magnetophoresis. Until now, not much was known about the factors influencing these particles and their movement. Now, researchers from the University of Illinois Chicago describe several fundamental processes associated with the motion of magnetic particles through fluids as they are pulled by a magnetic field.",
            "link": "https://today.uic.edu/uic-researchers-describe-fundamental-processes-behind-movement-of-magnetic-particles"
        },
        {
            "date": "Nov 18",
            "name": "A DNA-based nanogel for targeted chemotherapy ",
            "place": "American Chemical Society",
            "description": "Current chemotherapy regimens slow cancer progression and save lives, but these powerful drugs affect both healthy and cancerous cells. Now, researchers reporting in ACS’ Nano Letters have designed DNA-based nanogels that only break down and release their chemotherapeutic contents within cancer cells, minimizing the impacts on normal ones and potentially eliminating painful and uncomfortable side effects.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-november-18-2020/a-dna-based-nanogel-for-targeted-chemotherapy.html"
        },            
        {
            "date": "Nov 16",
            "name": "New Technology Allows More Precise View Of The Smallest Nanoparticles",
            "place": "University of Houston",
            "description": "Current state-of-the-art techniques have clear limitations when it comes to imaging the smallest nanoparticles, making it difficult for researchers to study viruses and other structures at the molecular level.",
            "link": "https://www.egr.uh.edu/news/202011/new-technology-allows-more-precise-view-smallest-nanoparticles"
        },
        {
            "date": "Nov 12",
            "name": "Pearls may provide new information processing options for biomedical, military innovations",
            "place": "Purdue University",
            "description": "Pearls have long been favored as objects of beauty. Now, Purdue University innovators are using the gem to provide potential new opportunities for spectral information processing that can be applied to spectroscopy in biomedical and military applications.",
            "link": "https://www.purdue.edu/newsroom/releases/2020/Q4/pearls-may-provide-new-information-processing-options-for-biomedical,-military-innovations.html#:~:text=Now%2C%20Purdue%20University%20innovators%20are,by%20creating%20a%20pearl%20spectrometer."
        },
        {
            "date": "Nov 09",
            "name": "A better understanding of coral skeleton growth suggests ways to restore reefs",
            "place": "University of Wisconsin-Madison",
            "description": "Coral reefs are vibrant communities that host a quarter of all species in the ocean and are indirectly crucial to the survival of the rest. But they are slowly dying — some estimates say 30 to 50 percent of reefs have been lost — due to climate change.",
            "link": "https://news.wisc.edu/a-better-understanding-of-coral-skeleton-growth-suggests-ways-to-restore-reefs/"
        },
        {
            "date": "Nov 04",
            "name": "Luminescent wood could light up homes of the future ",
            "place": "American Chemical Society",
            "description": "The right indoor lighting can help set the mood, from a soft romantic glow to bright, stimulating colors.  But some materials used for lighting, such as plastics, are not eco-friendly. Now, researchers reporting in ACS Nano have developed a bio-based, luminescent, water-resistant wood film that could someday be used as cover panels for lamps, displays and laser devices.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-november-4-2020/luminescent-wood-could-light-up-homes-of-the-future.html"
        },
        {
            "date": "Nov 02",
            "name": "Room Temperature Conversion of CO2 to CO: A New Way to Synthesize Hydrocarbons",
            "place": "National Institute of Standards and Technology (NIST)",
            "description": "Researchers at the National Institute of Standards and Technology (NIST) and their colleagues have demonstrated a room-temperature method that could significantly reduce carbon dioxide levels in fossil-fuel power plant exhaust, one of the main sources of carbon emissions in the atmosphere.",
            "link": "https://www.nist.gov/news-events/news/2020/11/room-temperature-conversion-co2-co-new-way-synthesize-hydrocarbons#:~:text=Researchers%20at%20the%20National%20Institute,carbon%20emissions%20in%20the%20atmosphere."
        },
        {
            "date": "Oct 30",
            "name": "Research lays groundwork for ultra-thin, energy efficient photodetector on glass",
            "place": "Penn State",
            "description": "Though we may not always realize it, photodetectors contribute greatly to the convenience of modern life. Also known as photosensors, photodetectors convert light energy into electrical signals to complete tasks such as opening automatic sliding doors and automatically adjusting a cell phone’s screen brightness in different lighting conditions.",
            "link": "https://news.psu.edu/story/637229/2020/10/30/research/research-lays-groundwork-ultra-thin-energy-efficient-photodetector"
        },
        {
            "date": "Oct 30",
            "name": "A new spin on atoms gives scientists a closer look at quantum weirdness",
            "place": "Princeton University",
            "description": "When atoms get extremely close, they develop intriguing interactions that could be harnessed to create new generations of computing and other technologies. These interactions in the realm of quantum physics have proven difficult to study experimentally due the basic limitations of optical microscopes.",
            "link": "https://engineering.princeton.edu/news/2020/10/30/new-spin-atoms-gives-scientists-closer-look-quantum-weirdness#:~:text=A%20new%20spin%20on%20atoms%20gives%20scientists%20a%20closer%20look%20at%20quantum%20weirdness,-By%20Scott%20Lyon&text=Now%20a%20team%20of%20Princeton,optical%20lens%20can%20distinguish%20them."
        },
        {
            "date": "Oct 30",
            "name": "Researchers Develop a New Way to Create a Spectrum of Natural-looking Hair Colors",
            "place": "Northwestern University",
            "description": "We’ve long been warned of the risks of dyeing hair at home and in salons. Products used can cause allergies and skin irritation — an estimated one percent of people have an allergy to dye. Furthermore, repeated use of some dyes has been linked to cancer.",
            "link": "https://www.mccormick.northwestern.edu/news/articles/2020/10/researchers-develop-a-new-way-to-create-a-spectrum-of-natural-looking-hair-colors.html"
        },
        {
            "date": "Oct 29",
            "name": "Flash graphene rocks strategy for plastic waste",
            "place": "Rice University",
            "description": "Rice lab detours potential environmental hazard into useful material",
            "link": "https://news.rice.edu/2020/10/29/flash-graphene-rocks-strategy-for-plastic-waste-2/"
        },
        {
            "date": "Oct 29",
            "name": "Rice finds path to nanodiamond from graphene",
            "place": "Rice University",
            "description": "A spot of pressure enables chemical conversion to hardened 2D material ",
            "link": "https://news.rice.edu/2020/10/29/rice-finds-path-to-nanodiamond-from-graphene-2/"
        },
        {
            "date": "Oct 29",
            "name": "Breakthrough quantum-dot transistors create a flexible alternative to conventional electronics",
            "place": "Los Alamos National Laboratory",
            "description": "Researchers at Los Alamos National Laboratory and their collaborators from the University of California, Irvine have created fundamental electronic building blocks out of tiny structures known as quantum dots and used them to assemble functional logic circuits. The innovation promises a cheaper and manufacturing-friendly approach to complex electronic devices that can be fabricated in a chemistry laboratory via simple, solution-based techniques, and offer long-sought components for a host of innovative devices.",
            "link": "https://www.lanl.gov/discover/news-release-archive/2020/October/1029-quantum-dot-transistors.php"
        },
        {
            "date": "Oct 28",
            "name": "Turning a coronavirus protein into a nanoparticle could be key for COVID-19 vaccine",
            "place": "University at Buffalo",
            "description": " A University at Buffalo-led research team has discovered a technique that could help increase the effectiveness of vaccines against the novel coronavirus, the virus that causes COVID-19.",
            "link": "http://www.buffalo.edu/news/releases/2020/10/028.html"
        },            
        {
            "date": "Oct 26",
            "name": "On-surface synthesis of graphene nanoribbons could advance quantum devices",
            "place": "Oak Ridge National Laboratory",
            "description": "An international multi-institution team of scientists has synthesized graphene nanoribbons – ultrathin strips of carbon atoms – on a titanium dioxide surface using an atomically precise method that removes a barrier for custom-designed carbon nanostructures required for quantum information sciences.",
            "link": "https://www.ornl.gov/news/surface-synthesis-graphene-nanoribbons-could-advance-quantum-devices"
        },
        {
            "date": "Oct 26",
            "name": "Rice rolls out next-gen nanocars",
            "place": "Rice University",
            "description": "Nanomechanics at Rice University and the University of Houston are getting ready to rev their engines for the second international Nanocar Race.",
            "link": "http://news.rice.edu/2020/10/26/rice-rolls-out-next-gen-nanocars-2/"
        },
        {
            "date": "Oct 22",
            "name": "Do the twist: Making two-dimensional quantum materials using curved surfaces",
            "place": "University of Wisconsin-Madison",
            "description": "Scientists at the University of Wisconsin–Madison have discovered a way to control the growth of twisting, microscopic spirals of materials just one atom thick.",
            "link": "https://news.wisc.edu/do-the-twist-making-two-dimensional-quantum-materials-using-curved-surfaces/#:~:text=Do%20the%20twist%3A%20Making%20two%2Ddimensional%20quantum%20materials%20using%20curved%20surfaces,-October%2022%2C%202020&text=Scientists%20at%20the%20University%20of,materials%20just%20one%20atom%20thick."
        },
        {
            "date": "Oct 22",
            "name": "Cicada-inspired waterproof surfaces closer to reality, researchers report",
            "place": "University of Illinois at Urbana-Champaign, News Bureau",
            "description": "A multidisciplinary group that studies the physical and chemical properties of insect wings has demonstrated the ability to reproduce the nanostructures that help cicada wings repel water and prevent bacteria from establishing on the surface. The new technique – which uses commercial nail polish – is economical and straightforward, and the researchers said it will help fabricate future high-tech waterproof materials.",
            "link": "https://news.illinois.edu/view/6367/1104928821"
        },
        {
            "date": "Oct 19",
            "name": "A trillion turns of light nets terahertz polarized bytes",
            "place": "Rice University",
            "description": "U.S. and Italian engineers have demonstrated the first nanophotonic platform capable of manipulating polarized light 1 trillion times per second.",
            "link": "https://news.rice.edu/2020/10/19/a-trillion-turns-of-light-nets-terahertz-polarized-bytes-2/"
        },
        {
            "date": "Oct 16",
            "name": "Calcium bursts kill drug-resistant tumor cells",
            "place": "American Chemical Society",
            "description": "Multidrug resistance (MDR) –– a process in which tumors become resistant to multiple medicines –– is the main cause of failure of cancer chemotherapy. Tumor cells often acquire MDR by boosting their production of proteins that pump drugs out of the cell, rendering the chemotherapies ineffective. Now, researchers reporting in ACS’ Nano Letters have developed nanoparticles that release bursts of calcium inside tumor cells, inhibiting drug pumps and reversing MDR.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2020/october/calcium-bursts-kill-drug-resistant-tumor-cells.html#:~:text=Now%2C%20researchers%20reporting%20in%20ACS,a%20key%20role%20in%20MDR."
        },
        {
            "date": "Oct 14",
            "name": "A first-of-its-kind catalyst mimics natural processes to break down plastic and produce valuable new products",
            "place": "Ames Laboratory",
            "description": "While plastics recycling is not new science, current processes don’t make it economically worthwhile-- waste plastics get “down-cycled” into lower grade, less useful material. It’s a challenge that continues to be an obstacle in tackling a growing global pollution crisis in single use plastics.",
            "link": "https://www.ameslab.gov/news/a-first-of-its-kind-catalyst-mimics-natural-processes-to-break-down-plastic-and-produce"
        },
        {
            "date": "Oct 13",
            "name": "COVID-19 rapid test has successful lab results, research moves to next stages",
            "place": "University of Nevada, Reno",
            "description": "Rapid detection of the SARS-CoV-2 virus, in about 30 seconds following the test, has had successful preliminary results in Mano Misra’s lab at the University of Nevada, Reno. The test uses a nanotube-based electrochemical biosensor, a similar technology that Misra has used in the past for detecting tuberculosis and colorectal cancer as well as detection of biomarkers for food safety.",
            "link": "https://www.unr.edu/nevada-today/news/2020/covid-19-rapid-test#:~:text=Rapid%20detection%20of%20the%20SARS,the%20University%20of%20Nevada%2C%20Reno."
        },        
        {
            "date": "Oct 06",
            "name": "All together now: Experiments with twisted 2D materials catch electrons behaving collectively",
            "place": "University of Washington",
            "description": "Scientists can have ambitious goals: curing disease, exploring distant worlds, clean-energy revolutions. In physics and materials research, some of these ambitious goals are to make ordinary-sounding objects with extraordinary properties: wires that can transport power without any energy loss, or quantum computers that can perform complex calculations that today’s computers cannot achieve. And the emerging workbenches for the experiments that gradually move us toward these goals are 2D materials — sheets of material that are a single layer of atoms thick.",
            "link": "https://www.washington.edu/news/2020/10/06/2d-materials-electron-collective/#:~:text=In%20a%20paper%20published%20Sept,exhibit%20highly%20correlated%20electron%20properties."
        },
        {
            "date": "Oct 06",
            "name": "Multi-institutional team extracts more energy from sunlight with advanced solar panels",
            "place": "University of Illinois at Urbana-Champaign, News Bureau",
            "description": "Researchers working to maximize solar panel efficiency said layering advanced materials atop traditional silicon is a promising path to eke more energy out of sunlight. A new study shows that by using a precisely controlled fabrication process, researchers can produce multilayered solar panels with the potential to be 1.5 times more efficient than traditional silicon panels.",
            "link": "https://news.illinois.edu/view/6367/1955138234"
        },
        {
            "date": "Oct 05",
            "name": "‘Like a fishing net,’ nanonet collapses to trap drug molecules",
            "place": "Northwestern University",
            "description": "The team has discovered a new, rapid method for fabricating nanoparticles from a simple, self-assembling polymer. The novel method presents new possibilities for diverse applications, including water purification, diagnostics and rapidly generating vaccine formulations, which typically require many different types of molecules to be either captured or delivered at the same time.",
            "link": "https://news.northwestern.edu/stories/2020/10/like-a-fishing-net-nanonet-collapses-to-trap-drug-molecules/"
        },
        {
            "date": "Sep 29",
            "name": "Nanotech Filter Coating Offers Promise Against COVID-19",
            "place": "University of Houston",
            "description": "A physics professor from the University of Houston has developed a nanotech coating designed to allow air filters to capture airborne or aerosolized droplets of the virus that causes COVID-19.",
            "link": "https://uh.edu/news-events/stories/2020/september-2020/09292020-curran-covid-filter.php"
        },
        {
            "date": "Sep 28",
            "name": "New Brain Cell-Like Nanodevices Work Together To Identify Mutations In Viruses",
            "place": "Texas A&M University",
            "description": "In the September issue of the journal Nature, scientists from Texas A&M University, Hewlett Packard Labs and Stanford University have described a new nanodevice that acts almost identically to a brain cell. They have shown that these synthetic brain cells can be joined together to form intricate networks that can then solve problems in a brain-like manner.",
            "link": "https://today.tamu.edu/2020/09/28/new-brain-cell-like-nanodevices-work-together-to-identify-mutations-in-viruses/#:~:text=Researchers%20have%20built%20a%20new,just%20like%20a%20brain%20cell.&text=In%20the%20September%20issue%20of,identically%20to%20a%20brain%20cell."
        },
        {
            "date": "Sep 22",
            "name": "NIST Scientists Get Soft on 3D Printing",
            "place": "National Institute of Standards and Technology (NIST)",
            "description": "Researchers at the National Institute of Standards and Technology (NIST) have developed a new method of 3D-printing gels and other soft materials. Published in a new paper, it has the potential to create complex structures with nanometer-scale precision. Because many gels are compatible with living cells, the new method could jump-start the production of soft tiny medical devices such as drug delivery systems or flexible electrodes that can be inserted into the human body.",
            "link": "https://www.nist.gov/news-events/news/2020/09/nist-scientists-get-soft-3d-printing"
        },
        {
            "date": "Sep 22",
            "name": "A multishot lensless camera in development could aid disease diagnosis",
            "place": "Penn State University",
            "description": "A new type of imaging that does not require a lens and uses reconfigurable particle-based masks to take multiple shots of an object is being developed by researchers at Penn State. The electric-field directed self-assembling mask technology is expected to have uses in lower-cost and faster disease diagnosis, the enhancement of optical microscopy, and may even lead to thinner cellphone technology.",
            "link": "https://news.psu.edu/story/632648/2020/09/22/research/multishot-lensless-camera-development-could-aid-disease-diagnosis"
        },       
        {
            "date": "Sep 21",
            "name": "NASA’s IRIS Spots Nanojets: Shining Light On Heating the Solar Corona",
            "place": "NASA Goddard Space Flight Center",
            "description": "In a paper published today in Nature Astronomy, researchers report the first ever clear images of nanojets -- bright thin lights that travel perpendicular to the magnetic structures in the solar atmosphere, called the corona -- in a process that reveals the existence of one of the potential coronal heating candidates: nanoflares.",
            "link": "https://www.nasa.gov/feature/goddard/2020/nasa-s-iris-spots-nanojets-shining-light-on-heating-the-solar-corona"
        },
        {
            "date": "Sep 21",
            "name": "New composite material revs up pursuit of advanced electric vehicles",
            "place": "Oak Ridge National Laboratory",
            "description": "Scientists at Oak Ridge National Laboratory used new techniques to create a composite that increases the electrical current capacity of copper wires, providing a new material that can be scaled for use in ultra-efficient, power-dense electric vehicle traction motors.",
            "link": "https://www.ornl.gov/news/new-composite-material-revs-pursuit-advanced-electric-vehicles"
        },
        {
            "date": "Sep 21",
            "name": "Technique permits convenient, precise optical imaging of individual proteins",
            "place": "Arizona State University",
            "description": "Often considered the workhorses of the body, proteins are among the most important biomolecules critical to life processes. They provide structural foundation for cells and tissues and perform a dizzying array of tasks, from metabolizing energy and helping cells communicate with one another to defending the body from pathogens and guiding cell division and growth.",
            "link": "https://biodesign.asu.edu/news/technique-permits-convenient-precise-optical-imaging-individual-proteins"
        },
        {
            "date": "Sep 18",
            "name": "Engineers produce a fisheye lens that’s completely flat",
            "place": "Massachusetts Institute of Technology",
            "description": "To capture panoramic views in a single shot, photographers typically use fisheye lenses — ultra-wide-angle lenses made from multiple pieces of curved glass, which distort incoming light to produce wide, bubble-like images. Their spherical, multipiece design makes fisheye lenses inherently bulky and often costly to produce.",
            "link": "https://news.mit.edu/2020/flat-fisheye-lens-0918"
        },
        {
            "date": "Sep 18",
            "name": "NCATS, NRL Create Nanoparticle SARS-CoV-2 Model to Speed Drug Discovery for COVID-19",
            "place": "NIH/National Center for Advancing Translational Sciences (NCATS)",
            "description": "A team of scientists from the NCATS and Naval Research Laboratory (NRL) in Washington, D.C., has developed a new tool that mimics how SARS-CoV-2 — the virus that causes COVID-19 — infects a cell, information that could potentially speed the search for treatments against the disease.",
            "link": "https://ncats.nih.gov/news/releases/2020/ncats-nrl-create-nanoparticle-sars-cov-2-model-to-speed-drug-discovery-for-covid-19"
        },
        {
            "date": "Sep 18",
            "name": "Shape matters for light-activated nanocatalysts",
            "place": "Rice University",
            "description": "Researchers at Rice University’s Laboratory for Nanophotonics (LANP) have long known that a nanoparticle’s shape affects how it interacts with light, and their latest study shows how shape affects a particle’s ability to use light to catalyze important chemical reactions.",
            "link": "http://news.rice.edu/2020/09/18/shape-matters-for-light-activated-nanocatalysts-2/"
        },
        {
            "date": "Sep 17",
            "name": "Most homemade masks are doing a great job, even when we sneeze, study finds",
            "place": "University of Illinois at Urbana-Champaign, News Bureau",
            "description": "Studies indicate that homemade masks help combat the spread of viruses like COVID-19 when combined with frequent hand-washing and physical distancing. Many of these studies focus on the transfer of tiny aerosol particles; however, researchers say that speaking, coughing and sneezing generates larger droplets that carry virus particles. Because of this, mechanical engineer Taher Saif said the established knowledge may not be enough to determine the effectiveness of some fabrics used in homemade masks.",
            "link": "https://news.illinois.edu/view/6367/1603161133"
        },
        {
            "date": "Sep 15",
            "name": "Engineers imitate human hands to make better sensors",
            "place": "Penn State University ",
            "description": "An international research team has developed “electronic skin” sensors capable of mimicking the dynamic process of human motion. This work could help severely injured people, such as soldiers, regain the ability to control their movements, as well as contribute to the development of smart robotics, according to Huanyu “Larry” Cheng, Dorothy Quiggle Early Career Professor in the Penn State Department of Engineering Science and Mechanics.",
            "link": "https://news.psu.edu/story/631783/2020/09/15/research/engineers-imitate-human-hands-make-better-sensors"
        },
        {
            "date": "Sep 14",
            "name": "New method to design diamond lattices, other crystals from microscopic building blocks",
            "place": "Arizona State University",
            "description": "An impressive array of architectural forms can be produced from the popular interlocking building blocks known as Legos. All that is needed is a child’s imagination to construct a virtually infinite variety of complex shapes.",
            "link": "https://asunow.asu.edu/20200914-new-method-design-diamond-lattices-other-crystals-microscopic-building-blocks"
        },
        {
            "date": "Sep 14",
            "name": "Researchers Create Morphing Crystals Powered by Water Evaporation",
            "place": "Advanced Science Research Center",
            "description": "New study details the molecular-level design of materials that enable clean and sustainable water evaporation energy to be harvested and efficiently converted into motion, with the potential to power future mechanical devices and machines.",
            "link": "https://asrc.gc.cuny.edu/headlines/2020/09/researchers-create-morphing-crystals-powered-by-water-evaporation/"
        },          
        {
            "date": "Sep 11",
            "name": "Dipanjan Pan demonstrates new method to produce gold nanoparticles directly in cancer cells with possible applications in x-ray imaging, cancer treatment",
            "place": "University of Maryland Baltimore County",
            "description": "Dipanjan Pan, professor of chemical, biochemical, and environmental engineering at UMBC, and collaborators have published a seminal study in Nature Communications that demonstrates for the first time a method of biosynthesizing plasmonic gold nanoparticles within cancer cells, without the need for conventional bench-top lab methods. It has the potential to notably expand biomedical applications. ",
            "link": "https://news.umbc.edu/dipanjan-pan-demonstrates-new-method-to-produce-gold-nanoparticles-directly-in-cancer-cells-with-possible-applications-in-x-ray-imaging-cancer-treatment/"
        },
        {
            "date": "Sep 10",
            "name": "Inexpensive, Non-Toxic Nanofluid Could Be a Game-Changer for Oil Recovery",
            "place": "University of Houston",
            "description": "Researchers from the University of Houston have demonstrated that an inexpensive and non-toxic nanofluid can be used to efficiently recover even heavy oil with high viscosity from reservoirs.",
            "link": "https://uh.edu/news-events/stories/2020/september-2020/09102020ren-nanofluid-oil.php#:~:text=News%20Releases-,Inexpensive%2C%20Non%2DToxic%20Nanofluid%20Could%20Be%20a,Game%2DChanger%20for%20Oil%20Recovery&text=Researchers%20from%20the%20University%20of%20Houston%20have%20demonstrated%20that%20an,with%20high%20viscosity%20from%20reservoirs."
        },
        {
            "date": "Sep 10",
            "name": "High-precision electrochemistry: The new gold standard in fuel cell catalyst development",
            "place": "Argonne National Laboratory",
            "description": "Vehicles powered by polymer electrolyte membrane fuel cells (PEMFCs) are energy-efficient and eco-friendly, but despite increasing public interest in PEMFC-powered transportation, current performance of materials that are used in fuel cells limits their widespread commercialization.",
            "link": "https://www.anl.gov/article/highprecision-electrochemistry-the-new-gold-standard-in-fuel-cell-catalyst-development"
        },
        {
            "date": "Sep 09",
            "name": "Sampling the gut microbiome with an ingestible pill",
            "place": "American Chemical Society",
            "description": "Gut microbes affect human health, but there is still much to learn, in part because they’re not easy to collect. But researchers now report in ACS Nano that they have developed an ingestible capsule that in rat studies captured bacteria and other biological samples while passing through the gastrointestinal (GI) tract.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-september-9-2020/sampling-the-gut-microbiome-with-an-ingestible-pill.html"
        },
        {
            "date": "Sep 08",
            "name": "Boundaries no barrier for thermoelectricity",
            "place": "Rice University",
            "description": "Though the Summer Olympics were postponed, there’s at least one place to see agile hurdlers go for the gold.",
            "link": "https://news.rice.edu/2020/09/08/boundaries-no-barrier-for-thermoelectricity/"
        },
        {
            "date": "Sep 07",
            "name": "A new twist on DNA origami",
            "place": "Arizona State University",
            "description": "A team of scientists from Arizona State University and Shanghai Jiao Tong University (SJTU), led by Hao Yan, ASU’s Milton Glick Professor in the School of Molecular Sciences and director of the ASU Biodesign Institute’s Center for Molecular Design and Biomimetics, has just announced the creation of a new type of meta-DNA structures that will open up the fields of optoelectronics, including information storage and encryption as well as synthetic biology.",
            "link": "https://asunow.asu.edu/20200904-new-twist-dna-origami"
        },
        {
            "date": "Sep 02",
            "name": "Ambient light alters refraction in 2D material",
            "place": "Rice University",
            "description": "Microscopic crystals in tantalum disulfide have a starring role in what could become a hit for 3D displays, virtual reality and even self-driving vehicles.",
            "link": "http://news.rice.edu/2020/09/02/ambient-light-alters-refraction-in-2d-material/"
        },
        {
            "date": "Sep 01",
            "name": "Your paper notebook could become your next tablet",
            "place": "Purdue University",
            "description": "Innovators from Purdue University hope their new technology can help transform paper sheets from a notebook into a music player interface and make food packaging interactive.",
            "link": "https://www.purdue.edu/newsroom/releases/2020/Q3/your-paper-notebook-could-become-your-next-tablet.html"
        },        
        {
            "date": "Aug 31",
            "name": "An improved wearable, stretchable gas sensor using nanocomposites",
            "place": "Pennsylvania State University",
            "description": "A stretchable, wearable gas sensor for environmental sensing has been developed and tested by researchers at Penn State, Northeastern University and five universities in China.",
            "link": "https://news.psu.edu/story/629868/2020/08/27/research/improved-wearable-stretchable-gas-sensor-using-nanocomposites"
        },
        {
            "date": "Aug 28",
            "name": "Team’s Flexible Micro LEDs May Reshape Future of Wearable Technology",
            "place": "University of Texas at Dallas",
            "description": "University of Texas at Dallas researchers and their international colleagues have developed a method to create micro LEDs that can be folded, twisted, cut and stuck to different surfaces.",
            "link": "https://www.utdallas.edu/news/science-technology/micro-leds-2020/"
        },
        {
            "date": "Aug 28",
            "name": "A new platform for controlled delivery of key nanoscale drugs and more",
            "place": "Massachusetts Institute of Technology",
            "description": "The novel approach, developed by MIT chemical engineers, could help create more efficient consumer products, including drugs, cosmetics, and food.",
            "link": "https://news.mit.edu/2020/new-platform-for-controlled-nanoscale-drug-delivery-0828"
        },
        {
            "date": "Aug 26",
            "name": "Laser jolts microscopic electronic robots into motion",
            "place": "Cornell University",
            "description": "In 1959, former Cornell physicist Richard Feynman delivered his famous lecture “There’s Plenty of Room at the Bottom,” in which he described the opportunity for shrinking technology, from machines to computer chips, to incredibly small sizes. Well, the bottom just got more crowded.",
            "link": "https://news.cornell.edu/stories/2020/08/laser-jolts-microscopic-electronic-robots-motion"
        },
        {
            "date": "Aug 26",
            "name": "Photonics researchers report breakthrough in miniaturizing light-based chips",
            "place": "University of Rochester",
            "description": "Rochester team demonstrates new way to control light as it moves through integrated circuits, paving a research avenue in communications, computing, and photonics research.",
            "link": "https://www.rochester.edu/newscenter/photonics-researchers-report-breakthrough-in-miniaturizing-light-based-chips-449382/"
        },
        {
            "date": "Aug 24",
            "name": "Using light’s properties to indirectly see inside a cell membrane",
            "place": "Washington University in St. Louis",
            "description": "New imaging technique helps resolve nanodomains, chemical composition in cell membranes",
            "link": "https://source.wustl.edu/2020/08/using-lights-properties-to-indirectly-see-inside-a-cell-membrane/"
        },      
        {
            "date": "Aug 24",
            "name": "Machine learning peeks into nano-aquariums",
            "place": "University of Illinois at Urbana-Champaign, News Bureau",
            "description": "In the nanoworld, tiny particles such as proteins appear to dance as they transform and assemble to perform various tasks while suspended in a liquid. Recently developed methods have made it possible to watch and record these otherwise-elusive tiny motions, and researchers now take a step forward by developing a machine learning workflow to streamline the process. ",
            "link": "https://news.illinois.edu/view/6367/309931086"
        },
        {
            "date": "Aug 21",
            "name": "Tiny engineered therapeutic delivery system safely solves genetic problems in mice",
            "place": "Ohio State University",
            "description": "Inserting genetic material into the body to treat diseases caused by gene mutations can work, scientists say – but getting those materials to the right place safely is tricky.",
            "link": "https://news.osu.edu/tiny-engineered-therapeutic-delivery-system-safely-solves-genetic-problems-in-mice/"
        },
        {
            "date": "Aug 20",
            "name": "Graphene sensors find subtleties in magnetic fields",
            "place": "Cornell University",
            "description": "As with actors and opera singers, when measuring magnetic fields it helps to have range.",
            "link": "https://news.cornell.edu/stories/2020/08/graphene-sensors-find-subtleties-magnetic-fields#:~:text=Cornell%20researchers%20used%20an%20ultrathin,within%20a%20larger%20magnetic%20background."
        },
        {
            "date": "Aug 20",
            "name": "Researchers create nanoclusters that mimic biomolecules",
            "place": "Cornell University",
            "description": "Biological systems come in all shapes, sizes and structures. Some of these structures, such as those found in DNA, RNA and proteins, are formed through complex molecular interactions that are not easily duplicated by inorganic materials.",
            "link": "https://news.cornell.edu/stories/2020/08/researchers-create-nanoclusters-mimic-biomolecules"
        },
        {
            "date": "Aug 19",
            "name": "Toward a coronavirus breathalyzer test",
            "place": "American Chemical Society",
            "description": "Few people who have undergone nasopharyngeal swabs for coronavirus testing would describe it as a pleasant experience. The procedure involves sticking a long swab up the nose to collect a sample from the back of the nose and throat, which is then analyzed for SARS-CoV-2 RNA by the reverse-transcription polymerase chain reaction (RT-PCR). Now, researchers reporting in ACS Nano have developed a prototype device that non-invasively detected COVID-19 in the exhaled breath of infected patients.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2020/august/toward-a-coronavirus-breathalyzer-test.html"
        },     
        {
            "date": "Aug 17",
            "name": "No limit yet for carbon nanotube fibers",
            "place": "Rice University",
            "description": "Carbon nanotube fibers made at Rice University are now stronger than Kevlar and are inching up on the conductivity of copper.",
            "link": "http://news.rice.edu/2020/08/17/no-limit-yet-for-carbon-nanotube-fibers/"
        },
        {
            "date": "Aug 17",
            "name": "Converting solar energy to hydrogen fuel, with help from photosynthesis",
            "place": "American Chemical Society",
            "description": "Global economic growth comes with increasing demand for energy, but stepping up energy production can be challenging. Recently, scientists have achieved record efficiency for solar-to-fuel conversion, and now they want to incorporate the machinery of photosynthesis to push it further.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2020/august/converting-solar-energy-to-hydrogen-fuel-with-help-from-photosynthesis.html"
        },
        {
            "date": "Aug 12",
            "name": "Quantum Materials Quest Could Benefit From Graphene That Buckles",
            "place": "Rutgers University",
            "description": "Graphene, an extremely thin two-dimensional layer of the graphite used in pencils, buckles when cooled while attached to a flat surface, resulting in beautiful pucker patterns that could benefit the search for novel quantum materials and superconductors, according to Rutgers-led research in the journal Nature.",
            "link": "https://www.rutgers.edu/news/quantum-materials-quest-could-benefit-graphene-buckles"
        },
        {
            "date": "Aug 11",
            "name": "Research exposes new vulnerability in SARS-CoV-2",
            "place": "Northwestern University",
            "description": "Northwestern University researchers have uncovered a new vulnerability in the novel coronavirus’ infamous spike protein — illuminating a relatively simple, potential treatment pathway.",
            "link": "https://news.northwestern.edu/stories/2020/08/research-exposes-new-vulnerability-in-sars-cov-2/"
        },
        {
            "date": "Aug 11",
            "name": "Nanocrystals from recycled wood waste make carbon-fiber composites tougher",
            "place": "Texas A&M University",
            "description": "Polymers reinforced with ultra-fine strands of carbon fibers epitomize composite materials that are “light as a feather and strong as steel,” earning them versatile applications across several industries. Adding materials called carbon nanotubes can further enhance the composites’ functionality. But the chemical processes used for incorporating carbon nanotube end up spreading them unevenly on the composites, limiting the strength and other useful qualities that can be ultimately achieved.",
            "link": "https://engineering.tamu.edu/news/2020/08/nanocrystals-from-recycled-wood-waste-make-carbon-fiber-composites-tougher.html"
        },
        {
            "date": "Aug 10",
            "name": "Breaking Molecular Traffic Jams with Finned Nanoporous Materials",
            "place": "University of Houston",
            "description": "Thousands of chemical processes used by the energy industry and for other applications rely on the high speed of catalytic reactions, but molecules frequently are hindered by molecular traffic jams that slow them down. Now an entirely new class of porous catalysts has been invented, using unique fins to speed up the chemistry by allowing molecules to skip the lines that limit the reaction. ",
            "link": "https://uh.edu/news-events/stories/august-2020/08102020-jeff-rimer-breaking-molecular--traffic-jams.php"
        },
        {
            "date": "Aug 06",
            "name": "Why shaving dulls even the sharpest of razors",
            "place": "Massachusetts Institute of Technology",
            "description": "Razors, scalpels, and knives are commonly made from stainless steel, honed to a razor-sharp edge and coated with even harder materials such as diamond-like carbon. However, knives require regular sharpening, while razors are routinely replaced after cutting materials far softer than the blades themselves.",
            "link": "http://news.mit.edu/2020/why-shaving-dulls-razors-0806#:~:text=Now%20engineers%20at%20MIT%20have,softer%20than%20the%20blade%20itself.&text=The%20blade%20is%20more%20prone,the%20steel%20is%20not%20uniform."
        },
        {
            "date": "Aug 05",
            "name": "Turning carbon dioxide into liquid fuel",
            "place": "Argonne National Laboratory",
            "description": "Catalysts speed up chemical reactions and form the backbone of many industrial processes.  For example, they are essential in transforming heavy oil into gasoline or jet fuel. Today, catalysts are involved in over 80 percent of all manufactured products.",
            "link": "https://www.anl.gov/article/turning-carbon-dioxide-into-liquid-fuel"
        },        
        {
            "date": "Jul 29",
            "name": "Transforming e-waste into a strong, protective coating for metal ",
            "place": "American Chemical Society",
            "description": "A typical recycling process converts large quantities of items made of a single material into more of the same. However, this approach isn’t feasible for old electronic devices, or “e-waste,” because they contain small amounts of many different materials that cannot be readily separated. Now, in ACS Omega, researchers report a selective, small-scale microrecycling strategy, which they use to convert old printed circuit boards and monitor components into a new type of strong metal coating.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-july-29-2020/transforming-e-waste-into-a-strong-protective-coating-for-metal.html"
        },
        {
            "date": "Jul 28",
            "name": "Room temperature superconductivity creeping toward possibility",
            "place": "Penn State University",
            "description": "The possibility of achieving room temperature superconductivity took a tiny step forward with a recent discovery by a team of Penn State physicists and materials scientists.",
            "link": "https://news.psu.edu/story/626941/2020/07/28/research/room-temperature-superconductivity-creeping-toward-possibility"
        },
        {
            "date": "Jul 28",
            "name": "Solving materials problems with a quantum computer",
            "place": "Argonne National Laboratory",
            "description": "Quantum computers have enormous potential for calculations using novel algorithms and involving amounts of data far beyond the capacity of today’s supercomputers. While such computers have been built, they are still in their infancy and have limited applicability for solving complex problems in materials science and chemistry. For example, they only permit the simulation of the properties of a few atoms for materials research.",
            "link": ""
        },
        {
            "date": "Jul 28",
            "name": "Discovery Will Allow More Sophisticated Work at Nanoscale",
            "place": "University of Houston",
            "description": "The movement of fluids through small capillaries and channels is crucial for processes ranging from blood flow through the brain to power generation and electronic cooling systems, but that movement often stops when the channel is smaller than 10 nanometers.",
            "link": "https://uh.edu/news-events/stories/july-2020/07282020ghasemi-ion-transport.php"
        },
        {
            "date": "Jul 27",
            "name": "Origami Metamaterials Reveal Reversible Auxeticity Combined with High Deformation Recoverability",
            "place": "Northwestern University",
            "description": "The simplicity and elegance of origami, an ancient Japanese art form, has motivated researchers to explore its application in the world of materials.",
            "link": "https://www.mccormick.northwestern.edu/news/articles/2020/07/origami-metamaterials-reveal-reversible-auxeticity-combined-with-high-deformation-recoverability.html"
        },
        {
            "date": "Jul 20",
            "name": "New Nano Drug Candidate Kills Aggressive Breast Cancer Cells",
            "place": "University of Arkansas",
            "description": "Researchers at the University of Arkansas have developed a new nano drug candidate that kills triple negative breast cancer cells.",
            "link": "https://news.uark.edu/articles/54282/new-nano-drug-candidate-kills-aggressive-breast-cancer-cells#:~:text=New%20Nano%20Drug%20Candidate%20Kills%20Aggressive%20Breast%20Cancer%20Cells,-July%2020%2C%202020&text=FAYETTEVILLE%2C%20Ark.,fatal%20types%20of%20breast%20cancer."
        },
        {
            "date": "Jul 19",
            "name": "A mechanical way to stimulate neurons",
            "place": "Massachusetts Institute of Technology",
            "description": "In addition to responding to electrical and chemical stimuli, many of the body’s neural cells can also respond to mechanical effects, such as pressure or vibration. But these responses have been more difficult for researchers to study, because there has been no easily controllable method for inducing such mechanical stimulation of the cells. Now, researchers at MIT and elsewhere have found a new method for doing just that.",
            "link": "http://news.mit.edu/2020/neural-cell-stimulation-magnet-0720"
        },
        {
            "date": "Jul 17",
            "name": "Droplet biosensing method opens the door for faster identification of COVID-19",
            "place": "Virginia Tech",
            "description": "Mechanical engineering associate professor Jiangtao Cheng and electrical and computer engineering assistant professor Wei Zhou have developed an ultrasensitive biosensing method that could dramatically shorten the amount of time required to verify the presence of the COVID-19 virus in a sample. Their peer-reviewed research was published in ACS Nano on June 29.",
            "link": "https://vtnews.vt.edu/articles/2020/07/cheng-zhou-dropletbiosensing.html"
        },        
        {
            "date": "Jul 17",
            "name": "Enhanced water repellent surfaces discovered in nature",
            "place": "Penn State University",
            "description": "Through the investigation of insect surfaces, Penn State researchers have detailed a previously unidentified nanostructure that can be used to engineer stronger, more resilient water repellent coatings.",
            "link": "https://news.psu.edu/story/625713/2020/07/17/research/enhanced-water-repellent-surfaces-discovered-nature"
        },
        {
            "date": "Jul 16",
            "name": "‘Blinking' Crystals May Convert CO2 into Fuels",
            "place": "Rutgers University",
            "description": "Imagine tiny crystals that 'blink' like fireflies and can convert carbon dioxide, a key cause of climate change, into fuels.",
            "link": "https://www.rutgers.edu/news/blinking-crystals-may-convert-co2-fuels#:~:text=A%20Rutgers%2Dled%20team%20has,in%20the%20journal%20Angewandte%20Chemie."
        },
        {
            "date": "Jul 15",
            "name": "Scientists open new window into the nanoworld",
            "place": "University of Colorado at Boulder",
            "description": "CU Boulder researchers have used ultra-fast extreme ultraviolet lasers to measure the properties of materials more than 100 times thinner than a human red blood cell.",
            "link": "https://www.colorado.edu/today/2020/07/15/scientists-open-new-window-nanoworld"
        },
        {
            "date": "Jul 15",
            "name": "This low-cost catalyst helps turn seawater into fuel at scale",
            "place": "University of Rochester",
            "description": "For the first time, Rochester chemical engineers have demonstrated a ‘potassium-promoted’ catalyst’s potential for use on an industrial scale.",
            "link": "https://www.rochester.edu/newscenter/chemical-catalyst-helps-convert-seawater-into-fuel-industrial-scale-444112/"
        },
        {
            "date": "Jul 15",
            "name": "New material mimics strength, toughness of mother of pearl",
            "place": "American Chemical Society",
            "description": "In the summer, many people enjoy walks along the beach looking for seashells. Among the most prized are those that contain iridescent mother of pearl (also known as nacre) inside. But many beachcombers would be surprised to learn that shimmery nacre is one of nature’s strongest, most resilient materials. Now, researchers reporting in ACS Nano have made a material with interlocked mineral layers that resembles nacre and is stronger and tougher than previous mimics.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-july-15-2020/new-material-mimics-strength-toughness-of-mother-of-pearl.html"
        },
        {
            "date": "Jul 14",
            "name": "New lithium battery charges faster, reduces risk of device explosions",
            "place": "Texas A&M University",
            "description": "Cell phone batteries often heat up and at times, can burst into flames. In most cases, the culprit behind such incidents can be traced back to lithium batteries. Despite providing long-lasting electric currents that can keep devices powered up, lithium batteries can internally short circuit, heating up the device.",
            "link": "https://engineering.tamu.edu/news/2020/07/new-lithium-battery-charges-faster-reduces-risk-of-device-explosions.html"
        },
        {
            "date": "Jul 13",
            "name": "Lasers etch an efficient way to address global water crisis",
            "place": "University of Rochester",
            "description": "By etching metal with ultrashort laser bursts, Rochester researchers demonstrate a way to purify water without wasting energy.",
            "link": "https://www.rochester.edu/newscenter/lasers-address-global-water-crisis-443612/"
        },
        {
            "date": "Jul 10",
            "name": "Invention: 'Nanocage' Tool Untangles (Molecular) Spaghetti",
            "place": "University of Vermont",
            "description": "A team of scientists at the University of Vermont have invented a new tool—they call it a “nanocage”—that can catch and straighten out molecule-sized tangles of polymers.",
            "link": "https://www.uvm.edu/uvmnews/news/invention-nanocage-tool-untangles-molecular-spaghetti"
        },
        {
            "date": "Jul 10",
            "name": "Nano-radiomics has effect on tumor microenvironment",
            "place": "Baylor College of Medicine",
            "description": "Research has shown that the tumor microenvironment (TME) can help cancers grow and evade the immune response. The TME has even been shown to inhibit cellular immunotherapy, a novel form of treatment in which the cells of a patient’s immune system are re-engineered in the lab to attack cancer cells. Therefore, scientists are now developing cellular immunotherapies that attempt not only to promote the anti-cancer activity of the immune system, but also combat the inhibitory effect of the tumor microenvironment. While it is straightforward to assess the effect of new therapies on the cancer cells, assessing the effectiveness on the TME is challenging.",
            "link": "https://www.bcm.edu/news/nano-radiomics-has-effect-on-tumor-microenvironment"
        },
        {
            "date": "Jul 08",
            "name": "Love-hate relationship of solvent and water leads to better biomass breakup",
            "place": "Oak Ridge National Laboratory",
            "description": "Scientists at the Department of Energy’s Oak Ridge National Laboratory used neutron scattering and supercomputing to better understand how an organic solvent and water work together to break down plant biomass, creating a pathway to significantly improve the production of renewable biofuels and bioproducts.",
            "link": "https://www.olcf.ornl.gov/2020/07/08/love-hate-relationship-of-solvent-and-water-leads-to-better-biomass-breakup/"
        },
        {
            "date": "Jul 08",
            "name": "Fluorescent peptide nanoparticles, in every color of the rainbow",
            "place": "American Chemical Society",
            "description": "The discovery of green fluorescent protein (GFP), which is made by a jellyfish, transformed cell biology. It allowed scientists to stitch the GFP sequence to proteins from other organisms to trace their movements and interactions in living cells. Now, researchers reporting in ACS Applied Materials & Interfaces have designed peptide nanoparticles that can each glow in a variety of colors, opening the door for many new biomedical applications.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-july-8-2020/fluorescent-peptide-nanoparticles-in-every-color-of-the-rainbow.html"
        },
        {
            "date": "Jul 08",
            "name": "Purifying water with the help of wood, bacteria and the sun ",
            "place": "American Chemical Society",
            "description": "According to the United Nations, about one-fifth of the world’s population lives in areas where water is scarce. Therefore, technologies to produce clean water from undrinkable sources, such as seawater, river or lake water, and contaminated water, are urgently needed. Now, researchers reporting in Nano Letters have developed a wood-based steam generator that, with the help of bacterial-produced nanomaterials, harnesses solar energy to purify water.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-july-8-2020/purifying-water-with-the-help-of-wood-bacteria-and-the-sun.html"
        },
        {
            "date": "Jul 07",
            "name": "Custom nanoparticle regresses tumors when exposed to light",
            "place": "Penn State University",
            "description": "A unique nanoparticle to deliver a localized cancer treatment inhibits tumor growth in mice, according to a team of Penn State researchers.",
            "link": "https://news.psu.edu/story/623521/2020/07/07/research/custom-nanoparticle-regresses-tumors-when-exposed-light"
        },
        {
            "date": "Jul 07",
            "name": "Shock-dissipating fractal cubes could forge high-tech armor",
            "place": "Alamos National Laboratory",
            "description": "Tiny, 3D printed cubes of plastic, with intricate fractal voids built into them, have proven to be effective at dissipating shockwaves, potentially leading to new types of lightweight armor and structural materials effective against explosions and impacts.",
            "link": "https://lanl.gov/discover/news-release-archive/2020/July/0707-fractal-shockwaves.php"
        },
        {
            "date": "Jul 06",
            "name": "2D Semiconductors Found to Be Close-To-Ideal Fractional Quantum Hall Platform",
            "place": "Columbia University",
            "description": "Columbia researchers first to discover a quantum fluid—fractional quantum Hall states, one of the most delicate phases of matter—in a monolayer 2D semiconductor; finding could provide a unique test platform for future applications in quantum computing",
            "link": "https://engineering.columbia.edu/press-releases/hone-2d-semiconductors-quantum-computing"
        },
        {
            "date": "Jul 03",
            "name": "New insights into van der Waals materials found",
            "place": "Penn State University",
            "description": "Layered van der Waals materials are of high interest for electronic and photonic applications, according to researchers at Penn State and SLAC National Accelerator Laboratory, in California, who provide new insights into the interactions of layered materials with laser and electron beams.",
            "link": "https://news.psu.edu/story/624973/2020/07/03/research/new-insights-van-der-waals-materials-found"
        },                
        {
            "date": "Jul 01",
            "name": "Materials scientists drill down to vulnerabilities involved in human tooth decay",
            "place": "Northwestern University",
            "description": "Northwestern University researchers have cracked one of the secrets of tooth decay. In a new study of human enamel, the materials scientists are the first to identify a small number of impurity atoms that may contribute to the enamel’s strength but also make the material more soluble. They also are the first to determine the spatial distribution of the impurities with atomic-scale resolution. ",
            "link": "https://www.sciencedaily.com/releases/2020/07/200701125436.htm"
        },
        {
            "date": "Jul 01",
            "name": "Charcoal a weapon to fight superoxide-induced disease, injury",
            "place": "Rice University",
            "description": "Artificial enzymes made of treated charcoal could have the power to curtail damaging levels of superoxides, radical oxygen ions that are toxic at high concentrations.",
            "link": "https://news.rice.edu/2020/07/01/charcoal-a-weapon-to-fight-superoxide-induced-disease-injury-2/"
        },
        {
            "date": "Jun 30",
            "name": "Spider Silk Can Create Lenses Useful for Biological Imaging",
            "place": "American Institute of Physics",
            "description": "Spider silk is useful for a variety of biomedical applications. It exhibits mechanical properties superior to synthetic fibers for tissue engineering, and it is not toxic or harmful to living cells.",
            "link": "https://publishing.aip.org/publications/latest-content/spider-silk-can-create-lenses-useful-for-biological-imaging/"
        },
        {
            "date": "Jun 29",
            "name": "Cartwheeling light reveals new optical phenomenon",
            "place": "Rice University",
            "description": "Researchers at Rice University have discovered details about a novel type of polarized light-matter interaction with light that literally turns end over end as it propagates from a source. Their find could help study molecules like those in light-harvesting antennas anticipated to have unique sensitivity to the phenomenon.",
            "link": "https://news.rice.edu/2020/06/29/cartwheeling-light-reveals-new-optical-phenomenon-2/"
        },
        {
            "date": "Jun 29",
            "name": "Rice lab’s bright idea is pure gold",
            "place": "Rice University",
            "description": "Seeing light emerge from a nanoscale experiment didn’t come as a big surprise to Rice University physicists. But it got their attention when that light was 10,000 times brighter than they expected.",
            "link": "https://news.rice.edu/2020/06/29/rice-labs-bright-idea-is-pure-gold/"
        },
        {
            "date": "Jun 29",
            "name": "Producing a gaseous messenger molecule inside the body, on demand",
            "place": "Massachusetts Institute of Technology",
            "description": "Nitric oxide is an important signaling molecule in the body, with a role in building nervous system connections that contribute to learning and memory. It also functions as a messenger in the cardiovascular and immune systems.",
            "link": "http://news.mit.edu/2020/nitric-oxide-messenger-molecule-inside-body-demand-0629"
        },
        {
            "date": "Jun 26",
            "name": "Researchers control elusive spin fluctuations in 2D magnets",
            "place": "Cornell University",
            "description": "Like Bigfoot and the Loch Ness monster, critical spin fluctuations in a magnetic system haven’t been captured on film. Unlike the fabled creatures, these fluctuations – which are highly correlated electron spin patterns – do actually exist, but they are too random and turbulent to be seen in real time.",
            "link": "https://news.cornell.edu/stories/2020/06/researchers-control-elusive-spin-fluctuations-2d-magnets"
        },
        {
            "date": "Jun 26",
            "name": "Process for ‘two-faced’ nanomaterials may aid energy, information tech",
            "place": "Oak Ridge National Laboratory",
            "description": "A team led by the Department of Energy’s Oak Ridge National Laboratory used a simple process to implant atoms precisely into the top layers of ultra-thin crystals, yielding two-sided structures with different chemical compositions. The resulting materials, known as Janus structures after the two-faced Roman god, may prove useful in developing energy and information technologies.",
            "link": "https://www.ornl.gov/news/process-two-faced-nanomaterials-may-aid-energy-information-tech"
        },
        {
            "date": "Jun 25",
            "name": "Common Food Additive Causes Adverse Health Effects in Mice",
            "place": "University of Massachusetts Amherst",
            "description": "A common food additive, recently banned in France but allowed in the U.S. and many other countries, was found to significantly alter gut microbiota in mice, causing inflammation in the colon and changes in protein expression in the liver, according to research led by a University of Massachusetts Amherst food scientist.",
            "link": "https://www.umass.edu/newsoffice/article/common-food-additive-causes-adverse-health"
        },
        {
            "date": "Jun 25",
            "name": "Researchers discover new boron-lanthanide nanostructure",
            "place": "Brown University",
            "description": "The discovery of carbon nanostructures like two-dimensional graphene and soccer ball-shaped buckyballs helped to launch a nanotechnology revolution. In recent years, researchers from Brown University and elsewhere have shown that boron, carbon’s neighbor on the periodic table, can make interesting nanostructures too, including two-dimensional borophene and a buckyball-like hollow cage structure called borospherene.",
            "link": "https://www.brown.edu/news/2020-06-25/nanocage"
        },
        {
            "date": "Jun 23",
            "name": "Laser allows solid-state refrigeration of a semiconductor material",
            "place": "University of Washington",
            "description": "To the general public, lasers heat objects. And generally, that would be correct. But lasers also show promise to do quite the opposite — to cool materials. Lasers that can cool materials could revolutionize fields ranging from bio-imaging to quantum communication.",
            "link": "https://www.washington.edu/news/2020/06/23/laser-refrigeration-semiconductor/#:~:text=Lasers%20that%20can%20cool%20materials,other%20liquids%20below%20room%20temperature."
        },
        {
            "date": "Jun 22",
            "name": "Using chaos as a tool, scientists discover new method of making 3D-heterostructured materials",
            "place": "Ames Laboratory",
            "description": "Scientists at the U.S. Department of Energy’s Ames Laboratory and their collaborators from Iowa State University have developed a new approach for generating layered, difficult-to-combine, heterostructured solids. Heterostructured materials, composed of layers of dissimilar building blocks display unique electronic transport and magnetic properties that are governed by quantum interactions between their structurally different building blocks, and open new avenues for electronic and energy applications.",
            "link": "https://www.ameslab.gov/news/using-chaos-as-a-tool-scientists-discover-new-method-of-making-3d-heterostructured-materials"
        },
        {
            "date": "Jun 22",
            "name": "SLAC and Stanford scientists home in on pairs of atoms that boost a catalyst’s activity",
            "place": "SLAC National Accelerator Laboratory",
            "description": "They discovered the messy environment of a chemical reaction can actually change the shape of a catalytic nanoparticle in a way that makes it more active.",
            "link": "https://www6.slac.stanford.edu/news/2020-06-22-slac-and-stanford-scientists-home-pairs-atoms-boost-catalyst%E2%80%99s-activity.aspx"
        },
        {
            "date": "Jun 22",
            "name": "Strainoptronics: A New Way to Control Photons",
            "place": "George Washington University",
            "description": "GW researchers create first efficient 2D material photodetector for telecom wavelengths, a discovery that has the potential to advance communications and computer systems.",
            "link": "https://gwtoday.gwu.edu/strainoptronics-new-way-control-photons"
        },              
        {
            "date": "Jun 18",
            "name": "UConn Researcher Invents Nanoparticle for Overcoming Leukemia Treatment Resistance",
            "place": "University of Connecticut",
            "description": "UConn associate professor of pharmaceutics Xiuling Lu, along with professor of chemistry Rajeswari M. Kasi, was part of a team that recently published a paper in Nature Cell Biology finding a commonly used chemotherapy drug may be repurposed as a treatment for resurgent or chemotherapy-resistant leukemia.",
            "link": "https://today.uconn.edu/2020/06/uconn-researcher-invents-nanoparticle-overcoming-leukemia-treatment-resistance/"
        },
        {
            "date": "Jun 17",
            "name": "Study unveils new mechanism for long-distance cell communication",
            "place": "University of Illinois at Chicago",
            "description": "An extracellular vesicle — a nanoparticle released by cells — can use jerky movements similar to a car weaving in and out of traffic to navigate the obstacle-filled environment outside of cells, according to new discoveries made by researchers at the University of Illinois at Chicago.",
            "link": "https://today.uic.edu/study-unveils-new-mechanism-for-long-distance-cell-communication"
        },
        {
            "date": "Jun 13",
            "name": "Spontaneous Formation of Nanoscale Hollow Structures Could Boost Battery Storage",
            "place": "Georgia Institute of Technology",
            "description": "An unexpected property of nanometer-scale antimony crystals — the spontaneous formation of hollow structures — could help give the next generation of lithium ion batteries higher energy density without reducing battery lifetime. The reversibly hollowing structures could allow lithium ion batteries to hold more energy and therefore provide more power between charges.",
            "link": "https://news.gatech.edu/2020/06/13/spontaneous-formation-nanoscale-hollow-structures-could-boost-battery-storage"
        },
        {
            "date": "Jun 12",
            "name": "Unlocking PNA’s superpowers",
            "place": "Carnegie Mellon University",
            "description": "Researchers develop a method for self-assembling nanostructures with gamma-modified peptide nucleic acid, a synthetic mimic of DNA. The process has the potential to impact nanomanufacturing and biomedical technologies like targeted diagnostics and drug delivery.",
            "link": "https://engineering.cmu.edu/news-events/news/2020/06/12-taylor-pna.html"
        },
        {
            "date": "Jun 10",
            "name": "Scientists Apply “Twistronics” to Light Propagation and Make a Breakthrough Discovery",
            "place": "Advanced Science Research Center, GC/CUNY",
            "description": "A research team led by scientists at the Advanced Science Research Center at The Graduate Center, CUNY (CUNY ASRC), in collaboration with National University of Singapore, University of Texas at Austin and Monash University, has employed “twistronics” concepts (the science of layering and twisting two-dimensional materials to control their electrical properties) to manipulate the flow of light in extreme ways. The findings, published in the journal Nature, hold the promise for leapfrog advances in a variety of light-driven technologies, including nano-imaging devices; high-speed, low-energy optical computers; and biosensors.",
            "link": "https://asrc.gc.cuny.edu/headlines/2020/06/scientists-apply-twistronics-to-light-propagation-and-make-a-breakthrough-discovery/"
        },
        {
            "date": "Jun 10",
            "name": "Researchers mimic nature for fast, colorful 3D printing",
            "place": "University of Illinois at Urbana-Champaign, News Bureau",
            "description": "Brilliantly colored chameleons, butterflies, opals – and now some 3D-printed materials – reflect color by using nanoscale structures called photonic crystals.",
            "link": "https://news.illinois.edu/view/6367/809468"
        },      
        {
            "date": "Jun 09",
            "name": "Predicting Unpredictable Reactions",
            "place": "University of Pittsburgh",
            "description": "Computational catalysis, a field that simulates and accelerates the discovery of catalysts for chemical production, has largely been limited to simulations of idealized catalyst structures that do not necessarily represent structures under realistic reaction conditions. ",
            "link": "https://www.engineering.pitt.edu/News/2020/Mpourmpakis-ACS-Catalysis-Nanoparticle-Modeling/"
        },
        {
            "date": "Jun 08",
            "name": "New tool helps nanorods stand out",
            "place": "Rice University",
            "description": "Rice team’s SEMseg method makes nanoparticle analysis quicker and more affordable.",
            "link": "https://news.rice.edu/2020/06/08/new-tool-helps-nanorods-stand-out-2/"
        },  
        {
            "date": "Jun 08",
            "name": "Crystalline ‘nanobrush’ clears way to advanced energy and information tech",
            "place": "Oak Ridge National Laboratory",
            "description": "A team led by the Department of Energy’s Oak Ridge National Laboratory synthesized a tiny structure with high surface area and discovered how its unique architecture drives ions across interfaces to transport energy or information. Their “nanobrush” contains bristles made of alternating crystal sheets with vertically aligned interfaces and plentiful pores.",
            "link": "https://www.ornl.gov/news/crystalline-nanobrush-clears-way-advanced-energy-and-information-tech"
        },  
        {
            "date": "Jun 04",
            "name": "New Material, Modeling Methods Promise Advances in Energy Storage",
            "place": "University of Houston",
            "description": "The explosion of mobile electronic devices, electric vehicles, drones and other technologies have driven demand for new lightweight materials that can provide the power to operate them. Researchers from the University of Houston and Texas A&M University have reported a structural supercapacitor electrode made from reduced graphene oxide and aramid nanofiber that is stronger and more versatile than conventional carbon-based electrodes.",
            "link": "https://uh.edu/news-events/stories/2020/june-2020/06042020ardebili-modeling-electrode.php"
        },  
        {
            "date": "Jun 04",
            "name": "Self-assembling, biomimetic composites possess unusual electrical properties",
            "place": "Penn State University",
            "description": "Sometimes, breaking rules is not a bad thing. Especially when the rules are apparent laws of nature that apply in bulk material, but other forces appear in the nanoscale.",
            "link": "https://news.psu.edu/story/622291/2020/06/04/research/self-assembling-biomimetic-composites-possess-unusual-electrical"
        },  
        {
            "date": "Jun 04",
            "name": "UCF’s Butterfly-Inspired Nanotech Makes Natural-Looking Pictures on Digital Screens",
            "place": "University of Central Florida",
            "description": "The digital displays are lit by surrounding light and are more natural looking than current displays that rely on bright lights hidden behind screens.",
            "link": "https://www.ucf.edu/news/ucfs-butterfly-inspired-nanotech-makes-natural-looking-pictures-on-digital-screens/"
        },  
        {
            "date": "Jun 04",
            "name": "A remote control for neurons",
            "place": "Carnegie Mellon University",
            "description": "A novel material for controlling human neuron cells could deepen our understanding of cell interactions and enable new therapies in medicine.",
            "link": "https://www.cmu.edu/ni/news/june-2020/remote-control-neurons.html#:~:text=A%20novel%20material%20for%20controlling,with%20neural%20cells%20using%20light."
        },  
        {
            "date": "Jun 03",
            "name": "Synthetic red blood cells mimic natural ones, and have new abilities",
            "place": "American Chemical Society",
            "description": "Scientists have tried to develop synthetic red blood cells that mimic the favorable properties of natural ones, such as flexibility, oxygen transport and long circulation times. But so far, most artificial red blood cells have had one or a few, but not all, key features of the natural versions. Now, researchers reporting in ACS Nano have made synthetic red blood cells that have all of the cells’ natural abilities, plus a few new ones.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-june-3-2020/synthetic-red-blood-cells-mimic-natural-ones-and-have-new-abilities.html#:~:text=Now%2C%20researchers%20reporting%20in%20ACS,it%20to%20the%20body's%20tissues."
        },  
        {
            "date": "Jun 02",
            "name": "Exotic nanotubes move in less mysterious ways",
            "place": "Rice University",
            "description": "Rice scientists, engineers show boron nitride’s promise for composites, biomedical applications",
            "link": "https://news.rice.edu/2020/06/02/exotic-nanotubes-move-in-less-mysterious-ways-2/"
        },  
        {
            "date": "Jun 01",
            "name": "Study: Paper-thin gallium oxide transistor handles more than 8,000 volts",
            "place": "University at Buffalo",
            "description": " People love their electric cars. But not so much the bulky batteries and related power systems that take up precious cargo space. Help could be on the way from a gallium oxide-based transistor under development at the University at Buffalo.",
            "link": "http://www.buffalo.edu/news/releases/2020/06/001.html"
        },  
        {
            "date": "May 29",
            "name": "Texas A&M researchers light cells using nanosheets for cancer treatment",
            "place": "Texas A&M University",
            "description": "Scientists in the Department of Biomedical Engineering at Texas A&M University are developing new ways to advance the field of regenerative medicine and cancer treatment. They are developing a 2D nanosheet that is 1,000 times smaller than a strand of hair.",
            "link": "https://engineering.tamu.edu/news/2020/05/texas-am-researchers-light-cells-using-nanosheets-for-cancer-treatment.html"
        },  
        {
            "date": "May 28",
            "name": "Theoretical breakthrough shows quantum fluids rotate by corkscrew mechanism",
            "place": "Argonne National Laboratory",
            "description": "Superfluids — also called quantum fluids — appear in a wide range of systems and applications. For example, cosmological superfluids meld with each other during neutron star mergers, and scientists use superfluid helium to cool magnetic resonance imaging (MRI) machines.",
            "link": "https://www.anl.gov/article/theoretical-breakthrough-shows-quantum-fluids-rotate-by-corkscrew-mechanism"
        },  
        {
            "date": "May 28",
            "name": "Smart sponge could clean up oil spills",
            "place": "Northwestern University",
            "description": "A Northwestern University-led team has developed a highly porous smart sponge that selectively soaks up oil in water. With an ability to absorb more than 30 times its weight in oil, the sponge could be used to inexpensively and efficiently clean up oil spills without harming marine life. After squeezing the oil out of the sponge, it can be reused many dozens of times without losing its effectiveness.",
            "link": "https://news.northwestern.edu/stories/2020/05/smart-sponge-could-clean-up-oil-spills/"
        },             
        {
            "date": "May 26",
            "name": "Understanding ceramic ‘mortar’ of materials may reveal ways to improve them",
            "place": "University of Wisconsin-Madison",
            "description": "When most people think of ceramics, they might envision their favorite mug or a flowerpot. But modern technology is full of advanced ceramics, from silicon solar panels to ceramic superconductors and biomedical implants.",
            "link": "https://news.wisc.edu/understanding-ceramic-mortar-of-materials-may-reveal-ways-to-improve-them/"
        },
        {
            "date": "May 26",
            "name": "Study finds electrical fields can throw a curveball",
            "place": "Massachusetts Institute of Technology",
            "description": "MIT researchers have discovered a phenomenon that could be harnessed to control the movement of tiny particles floating in suspension. This approach, which requires simply applying an external electric field, may ultimately lead to new ways of performing certain industrial or medical processes that require separation of tiny suspended materials.",
            "link": "http://news.mit.edu/2020/electrical-fields-curve-particles-separation-0526"
        },
        {
            "date": "May 26",
            "name": "Novel insight reveals topological tangle in unexpected corner of the universe",
            "place": "Argonne National Laboratory",
            "description": "Scientists find a unique knotted structure — one that repeats itself throughout nature — in a ferroelectric nanoparticle, a material with promising applications in microelectronics and computing.",
            "link": "https://www.anl.gov/article/novel-insight-reveals-topological-tangle-in-unexpected-corner-of-the-universe"
        },
        {
            "date": "May 21",
            "name": "A replaceable, more efficient filter for N95 masks",
            "place": "American Chemical Society",
            "description": "Since the outbreak of COVID-19, there’s been a worldwide shortage of face masks — particularly, the N95 ones worn by health care workers. Although these coverings provide the highest level of protection currently available, they have limitations. Now, researchers reporting in ACS Nano have developed a membrane that can be attached to a regular N95 mask and replaced when needed. The filter has a smaller pore size than normal N95 masks, potentially blocking more virus particles.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2020/may/replaceable-more-efficient-filter-for-n95-masks.html"
        },
        {
            "date": "May 20",
            "name": "Nanobowls serve up chemotherapy drugs to cancer cells ",
            "place": "American Chemical Society",
            "description": "For decades, scientists have explored the use of liposomes –– hollow spheres made of lipid bilayers –– to deliver chemotherapy drugs to tumor cells. But drugs can sometimes leak out of liposomes before they reach their destination, reducing the dose received by the tumor and causing side effects in healthy tissues. Now, researchers report in ACS’ Nano Letters a way to stabilize liposomes by embedding a stiff nanobowl in their inner cavity.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-may-20-2020/nanobowls-serve-up-chemotherapy-drugs-to-cancer-cells.html"
        },
        {
            "date": "May 14",
            "name": "2D sandwich sees molecules with clarity",
            "place": "Rice University",
            "description": "A sandwich of molybdenum, sulfur and selenium turns out to be deliciously useful for detecting biomolecules. Tests at Rice University’s Brown School of Engineering of a two-dimensional Janus compound showed it could be an effective and universal platform for improving the detection of biomolecules via surface-enhanced Raman spectroscopy (SERS).",
            "link": "https://news.rice.edu/2020/05/14/2d-sandwich-sees-molecules-with-clarity/"
        },
        {
            "date": "May 14",
            "name": "Researchers invent technology to fully remedy 'weak spot' of 3D printing",
            "place": "Texas A&M University",
            "description": "Simple toys to custom prosthetic parts are made from plastic, which is also a popular 3D printing material. However, these printed parts are mechanically weak — a flaw caused by the imperfect bonding between the individual printed layers that make up 3D-printed parts.",
            "link": "https://tees.tamu.edu/news/2020/05/researchers-invent-technology-to-fully-remedy-weak-spot-of-3d-printing.html"
        },
        {
            "date": "May 13",
            "name": "A New, Highly Sensitive Chemical Sensor Uses Protein Nanowires",
            "place": "University of Massachusetts Amherst",
            "description": "Writing in the journal NanoResearch, a team at the University of Massachusetts Amherst reports this week that they have developed bioelectronic ammonia gas sensors that are among the most sensitive ever made.",
            "link": "https://www.umass.edu/newsoffice/article/new-highly-sensitive-chemical-sensor-uses"
        },
        {
            "date": "May 11",
            "name": "NIST Scientists Create New Recipe for Single-Atom Transistors",
            "place": "National Institute of Standards and Technology (NIST)",
            "description": "Once unimaginable, transistors consisting only of several-atom clusters or even single atoms promise to become the building blocks of a new generation of computers with unparalleled memory and processing power. But to realize the full potential of these tiny transistors — miniature electrical on-off switches — researchers must find a way to make many copies of these notoriously difficult-to-fabricate components. ",
            "link": "https://www.nist.gov/news-events/news/2020/05/nist-scientists-create-new-recipe-single-atom-transistors"
        },
        {
            "date": "May 07",
            "name": "2D oxide flakes pick up surprise electrical properties",
            "place": "Rice University",
            "description": "Rice University researchers have found evidence of piezoelectricity in lab-grown, two-dimensional flakes of molybdenum dioxide.",
            "link": "https://news.rice.edu/2020/05/07/2d-oxide-flakes-pick-up-surprise-electrical-properties/"
        },          
        {
            "date": "May 06",
            "name": "Investigating the dynamics of stability",
            "place": "Argonne National Laboratory",
            "description": "The quest to find viable alternatives to fossil fuel in energy production has experienced a recent revolution as scientists search for materials that do not require precious metals to produce active and stable reactions.",
            "link": "https://www.anl.gov/article/investigating-the-dynamics-of-stability"
        },
        {
            "date": "May 06",
            "name": "Mats Made From Nanofibers Linked To A Red Wine Chemical Could Help Prevent Oxidation",
            "place": "Texas A&M University",
            "description": "Texas A&M engineering researchers have created mesh-like mats made with tannic acid. Used in bandages or inside food storage containers, they can help promote prolonged antioxidant activity.",
            "link": "https://today.tamu.edu/2020/05/06/mats-made-from-nanofibers-linked-to-a-red-wine-chemical-could-help-prevent-oxidation/"
        },
        {
            "date": "May 05",
            "name": "Heating could be the best way to disinfect N95 masks for reuse",
            "place": "American Chemical Society",
            "description": "Since the outbreak of the COVID-19 pandemic, N95 face masks have been in short supply. Health care workers, in particular, desperately need these masks to protect themselves from the respiratory droplets of infected patients. But because of the shortage, many have to wear the same mask repeatedly. Now, researchers reporting in ACS Nano have tested several methods for disinfecting N95 materials, finding that heating them preserves their filtration efficiency for 50 cycles of disinfection.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2020/may/heating-could-be-best-way-to-disinfect-n95-masks-for-reuse.html"
        },
        {
            "date": "May 05",
            "name": "CCNY physicists shed light on the nanoscale dynamics of spin thermalization",
            "place": "The City University of New York",
            "description": "In physics, thermalization, or the trend of sub-systems within a whole to gain a common temperature, is typically the norm. There are situations, however, where thermalization is slowed down or virtually suppressed; examples are found when considering the dynamics of electron and nuclear spins in solids, where certain sub-groups behave as if isolated from the rest. Understanding why this happens and how it can be controlled is presently at the center of a broad effort, particularly for applications in the emerging field of quantum information technologies. ",
            "link": "https://www.ccny.cuny.edu/news/ccny-physicists-shed-light-nanoscale-dynamics-spin-thermalization"
        },
        {
            "date": "May 04",
            "name": "Water-splitting module a source of perpetual energy",
            "place": "Rice University",
            "description": "Rice University researchers have created an efficient, low-cost device that splits water to produce hydrogen fuel. The platform developed by the Brown School of Engineering lab of Rice materials scientist Jun Lou integrates catalytic electrodes and perovskite solar cells that, when triggered by sunlight, produce electricity. The current flows to the catalysts that turn water into hydrogen and oxygen, with a sunlight-to-hydrogen efficiency as high as 6.7%.",
            "link": "https://news.rice.edu/2020/05/04/water-splitting-module-a-source-of-perpetual-energy-2/"
        },
        {
            "date": "May 04",
            "name": "Tiny technology cleans dirty water",
            "place": "University of Delaware",
            "description": "An activated carbon filter — found in many household filtration systems—can purify your drinking water, but it’s no match for wastewater that contains military-grade explosives. To clean wastewater from munitions processing and demilitarization, a pair of University of Delaware environmental engineering professors and a UD engineering alumnus are teaming up to test a novel technology using iron nanoparticles.",
            "link": "https://www.udel.edu/udaily/2020/may/explosives-wastewater-pei-chiu-dan-cha-brian-hubbard-water/"
        },
        {
            "date": "May 04",
            "name": "New imaging technology allows visualization of nanoscale structures inside whole cells and tissues",
            "place": "Purdue University",
            "description": "Since Robert Hooke’s first description of a cell in Micrographia 350 years ago, microscopy has played an important role in understanding the rules of life. However, the smallest resolvable feature, the resolution, is restricted by the wave nature of light. This century-old barrier has restricted understanding of cellular functions, interactions and dynamics, particularly at the sub-micron to nanometer scale.",
            "link": "https://www.purdue.edu/newsroom/releases/2020/Q2/new-imaging-technology-allows-visualization-of-nanoscale-structures-inside-whole-cells-and-tissues.html"
        },
        {
            "date": "May 01",
            "name": "Obesity prevented in mice treated with gene-disabling nanoparticles",
            "place": "Washington University School of Medicine in St. Louis",
            "description": "Disabling a gene in specific mouse cells, researchers at Washington University School of Medicine in St. Louis have prevented mice from becoming obese, even after the animals had been fed a high-fat diet.",
            "link": "https://medicine.wustl.edu/news/obesity-prevented-in-mice-treated-with-gene-disabling-nanoparticles/"
        },
        {
            "date": "May 01",
            "name": "Nanostimulators boost stem cells for muscle repair",
            "place": "University of Illinois at Urbana-Champaign",
            "description": "In regenerative medicine, an ideal treatment for patients whose muscles are damaged from lack of oxygen would be to invigorate them with an injection of their own stem cells. In a new study published in the journal ACS Nano, researchers at the University of Illinois at Urbana-Champaign demonstrated that “nanostimulators” – nanoparticles seeded with a molecule the body naturally produces to prompt stem cells to heal wounds – can amp up stem cells’ regenerative powers in a targeted limb in mice.",
            "link": "https://news.illinois.edu/view/6367/808373"
        },
        {
            "date": "Apr 30",
            "name": "Nanodevices could prevent plaque formation in the brain",
            "place": "Argonne National Laboratory",
            "description": "Alzheimer's disease is the sixth leading cause of death in the United States, affecting one in 10 people over the age of 65. Scientists are engineering nanodevices to disrupt processes in the brain that lead to the disease.",
            "link": "https://www.news-medical.net/news/20200430/Nanodevices-could-prevent-plaque-formation-in-the-brain.aspx"
        },
        {
            "date": "Apr 30",
            "name": "‘Breathable’ Electronics Pave the Way for More Functional Wearable Tech",
            "place": "North Carolina State University",
            "description": "Engineering researchers have created ultrathin, stretchable electronic material that is gas permeable, allowing the material to “breathe.” The material was designed specifically for use in biomedical or wearable technologies, since the gas permeability allows sweat and volatile organic compounds to evaporate away from the skin, making it more comfortable for users – especially for long-term wear.",
            "link": "https://news.ncsu.edu/2020/04/breathable-electronics/"
        },
        {
            "date": "Apr 29",
            "name": "Engineers make a promising material stable enough for use in solar cells",
            "place": "Purdue University",
            "description": "Soft and flexible materials called halide perovskites could make solar cells more efficient at significantly less cost, but they’re too unstable to use.",
            "link": "https://www.purdue.edu/newsroom/releases/2020/Q2/engineers-make-a-promising-material-stable-enough-for-use-in-solar-cells.html"
        },
        {
            "date": "Apr 29",
            "name": "Researchers measure cancer cell mechanics in living animals using nanoparticles",
            "place": "Michigan State University",
            "description": "A first-of-its-kind nanoparticle-based in vivo imaging technique that may one day be used to help diagnose and even treat cancer has been developed by researchers collaborating from Michigan State, Johns Hopkins and Stanford universities.",
            "link": "https://msutoday.msu.edu/news/2020/researchers-measure-cancer-cell-mechanics-in-living-animals-using-nanoparticles/"
        },
        {
            "date": "Apr 28",
            "name": "A Leap in Using Silicon for Battery Anodes",
            "place": "Pacific Northwest National Laboratory",
            "description": "The same material you'll find at the tip of a pencil—graphite—has long been a key component in today's lithium-ion batteries. As our reliance on these batteries increases, however, graphite-based electrodes are due for an upgrade. For that, scientists are looking to the element at the heart of the digital revolution: silicon.",
            "link": "https://www.pnnl.gov/news-media/leap-using-silicon-battery-anodes"
        },              
        {
            "date": "Apr 27",
            "name": "Researchers’ Method Holds Promise for Brain Study, Better Tests for Viruses",
            "place": "University of Texas at Dallas",
            "description": "University of Texas at Dallas researchers have developed a promising method for remotely stimulating activity in deep brain regions, advancing understanding of how molecules act in the brain and paving the way for better cancer treatments and therapies for other diseases.",
            "link": "https://www.utdallas.edu/news/health-medicine/gold-nanoparticles-lasers-viruses-2020/"
        },
        {
            "date": "Apr 24",
            "name": "Rethinking the traditional vaccine delivery in response to coronaviruses",
            "place": "Penn State University",
            "description": "Researchers are proposing a possible COVID-19 vaccine that could be good news for resisting current and future pandemics, as well as for the needle-phobic: inhalable vaccines.",
            "link": "https://news.psu.edu/story/617126/2020/04/24/research/rethinking-traditional-vaccine-delivery-response-coronaviruses"
        },
        {
            "date": "Apr 24",
            "name": "FSU researchers discover new structure for promising class of materials",
            "place": "Florida State University",
            "description": "Florida State University researchers have discovered a novel structure for organic-inorganic hybrid materials that shows potential for more efficient technologies.  ",
            "link": "https://news.fsu.edu/news/2020/04/24/fsu-researchers-discover-new-structure-for-promising-class-of-materials/"
        },
        {
            "date": "Apr 24",
            "name": "Maryland Engineers Open Door to Big New Library of Tiny Nanoparticles",
            "place": "University of Maryland",
            "description": "The development of bimetallic nanoparticles (i.e., tiny particles composed of two different metals that exhibit several new and improved properties) represents a novel area of research with a wide range of potential applications. Now, a research team in the University of Maryland (UMD)’s Department of Materials Science and Engineering (MSE) has developed a new method for mixing metals generally known to be immiscible, or unmixable, at the nanoscale to create a new range of bimetallic materials. Such a library will be useful for studying the role of these bimetallic particles in various reaction scenarios such as the transformation of carbon dioxide to fuel and chemicals.",
            "link": "https://eng.umd.edu/news/story/maryland-engineers-open-door-to-big-new-library-of-tiny-nanoparticles"
        },
        {
            "date": "Apr 24",
            "name": "The best material for homemade face masks may be a combination of two fabrics",
            "place": "American Chemical Society",
            "description": "In the wake of the COVID-19 pandemic, the U.S. Centers for Disease Control and Prevention recommends that people wear masks in public. Because N95 and surgical masks are scarce and should be reserved for health care workers, many people are making their own coverings. Now, researchers report in ACS Nano that a combination of cotton with natural silk or chiffon can effectively filter out aerosol particles — if the fit is good.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2020/april/the-best-material-for-homemade-face-masks-may-be-a-combination-of-two-fabrics.html"
        },
        {
            "date": "Apr 23",
            "name": "UTEP Researchers Develop Nanohybrid Vehicle to Optimally Deliver Drugs Into the Human Body",
            "place": "University of Texas at El Paso",
            "description": "Researchers in The University of Texas at El Paso’s Department of Chemistry and Biochemistry have developed a nanohybrid vehicle that can be used to optimally deliver drugs into the human body.",
            "link": "https://www.utep.edu/newsfeed/campus/utep-researchers-develop-nanohybrid-vehicle-to-optimally-deliver-drugs-into-the-human-body.html?fbclid=IwAR3KrXc_tXKW9Vx2Mcpksf8yMLrtzcoRj81KsU0Glg75H216IuAKw7Re2Yg"
        },
        {
            "date": "Apr 22",
            "name": "A novel method to precisely deliver therapeutics inside the body",
            "place": "Penn State University",
            "description": "A new way to deliver therapeutic proteins inside the body uses an acoustically sensitive carrier to encapsulate the proteins and ultrasound to image and guide the package to the exact location required, according to Penn State researchers. Ultrasound then breaks the capsule, allowing the protein to enter the cell.",
            "link": "https://news.psu.edu/story/616680/2020/04/22/research/novel-method-precisely-deliver-therapeutics-inside-body"
        },
        {
            "date": "Apr 22",
            "name": "A new way to cool down electronic devices, recover waste heat",
            "place": "American Chemical Society",
            "description": "Using electronic devices for too long can cause them to overheat, which might slow them down, damage their components or even make them explode or catch fire. Now, researchers reporting in ACS’ Nano Letters have developed a hydrogel that can both cool down electronics, such as cell phone batteries, and convert their waste heat into electricity.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-april-22-2020/a-new-way-to-cool-down-electronic-devices-recover-waste-heat.html"
        },
        {
            "date": "Apr 22",
            "name": "Spider combs tame unruly nanofibers (video)",
            "place": "American Chemical Society",
            "description": "Cribellate spiders spin thousands of tiny nanofibers into sticky threads. To keep from getting caught in their own webs, these spiders use a nonstick comb on their back legs. Now, researchers reporting in ACS Applied Nano Materials have patterned an antiadhesive nanostructure inspired by this comb onto a foil surface, creating a handy tool to control sticky lab-made nanomaterials for medical, smart textile and other applications. ",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-april-22-2020/spider-combs-tame-unruly-nanofibers-video.html"
        },
        {
            "date": "Apr 20",
            "name": "Diagnostic biosensor quickly detects SARS-CoV-2 from nasopharyngeal swabs",
            "place": "American Chemical Society",
            "description": "According to many experts, early diagnosis and management are critical for slowing the spread of SARS-CoV-2, the new coronavirus that causes COVID-19. Therefore, the race is on to develop diagnostic tests for the virus that are faster, easier and more accurate than existing ones. Now, researchers reporting in ACS Nano have developed a field-effect transistor-based biosensor that detects SARS-CoV-2 in nasopharyngeal swabs from patients with COVID-19, in less than one minute.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2020/april/diagnostic-biosensor-quickly-detects-sars-cov-2-from-nasopharyngeal-swabs.html"
        },
        {
            "date": "Apr 20",
            "name": "Federal funding for rapid COVID-19 test goes to McKelvey Engineering researchers",
            "place": "Washington University in St. Louis",
            "description": "Engineers at the McKelvey School of Engineering at Washington University in St. Louis have received federal funding for a rapid COVID-19 test using a newly developed technology. Srikanth Singamaneni, professor of mechanical engineering and materials science, and his team have developed a rapid, highly sensitive and accurate biosensor based on an ultrabright fluorescent nanoprobe, which has the potential to be broadly deployed.",
            "link": "https://source.wustl.edu/2020/04/washu-engineer-awarded-federal-funding-for-rapid-covid-19-test/"
        },
        {
            "date": "Apr 17",
            "name": "Dissecting the mechanism of protein unfolding by SDS",
            "place": "University of Illinois at Urbana–Champaign",
            "description": "A new study by the Aksimentiev group at the University of Illinois has used molecular dynamics simulations to understand how sodium dodecyl sulfate, a commonly used detergent in labs, induces protein folding. Their results were published in the journal Nanoscale.",
            "link": "https://beckman.illinois.edu/about/news/article/2020/04/17/dissecting-the-mechanism-of-protein-unfolding-by-sds"
        },
        {
            "date": "Apr 16",
            "name": "Engineers develop method to improve efficiency and heat tolerance of devices",
            "place": "Penn State University",
            "description": "When it comes to increasing electric storage efficiency and electric breakdown strength — the ability of an electrical system to operate at higher voltage and temperatures with great efficiency — increasing one traditionally has led to a decrease in the other. Penn State researchers, led by Qiming Zhang, distinguished professor of electrical engineering, recently developed a scalable method that relies on engineered materials to increase both properties.",
            "link": "https://news.psu.edu/story/615890/2020/04/16/research/engineers-develop-method-improve-efficiency-and-heat-tolerance"
        },
        {
            "date": "Apr 15",
            "name": "RIT researchers build micro-device to detect bacteria, viruses",
            "place": "Rochester Institute of Technology",
            "description": "Engineering researchers developed a next-generation miniature lab device that uses magnetic nano-beads to isolate minute bacterial particles that cause diseases. Using this new technology improves how clinicians isolate drug-resistant strains of bacterial infections and difficult-to-detect micro-particles such as those making up Ebola and coronaviruses.",
            "link": "https://www.rit.edu/news/rit-researchers-build-micro-device-detect-bacteria-viruses"
        },
        {
            "date": "Apr 15",
            "name": "Nanosensor can alert a smartphone when plants are stressed",
            "place": "Massachusetts Institute of Technology",
            "description": "MIT engineers have developed a way to closely track how plants respond to stresses such as injury, infection, and light damage, using sensors made of carbon nanotubes. These sensors can be embedded in plant leaves, where they report on hydrogen peroxide signaling waves.",
            "link": "http://news.mit.edu/2020/cnt-nanosensor-smartphone-plant-stress-0415"
        },
        {
            "date": "Apr 14",
            "name": "Pushing the limits of 2D supramolecules",
            "place": "University of South Florida",
            "description": "Scientists at the University of South Florida have reached a new milestone in the development of two-dimensional supramolecules – the building blocks that make areas of nanotechnology and nanomaterial advancement possible.",
            "link": "https://www.usf.edu/news/2020/pushing-the-limits-of-2d-supramolecules.aspx"
        },                
        {
            "date": "Apr 13",
            "name": "Tight spaces tip presence of petrochemicals",
            "place": "Rice University",
            "description": "Rice University engineers have put to rest a long-held theory about the detection of oil and gas that hides inside the nanoscale pores of shale formations. The Rice researchers determined that puzzling indicators from nuclear magnetic resonance (NMR) tools are not due, as thought, to the paramagnetic properties of the rock but solely to the size of the space that traps the petrochemicals. The team expects the discovery will lead to better interpretation of NMR logs by the oil and gas industry, especially in unconventional shale formations.",
            "link": "https://news.rice.edu/2020/04/13/tight-spaces-tip-presence-of-petrochemicals-2/"
        },
        {
            "date": "Apr 13",
            "name": "Cell Membrane Proteins Imaged in 3-D",
            "place": "Brookhaven National Laboratory",
            "description": "A team of scientists including researchers at the National Synchrotron Light Source II (NSLS-II)—a U.S. Department of Energy (DOE) Office of Science User Facility at DOE’s Brookhaven National Laboratory—have demonstrated a new technique for imaging proteins in 3-D with nanoscale resolution. Their work, published in the Journal of the American Chemical Society, enables researchers to identify the precise location of proteins within individual cells, reaching the resolution of the cell membrane and the smallest subcellular organelles.",
            "link": "https://www.bnl.gov/newsroom/news.php?a=117024"
        },
        {
            "date": "Apr 10",
            "name": "Researchers achieve remote control of hormone release",
            "place": "Massachusetts Institute of Technology",
            "description": "Abnormal levels of stress hormones such as adrenaline and cortisol are linked to a variety of mental health disorders, including depression and posttraumatic stress disorder (PTSD). MIT researchers have now devised a way to remotely control the release of these hormones from the adrenal gland, using magnetic nanoparticles.",
            "link": "http://news.mit.edu/2020/remote-control-hormone-release-nanoparticles-0410"
        },
        {
            "date": "Apr 10",
            "name": "Magnet Research Hits Breakthrough",
            "place": "University of Central Florida",
            "description": "Researchers pushing the limits of magnets as a means to create faster electronics published their proof of concept findings Friday in the journal Science.",
            "link": "https://sciences.ucf.edu/news/magnet-research-hits-breakthrough/"
        },
        {
            "date": "Apr 09",
            "name": "World’s most complex microparticle: A synthetic that outdoes nature’s intricacy",
            "place": "University of Michigan",
            "description": "Synthetic microparticles more intricate than some of the most complicated ones found in nature have been produced by a University of Michigan-led international team. They also investigated how that intricacy arises and devised a way to measure it.",
            "link": "https://news.umich.edu/worlds-most-complex-microparticle-a-synthetic-that-outdoes-natures-intricacy/"
        },
        {
            "date": "Apr 09",
            "name": "Now metal surfaces can be instant bacteria killers, thanks to new laser treatment technique",
            "place": "Purdue University",
            "description": "Bacterial pathogens can live on surfaces for days. What if frequently touched surfaces such as doorknobs could instantly kill them off? Purdue University engineers have created a laser treatment method that could potentially turn any metal surface into a rapid bacteria killer – just by giving the metal’s surface a different texture.",
            "link": "https://www.purdue.edu/newsroom/releases/2020/Q2/now-metal-surfaces-can-be-instant-bacteria-killers,-thanks-to-new-laser-treatment-technique.html"
        },
        {
            "date": "Apr 08",
            "name": "Harnessing the power of electricity-producing bacteria for programmable ‘biohybrids’",
            "place": "American Chemical Society",
            "description": "Someday, microbial cyborgs –– bacteria combined with electronic devices –– could be useful in fuel cells, biosensors and bioreactors. But first, scientists need to develop materials that not only nurture the microbes, but also efficiently and controllably harvest the electricity or other resources they make. Now, researchers reporting in ACS Applied Materials & Interfaces have developed one such material that enabled them to create a programmable “biohybrid” system that conducts electrons from electricity-producing (exoelectrogenic) bacteria.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-april-8-2020/harnessing-the-power-of-electricity-producing-bacteria-for-programmable-biohybrids.html"
        },
        {
            "date": "Apr 07",
            "name": "Engineer uses metal-oxide nanomaterials deposited on cloth to wipe out microbes",
            "place": "Iowa State University",
            "description": "In an effort to make highly sensitive sensors to measure sugar and other vital signs of human health, Iowa State University’s Sonal Padalkar figured out how to deposit nanomaterials on cloth and paper.",
            "link": "https://www.news.iastate.edu/news/2020/04/07/nano-materials"
        },
        {
            "date": "Apr 06",
            "name": "Tiny Nanoparticles Offer Large Potential for Brain Cancer Treatment",
            "place": "Yale University",
            "description": "For patients with malignant brain tumors, the prognosis remains dismal. With the most aggressive treatments available, patients are usually only expected to live about 14 months after a diagnosis. ",
            "link": "https://medicine.yale.edu/news-article/23744/"
        },         
        {
            "date": "Apr 06",
            "name": "Researchers Help Expand Search for New State of Matter",
            "place": "University of Arkansas",
            "description": "A recent discovery by University of Arkansas physicists could help researchers establish the existence of quantum spin liquids, a new state of matter. They’ve been a mystery since they were first proposed in the 1970s. If proven to exist, quantum spin liquids would be a step toward much faster, next-generation quantum computing.",
            "link": "https://news.uark.edu/articles/52683/researchers-help-expand-search-for-new-state-of-matter"
        },
        {
            "date": "Apr 06",
            "name": "Researchers use nanotechnology to develop new treatment for painful gynecological condition",
            "place": "Oregon State University",
            "description": "Scientists have developed a precise, nanotechnology-based treatment to alleviate the pain and fertility problems associated with endometriosis, a common gynecological condition in women of childbearing age.",
            "link": "https://today.oregonstate.edu/news/researchers-use-nanotechnology-develop-new-treatment-painful-gynecological-condition"
        },
        {
            "date": "Apr 02",
            "name": "Capturing 3D microstructures in real time",
            "place": "Argonne National Laboratory",
            "description": "Modern scientific research on materials relies heavily on exploring their behavior at the atomic and molecular scales. For that reason, scientists are constantly on the hunt for new and improved methods for data gathering and analysis of materials at those scales.",
            "link": "https://www.anl.gov/article/capturing-3d-microstructures-in-real-time"
        },  
        {
            "date": "Mar 30",
            "name": "Heart attack on a chip: scientists model conditions of ischemia on a microfluidic device",
            "place": "Tufts University",
            "description": "Researchers led by biomedical engineers at Tufts University invented a microfluidic chip containing cardiac cells that is capable of mimicking hypoxic conditions following a heart attack – specifically when an artery is blocked in the heart and then unblocked after treatment. The chip contains multiplexed arrays of electronic sensors placed outside and inside the cells that can detect the rise and fall of voltage across individual cell membranes, as well as voltage waves moving across the cell layer, which cause the cells to beat in unison in the chip, just as they do in the heart.",
            "link": "https://now.tufts.edu/news-releases/heart-attack-chip-scientists-model-conditions-ischemia-microfluidic-device"
        },
        {
            "date": "Mar 27",
            "name": "Double-walled nanotubes have electro-optical advantages",
            "place": "Rice University",
            "description": "Rice University engineers already knew that size matters when using single-walled carbon nanotubes for their electrical properties. But until now, nobody had studied how electrons act when confronted with the Russian doll-like structure of multiwalled tubes.",
            "link": "https://news.rice.edu/2020/03/27/double-walled-nanotubes-have-electro-optical-advantages/"
        },
        {
            "date": "Mar 26",
            "name": "Experiments in Mice And Human Cells Shed Light On Best Way to Deliver Nanoparticle Therapy For Cancer",
            "place": "Johns Hopkins Medicine",
            "description": "Researchers in the cancer nanomedicine community debate whether use of tiny structures, called nanoparticles, can best deliver drug therapy to tumors passively — allowing the nanoparticles to diffuse into tumors and become held in place, or actively — adding a targeted anti-cancer molecule to bind to specific cancer cell receptors and, in theory, keep the nanoparticle in the tumor longer. Now, new research on human and mouse tumors in mice by investigators at the Johns Hopkins Kimmel Cancer Center suggests the question is even more complicated.",
            "link": "https://www.hopkinsmedicine.org/news/newsroom/news-releases/experiments-in-mice-and-human-cells-shed-light-on-best-way-to-deliver-nanoparticle-therapy-for-cancer"
        },
        {
            "date": "Mar 25",
            "name": "‘Whiskey webs’ are the new ‘coffee ring effect’",
            "place": "American Chemical Society",
            "description": "Spilled coffee forms a ring as the liquid evaporates, depositing solids along the edge of the puddle. This “coffee ring effect” has fascinated scientists for decades, but now a team says they have uncovered the mechanism behind an even more striking, web-like pattern that forms when drops of American whiskey dry up. The results, reported in ACS Nano, suggest that these distinctive ‘whiskey webs’ could someday be used to identify counterfeit spirits.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2020/march/whiskey-webs-are-the-new-coffee-ring-effect.html"
        }, 
        {
            "date": "Mar 24",
            "name": "Crumpled graphene makes ultra-sensitive cancer DNA detector",
            "place": "University of Illinois at Urbana-Champaign",
            "description": "Graphene-based biosensors could usher in an era of liquid biopsy, detecting DNA cancer markers circulating in a patient’s blood or serum. But current designs need a lot of DNA. In a new study, crumpling graphene makes it more than ten thousand times more sensitive to DNA by creating electrical “hot spots,” researchers at the University of Illinois at Urbana-Champaign found.",
            "link": "https://news.illinois.edu/view/6367/807413"
        }, 
        {
            "date": "Mar 23",
            "name": "A new ‘gold standard’ for safer ceramic coatings",
            "place": "American Chemical Society",
            "description": "Making your own ceramics can be a way to express your creativity, but some techniques and materials used in the process could spell bad news for your health and the environment. If not prepared properly, some glazed ceramics can leach potentially harmful heavy metals. Scientists now report progress toward a new type of glaze that includes gold and silver nanoparticles, which are less toxic and more environmentally friendly than currently used formulations, while still providing vibrant colors. ",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2020/march/new-gold-standard-for-safer-ceramic-coatings.html"
        },    
        {
            "date": "Mar 19",
            "name": "Stretchable Supercapacitors to Power Tomorrow’s Wearable Devices",
            "place": "Duke University",
            "description": "Researchers demonstrate robust supercapacitors that still work when stretched to eight times their original size.",
            "link": "https://pratt.duke.edu/about/news/stretchable-supercapacitors"
        }, 
        {
            "date": "Mar 18",
            "name": "Model simulator helps researchers map complex physics phenomena",
            "place": "Cornell University",
            "description": "To understand the behavior of quantum particles, imagine a pinball game – but rather than one metal ball, there are billions or more, all ricocheting off each other and their surroundings. Physicists have long tried to study this interactive system of strongly correlated particles, which could help illuminate elusive physics phenomena like high-temperature superconductivity and magnetism.",
            "link": "https://news.cornell.edu/stories/2020/03/model-simulator-helps-researchers-map-complex-physics-phenomena"
        }, 
        {
            "date": "Mar 18",
            "name": "Fish scales could make wearable electronics more sustainable",
            "place": "American Chemical Society",
            "description": "Flexible temporary electronic displays may one day make it possible to sport a glowing tattoo or check a reading, like that of a stopwatch, directly on the skin. In its current form, however, this technology generally depends on plastic. New research in ACS Nano describes a way to make these displays, which would likely be discarded after a single use, more environmentally friendly using a plentiful and biodegradable resource: fish scales.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-march-18-2020/fish-scales-could-make-wearable-electronics-more-sustainable.html"
        }, 
        {
            "date": "Mar 13",
            "name": "Invisible plastics in water",
            "place": "Washington State University",
            "description": "A Washington State University research team has found that nanoscale particles of the most commonly used plastics tend to move through the water supply, especially in fresh water, or settle out in wastewater treatment plants, where they end up as sludge, in landfills, and often as fertilizer.",
            "link": "https://news.wsu.edu/2020/03/13/invisible-plastics-water/"
        }, 
        {
            "date": "Mar 12",
            "name": "Heat and Light Create Never-Before-Seen Biocompatible Microparticles",
            "place": "Duke University",
            "description": "Innovative manufacturing technique can create new types of microparticles for applications such as drug delivery, diagnostics and tissue engineering.",
            "link": "https://pratt.duke.edu/about/news/microparticle-shapes"
        }, 
        {
            "date": "Mar 12",
            "name": "New nano strategy fights superbugs",
            "place": "Rice University",
            "description": "Researchers at Rice University’s Brown School of Engineering have a new strategy for “trapping and zapping” antibiotic resistant genes, the pieces of bacteria that, even though theirs hosts are dead, can find their way into and boost the resistance of other bacteria.",
            "link": "https://news.rice.edu/2020/03/12/new-nano-strategy-fights-superbugs-2/"
        },{
            "date": "Mar 10",
            "name": "Making More MXene — Researchers Unveil a Scalable Production System for the Promising, 2D Nanomaterials",
            "place": "Drexel University",
            "description": "For more than a decade, two-dimensional nanomaterials, such as graphene, have been touted as the key to making better microchips, batteries, antennas and many other devices. But a significant challenge of using these atom-thin building materials for the technology of the future is ensuring that they can be produced in bulk quantities without losing their quality. For one of the most promising new types of 2D nanomaterials, MXenes, that’s no longer a problem. Researchers at Drexel University and the Materials Research Center in Ukraine have designed a system that can be used to make large quantities of the material while preserving its unique properties.",
            "link": "https://drexel.edu/now/archive/2020/March/scaling_MXene/"
        },{
            "date": "Mar 10",
            "name": "Magic Twist Angles of Graphene Sheets Identified",
            "place": "University of Illinois at Urbana-Champaign",
            "description": "Graphene is 200 times stronger than steel and can be as much as 6 times lighter. These characteristics alone make it a popular material in manufacturing. Researchers at the University of Illinois at Urbana-Champaign recently uncovered more properties of graphene sheets that can benefit industry.",
            "link": "https://aerospace.illinois.edu/news/magic-twist-angles-graphene-sheets-identified"
        },{
            "date": "Mar 10",
            "name": "To Make Ultra-Black Materials That Won't Weigh Things Down, Consider The Butterfly",
            "place": "Duke University",
            "description": "Some butterflies have ultra-black wings that rival the blackest materials made by humans, using wing scales that are only a fraction as thick. Here’s how they do it.",
            "link": "https://today.duke.edu/2020/03/make-ultra-black-materials-wont-weigh-things-down-consider-butterfly"
        },{
            "date": "Mar 09",
            "name": "Protecting DNA Origami for Anti-Cancer Drug Delivery",
            "place": "Brookhaven National Laboratory",
            "description": "Scientists designed a tunable peptide-like molecular coating that enables 3-D DNA nanostructures to maintain their structural integrity and functionality in different physiological environments relevant to drug delivery and other biomedical applications",
            "link": "https://www.bnl.gov/newsroom/news.php?a=117042"
        },{
            "date": "Mar 09",
            "name": "Groovy key to nanotubes in 2D",
            "place": "Rice University",
            "description": "Ultrathin carbon nanotubes crystals could have wonderous uses, like converting waste heat into electricity with near-perfect efficiency, and Rice University engineers have taken a big step toward that goal.",
            "link": "https://news.rice.edu/2020/03/09/groovy-key-to-nanotubes-in-2d-2/"
        },{
            "date": "Mar 09",
            "name": "Two-dimensional metals open pathways to new science",
            "place": "Pennsylvania State University",
            "description": "An atomically thin materials platform developed by Penn State researchers in conjunction with Lawrence Berkeley National Lab and Oak Ridge National Lab will open a wide range of new applications in biomolecular sensing, quantum phenomena, catalysis and nonlinear optics.",
            "link": "https://news.psu.edu/story/611582/2020/03/09/research/two-dimensional-metals-open-pathways-new-science"
        },{
            "date": "Mar 06",
            "name": "Nanoscale 4D Printing Technique May Speed Development of New Therapeutics",
            "place": "CUNY Advanced Science Research Center",
            "description": "The technology combines nanolithography, microfluidics, and organic chemistry to create synthetic surfaces at the scale and with the complexity of nature",
            "link": "https://asrc.gc.cuny.edu/headlines/2020/03/nanoscale-4d-printing-technique-may-speed-development-of-new-therapeutics/"
        },{
            "date": "Mar 05",
            "name": "“Magnonic nanoantennas” demonstrated: Optically-inspired computing with spin waves one step closer",
            "place": "New York University",
            "description": "A cover article in the journal Advanced Materials demonstrates a new methodology for generating and manipulating spin waves in nanostructured magnetic materials. This work opens the way to developing nano-processors for extraordinarily quick and energy efficient analog processing of information.",
            "link": "https://engineering.nyu.edu/news/magnonic-nanoantennas-demonstrated-optically-inspired-computing-spin-waves-one-step-closer"
        },{
            "date": "Mar 05",
            "name": "Tissue-digging nanodrills do just enough damage",
            "place": "Rice University",
            "description": "Scientists at Rice University, Biola University and the Texas A&M Health Science Center have further validation that their molecular motors, light-activated rotors that spin up to 3 million times per second, can target diseased cells and kill them in minutes.",
            "link": "https://news.rice.edu/2020/03/05/tissue-digging-nanodrills-do-just-enough-damage-2/"
        },{
            "date": "Mar 04",
            "name": "Micromotors get supercharged with three ‘engines’",
            "place": "American Chemical Society",
            "description": "Someday, microscopic robots could perform useful functions, such as diagnostic testing in lab-on-a-chip sensors, micropatterning surfaces or repairing equipment in tight spaces. But first, scientists need to be able to tightly control the microbots’ speed. Now, researchers reporting in ACS’ Chemistry of Materials have developed micromotors with three “engines” that they can control separately with chemical fuel, magnets and light.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-march-4-2020/micromotors-get-supercharged-with-three-engines.html"
        },{
            "date": "Mar 04",
            "name": "Expanding the plasmonic painter’s palette",
            "place": "American Chemical Society",
            "description": "By blending paints in their palette, artists can create a broad spectrum of colors with subtly different hues. However, scientists who wish to create a similar range of structural colors, like those found on butterfly wings, are much more limited. Now, researchers reporting in ACS Nano have developed a new method for mixing plasmonic red, blue and green to yield a virtually unlimited number of colors that could be used for new types of displays.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-march-4-2020/expanding-the-plasmonic-painters-palette.html"
        },{
            "date": "Mar 04",
            "name": "A small step for atoms, a giant leap for microelectronics",
            "place": "Rice University",
            "description": "A Rice University scientist and his collaborators in Taiwan and China reported in Nature today that they have successfully grown atom-thick sheets of hexagonal boron nitride (hBN) as two-inch diameter crystals across a wafer.",
            "link": "https://news.rice.edu/2020/03/04/a-small-step-for-atoms-a-giant-leap-for-microelectronics/"
        },{
            "date": "Mar 04",
            "name": "New Material Could Turn Clothing into a Health Monitor",
            "place": "University of Houston",
            "description": "Researchers are reporting a new material, pliable enough to be woven into fabric but imbued with sensing capabilities that could serve as an early warning system for injury or illness.",
            "link": "https://uh.edu/news-events/stories/2020/march-2020/03042020-curran-wearable-nanotech.php"
        },
        {
            "date": "Feb 27",
            "name": "Physicists may have accidentally discovered a new state of matter. The Possibles are endless. ",
            "place": "Northeastern University",
            "description": "Humans have been studying electric charge for thousands of years, and the results have shaped modern civilization. Our daily lives depend on electric lighting, smartphones, cars, and computers, in ways that the first individuals to take note of a static shock or a bolt of lightning could never have imagined. ",
            "link": "https://news.northeastern.edu/2020/02/26/physicists-may-have-accidentally-discovered-a-new-state-of-matter-the-possibilities-are-endless/"
        },
        {
            "date": "Feb 26",
            "name": "Nanosize Device ‘Uncloaks’ Cancer Cells in Mice And Reveals Them to The Immune System",
            "place": "Johns Hopkins Medicine",
            "description": "Scientists at Johns Hopkins report they have designed and successfully tested an experimental, super small package able to deliver molecular signals that tag implanted human cancer cells in mice and make them visible for destruction by the animals' immune systems. The new method was developed, say the researchers, to deliver an immune system \"uncloaking\" device directly to cancer cells.",
            "link": "https://www.hopkinsmedicine.org/news/newsroom/news-releases/nanosize-device-uncloaks-cancer-cells-in-mice-and-reveals-them-to-the-immune-system"
        },
        {
            "date": "Feb 26",
            "name": "How Low Can You Go? Lower Than Ever Before",
            "place": "National Institute of Standards and Technology (NIST)",
            "description": "NIST scientists make most sensitive measurements to date of silicon’s conductivity for future solar cell, semiconductor applications.",
            "link": "https://www.nist.gov/news-events/news/2020/02/how-low-can-you-go-lower-ever"
        },
        {
            "date": "Feb 26",
            "name": "UCF’s New Technique to Create Nanomaterials May Help Detect Cancer Earlier",
            "place": "University of Central Florida",
            "description": "For the first time, a team of scientists at the University of Central Florida has created functional nanomaterials with hollow interiors that can be used to create highly sensitive biosensors for early cancer detection.",
            "link": "https://www.ucf.edu/news/ucf-technique-may-help-detect-cancer-earlier/"
        },
        {
            "date": "Feb 25",
            "name": "Breaking the temperature barrier in small-scale materials testing",
            "place": "University of Illinois at Urbana-Champaign",
            "description": "Researchers have demonstrated a new method for testing microscopic aeronautical materials at ultra-high temperatures. By combining electron microscopy and laser heating, scientists can evaluate these materials much more quickly and inexpensively than with traditional testing.",
            "link": "https://news.illinois.edu/view/6367/806618"
        },
        {
            "date": "Feb 25",
            "name": "When bonding noble metals to 2D materials, interfaces matter",
            "place": "Pennsylvania State University",
            "description": "UNIVERISTY PARK, Pa. — Researchers at Penn State and Purdue University have developed new materials for improved single-atom catalysis and future electronics.",
            "link": "https://news.psu.edu/story/609816/2020/02/25/research/when-bonding-noble-metals-2d-materials-interfaces-matter"
        },
        {
            "date": "Feb 25",
            "name": "Forces of Attraction",
            "place": "Pacific Northwest National Laboratory",
            "description": "A PNNL research team has discovered that atomic forces thought to be “weak” can actually exert more control than has been understood. And that new discovery, published February 25 in the journal Nature Communications, could help better predict and eventually control manufacturing of semiconductor materials used in electronics and other industrial applications.",
            "link": "https://www.pnnl.gov/news-media/forces-attraction"
        },
        {
            "date": "Feb 24",
            "name": "Mirrored chip could enable handheld dark-field microscopes",
            "place": "Massachusetts Institute of Technology",
            "description": "Do a Google search for dark-field images, and you’ll discover a beautifully detailed world of microscopic organisms set in bright contrast to their midnight-black backdrops. Dark-field microscopy can reveal intricate details of translucent cells and aquatic organisms, as well as faceted diamonds and other precious stones that would otherwise appear very faint or even invisible under a typical bright-field microscope.",
            "link": "http://news.mit.edu/2020/mirrored-chip-could-enable-handheld-dark-field-microscopes-0224"
        },
        {
            "date": "Feb 24",
            "name": "Columbia Team Discovers New Way to Control the Phase of Light Using 2D Materials",
            "place": "Columbia University",
            "description": "Researchers use atomically thin materials—1/100,000 the size of a human hair—to manipulate the phase of light without changing its amplitude, at extremely low power loss; could enable applications such as LIDAR, phased arrays, optical switching, and quantum and optical neural networks",
            "link": "https://engineering.columbia.edu/press-releases/michal-lipson-control-phase-light"
        },
        {
            "date": "Feb 24",
            "name": "Going super small to get super strong metals",
            "place": "University of Utah",
            "description": "You can’t see them, but most of the metals around you—coins, silverware, even the steel beams holding up buildings and overpasses—are made up of tiny metal grains. Under a powerful enough microscope, you can see interlocking crystals that look like a granite countertop.\n",
            "link": "https://attheu.utah.edu/uncategorized/nanometals/"
        },
        {
            "date": "Feb 21",
            "name": "DNA nanostructures suit up for future missions",
            "place": "Harvard University",
            "description": "A broadly applicable and simple chemical protection strategy removes a major roadblock in the development of therapeutic and diagnostic DNA nanostructures",
            "link": "https://wyss.harvard.edu/news/dna-nanostructures-suit-up-for-future-missions/"
        },
        {
            "date": "Feb 20",
            "name": "Columbia Researchers Develop New Method to Isolate Atomic Sheets and Create New Materials",
            "place": "Columbia University",
            "description": "New exfoliation method makes large-area atomically thin layers that can be stacked in any desired order and orientation to generate a whole new class of artificial materials; opens the door to new research and commercialization",
            "link": "https://engineering.columbia.edu/press-releases/hone-zhu-isolate-atomic-sheets"
        },
        {
            "date": "Feb 18",
            "name": "Researchers show advance in next-generation lithium metal batteries",
            "place": "Washington State University",
            "description": "A Washington State University research team has developed a way to address a major safety issue with lithium metal batteries – an innovation that could make high-energy batteries more viable for next-generation energy storage.",
            "link": "https://news.wsu.edu/2020/02/18/researchers-show-advance-next-generation-lithium-metal-batteries/"
        },
        {
            "date": "Feb 17",
            "name": "New Green Technology from UMass Amherst Generates Electricity ‘Out of Thin Air’",
            "place": "University of Massachusetts Amherst",
            "description": "Scientists at the University of Massachusetts Amherst have developed a device that uses a natural protein to create electricity from moisture in the air, a new technology they say could have significant implications for the future of renewable energy, climate change and in the future of medicine.",
            "link": "https://www.umass.edu/newsoffice/article/new-green-technology-umass-amherst"
        },
        {
            "date": "Feb 12",
            "name": "Cracks in perovskite films for solar cells easily healed, study finds",
            "place": "Brown University",
            "description": "A new study finds that cracks in brittle perovskite films can be easily healed with compression or mild heating, a good sign for the use of perovskites in next-generation solar cells.",
            "link": "https://www.brown.edu/news/2020-02-12/healing"
        },
        {
            "date": "Feb 12",
            "name": "Researchers show how electric fields affect a molecular twist within light-sensitive proteins",
            "place": "SLAC National Accelerator Laboratory",
            "description": "A better understanding of this phenomenon, which is crucial to many processes that occur in biological systems and materials, could enable researchers to develop light-sensitive proteins for areas such as biological imaging and optogenetics.",
            "link": "https://www6.slac.stanford.edu/news/2020-02-12-researchers-show-how-electric-fields-affect-molecular-twist-within-light-sensitive"
        },
        {
            "date": "Feb 11",
            "name": "‘Atomic Dance’ Reveals New Insights into Performance of 2D Materials",
            "place": "Northwestern University",
            "description": "A team of Northwestern Engineering materials science researchers have developed a new method to view the dynamic motion of atoms in atomically thin 2D materials. The imaging technique, which reveals the underlying cause behind the performance failure of a widely used 2D material, could help researchers develop more stable and reliable materials for future wearables and flexible electronic devices.",
            "link": "https://www.mccormick.northwestern.edu/news/articles/2020/02/atomic-dance-reveals-new-insights-into-performance-of-2d-materials.html"
        },
        {
            "year": 2020,
            "date": "Feb 10",
            "name": "DNA-like material could bring even smaller transistors",
            "place": "Purdue University",
            "description": "Computer chips use billions of tiny switches, called transistors, to process information. The more transistors on a chip, the faster the computer.",
            "link": "https://www.purdue.edu/newsroom/releases/2020/Q1/dna-like-material-could-bring-even-smaller-transistors.html"
        },
        {
            "year": 2020,
            "date": "Feb 10",
            "name": "Atomic Chains in Nanotubes Push the Electronics Frontier",
            "place": "Michigan Technological University",
            "description": "Wearable tech and electronic cloth may be the way of the future, but to get there the wiring needs to be strong, flexible and efficient.",
            "link": "https://www.mtu.edu/news/stories/2020/february/atomic-chains-in-nanotubes-push-the-electronics-frontier.html"
        },
        {
            "year": 2020,
            "date": "Feb 10",
            "name": "The Human Brain’s Meticulous Interface with the Bloodstream now on a Precision Chip",
            "place": " Georgia Institute of Technology",
            "description": "This new human blood-brain barrier on a chip gets its surprising edge by giving astrocytes 3D living space.",
            "link": "https://www.news.gatech.edu/2020/02/10/human-brains-meticulous-interface-bloodstream-now-precision-chip"
        },
        {
            "year": 2020,
            "date": "Feb 06",
            "name": "Magnetic microrobots use capillary forces to coax particles into position",
            "place": "University of Pennsylvania",
            "description": "At microscopic scales, picking, placing, collecting, and arranging objects is a persistent challenge. Advances in nanotechnology mean that there are ever more complex things we’d like to build at those sizes, but tools for moving their component parts are lacking.",
            "link": "https://penntoday.upenn.edu/news/magnetic-microrobots-use-capillary-forces-coax-particles-position"
        },
        {
            "year": 2020,
            "date": "Feb 05",
            "name": "Army scientists look inside batteries with a molecular eye",
            "place": "U.S. Army Research Laboratory",
            "description": "Scientists are closer to understanding exactly what happens inside batteries that make them prone to fire, thanks to a molecular eye of sorts.",
            "link": "https://www.army.mil/article/232404/army_scientists_look_inside_batteries_with_a_molecular_eye"
        },
        {
            "year": 2020,
            "date": "Feb 05",
            "name": "Fireproof, lightweight solid electrolyte for safer lithium-ion batteries",
            "place": "American Chemical Society",
            "description": "Lithium-ion batteries are in everything from cell phones to cars. However, recent incidents involving fires or explosions of these devices show there’s a need for safer batteries. One option is to replace the flammable liquid electrolyte with a solid-state electrolyte (SSE). But some of the most-studied SSEs are themselves flammable, leaving the original safety concern unaddressed. Researchers now report in ACS’ Nano Letters that they have developed an SSE that won’t burn up.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2020/february/fireproof-lightweight-solid-electrolyte-for-safer-lithium-ion-batteries.html"
        },
        {
            "year": 2020,
            "date": "Feb 04",
            "name": "One small grain of Moon dust, one giant leap for lunar studies",
            "place": "Field Museum",
            "description": "In a new study in Meteoritics & Planetary Science, scientists found a new way to analyze the chemistry of the Moon’s soil using a single grain of dust. Their technique can help us learn more about conditions on the surface of the Moon and formation of precious resources like water and helium there.",
            "link": "https://www.fieldmuseum.org/about/press/one-small-grain-moon-dust-one-giant-leap-lunar-studies"
        },
        {
            "year": 2020,
            "date": "Feb 04",
            "name": "Lasers etch a ‘perfect’ solar energy absorber",
            "place": "University of Rochester",
            "description": "The University of Rochester research lab that recently used lasers to create unsinkable metallic structures has now demonstrated how the same technology could be used to create highly efficient solar power generators.",
            "link": "https://www.rochester.edu/newscenter/lasers-etch-a-perfect-solar-energy-absorber-414902/"
        },
        {
            "year": 2020,
            "date": "Jan 31",
            "name": "Nanospirals that form as molten metals solidify could be key to new materials—and even invisibility",
            "place": "University of Michigan",
            "description": "Humans have been cooling metal mixtures from liquid to solid for thousands of years. But surprisingly, not much is known about exactly what happens during the process of solidification. Particularly puzzling is the solidification of eutectics, which are mixtures of two or more solid phases.",
            "link": "https://news.umich.edu/nanospirals-that-form-as-molten-metals-solidify-could-be-key-to-new-materials-and-even-invisibility/"
        },
        {
            "year": 2020,
            "date": "Jan 29",
            "name": "Hybrid technique aims to produce stronger, corrosion-resistant nickel for auto, medical, manufacturing industries",
            "place": "Purdue University",
            "description": "Nickel is a widely used metal in the manufacturing industry for both industrial and advanced material processes. Now, Purdue University innovators have created a hybrid technique to fabricate a new form of nickel that may help the future production of lifesaving medical devices, high-tech devices and vehicles with strong corrosion-resistant protection.",
            "link": "https://www.purdue.edu/newsroom/releases/2020/Q1/hybrid-technique-aims-to-produce-stronger,-corrosion-resistant-nickel-for-auto,-medical,-manufacturing-industries.html"
        },
        {
            "year": 2020,
            "date": "Jan 29",
            "name": "Cheap nanoparticles stimulate immune response to cancer in the lab",
            "place": "University of Wisconsin-Madison",
            "description": "Madison researchers have developed nanoparticles that, in the lab, can activate immune responses to cancer cells. If they are shown to work as well in the body as they do in the lab, the nanoparticles might provide an effective and more affordable way to fight cancer.",
            "link": "https://news.wisc.edu/cheap-nanoparticles-stimulate-immune-response-to-cancer-in-the-lab/"
        },
        {
            "year": 2020,
            "date": "Jan 28",
            "name": "Protein Pores Packed in Polymers Make Super-Efficient Filtration Membranes",
            "place": "University of Texas at Austin",
            "description": "A multidisciplinary team of engineers and scientists has developed a new class of filtration membranes for a variety of applications, from water purification to small-molecule separations to contaminant-removal processes, that are faster to produce and higher performing than current technology. This could reduce energy consumption, operational costs and production time in industrial separations.",
            "link": "https://news.utexas.edu/2020/01/28/protein-pores-packed-in-polymers-make-super-efficient-filtration-membranes/"
        },
        {
            "year": 2020,
            "date": "Jan 28",
            "name": "Penn nanoparticles are less toxic to T cells engineered for cancer immunotherapy",
            "place": "University of Pennsylvania",
            "description": "By using messenger RNA across the T cell’s membrane via a nanoparticle instead of a DNA-rewriting virus on extracted T cells, CAR T treatments could have fewer side effects.",
            "link": "https://penntoday.upenn.edu/news/nanoparticle-delivery-system-brings-less-toxic-approach-car-t-immunotherapy"
        },
        {
            "year": 2020,
            "date": "Jan 27",
            "name": "Nanoparticle Chomps Away Plaques That Cause Heart Attacks",
            "place": "Michigan State University",
            "description": "Michigan State University and Stanford University scientists have invented a nanoparticle that eats away – from the inside out – portions of plaques that cause heart attacks.",
            "link": "https://msutoday.msu.edu/news/2020/nanoparticle-chomps-away-plaques-that-cause-heart-attacks/"
        },
        {
            "year": 2020,
            "date": "Jan 27",
            "name": "Rice lab turns trash into valuable graphene in a flash",
            "place": "Rice University",
            "description": "A new process introduced by the Rice University lab of chemist James Tour can turn bulk quantities of just about any carbon source into valuable graphene flakes. The process is quick and cheap; Tour said the “flash graphene” technique can convert a ton of coal, waste food or plastic into graphene for a fraction of the cost used by other bulk graphene-producing methods.",
            "link": "https://news.rice.edu/2020/01/27/rice-lab-turns-trash-into-valuable-graphene-in-a-flash-2/"
        },
        {
            "year": 2020,
            "date": "Jan 27",
            "name": "Method detects defects in 2D materials for future electronics, sensors",
            "place": "Penn State University",
            "description": "To further shrink electronic devices and to lower energy consumption, the semiconductor industry is interested in using 2D materials, but manufacturers need a quick and accurate method for detecting defects in these materials to determine if the material is suitable for device manufacture. Now a team of researchers has developed a technique to quickly and sensitively characterize defects in 2D materials.",
            "link": "https://news.psu.edu/story/605642/2020/01/27/research/method-detects-defects-2d-materials-future-electronics-sensors"
        },
        {
            "year": 2020,
            "date": "Jan 23",
            "name": "A megalibrary of nanoparticles",
            "place": "Penn State University",
            "description": "Using straightforward chemistry and a mix-and-match, modular strategy, researchers have developed a simple approach that could produce over 65,000 different types of complex nanoparticles, each containing up to six different materials and eight segments, with interfaces that could be exploited in electrical or optical applications. These rod-shaped nanoparticles are about 55 nanometers long and 20 nanometers wide — by comparison a human hair is about 100,000 nanometers thick — and many are considered to be among the most complex ever made.",
            "link": "https://news.psu.edu/story/605294/2020/01/23/research/megalibrary-nanoparticles"
        },
        {
            "year": 2020,
            "date": "Jan 23",
            "name": "Disinfecting your hands with ‘magic’",
            "place": "Harvard University",
            "description": "Harvard Chan Center for Nanotechnology and Nanotoxicology looks to improve on soap and water.",
            "link": "https://news.harvard.edu/gazette/story/2020/01/harvard-researchers-find-ways-to-improve-on-soap-and-water/"
        },
        {
            "year": 2020,
            "date": "Jan 23",
            "name": "New technology could help tackle antibiotic resistance",
            "place": "University of Notre Dame",
            "description": "According to the World Health Organization, one of the biggest health threats around the world is antibiotic-resistant bacteria. Every day people use antibiotics to prevent or fight back against infection, but as bacteria evolve and develop resistance, diseases such as pneumonia and tuberculosis are becoming harder to treat. ",
            "link": "https://news.nd.edu/news/new-technology-could-help-tackle-antibiotic-resistance/"
        },
        {
            "year": 2020,
            "date": "Jan 23",
            "name": "Predictive Touch Response Mechanism Is a Step Toward a Tactile Internet",
            "place": "The Optical Society",
            "description": "Researchers demonstrate the use of forecasting haptic feedback to overcome distance limit in human-to-machine applications.",
            "link": "https://www.osa.org/en-us/about_osa/newsroom/news_releases/2020/predictive_touch_response_mechanism_is_a_step_towa/"
        },
        {
            "year": 2020,
            "date": "Jan 22",
            "name": "Building Stronger Body Armor",
            "place": "Texas A&M University",
            "description": "Texas A&M researchers have found that adding silicon to a material used to make body armor can make it more resilient to firearms.",
            "link": "https://today.tamu.edu/2020/01/22/building-stronger-body-armor/"
        },
        {
            "year": 2020,
            "date": "Jan 15",
            "name": "A wearable gas sensor for health and environmental monitoring",
            "place": "Penn State University",
            "description": "A highly sensitive, wearable gas sensor for environmental and human health monitoring may soon become commercially available, according to researchers at Penn State and Northeastern University.",
            "link": "https://news.psu.edu/story/604190/2020/01/15/research/wearable-gas-sensor-health-and-environmental-monitoring"
        },
        {
            "year": 2020,
            "date": "Jan 13",
            "name": "A new approach to making airplane parts, minus the massive infrastructure",
            "place": "Massachusetts Institute of Technology",
            "description": "Carbon nanotube film produces aerospace-grade composites with no need for huge ovens or autoclaves.",
            "link": "http://news.mit.edu/2020/carbon-nanotubes-making-airplane-aerospace-parts-1013"
        },
        {
            "year": 2020,
            "date": "Jan 13",
            "name": "Nano-objects of Desire: Assembling Ordered Nanostructures in 3-D",
            "place": "Brookhaven National Laboratory",
            "description": "Using shape-programmable DNA frames, scientists established a new nanofabrication platform for directing nanomaterial components of different natures (inorganic and biological) into 3-D arrays with prescribed organizations; they then demonstrated the enhanced optical and catalytic functionalities possible with this platform",
            "link": "https://www.bnl.gov/newsroom/news.php?a=116875"
        },
        {
            "year": 2020,
            "date": "Jan 10",
            "name": "Gasification goes green - Rice’s low-temp photocatalyst could slash the carbon footprint for syngas",
            "place": "Rice University",
            "description": "Rice University engineers have created a light-powered nanoparticle that could shrink the carbon footprint of a major segment of the chemical industry.",
            "link": "https://news.rice.edu/2020/01/10/gasification-goes-green-2/"
        },
        {
            "year": 2020,
            "date": "Jan 09",
            "name": "Researchers Discover New Building Blocks of Catalyst Zeolite Nanopores",
            "place": "University of Massachusetts Amherst",
            "description": "UMass Amherst work offers advances in materials for clean energy and carbon capture",
            "link": "https://www.umass.edu/newsoffice/article/researchers-discover-new-building-blocks"
        },
        {
            "year": 2020,
            "date": "Jan 08",
            "name": "Nanoparticles Deliver ‘Suicide Gene’ Therapy to Pediatric Brain Tumors Growing in Mice",
            "place": "Johns Hopkins Medicine",
            "description": "Johns Hopkins researchers report that a type of biodegradable, lab-engineered nanoparticle they fashioned can successfully deliver a “suicide gene” to pediatric brain tumor cells implanted in the brains of mice. The poly(beta-amino ester) nanoparticles, known as PBAEs, were part of a treatment that also used a drug to kill the cells and prolong the test animals’ survival.",
            "link": "https://www.hopkinsmedicine.org/news/newsroom/news-releases/nanoparticles-deliver-suicide-gene-therapy-to-pediatric-brain-tumors-growing-in-mice"
        },
        {
            "year": 2020,
            "date": "Jan 07",
            "name": "Study finds salt nanoparticles are toxic to cancer cells",
            "place": "University of Georgia",
            "description": "A new study at the University of Georgia has found a way to attack cancer cells that is potentially less harmful to the patient. Sodium chloride nanoparticles – more commonly known as salt – are toxic to cancer cells and offer the potential for therapies that have fewer negative side effects than current treatments.",
            "link": "https://news.uga.edu/salt-nanoparticles-toxic-to-cancer-cells/"
        },
        {
            "year": 2020,
            "date": "Jan 06",
            "name": "Exploring the “dark side” of a single-crystal complex oxide thin film",
            "place": "Argonne National Laboratory",
            "description": "Analysis from a team led by Argonne researchers reveals never-before-seen details about a type of thin film being explored for advanced microelectronics.",
            "link": "hhttps://www.anl.gov/article/exploring-the-dark-side-of-a-singlecrystal-complex-oxide-thin-film"
        },
    ],
    '2019': [
        {
            "year": 2019,
            "date": "Dec 31",
            "name": "Researchers create nanoscale sensors to better see how high pressure affects materials",
            "place": "Iowa State University",
            "description": " Researchers have developed new nanoscale technology to image and measure more of the stresses and strains on materials under high pressures.",
            "link": "https://www.news.iastate.edu/news/2019/12/31/highpressure"
        },
        {
            "year": 2019,
            "date": "Dec 19",
            "name": "Tweaks behind the rebirth of nearly discarded organic solar technologies",
            "place": "Georgia Institute of Technology",
            "description": "A solar energy material that is remarkably durable and affordable is regrettably also unusable if it barely generates electricity, thus many researchers had abandoned emerging organic solar technologies. But lately, a shift in the underlying chemistry has boosted power output, and a new study has revealed counterintuitive tweaks making the new chemistry successful.",
            "link": "https://www.news.gatech.edu/2019/12/19/tweaks-behind-rebirth-nearly-discarded-organic-solar-technologies"
        },
        {
            "year": 2019,
            "date": "Dec 12",
            "name": "Deadly ‘superbugs’ destroyed by molecular drills",
            "place": "Rice University",
            "description": "Researchers showed that motorized molecules developed in the Rice lab of chemist James Tour are effective at killing antibiotic-resistant microbes within minutes.",
            "link": "https://news.rice.edu/2019/12/12/deadly-superbugs-destroyed-by-molecular-drills/"
        },
        {
            "year": 2019,
            "date": "Dec 12",
            "name": "A Nano-sized Slice of Pie",
            "place": "Pacific Northwest National Laboratory",
            "description": "Scientists explain why some molecules spontaneously arrange themselves into five slices of nanoscale pie.",
            "link": "https://www.pnnl.gov/news-media/nano-sized-slice-pie"
        },
        {
            "year": 2019,
            "date": "Dec 11",
            "name": "Maxwell’s electromagnetism extended to smaller scales",
            "place": "Massachusetts Institute of Technology, Institute for Soldier Nanotechnologies",
            "description": "Wondering what our life would be without Maxwell’s equations means to try to envision our life without most of current science, communications and technology.",
            "link": "https://isn.mit.edu/cheers-maxwell’s-electromagnetism-extended-smaller-scales#overlay-context=strategic-research-areas/news-updates/cheers-maxwell%25E2%2580%2599s-electromagnetism-extended-smaller-scales"
        },
        {
            "year": 2019,
            "date": "Dec 11",
            "name": "New spray gel could help take the bite out of frostbite",
            "place": "American Chemical Society",
            "description": "Researchers reporting have developed a convenient gel that could be sprayed onto frostbite injuries when they occur, helping wounds heal.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2019/acs-presspac-december-11-2019/new-spray-gel-could-help-take-the-bite-out-of-frostbite.html"
        },
        {
            "year": 2019,
            "date": "Dec 10",
            "name": "Chiton mollusk provides model for new armor design",
            "place": "Virginia Tech",
            "description": "The chiton has eight mineralized plates covering the top of the creature and around its base it has a girdle of very small scales assembled like fish scales, that provide flexibility as well as protection.",
            "link": "https://vtnews.vt.edu/articles/2019/12/chiton-mollusk-provides-model-for-new-armor-design.html"
        },
        {
            "year": 2019,
            "date": "Dec 09",
            "name": "Detours may make batteries better",
            "place": "Rice University",
            "description": "Scientists show point defects in cathode crystals may speed lithium absorption.",
            "link": "https://news.rice.edu/2019/12/09/detours-may-make-batteries-better/"
        },
        {
            "year": 2019,
            "date": "Dec 09",
            "name": "Reorganizing a computer chip: Transistors can now both process and store information",
            "place": "Purdue University",
            "description": "Researchers solve decades-old challenge of building a functional transistor integrated with ferroelectric RAM.",
            "link": "https://www.purdue.edu/newsroom/releases/2019/Q4/reorganizing-a-computer-chip-transistors-can-now-both-process-and-store-information.html"
        },
        {
            "year": 2019,
            "date": "Dec 09",
            "name": "Reorganizing a computer chip: Transistors can now both process and store information",
            "place": "Purdue University",
            "description": "Researchers solve decades-old challenge of building a functional transistor integrated with ferroelectric RAM.",
            "link": "https://www.purdue.edu/newsroom/releases/2019/Q4/reorganizing-a-computer-chip-transistors-can-now-both-process-and-store-information.html"
        },
        {
            "year": 2019,
            "date": "Dec 03",
            "name": "Mass-producible, centimeter-scale metalens for VR, imaging",
            "place": "Harvard John A. Paulson School of Engineering and Applied Sciences",
            "description": "Researchers have developed an all-glass, centimeter-scale metalens in the visible spectrum that can be manufactured using conventional chip fabrication methods.",
            "link": "https://www.seas.harvard.edu/news/2019/12/metalens-grows"
        },
        {
            "year": 2019,
            "date": "Dec 02",
            "name": "Missing link between Soft Surface Adhesion and Surface Roughness",
            "place": "University of Pittsburgh",
            "description": "New research finds the missing link between soft surface adhesion and the roughness of the hard surface it touches.",
            "link": "https://www.engineering.pitt.edu/News/2019/PNAS-Paper-Soft-Adhesion/"
        },
        {
            "year": 2019,
            "date": "Dec 02",
            "name": "New treatment for brain tumors uses electrospun fiber",
            "place": "University of Cincinnati",
            "description": "Using electrospun fibers, doctors and engineers can treat glioblastoma multiforme directly.",
            "link": "https://www.uc.edu/news/articles/2019/12/n20877580.html"
        },
        {
            "year": 2019,
            "date": "Nov 29",
            "name": "Armored With Plastic ‘Hair’ and Silica Shell, New Perovskite Nanocrystals Show Enhanced Durability",
            "place": "Georgia Institute of Technology",
            "description": "Researchers have demonstrated a novel approach aimed at addressing the material’s durability problem: encasing the perovskite inside a double-layer protection system made from plastic and silica. ",
            "link": "https://www.news.gatech.edu/2019/11/20/armored-plastic-hair-and-silica-shell-new-perovskite-nanocrystals-show-enhanced"
        },
        {
            "year": 2019,
            "date": "Nov 28",
            "name": "Toward more efficient computing, with magnetic waves",
            "place": "Massachusetts Institute of Technology",
            "description": "Researchers have devised a novel circuit design that enables precise control of computing with magnetic waves — with no electricity needed.",
            "link": "http://news.mit.edu/2019/computing-magnetic-waves-efficient-1128"
        },
        {
            "year": 2019,
            "date": "Nov 27",
            "name": "Atomic-scale manufacturing method could enable ultra-efficient computers",
            "place": "American Chemical Society",
            "description": "Researchers have developed a new manufacturing process that could enable ultra-efficient atomic computers that store more data and consume 100 times less power.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2019/november/atomic-scale-manufacturing-method-could-enable-ultra-efficient-computers.html"
        },
        {
            "year": 2019,
            "date": "Nov 27",
            "name": "All the nanotubes are fit to print",
            "place": "Rice University",
            "description": "Researchers showed a particular kind of newsprint can be treated to serve as a three-dimensional substrate for single-walled carbon nanotube growth.",
            "link": "https://news.rice.edu/2019/11/27/all-the-nanotubes-are-fit-to-print/"
        },
        {
            "year": 2019,
            "date": "Nov 25",
            "name": "Ammonia synthesis made easy with 2D catalyst",
            "place": "Rice University",
            "description": "Researchers have developed an inorganic method to synthesize ammonia that is both environmentally friendly and can produce the valuable chemical on demand under ambient conditions.",
            "link": "https://news.rice.edu/2019/11/25/ammonia-synthesis-made-easy-with-2d-catalyst/"
        },
        {
            "year": 2019,
            "date": "Nov 25",
            "name": "Structurally Designed DNA Star Creates Ultra-Sensitive Test for Dengue Virus",
            "place": "Rensselaer Polytechnic Institute",
            "description": "By folding snippets of DNA into the shape of a five-pointed star using structural DNA nanotechnology, researchers have created a trap that captures Dengue virus as it floats in the bloodstream.",
            "link": "https://news.rpi.edu/content/2019/11/25/structurally-designed-dna-star-creates-ultra-sensitive-test-dengue-virus"
        },
        {
            "year": 2019,
            "date": "Nov 25",
            "name": "Smart systems for semiconductor manufacturing",
            "place": "Massachusetts Institute of Technology",
            "description": "Researchers explored the challenges and opportunities smart systems bring to the semiconductor industry at its annual technical symposium.",
            "link": "http://news.mit.edu/2019/smart-systems-semiconductor-manufacturing-1125"
        },
        {
            "year": 2019,
            "date": "Nov 22",
            "name": "Tiny devices made of DNA could detect cancer with fewer false alarms",
            "place": "Duke University",
            "description": "Researchers fashioned the simple circuits from interacting strands of synthetic DNA that are tens of thousands of times finer than a human hair.",
            "link": "https://today.duke.edu/2019/11/id-verification-now-cancer"
        },
        {
            "year": 2019,
            "date": "Nov 22",
            "name": "Clear, conductive coating could protect advanced solar cells, touch screens",
            "place": "Massachusetts Institute of Technology",
            "description": "New material should be relatively easy to produce at an industrial scale, researchers say.",
            "link": "http://news.mit.edu/2019/coating-solar-cells-touch-screens-1122"
        },
        {
            "year": 2019,
            "date": "Nov 21",
            "name": "Army project may improve military communications by boosting 5G technology",
            "place": "U.S. Army Research Laboratory",
            "description": "Carbon nanotube technology for the first time achieved speeds exceeding 100GHz in radio frequency applications.",
            "link": "https://www.army.mil/article/230198/"
        },
        {
            "year": 2019,
            "date": "Nov 21",
            "name": "Big Plans to Save the Planet Depend on Nanoscopic Materials Improving Energy Storage",
            "place": "Drexel University",
            "description": "Scientists and politicians have recognized the need for an urgent and sizable shift in the world’s mechanisms of energy production and consumption in order to arrest its momentum toward environmental cataclysm.",
            "link": "https://drexel.edu/now/archive/2019/November/nanomaterials-energy-storage/"
        },
        {
            "year": 2019,
            "date": "Nov 21",
            "name": "Breaking (and Restoring) Graphene’s Symmetry in a Twistable Electronics Device",
            "place": "Columbia University School of Engineering and Applied Science",
            "description": "Researchers invent a new way to tune the properties of 2D materials by adjusting the twist angle between them.",
            "link": "https://engineering.columbia.edu/press-releases/breaking-graphene-symmetry"
        },
        {
            "year": 2019,
            "date": "Nov 20",
            "name": "Making tiny antennas for wearable electronics",
            "place": "American Chemical Society",
            "description": "Researchers have made the tiniest radio-frequency antennas reported yet, with thicknesses of about 1/100 of a human hair.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2019/november/making-tiny-antennas-for-wearable-electronics.html"
        },
        {
            "year": 2019,
            "date": "Nov 20",
            "name": "4D imaging with liquid crystal microlenses",
            "place": "American Chemical Society",
            "description": "Researchers have developed self-assembling liquid crystal microlenses that can reveal 4D information in one snapshot.",
            "link": "https://www.acs.org/content/acs/en/pressroom/newsreleases/2019/november/4d-imaging-with-liquid-crystal-microlenses.html"
        },
        {
            "year": 2019,
            "date": "Nov 20",
            "name": "Turning Up the Heat to Create New Nanostructured Metals",
            "place": "Brookhaven National Laboratory",
            "description": "Scientists used heat to drive a spontaneous process in which different metals mixed to form 3-D interlocking nanostructures in thin films, with applications for catalysts, solar cells, and biomedical sensors",
            "link": "https://www.bnl.gov/newsroom/news.php?a=116830"
        },
        {
            "year": 2019,
            "date": "Nov 19",
            "name": "New antenna tech to equip ceramic coatings with heat radiation control",
            "place": "Purdue University",
            "description": "Researchers have engineered ceramic 'nanotubes' that behave as thermal antennas, offering control over the spectrum and direction of high-temperature heat radiation.",
            "link": "https://purdue.edu/newsroom/releases/2019/Q4/new-antenna-tech-to-equip-ceramic-coatings-with-heat-radiation-control.html"
        },
        {
            "year": 2019,
            "date": "Nov 19",
            "name": "Study on surface damage to vehicles traveling at hypersonic speeds",
            "place": "University of Illinois College of Engineering",
            "description": "Researchers studied this interaction one molecule at a time to understand the processes, then scaled up the data to make it compatible with simulations that require a larger scale.",
            "link": "https://aerospace.illinois.edu/news/study-surface-damage-vehicles-traveling-hypersonic-speeds"
        },
        {
            "year": 2019,
            "date": "Nov 19",
            "name": "Light-Sensing Camera May Help Detect Extraterrestrial Life, Dark Matter",
            "place": "National Institute of Standards and Technology (NIST)",
            "description": "Researchers have made one of the highest-performance cameras ever composed of sensors that count single photons, or particles of light.",
            "link": "https://www.nist.gov/news-events/news/2019/11/nists-light-sensing-camera-may-help-detect-extraterrestrial-life-dark"
        },
        {
            "year": 2019,
            "date": "Nov 18",
            "name": "Breakthrough method for processing nanomaterials heralds advances in quantum computing",
            "place": "Johns Hopkins University",
            "description": "Researchers have developed a new method for producing atomically-thin semiconducting crystals that could one day enable more powerful and compact electronic devices.",
            "link": "https://hub.jhu.edu/2019/11/18/nanotechnology-crystal-manufacturing/"
        },
        {
            "year": 2019,
            "date": "Nov 18",
            "name": "Directional control of self-propelled protocells: The future of drug delivery?",
            "place": "Pennsylvania State University",
            "description": "Researchers were able to control the direction of the protocell’s movement in a chemical gradient in a microfluidic device.",
            "link": "https://news.psu.edu/story/598658/2019/11/18/research/directional-control-self-propelled-protocells-future-drug-delivery"
        },
        {
            "year": 2019,
            "date": "Nov 18",
            "name": "New, slippery toilet coating provides cleaner flushing, saves water",
            "place": "Pennsylvania State University",
            "description": "Innovative coating could reduce toilet water consumption by half, increase water sustainability.",
            "link": "https://news.psu.edu/story/598131/2019/11/18/research/new-slippery-toilet-coating-provides-cleaner-flushing-saves-water"
        },
        {
            "year": 2019,
            "date": "Nov 15",
            "name": "Improbability Walk at MIT.nano honors Mildred Dresselhaus",
            "place": "Massachusetts Institute of Technology",
            "description": "Overlooked by the great dome, edged with pillars of bamboo, and lined by glass walls on all sides, the walkway has been christened the 'Improbability Walk,' in honor of one of MIT’s most inspirational faculty members: the late Institute Professor Mildred 'Millie' Dresselhaus.",
            "link": "http://news.mit.edu/2019/improbability-walk-mitnano-honors-mildred-dresselhaus-1115"
        },
        {
            "year": 2019,
            "date": "Nov 14",
            "name": "Tiny low-energy device to rapidly reroute light in computer chips",
            "place": "National Institute of Standards and Technology (NIST)",
            "description": "Researchers have developed an optical switch that routes light from one computer chip to another in just 20 billionths of a second — faster than any other similar device.",
            "link": "https://www.nist.gov/news-events/news/2019/11/what-switch-nist-led-team-develops-tiny-low-energy-device-rapidly-reroute"
        },
        {
            "year": 2019,
            "date": "Nov 13",
            "name": "Graphene: The more you bend it, the softer it gets",
            "place": "University of Illinois at Urbana-Champaign, News Bureau",
            "description": "Researchers have determined how much energy it takes to bend multilayer graphene – a question that has long eluded scientists.",
            "link": "https://news.illinois.edu/view/6367/804372"
        },
        {
            "year": 2019,
            "date": "Nov 13",
            "name": "Stretchable, degradable semiconductors",
            "place": "American Chemical Society",
            "description": "Researchers have developed stretchable, degradable semiconductors that could someday find applications in health and environmental monitoring.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2019/acs-presspac-november-13-2019/stretchable-degradable-semiconductors.html"
        },
        {
            "year": 2019,
            "date": "Nov 13",
            "name": "Theoretical tubulanes inspire ultrahard polymers",
            "place": "Rice University",
            "description": "Researchers are testing polymers based on tubulanes, theoretical structures of crosslinked carbon nanotubes predicted to have extraordinary strength.",
            "link": "https://news.rice.edu/2019/11/13/theoretical-tubulanes-inspire-ultrahard-polymers/"
        },
        {
            "year": 2019,
            "date": "Nov 13",
            "name": "A better candidate for chemo delivery",
            "place": "Harvard University",
            "description": "A new technique called ELeCt (erythrocyte-leveraged chemotherapy) aims to resolve those problems by using a Trojan horse, smuggling drug-loaded nanoparticles into cancerous lung tissue by mounting them onto the body’s own erythrocytes, commonly called red blood cells.",
            "link": "https://news.harvard.edu/gazette/story/2019/11/better-delivery-system-for-sending-chemo-to-cancerous-lung-tissue/"
        },
        {
            "year": 2019,
            "date": "Nov 12",
            "name": "Researchers develop thin heat shield for superfast aircraft",
            "place": "Florida State University",
            "description": "Researchers are developing a design for a heat shield that better protects those extremely fast machines.",
            "link": "https://news.fsu.edu/news/science-technology/2019/11/12/fsu-researchers-develop-thin-heat-shield-for-superfast-aircraft/"
        },
        {
            "year": 2019,
            "date": "Nov 12",
            "name": "Carbon nanotubes show a love/hate relationship with water",
            "place": "University of Pittsburgh",
            "description": "New research reveals even more potential for CNTs: as a coating, they can both repel and hold water in place, a useful property for applications like printing, spectroscopy, water transport, or harvesting surfaces.",
            "link": "https://www.engineering.pitt.edu/News/2019/Leu-CNT-Wetting-Behavior/"
        },
        {
            "year": 2019,
            "date": "Nov 12",
            "name": "SMART discovers nondisruptive way to characterize the surface of nanoparticles",
            "place": "Massachusetts Institute of Technology",
            "description": "New method overcomes limitations of existing chemical procedures and may accelerate nanoengineering of materials.",
            "link": "http://news.mit.edu/2019/smart-discovers-noninvasive-method-to-see-nanoparticle-surface-1112"
        },
        {
            "year": 2019,
            "date": "Nov 12",
            "name": "Study reveals breach of ‘dancing’ barrier governs crystal growth",
            "place": "University of Illinois at Chicago",
            "description": "By using computer-based simulations to analyze how atoms and molecules move in a solution, researchers have identified a general mechanism governing crystal growth that scientists can manipulate when developing new materials.",
            "link": "https://today.uic.edu/study-reveals-breach-of-dancing-barrier-governs-crystal-growth"
        },
        {
            "year": 2019,
            "date": "Nov 11",
            "name": "Moving diagnostics out of the lab and into your hand",
            "place": "Harvard University",
            "description": "Electrochemical sensor platform technology could enable portable, multiplexed, point-of-care diagnostics for a wide range of applications.",
            "link": "https://wyss.harvard.edu/news/moving-diagnostics-out-of-the-lab-and-into-your-hand/"
        },
        {
            "year": 2019,
            "date": "Nov 10",
            "name": "Better biosensor technology created for stem cells",
            "place": "Rutgers University",
            "description": "A research team has created better biosensor technology that may help lead to safe stem cell therapies for treating Alzheimer’s and Parkinson’s diseases and other neurological disorders.",
            "link": "https://news.rutgers.edu/better-biosensor-technology-created-stem-cells/20191111#.XdG6WC2ZND-"
        },
        {
            "year": 2019,
            "date": "Nov 07",
            "name": "Team uses golden ‘lollipop’ to observe elusive interference effect at the nanoscale",
            "place": "University of Washington",
            "description": "Researchers theorized that they could trigger Fano interferences in certain types of plasmonic nanostuctures.",
            "link": "https://www.washington.edu/news/2019/11/07/fano-interference-golden-lollipop/"
        },
        {
            "year": 2019,
            "date": "Nov 06",
            "name": "Chemists' surprising discovery of nanoconfined reactions could aid catalytic design",
            "place": "Georgia State University",
            "description": "Researchers have unlocked one of the mysteries of catalytic reactions on a microscopic scale, allowing for the design of more efficient industrial processes.",
            "link": "https: //news.gsu.edu/2019/11/06/nanoconfined-catalytic-reaction/"
        },
        {
            "year": 2019,
            "date": "Nov 05",
            "name": "Nanoparticle orientation offers a way to enhance drug delivery",
            "place": "Massachusetts Institute of Technology",
            "description": "Engineers have shown that they can enhance the performance of drug-delivery nanoparticles by controlling a trait of chemical structures known as chirality — the 'handedness' of the structure.",
            "link": "http://news.mit.edu/2019/nanoparticle-handedness-drug-delivery-1105"
        },
        {
            "year": 2019,
            "date": "Nov 04",
            "name": "Light-based ‘tractor beam’ assembles materials at the nanoscale",
            "place": "University of Washington",
            "description": "Researchers have developed a method that could make reproducible manufacturing at the nanoscale possible.",
            "link": "https://www.washington.edu/news/2019/11/04/light-based-tractor-beam/"
        },
        {
            "year": 2019,
            "date": "Nov 04",
            "name": "Nanoparticle Drug Delivery Provides Pain Relief and More Effective Opioid Alternative in Animal Study",
            "place": "New York University",
            "description": "Research uses nanoparticles to infuse a non-opioid drug into nerves to provide enhanced pain relief.",
            "link": "https://www.nyu.edu/about/news-publications/news/2019/november/nature-nanotechnology-bunnett.html"
        },
        {
            "year": 2019,
            "date": "Nov 04",
            "name": "3D-Printed Plastics With High Performance Electrical Circuits",
            "place": "Rutgers University",
            "description": "Engineers have embedded high performance electrical circuits inside 3D-printed plastics, which could lead to smaller and versatile drones and better-performing small satellites, biomedical implants and smart structures.",
            "link": "https://news.rutgers.edu/3d-printed-plastics-high-performance-electrical-circuits/20191105#.Xcm8Uy-ZND9"
        },
        {
            "year": 2019,
            "date": "Nov 04",
            "name": "Nanoscience—Insect-inspired motion sensing",
            "place": "Oak Ridge National Laboratory",
            "description": "Researchers took inspiration from flying insects to demonstrate a miniaturized gyroscope, a special sensor used in navigation technologies.",
            "link": "https://www.ornl.gov/news/nanoscience-insect-inspired-motion-sensing"
        },
        {
            "year": 2019,
            "date": "Nov 04",
            "name": "New Technology Poised to Lower Cost and Expand Applications for Transparent LED Screens",
            "place": "The Optical Society",
            "description": "For the first time, transparent conductive circuits made of silver nanowires used to make rigid and flexible transparent display.",
            "link": "https://www.osa.org/en-us/about_osa/newsroom/news_releases/2019/new_technology_poised_to_lower_cost_and_expand_app/"
        },
        {
            "year": 2019,
            "date": "Oct 31",
            "name": "Electrifying science: New study describes conduction through proteins",
            "place": "Arizona State University",
            "description": "Amid the zoo of biomolecules essential to life, enzymes are among the most vital. Without these specialized proteins, which speed up the rates of chemical reactions, thousands of essential life processes, from cell growth and digestion to respiration and nerve function, would be impossible.",
            "link": "https://asunow.asu.edu/20191031-electrifying-science-new-study-describes-conduction-through-proteins"
        },
        {
            "year": 2019,
            "date": "Oct 30",
            "name": "A stretchable stopwatch lights up human skin  ",
            "place": "American Chemical Society",
            "description": "Imagine a runner who doesn't need to carry a stopwatch or cell phone to check her time: She could just gaze at the glowing stopwatch display on the back of her hand. Such human-machine interfaces are no longer science fiction, but they still have a way to go before becoming mainstream. Now, researchers reporting in ACS Materials Letters have developed a stretchable light-emitting device that operates at low voltages and is safe for human skin.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2019/acs-presspac-october-30-2019/stretchable-stopwatch-lights-up-human-skin.html"
        },
        {
            "year": 2019,
            "date": "Oct 30",
            "name": "Microrobots clean up radioactive waste",
            "place": "American Chemical Society",
            "description": "According to some experts, nuclear power holds great promise for meeting the world’s growing energy demands without generating greenhouse gases. But scientists need to find a way to remove radioactive isotopes, both from wastewater generated by nuclear power plants and from the environment in case of a spill. Now, researchers reporting in ACS Nano have developed tiny, self-propelled robots that remove radioactive uranium from simulated wastewater. ",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2019/acs-presspac-october-30-2019/microrobots-clean-up-radioactive-waste-video.html"
        },
        {
            "year": 2019,
            "date": "Oct 30",
            "name": "Tiny swimming donuts deliver the goods",
            "place": "Pennsylvania State University",
            "description": "Bacteria and other swimming microorganisms evolved to thrive in challenging environments, and researchers struggle to mimic their unique abilities for biomedical technologies, but fabrication challenges created a manufacturing bottleneck. Microscopic, 3D-printed, tori — donuts — coated with nickel and platinum may bridge the gap between biological and synthetic swimmers, according to an international team of researchers.",
            "link": "https://news.psu.edu/story/594896/2019/10/30/research/tiny-swimming-donuts-deliver-goods"
        },
        {
            "year": 2019,
            "date": "Oct 28",
            "name": "How to move against the current? One answer is 'tilt'-illating",
            "place": "New York University",
            "description": "Going upstream, and against a current, involves a front-first downward tilt and then moving along a surface, shows new research by a team of scientists, which created 'nano-motors' to uncover this effective means of locomotion under such conditions.",
            "link": "https://www.nyu.edu/about/news-publications/news/2019/october/how-to-move-against-the-current--one-answer-is--tilt--illating--.html"
        },
        {
            "year": 2019,
            "date": "Oct 25",
            "name": "Microscale rockets can travel through cellular landscapes",
            "place": "University of Pennsylvania",
            "description": "A new study shows how microscale 'rockets,' powered by acoustic waves and an onboard bubble motor, can be driven through 3D landscapes of cells and particles using magnets.",
            "link": "https://penntoday.upenn.edu/news/microscale-rockets-can-travel-through-cellular-landscapes"
        },
        {
            "year": 2019,
            "date": "Oct 24",
            "name": "Living on the Edge: How a 2D Material Got Its Shape",
            "place": "Lawrence Berkeley National Laboratory",
            "description": "Ever since its discovery in 2004, graphene – an atomically thin material with amazing strength and electrical properties – has inspired scientists around the world to design new 2D materials to serve a broad range of applications, from renewable energy and catalysts to microelectronics.",
            "link": "https://newscenter.lbl.gov/2019/10/24/how-a-2d-material-got-its-shape/"
        },
        {
            "year": 2019,
            "date": "Oct 24",
            "name": "MIT engineers develop a new way to remove carbon dioxide from air",
            "place": "Massachusetts Institute of Technology",
            "description": "A new way of removing carbon dioxide from a stream of air could provide a significant tool in the battle against climate change. The new system can work on the gas at virtually any concentration level, even down to the roughly 400 parts per million currently found in the atmosphere.",
            "link": "http://news.mit.edu/2019/mit-engineers-develop-new-way-remove-carbon-dioxide-air-1025"
        },
        {
            "year": 2019,
            "date": "Oct 23",
            "name": "Cracking the mystery of nature’s toughest material",
            "place": "University of Michigan",
            "description": "Nacre, the rainbow-sheened material that lines the insides of mussel and other mollusk shells, is known as the toughest material on Earth. Now, a team of researchers has revealed precisely how it works, in real time.",
            "link": "https://news.engin.umich.edu/2019/10/cracking-the-mystery-of-natures-toughest-material/"
        },
        {
            "year": 2019,
            "date": "Oct 21",
            "name": "Schools of molecular ‘fish’ could one day improve display screens",
            "place": "University of Colorado at Boulder",
            "description": "Take a dive into what may be the world’s smallest coral reef. Scientists are using a type of material called liquid crystals to create incredibly small, swirling schools of 'fish'.",
            "link": "https://www.colorado.edu/today/2019/10/21/schools-molecular-fish-could-one-day-improve-display-screens"
        },
        {
            "year": 2019,
            "date": "Oct 21",
            "name": "Easy-to-use optical method invented to help disperse particles",
            "place": "University of Hawaii at Manoa",
            "description": "The scientific and industrial communities that work with micro- and nanoparticles continue to deal with the challenge of how to effectively disperse particles in liquid.",
            "link": "https://www.hawaii.edu/news/2019/10/21/method-help-disperse-particles/"
        },
        {
            "year": 2019,
            "date": "Oct 17",
            "name": "Physicists develop fast and sensitive mechanical tool to measure light",
            "place": "University of Oregon",
            "description": "Physicists have developed a fast and sensitive mechanical tool to measure light. The graphene nanomechanical bolometer is the fastest and most sensitive in its class. It is poised to detect nearly every color of light at high speeds and obtain measurements at and far above room-temperature.",
            "link": "https://around.uoregon.edu/content/discovery-leads-ultrasensitive-way-measure-light"
        },
        {
            "year": 2019,
            "date": "Oct 17",
            "name": "Highest throughput 3D printer is the future of manufacturing",
            "place": "Northwestern University",
            "description": "Researchers have developed a new, futuristic 3D printer that is so big and so fast it can print an object the size of an adult human in just a couple of hours.",
            "link": "https://news.northwestern.edu/stories/2019/10/biggest-fastest-3d-printer-is-future-of-manufacturing/"
        },
        {
            "year": 2019,
            "date": "Oct 16",
            "name": "Scientists discover fractal patterns in a quantum material",
            "place": "Massachusetts Institute of Technology",
            "description": "A fractal is any geometric pattern that occurs again and again, at different sizes and scales, within the same object. This 'self-similarity' can be seen throughout nature, for example in a snowflake’s edge, a river network, the splitting veins in a fern, and the crackling forks of lightning.",
            "link": "http://news.mit.edu/2019/fractal-patterns-quantum-1016"
        },
        {
            "year": 2019,
            "date": "Oct 14",
            "name": "Overlap allows nanoparticles to enhance light-based detection",
            "place": "Rice University",
            "description": "Scientists use the plasmonic properties of gold nanoparticles to amplify light from molecules triggered by electrochemiluminescence. The work could help researchers analyze the active surfaces of catalysts and other materials at the nanoscale.",
            "link": "https://news.rice.edu/2019/10/14/overlap-allows-nanoparticles-to-enhance-light-based-detection/"
        },
        {
            "year": 2019,
            "date": "Oct 11",
            "name": "'Electroadhesive' stamp picks up and puts down microscopic structures",
            "place": "Massachusetts Institute of Technology",
            "description": "New technique could enable assembly of circuit boards and displays with more minute components.",
            "link": "http://news.mit.edu/2019/electroadhesive-stamp-microscopic-manufacturing-1011"
        },
        {
            "year": 2019,
            "date": "Oct 11",
            "name": "Surprising size-confinement effect of magnetocaloric materials",
            "place": "Massachusetts Institute of Technology",
            "description": "(Nanowerk Spotlight) Certain magnetic materials change their temperature when an external magnetic field is applied to them. This magnetocaloric effect (MCE) could become the heart of future cooling technologies.",
            "link": "https://sites.google.com/a/ifimup.up.pt/ifimupsite/news-and-highlights"
        },
        {
            "year": 2019,
            "date": "Oct 10",
            "name": "UO microscope points to more efficient solar fuels devices",
            "place": "University of Oregon",
            "description": "A fundamental discovery made with a specially equipped microscope in a University of Oregon laboratory is pointing toward a new design strategy for devices that can produce hydrogen from sunlight.",
            "link": "https://around.uoregon.edu/content/uo-microscope-points-more-efficient-solar-fuels-devices"
        },
        {
            "year": 2019,
            "date": "Oct 9",
            "name": "Characterizing 2D Materials with AFM-IR Spectroscopy",
            "place": "Bruker",
            "description": "Due to their unique properties for applications in battery technology, semiconductors, photovoltaics, and a number of other areas, 2D materials research is a very important emerging field.",
            "link": "https://www.bruker.com/products/surface-and-dimensional-analysis/nanoscale-infrared-spectrometers/anasys-nanoir3/overview.html"
        },
        {
            "year": 2019,
            "date": "Oct 9",
            "name": "Nanoscale manipulation of light leads to exciting new advancement",
            "place": "University of New Mexico",
            "description": "Controlling the interactions between light and matter has been a long-standing ambition for scientists seeking to develop and advance numerous technologies that are fundamental to society. With the boom of nanotechnology in recent years, the nanoscale manipulation of light has become both, a promising pathway to continue this advancement, as well as a unique challenge due to new behaviors that appear when the dimensions of structures become comparable to the wavelength of light.",
            "link": "https://news.unm.edu/news/nanoscale-manipulation-of-light-leads-to-exciting-new-advancement"
        },
        {
            "year": 2019,
            "date": "Oct 9",
            "name": "high-performance polymer could make for better body armor",
            "place": "Brown University",
            "description": "Using a new composite nanoparticle catalyst, researchers have shown they can make degradation-resistant PBO, a polymer used to make body armor and other high-performance fabrics.",
            "link": "https://www.brown.edu/news/2019-10-09/pbo"
        },
        {
            "year": 2019,
            "date": "Oct 7",
            "name": "New capsule can orally deliver drugs that usually have to be injected",
            "place": "Massachusetts Institute of Technology",
            "description": "Many drugs, especially those made of proteins, cannot be taken orally because they are broken down in the gastrointestinal tract before they can take effect. One example is insulin, which patients with diabetes have to inject daily or even more frequently.",
            "link": "http://news.mit.edu/2019/orally-deliver-drugs-injected-1007"
        },
        {
            "year": 2019,
            "date": "Oct 7",
            "name": "Intelligent, shape-morphing, self-healing material for soft robotics",
            "place": "College of Engineering, Carnegie Mellon University",
            "description": "Advances in the fields of soft robotics, wearable technologies, and human/machine interfaces require a new class of stretchable materials that can change shape adaptively while relying only on portable electronics for power. Researchers have developed such a material that exhibits a unique combination of high electrical and thermal conductivity with actuation capabilities that are unlike any other soft composite.",
            "link": "https://www.meche.engineering.cmu.edu/news/2019/10/almost-natural.html"
        },
        {
            "year": 2019,
            "date": "Oct 7",
            "name": "Bacteria trapped -- and terminated -- by graphene filter",
            "place": "Rice University",
            "description": "Chemists transform their laser-induced graphene into an air filter that not only traps pathogens but also kills them with a small blast of electricity.",
            "link": "http://news.rice.edu/2019/10/07/bacteria-trapped-and-terminated-by-graphene-filter/"
        },
        {
            "year": 2019,
            "date": "Oct 7",
            "name": "Modified quantum dots capture more energy from light and lose less to heat",
            "place": "DOE/Los Alamos National Laboratory",
            "description": "Scientists have synthesized magnetically-doped quantum dots that capture the kinetic energy of electrons created by ultraviolet light before it's wasted as heat.",
            "link": "https://www.lanl.gov/discover/news-release-archive/2019/October/1007-quantum-dots.php"
        },
        {
            "year": 2019,
            "date": "Oct 7",
            "name": "Diagnosing cellular nanomechanics",
            "place": "Singapore-MIT Alliance for Research and Technology ",
            "description": "SMART has developed a new way to study cells, paving the way for a better understanding of how cancers spread and become deadly.",
            "link": "http://news.mit.edu/2019/smart-mit-diagnosing-cellular-nanomechanics-1007"
        },
        {
            "year": 2019,
            "date": "Oct 3",
            "name": "3D Printing Technique Accelerates Nanoscale Fabrication a Thousandfold",
            "place": "Georgia Tech",
            "description": "Using a new time-based method to control light from an ultrafast laser, researchers have developed a nanoscale 3D printing technique that can fabricate tiny structures a thousand times faster than conventional two-photon lithography (TPL) techniques, without sacrificing resolution.",
            "link": "https://www.news.gatech.edu/2019/10/03/3d-printing-technique-accelerates-nanoscale-fabrication-thousandfold"
        },
        {
            "year": 2019,
            "date": "Oct 3",
            "name": "Stanford chemist develop ‘infrared vision’ for cancer immunotherapy",
            "place": "Stanford University",
            "description": "A new technique employs a bright infrared light that can pass through millimeters of tissue to illuminate tumors deep inside the body.",
            "link": "https://news.stanford.edu/2019/10/03/infrared-vision-immunotherapy/"
        },
        {
            "year": 2019,
            "date": "Oct 2",
            "name": "Inventing the world's strongest silver",
            "place": "University of Vermont",
            "description": "A team of scientists has made the strongest silver ever -- 42 percent stronger than the previous world record. It's part of a discovery of a new mechanism at the nanoscale that can create metals much stronger than any ever made before -- while not losing electrical conductivity. ",
            "link": "https://www.uvm.edu/uvmnews/news/inventing-worlds-strongest-silver"
        },
        {
            "year": 2019,
            "date": "Sep 30",
            "name": "Controlling 2-D magnetism with stacking order",
            "place": "Massachusetts Institute of Technology",
            "description": "MIT researchers discover why magnetism in certain materials is different in atomically thin layers and their bulk forms.",
            "link": "http://news.mit.edu/2019/controlling-2d-magnetism-stacking-order-0930"
        },
        {
            "year": 2019,
            "date": "Sep 25",
            "name": "Quantum sensing on a chip",
            "place": "Massachusetts Institute of Technology",
            "description": "Researchers integrate diamond-based sensing components onto a chip to enable low-cost, high-performance quantum hardware.",
            "link": "http://news.mit.edu/2019/quantum-sensing-chip-0925"
        },
        {
            "year": 2019,
            "date": "Sep 25",
            "name": "Nanotechnology Improves Chemotherapy Delivery",
            "place": "Michigan State University",
            "description": "Michigan State University scientists have invented a new way to monitor chemotherapy concentrations, which is more effective in keeping patients’ treatments within the crucial therapeutic window.",
            "link": "https://msutoday.msu.edu/news/2019/nanotechnology-improves-chemotherapy-delivery/"
        },
        {
            "year": 2019,
            "date": "Sep 20",
            "name": "3 Questions: Why sensing, why now, what next?",
            "place": "Massachusetts Institute of Technology",
            "description": "Sensors are everywhere today, from our homes and vehicles to medical devices, smart phones, and other useful tech. More and more, sensors help detect our interactions with the environment around us — and shape our understanding of the world.",
            "link": "http://news.mit.edu/2019/3-questions-why-sensing-why-now-brian-anthony-mit-0920"
        },
        {
            "year": 2019,
            "date": "Sep 19",
            "name": "'Nanochains' could increase battery capacity, cut charging time",
            "place": "Purdue University",
            "description": "A new method could allow better materials to make up battery electrodes by converting them into a nanochain structure, extending battery lifetime and increasing stability.",
            "link": "https://www.purdue.edu/newsroom/releases/2019/Q3/nanochains-could-increase-battery-capacity,-cut-charging-time.html"
        },
        {
            "year": 2019,
            "date": "Sep 18",
            "name": "Nano bulb lights novel path",
            "place": "Rice University",
            "description": "Engineers have created what may be viewed as the world's smallest incandescent lightbulbs, collections of near-nanoscale materials called 'selective thermal emitters' that absorb heat and emit light. Their research could have applications in sensing, photonics and perhaps in computing platforms beyond the limitations of silicon.",
            "link": "https://news.rice.edu/2019/09/18/nano-bulb-lights-novel-path-2/"
        },
        {
            "year": 2019,
            "date": "Sep 18",
            "name": "Closing in on 'holy grail' of room temperature quantum computing chips",
            "place": "Stevens Institute of Technology",
            "description": "To process information, photons must interact. However, these tiny packets of light want nothing to do with each other, each passing by without altering the other. Now, researchers have coaxed photons into interacting with one another with unprecedented efficiency -- a key advance toward realizing long-awaited quantum optics technologies for computing, communication and remote sensing.",
            "link": "https://www.stevens.edu/news/stevens-team-closes-holy-grail-room-temperature-quantum-computing-chips"
        },
        {
            "year": 2019,
            "date": "Sep 18",
            "name": "Brain-computer interfaces without the mess",
            "place": "American Chemical Society",
            "description": "It sounds like science fiction: controlling electronic devices with brain waves. But researchers have developed a new type of electroencephalogram (EEG) electrode that can do just that, without the sticky gel required for conventional electrodes. Even better, the devices work through a full head of hair. The researchers now report on the flexible electrodes, which could someday be used in brain-computer interfaces to drive cars or move artificial limbs.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2019/acs-presspac-september-18-2019/brain-computer-interfaces-without-the-mess.html"
        },
        {
            "year": 2019,
            "date": "Sep 18",
            "name": "Porcupinefish inspires sturdy superhydrophobic material",
            "place": "American Chemical Society",
            "description": "Nature has evolved a dazzling array of materials that help organisms thrive in diverse habitats. Sometimes, scientists can exploit these designs to develop useful materials with similar or completely new functions. Now, researchers have made a durable and flexible super-water-repelling material inspired by spiky porcupinefish skin.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2019/acs-presspac-september-18-2019/porcupinefish-inspires-sturdy-superhydrophobic-material.html"
        },
        {
            "year": 2019,
            "date": "Sep 18",
            "name": "Researchers use nanoparticles made by bacteria to fight antibiotic-resistant infections like MRSA",
            "place": "Northeastern University",
            "description": "Webster and his colleagues are using bacteria to produce nanoparticles, metallic particles that are between one and 100 nanometers wide. (A single hair is about 80,000 nanometers wide.) The researchers have found that these nanoparticles are particularly effective at killing whatever type of cell was used to create them, including strains of bacteria that are resistant to traditional antibiotics.",
            "link": "https://coe.northeastern.edu/news/treating-antibiotic-resistant-infections/"
        },
        {
            "year": 2019,
            "date": "Sep 18",
            "name": "Suntanner, heal thyself: Exosome therapy may enable better repair of sun, age-damaged skin",
            "place": "North Carolina State University",
            "description": "In a proof-of-concept study, researchers have shown that exosomes harvested from human skin cells are more effective at repairing sun-damaged skin cells in mice than popular retinol or stem cell-based treatments currently in use. Additionally, the nanometer-sized exosomes can be delivered to the target cells via needle-free injections.",
            "link": "https://news.ncsu.edu/2019/09/exosome-therapy-skin-repair/"
        },
        {
            "year": 2019,
            "date": "Sep 17",
            "name": "Modeling a model nanoparticle",
            "place": "University of Pittsburgh",
            "description": "New research from the University of Pittsburgh Swanson School of Engineering introduces the first universal adsorption model that accounts for detailed nanoparticle structural characteristics, metal composition and different adsorbates, making it possible to not only predict adsorption behavior on any metal nanoparticles but screen their stability, as well.",
            "link": "https://www.engineering.pitt.edu/News/2019/Modeling-a-Model-Nanoparticle/"
        },
        {
            "year": 2019,
            "date": "Sep 16",
            "name": "Snaphots freezing a nanoswing: Accurate position measurement overcomes thermal fluctuations",
            "place": "Phys.org",
            "description": "Physicists at AMOLF have managed to cool a swinging, nanosized string to near-zero temperature without using external refrigeration.",
            "link": "https://phys.org/news/2019-09-snaphots-nanoswing-accurate-position-thermal.html"
        },
        {
            "year": 2019,
            "date": "Sep 16",
            "name": "Uncovering the hidden 'noise' that can kill qubits",
            "place": "Massachusetts Institute of Technology",
            "description": "MIT and Dartmouth College researchers have demonstrated, for the first time, a tool that detects new characteristics of environmental 'noise' that can destroy the fragile quantum state of qubits, the fundamental components of quantum computers. The advance may provide insights into microscopic noise mechanisms to help engineer new ways of protecting qubits.",
            "link": "http://news.mit.edu/2019/non-gaussian-noise-detect-qubits-0916"
        },
        {
            "year": 2019,
            "date": "Sep 13",
            "name": "Electric tech could help reverse baldness",
            "place": "University of Wisconsin-Madison",
            "description": "Reversing baldness could someday be as easy as wearing a hat, thanks to a noninvasive, low-cost hair-growth-stimulating technology.",
            "link": "https://news.wisc.edu/electric-tech-could-help-reverse-baldness/"
        },
        {
            "year": 2019,
            "date": "Sep 13",
            "name": "Using a scanning tunneling microscope to make origami structures out of graphene",
            "place": "Vanderbilt University",
            "description": "A team of researchers from the Chinese Academy of Sciences, Vanderbilt University and the University of Maryland has created origami-like structures made out of graphene using scanning tunneling microscopy. In their paper published in the journal Science, the group explains how they achieved this feat and possible applications.",
            "link": "https://news.vanderbilt.edu/2019/09/06/nanoscale-origami-smallest-ever-atomically-precise-structures-set-stage-for-quantum-breakthroughs/"
        },
        {
            "year": 2019,
            "date": "Sep 12",
            "name": "MIT engineers develop 'blackest black' material to date",
            "place": "Massachusetts Institute of Technology",
            "description": "Made from carbon nanotubes, the new coating is 10 times darker than other very black materials.",
            "link": "http://news.mit.edu/2019/blackest-black-material-cnt-0913/"
        },
        {
            "year": 2019,
            "date": "Sep 12",
            "name": "Study introduces new nanoscale vacuum channel transistors",
            "place": "NASA",
            "description": "Vacuum tubes initially played a central role in the development of electronic devices. A few decades ago, however, researchers started replacing them with semiconductor transistors, small electronic components that can be used both as amplifiers and switches.",
            "link": "https://technology.nasa.gov/patent/TOP2-174"
        },
        {
            "year": 2019,
            "date": "Sep 12",
            "name": "Gem-like nanoparticles of precious metals shine as catalysts",
            "place": "Northwestern University",
            "description": "A Northwestern University research team has developed a new method for making highly desirable catalysts from metal nanoparticles that could lead to better fuel cells, among other applications. The researchers also discovered the method can take spent catalysts and recycle them into active catalysts.",
            "link": "https://news.northwestern.edu/stories/2019/09/gem-like-nanoparticles-of-precious-metals-shine-as-catalysts/"
        },
        {
            "year": 2019,
            "date": "Sep 11",
            "name": "MXene-coated yarns as platform technology for e-textiles",
            "place": "Drexel University, Nanomaterials Group (NMG)",
            "description": "MXenes – the large family of two-dimensional (2D) transition metal carbides and nitrides – show outstanding physical properties and have found applications ranging from energy storage to medicine and optoelectronics.",
            "link": "https://nano.materials.drexel.edu/2019/09/nanowerk-featured-story/"
        },
        {
            "year": 2019,
            "date": "Sep 6",
            "name": "Selenium anchors could improve durability of platinum fuel cell catalysts",
            "place": "Georgia Tech",
            "description": "Researchers have developed a new platinum-based catalytic system that is far more durable than traditional commercial systems and has a potentially longer lifespan. The new system could, over the long term, reduce the cost of producing fuel cells.",
            "link": "http://www.rh.gatech.edu/news/625691/selenium-anchors-could-improve-durability-platinum-fuel-cell-catalysts"
        },
        {
            "year": 2019,
            "date": "Sep 6",
            "name": "Selenium anchors could improve durability of platinum fuel cell catalysts",
            "place": "Georgia Tech",
            "description": "Researchers have developed a new platinum-based catalytic system that is far more durable than traditional commercial systems and has a potentially longer lifespan. The new system could, over the long term, reduce the cost of producing fuel cells.",
            "link": "https://www.news.gatech.edu/2019/09/05/selenium-anchors-could-improve-durability-platinum-fuel-cell-catalysts"
        },
        {
            "year": 2019,
            "date": "Sep 6",
            "name": "Using a scanning tunneling microscope to make origami structures out of graphene",
            "place": "Vanderbilt University",
            "description": "A team of researchers from the Chinese Academy of Sciences, Vanderbilt University and the University of Maryland has created origami-like structures made out of graphene using scanning tunneling microscopy. In their paper published in the journal Science, the group explains how they achieved this feat and possible applications.",
            "link": "https://news.vanderbilt.edu/2019/09/06/nanoscale-origami-smallest-ever-atomically-precise-structures-set-stage-for-quantum-breakthroughs/"
        },
        {
            "year": 2019,
            "date": "Sep 5",
            "name": "Creating new opportunities from nanoscale materials",
            "place": "Massachusetts Institute of Technology",
            "description": "A hundred years ago, '2d' meant a two-penny, or 1-inch, nail. Today, '2-D' encompasses a broad range of atomically thin flat materials, many with exotic properties not found in the bulk equivalents of the same materials, with graphene — the single-atom-thick form of carbon — perhaps the most prominent. While many researchers at MIT and elsewhere are exploring two-dimensional materials and their special properties, Frances M. Ross, the Ellen Swallow Richards Professor in Materials Science and Engineering, is interested in what happens when these 2-D materials and ordinary 3-D materials come together.",
            "link": "http://news.mit.edu/2019/creating-new-opportunities-nanoscale-materials-0905"
        },
        {
            "year": 2019,
            "date": "Sep 5",
            "name": "Using nature to produce a revolutionary optical material",
            "place": "University of Houston",
            "description": "An international team of researchers has reported a new way to safeguard drones, surveillance cameras and other equipment against laser attacks, which can disable or destroy the equipment.",
            "link": "http://www.uh.edu/nsm/news-events/stories/2019/0905-optical-material.php"
        },
        {
            "year": 2019,
            "date": "Sep 4",
            "name": "Argonne discovery offers new way to coat nuclear materials",
            "place": "Argonne National Laboratory",
            "description": "Argonne scientists have discovered a new way to coat nuclear materials that supports efforts to minimize use of high-enriched uranium.",
            "link": "https://www.anl.gov/article/argonne-discovery-offers-new-way-to-coat-nuclear-materials"
        },
        {
            "year": 2019,
            "date": "Aug 30",
            "name": "Cell biology: Moving faster in a crowd",
            "place": "Penn State University",
            "description": "Cell particles move more quickly through a crowded cellular environment when the crowding molecules are non-uniformly distributed.",
            "link": "https://news.psu.edu/story/585933/2019/08/30/research/moving-faster-crowd-examining-cell-particle-movement"
        },
        {
            "year": 2019,
            "date": "Aug 30",
            "name": "Separation and Characterization of Nanoplastics in the Environment",
            "place": "Postnova",
            "description": "The widespread use of plastics has created one of the worst human-created environmental disasters of current times. Postnova Analytics has published a new application note that demonstrates the promise of Electrical Asymmetric Field Flow Fractionation (EAF4) technology for separation and characterization of nanoplastics in the environment.",
            "link": "http://www.postnova.com/application-note/view/61.html"
        },
        {
            "year": 2019,
            "date": "Aug 29",
            "name": "Scientists explore aged paint in microscopic detail to inform preservation efforts",
            "place": "Berkeley Lab",
            "description": "To learn more about the chemical processes in oil paints that can damage aging artwork, researchers conducted a range of studies that included 3D X-ray imaging of a paint sample.",
            "link": "https://newscenter.lbl.gov/2019/08/29/chemistry-of-art-scientists-explore-aged-paint-in-microscopic-detail/"
        },
        {
            "year": 2019,
            "date": "Aug 28",
            "name": "New approach harnesses the same fabrication processes used for silicon chips, offers key advance toward next-generation computers.",
            "place": "Massachusetts Institute of Technology",
            "description": "After years of tackling numerous design and manufacturing challenges, MIT researchers have built a modern microprocessor from carbon nanotube transistors, which are widely seen as a faster, greener alternative to their traditional silicon counterparts.",
            "link": "http://news.mit.edu/2019/carbon-nanotubes-microprocessor-0828"
        },
        {
            "year": 2019,
            "date": "Aug 28",
            "name": "Ultrathin 3-D-printed films convert energy of one form into another",
            "place": "Massachusetts Institute of Technology",
            "description": "MIT researchers have developed a simple, low-cost method to 3-D print ultrathin films with high-performing 'piezoelectric' properties, which could be used for components in flexible electronics or highly sensitive biosensors.",
            "link": "http://news.mit.edu/2019/3-d-printed-piezoelectric-films-0828"
        },
        {
            "year": 2019,
            "date": "Aug 27",
            "name": "Enhancing materials for hi-res patterning to advance microelectronics",
            "place": "Brookhaven National Laboratory",
            "description": "Scientists created organic-inorganic materials for transferring ultrasmall features into silicon with a high aspect ratio.",
            "link": "https://www.bnl.gov/newsroom/news.php?a=116681"
        },
        {
            "year": 2019,
            "date": "Aug 27",
            "name": "Silicon nanoblades convert waste heat into energy",
            "place": "University of Texas at Dallas",
            "description": "Waste heat from electronics can be converted into reusable energy more efficiently thanks to a collaboration between the University of Texas at Dallas and Texas Instruments. Nanoblades Could Reshape How Circuits Are Cooled, Provide Better Way for Converting Waste Heat.",
            "link": "https://www.utdallas.edu/news/research/physicists-find-better-way-to-harness-waste-heat-for-electricity/"
        },
        {
            "year": 2019,
            "date": "Aug 26",
            "name": "Physicists Demonstrate Silicon’s Energy-Harvesting Power in Study",
            "place": "University of Texas at Dallas",
            "description": "A University of Texas at Dallas physicist has teamed with Texas Instruments Inc. to design a better way for electronics to convert waste heat into reusable energy.The collaborative project demonstrated that silicon’s ability to harvest energy from heat can be greatly increased while remaining mass-producible.",
            "link": "https://www.utdallas.edu/news/research/physicists-find-better-way-to-harness-waste-heat-for-electricity/?WT.mc_id=NewsHomePage"
        },
        {
            "year": 2019,
            "date": "Aug 26",
            "name": "Chemists discover water microdroplets spontaneously produce hydrogen peroxide",
            "place": "Stanford University",
            "description": "Despite its abundance, water retains a great many secrets. Among them, chemists have discovered, is that water microdroplets spontaneously produce hydrogen peroxide.",
            "link": "https://news.stanford.edu/2019/08/26/water-droplets-spontaneously-produce-hydrogen-peroxide/"
        },
        {
            "year": 2019,
            "date": "Aug 26",
            "name": "Mosquito incognito: Could graphene-lined clothing prevent mosquito bites?",
            "place": "Brown University",
            "description": "A new study shows that graphene sheets can block the signals mosquitos use to identify a blood meal, potentially enabling a new chemical-free approach to mosquito bite prevention.",
            "link": "https://www.brown.edu/news/2019-08-26/moquitoes"
        },
        {
            "year": 2019,
            "date": "Aug 26",
            "name": "Particle Testing Authority (PTA) Extends its Pore Analysis Capabilities with Bubble Point Testing",
            "place": "Particle Testing Authority (PTA)",
            "description": "Particle Testing Authority (PTA), a division of Micromeritics Instrument Corporation, has stepped up its Pore Analysis Capabilities. The Company today announced those efforts include capillary flow porometery (CFP) and liquid-liquid displacement porometry (LLDP).",
            "link": "https://www.particletesting.com/pr-porometer/"
        },
        {
            "year": 2019,
            "date": "Aug 23",
            "name": "Breakthroughs seen in artificial eye and muscle technology",
            "place": "Harvard University",
            "description": "Inspired by the human eye, researchers at the Harvard John A. Paulson School of Engineering and Applied Sciences (SEAS) have developed an adaptive metalens that is essentially a flat, electronically controlled artificial eye. The adaptive metalens simultaneously controls for three of the major contributors to blurry images: focus, astigmatism, and image shift.",
            "link": "https://news.harvard.edu/gazette/story/2018/02/researchers-combine-artificial-eye-and-artificial-muscle/"
        },
        {
            "year": 2019,
            "date": "Aug 22",
            "name": "Nano-thermometer takes temperature inside cells",
            "place": "Rice University",
            "description": "Rice chemistry lab uses fluorescence of molecular motors to sense conditionsHow do you know a cell has a fever? Take its temperature.That’s now possible thanks to research by Rice University scientists who used the light-emitting properties of particular molecules to create a fluorescent nano-thermometer.",
            "link": "https://news.rice.edu/2019/08/22/temperatures-inside-cells-taken-by-nano-thermometer/"
        },
        {
            "year": 2019,
            "date": "Aug 20",
            "name": "A new way to 'hoard' resources in nano-sized factories targeted for biotech",
            "place": "Michigan State University",
            "description": "The lab of Cheryl Kerfeld at Michigan State University has created a synthetic nano-sized factory, based on natural ones found in bacteria. This research could someday lead to new medical, industrial or bioenergy applications. ",
            "link": "https://msutoday.msu.edu/news/2019/a-new-way-to-hoard-resources-in-nano-sized-factories-targeted-for-biotech/"
        },
        {
            "year": 2019,
            "date": "Aug 20",
            "name": "World's thinnest optical hologram with 2-D material monolayer",
            "place": "Missouri University of Science and Technology",
            "description": "Drs. Gao and Yang published a new concept of making optical holograms with 2D material monolayer for producing holographic images in the journal of Nano Letters, one top journal in nanoscience and nanotechnology research. Their findings hold promise for future technologies such as 3D displays for smart watches, security marking on credit cards, and biomedical imaging.",
            "link": "https://mae.mst.edu/department/news/nanoletters/"
        },
        {
            "year": 2019,
            "date": "Aug 19",
            "name": "A new way to deliver drugs with pinpoint targeting",
            "place": "Massachusetts Institute of Technology",
            "description": "Most pharmaceuticals must either be ingested or injected into the body to do their work. Either way, it takes some time for them to reach their intended targets, and they also tend to spread out to other areas of the body. Now, researchers at MIT and elsewhere have developed a system to deliver medical treatments that can be released at precise times, minimally-invasively, and that ultimately could also deliver those drugs to specifically targeted areas such as a specific group of neurons in the brain.",
            "link": "http://news.mit.edu/2019/lipid-magent-deliver-drugs-0819"
        },
        {
            "year": 2019,
            "date": "Aug 16",
            "name": "A novel cellular process to engulf nano-sized materials",
            "place": "University of Minnesota",
            "description": "In a study published in Nature Communications, University of Minnesota researchers discovered a novel cellular process that can engulf nanomaterial without direct peptide functionalization, and its activity is regulated by Cysteine surrounding the cells. The research team termed this cellular process of engulfing bystander NPs as ‘bystander uptake.’",
            "link": "https://twin-cities.umn.edu/news-events/research-brief-novel-cellular-process-engulf-nano-sized-materials"
        },
        {
            "year": 2019,
            "date": "Aug 15",
            "name": "Nanoscale 'glass' bottles could enable targeted drug delivery",
            "place": "Georgia Institute of Technology",
            "description": "Tiny silica bottles filled with medicine and a special temperature-sensitive material could be used for drug delivery to kill malignant cells only in certain parts of the body, according to a study published recently by researchers at the Georgia Institute of Technology.",
            "link": "https://www.news.gatech.edu/2019/08/14/nanoscale-glass-bottles-could-enable-targeted-drug-delivery"
        },
        {
            "year": 2019,
            "date": "Aug 15",
            "name": "Stronger Graphene Oxide ‘Paper’ Made with Weaker Units",
            "place": "Northwestern University",
            "description": "A new study from Northwestern University researchers shows that better GO 'paper' can be made by mixing strong, solid GO flakes with weak, porous GO flakes. The finding will aid the production of higher quality GO materials, and it sheds light on a general problem in materials engineering: how to build a nano-scale material into a macroscopic material without losing its desirable properties.",
            "link": "https://www.mccormick.northwestern.edu/news/articles/2019/08/stronger-graphene-oxide-paper-made-with-weaker-units-huang.html"
        },
        {
            "year": 2019,
            "date": "Aug 14",
            "name": "Solving the Big Problem of Measuring Tiny Nanoparticles",
            "place": "National Institute of Standards and Technology",
            "description": "Scientists have long debated the most effective way to measure nanoparticles so that results can be shared across labs. NIST researchers have found that one approach — particle number concentrations — may be better than others for most applications.",
            "link": "https://www.nist.gov/news-events/news/2019/08/solving-big-problem-measuring-tiny-nanoparticles"
        },
        {
            "year": 2019,
            "date": "Aug 14",
            "name": "New nanotechnology could aid stem cell transplantation research",
            "place": "Rutgers University",
            "description": "Nanotechnology developed at Rutgers University-New Brunswick could boost research on stem cell transplantation, which may help people with Alzheimer's disease, Parkinson's disease, other neurodegenerative diseases and central nervous system injuries.",
            "link": "https://kblee.rutgers.edu/about-kibum-lee/"
        },
        {
            "year": 2019,
            "date": "Aug 13",
            "name": "Damaged hearts rewired with nanotube fibers",
            "place": "Rice University",
            "description": "Thin, flexible fibers made of carbon nanotubes have now proven able to bridge damaged heart tissues and deliver the electrical signals needed to keep those hearts beating.",
            "link": "http://news.rice.edu/2019/08/13/damaged-hearts-rewired-with-nanotube-fibers-2/"
        },
        {
            "year": 2019,
            "date": "Aug 9",
            "name": "NANOTRIBIOLOGY: A PREDICTION OF FRICTION",
            "place": "NC State University",
            "description": "Recent progress in nanotribology has demonstrated that the laws of macroscale friction simply don’t apply to atomic scale devices, and that the problems friction can generate are overwhelming in machine components with such astoundingly small dimensions.",
            "link": "https://projects.ncsu.edu/research/results/vol4/4.html"
        },
        {
            "year": 2019,
            "date": "Aug 9",
            "name": "A single-photon source you can make at home",
            "place": "Massachusetts Institute of Technology",
            "description": "Shining light through household bleach creates fluorescent quantum defects in carbon nanotubes for quantum computing and biomedical imaging.",
            "link": "http://news.mit.edu/2019/single-photon-source-fluorescent-quantum-defects-0809"
        },
        {
            "year": 2019,
            "date": "Jul 31",
            "name": "This designer clothing lets users turn on electronics while turning away bacteria",
            "place": "Purdue University",
            "description": "A new addition to your wardrobe may soon help you turn on the lights and music – while also keeping you fresh, dry, fashionable, clean and safe from the latest virus that’s going around.Purdue University researchers have developed a new fabric innovation that allows wearers to control electronic devices through clothing.",
            "link": "https://www.purdue.edu/newsroom/releases/2019/Q3/this-designer-clothing-lets-users-turn-on-electronics-while-turning-away-bacteria.html"
        },
        {
            "year": 2019,
            "date": "Jul 23",
            "name": "A New Liquid Biopsy Chip Developed at WPI Detects Circulating Tumor Cells in 100 Percent of Blood Samples from Stage 1-4 Breast Cancer Patients",
            "place": "Worcester Polytechnic Institute",
            "description": "Using the tendency of circulating cancer cells to adhere to carbon nanotubes, the easily mass-produced chip captures living cells and cell clusters of multiple types and sizes with high reliability and makes them available for analysis. The chip could be used to detect tumors at the earliest stages, before they can metastasize.",
            "link": "https://www.wpi.edu/news/new-liquid-biopsy-chip-developed-wpi-detects-circulating-tumor-cells-100-percent-blood-samples"
        },
        {
            "year": 2019,
            "date": "Jul 15",
            "name": "Transforming biology to design next-generation computers, using a surprise ingredient",
            "place": "Purdue University",
            "description": "A Purdue University group has found ways of transforming structures that occur naturally in cell membranes to create other architectures, like parallel 1nm-wide line segments, more applicable to computing.",
            "link": "https://www.purdue.edu/newsroom/releases/2019/Q3/transforming-biology-to-design-next-generation-computers,-using-a-surprise-ingredient.html"
        },
        {
            "year": 2019,
            "date": "Jul 11",
            "name": "Artificial 'muscles' achieve powerful pulling force",
            "place": "Massachusetts Institute of Technology",
            "description": "New MIT system of contracting fibers could be a boon for biomedical devices and robotics.Now, researchers at MIT have found a way to imitate this coiling-and-pulling mechanism to produce contracting fibers that could be used as artificial muscles for robots, prosthetic limbs, or other mechanical and biomedical applications.",
            "link": "http://news.mit.edu/2019/artificial-fiber-muscles-0711"
        },
        {
            "year": 2019,
            "date": "Jul 11",
            "name": "Enriching solid-state batteries",
            "place": "Massachusetts Institute of Technology",
            "description": "MIT researchers demonstrate a method to make a smaller, safer, and faster lithium-rich ceramic electrolyte.Researchers at MIT have come up with a new pulsed laser deposition technique to make thinner lithium electrolytes using less heat, promising faster charging and potentially higher-voltage solid-state lithium ion batteries.",
            "link": "http://news.mit.edu/2019/enriching-solid-state-batteries-jennifer-rupp-mit-0711"
        },
        {
            "year": 2019,
            "date": "Jun 27",
            "name": "A new way to make droplets bounce away",
            "place": "Massachusetts Institute of Technology",
            "description": "Whether the goal is keeping ice from building up on an airplane wing or a wind turbine blade, or preventing heat loss from a surface during rainfall, or preventing salt buildup on surfaces exposed to ocean spray, making droplets bounce away as fast as possible and minimizing the amount of contact with the surface can be key to keeping systems functioning properly.",
            "link": "http://news.mit.edu/2019/droplets-bounce-waterproof-ice-0627"
        },
        {
            "year": 2019,
            "date": "Jun 26",
            "name": "Translating proteins into music, and back",
            "place": "Massachusetts Institute of Technology",
            "description": "By turning molecular structures into sounds, researchers gain insight into protein structures and create new variations. In a surprising marriage of science and art, researchers at MIT have developed a system for converting the molecular structures of proteins, the basic building blocks of all living beings, into audible sound that resembles musical passages. ",
            "link": "http://news.mit.edu/2019/translating-proteins-music-0626"
        },
        {
            "year": 2019,
            "date": "Jun 21",
            "name": "'Nanoemulsion' gels offer new way to deliver drugs through the skin",
            "place": "Massachusetts Institute of Technology",
            "description": "MIT chemical engineers have devised a new way to create very tiny droplets of one liquid suspended within another liquid, known as nanoemulsions. Such emulsions are similar to the mixture that forms when you shake an oil-and-vinegar salad dressing, but with much smaller droplets. Their tiny size allows them to remain stable for relatively long periods of time. ",
            "link": "http://news.mit.edu/2019/nanoemulsion-gels-skin-drugs-0621"
        },
        {
            "year": 2019,
            "date": "Jun 9",
            "name": "Getting the oil out of water",
            "place": "Massachusetts Institute of Technology",
            "description": "Oil and water are famously reluctant to mix fully together. But separating them completely — for example, when cleaning up an oil spill or purifying water contaminated through fracking — is a devilishly hard and inefficient process that frequently relies on membranes that tend to get clogged up, or 'fouled.'",
            "link": "http://news.mit.edu/2019/imaging-membranes-oil-out-water-0610"
        },
        {
            "year": 2019,
            "date": "Jun 5",
            "name": "How to speed up the discovery of new solar cell materials",
            "place": "Massachusetts Institute of Technology",
            "description": "A broad class of materials called perovskites is considered one of the most promising avenues for developing new, more efficient solar cells. But the virtually limitless number of possible combinations of these materials’ constituent elements makes the search for promising new perovskites slow and painstaking.",
            "link": "http://news.mit.edu/2019/solar-cell-material-discovery-perovskite-0605"
        },
        {
            "year": 2019,
            "date": "Jun 5",
            "name": "Chip design drastically reduces energy needed to compute with light",
            "place": "Massachusetts Institute of Technology",
            "description": "A new photonic chip design drastically reduces energy needed to compute with light, with simulations suggesting it could run optical neural networks 10 million times more efficiently than its electrical counterparts.",
            "link": "http://news.mit.edu/2019/ai-chip-light-computing-faster-0605"
        },
        {
            "year": 2019,
            "date": "May 23",
            "name": "Biotech startup uses nanoparticles to induce immune tolerance",
            "place": "Selecta Biosciences",
            "description": "Selecta Biosciences hopes its technology can be used to mitigate the unwanted immune responses of hundreds of drugs.",
            "link": "https://selectabio.com/immtor/"
        }
    ]
}
const GLOBAL_NEWS = {
    '2020': [
        {
            "date": "Dec 03",
            "name": "Cooling electronics efficiently with graphene-enhanced heat pipes",
            "place": "Chalmers University of Technology",
            "description": "Researchers at Chalmers University of Technology, Sweden, have found that graphene-based heat pipes can help solve the problems of cooling electronics and power systems used in avionics, data centres, and other power electronics. 'Heat pipes are one of the most efficient tools for this because of their high efficiency and unique ability to transfer heat over a large distance,' says Johan Liu, Professor of Electronics Production, at the Department of Microtechnology and Nanoscience – MC2, at Chalmers. The results, which also involved researchers in China and Italy, were recently published in the scientific Open Access journal Nano Select.",
            "link": "https://www.chalmers.se/en/departments/mc2/news/Pages/Cooling-electronics-efficiently-with-graphene-enhanced-heat-pipes.aspx#:~:text=and%20Johan%20Liu-,Cooling%20electronics%20efficiently%20with%20graphene%2Denhanced%20heat%20pipes,centres%2C%20and%20other%20power%20electronics."
        },
        {
            "date": "Nov 25",
            "name": "Quantum nanodiamonds may help detect disease earlier",
            "place": "University College London",
            "description": "The quantum sensing abilities of nanodiamonds can be used to improve the sensitivity of paper-based diagnostic tests, potentially allowing for earlier detection of diseases such as HIV, according to a study led by UCL researchers in the i-sense McKendry group.",
            "link": "https://www.ucl.ac.uk/news/2020/nov/quantum-nanodiamonds-may-help-detect-disease-earlier"
        },
        {
            "date": "Nov 24",
            "name": "Shining a light on nanoscale dynamics",
            "place": "University of Konstanz",
            "description": "Watching metamaterials at work in real time using ultrafast electron diffraction: a research team led by University of Konstanz physicist Peter Baum succeeds in using ultrashort electron pulses to measure light-matter interactions in nanophotonic materials and metamaterials.",
            "link": "https://www.uni-konstanz.de/en/university/news-and-media/current-announcements/news-in-detail/dynamische-nanowelt-im-fokus/"
        },
        {
            "date": "Nov 24",
            "name": "Sound waves power new advances in drug delivery and smart materials",
            "place": "RMIT University",
            "description": "Researchers have revealed how high-frequency sound waves can be used to build new materials, make smart nanoparticles and even deliver drugs to the lungs for painless, needle-free vaccinations.",
            "link": "https://www.rmit.edu.au/news/media-releases-and-expert-comments/2020/nov/sound-waves-advances"
        },
        {
            "date": "Nov 23",
            "name": "Controlling fully integrated nanodiamonds",
            "place": "University of Münster",
            "description": "Using modern nanotechnology, it is possible nowadays to produce structures which have a feature sizes of just a few nanometres. This world of the most minute particles – also known as quantum systems – makes possible a wide range of technological applications, in fields which include magnetic field sensing, information processing, secure communication or ultra-precise time keeping. The production of these microscopically small structures has progressed so far that they reach dimensions below the wavelength of light. In this way, it is possible to break down hitherto existent boundaries in optics and utilize the quantum properties of light. In other words, nanophotonics represent a novel approach to quantum technologies.",
            "link": "https://www.uni-muenster.de/news/view.php?cmdid=11392"
        },
        {
            "date": "Nov 20",
            "name": "Staying Ahead of the Curve with 3D Curved Graphene",
            "place": "Tohoku University",
            "description": "A team of researchers has amplified 3D graphene's electrical properties by controlling its curvature.",
            "link": "https://www.tohoku.ac.jp/en/press/staying_ahead_of_the_curve.html"
        },
        {
            "date": "Nov 19",
            "name": "World’s Smallest Atom-Memory Unit Created",
            "place": "University of Texas at Austin",
            "description": "Faster, smaller, smarter and more energy-efficient chips for everything from consumer electronics to big data to brain-inspired computing could soon be on the way after engineers at The University of Texas at Austin created the smallest memory device yet. And in the process, they figured out the physics dynamic that unlocks dense memory storage capabilities for these tiny devices.",
            "link": "https://news.utexas.edu/2020/11/19/worlds-smallest-atom-memory-unit-created/"
        },
        {
            "date": "Nov 18",
            "name": "Improving quantum dot interactions, one layer at a time",
            "place": "Osaka City University",
            "description": "Osaka City University scientists and colleagues in Japan have found a way to control an interaction between quantum dots that could greatly improve charge transport, leading to more efficient solar cells. Their findings were published in the journal Nature Communications.",
            "link": "https://www.osaka-cu.ac.jp/en/news/2020/improving-quantum-dot-interactions-one-layer-at-a-time"
        },
        {
            "date": "Nov 18",
            "name": "New electronic chip delivers smarter, light-powered AI",
            "place": "RMIT University",
            "description": "Researchers have developed artificial intelligence technology that brings together imaging, processing, machine learning and memory in one electronic chip, powered by light.",
            "link": "https://www.rmit.edu.au/news/media-releases-and-expert-comments/2020/nov/light-powered-artificial-intelligence"
        },         
        {
            "date": "Nov 13",
            "name": "Success in controlling the composition of perovskite ions paves the way for applying their flexibility to devices",
            "place": "Kobe University",
            "description": "Hybrid organic-inorganic perovskites(*1) have received much attention as potential next generation solar cells and as materials for light-emitting devices.",
            "link": "https://www.kobe-u.ac.jp/research_at_kobe_en/NEWS/news/2020_11_13_01.html"
        },
        {
            "date": "Nov 12",
            "name": "Smaller than Ever—Exploring the Unusual Properties of Quantum-sized Materials",
            "place": "Tokyo Institute of Technology",
            "description": "Scientists at Tokyo Institute of Technology (Tokyo Tech) synthesize sub-nanometer particles with precisely controlled proportions of indium and tin using specific macromolecular templates called dendrimers. Through a screening process spanning different metallic ratios, they discovered unusual electronic states and optical properties originating from size-miniaturization and elemental-hybridization. Their approach could be a first step in the development of sub-nanoparticles with unique functionalities and characteristics for electronic, magnetic, and catalytic applications.",
            "link": "https://www.titech.ac.jp/english/news/2020/048014.html"
        },
        {
            "date": "Nov 11",
            "name": "Turning heat into power with efficient organic thermoelectric material",
            "place": "University of Groningen",
            "description": "Thermoelectric materials use a temperature difference between both sides of the material to create an electric current. Inorganic thermoelectric materials are already quite efficient, but they contain toxic or rare elements and are often brittle, which makes them unsuitable for everyday applications. By contrast, organic thermoelectric materials are safe to use, but their efficiency in converting a temperature difference into a current is not very good. A team of scientists led by Jan Anton Koster, Professor of Semiconductor Physics at the University of Groningen, has now created a much more efficient organic thermoelectric material that is made from buckyballs with organic side chains. Their flexible material could be used to power wearable electronics.",
            "link": "https://www.rug.nl/sciencelinx/nieuws/2020/11/turning-heat-into-power-with-efficient-organic-thermoelectric-material?lang=en"
        },
        {
            "date": "Nov 10",
            "name": "Making 3-D Nanosuperconductors with DNA",
            "place": "Brookhaven National Laboratory",
            "description": "Three-dimensional (3-D) nanostructured materials—those with complex shapes at a size scale of billionths of a meter—that can conduct electricity without resistance could be used in a range of quantum devices. For example, such 3-D superconducting nanostructures could find application in signal amplifiers to enhance the speed and accuracy of quantum computers and ultrasensitive magnetic field sensors for medical imaging and subsurface geology mapping. However, traditional fabrication tools such as lithography have been limited to 1-D and 2-D nanostructures like superconducting wires and thin films. ",
            "link": "https://www.bnl.gov/newsroom/news.php?a=117490"
        },
        {
            "date": "Nov 09",
            "name": "Bringing drugs to the brain with nanoparticles to treat neurodegenerative diseases",
            "place": "Institut national de la recherche scientifique - INRS",
            "description": "Researchers from the Institut national de la recherche scientifique (INRS) have shown that nanoparticles could be used to deliver drugs to the brain to treat neurodegenerative diseases.",
            "link": "https://inrs.ca/en/news/bringing-drugs-to-the-brain-with-nanoparticles-to-treat-neurodegenerative-diseases/"
        },
        {
            "date": "Nov 09",
            "name": "Water Predictions: Telling when a Nanolithography Mold will Break Through Droplets",
            "place": "Tokyo University of Science",
            "description": "Ultraviolet nanoimprint lithography is powerful method of producing polymer nanostructures by pressing a curable resin onto a mold. However, there are no convenient methods to determine the lifetime of molds. Now, in a recent study in Japan, scientists develop a simple strategy to reliably predict the durability of mold materials by observing how water droplets make contact with the mold's surface as it wears out and distorts with use.",
            "link": "https://www.tus.ac.jp/en/mediarelations/archive/20201109_4567.html"
        },
        {
            "date": "Nov 09",
            "name": "The importance of good neighbours in catalysis",
            "place": "Chalmers University of Technology",
            "description": "Are you affected by your neighbours? So are nanoparticles in catalysts. New research from Chalmers, published in the journals Science Advances and Nature Communications, reveals how the nearest neighbours determine how well nanoparticles work in a catalyst.​​",
            "link": "https://www.chalmers.se/en/departments/physics/news/Pages/The-importance-of-good-neighbours-in-catalysis.aspx"
        },
        {
            "date": "Nov 06",
            "name": "Creating 3D Virtual Personas of All-Solid-State Batteries, Building a Better Tomorrow",
            "place": "Daegu Gyeongbuk Institute of Science and Technology",
            "description": "Scientists are eyeing all-solid-state-lithium batteries as a safer alternative to conventional lithium-ion batteries; but their performance needs much improvement. Now, with the 3D digital twin technology that a team from Korea has developed, a 3D digital replica of the real thing can be developed, and their solid interface microstructures can be studied in detail, potentially accelerating their advancement manifold. ",
            "link": "https://www.dgist.ac.kr/en/html/sub06/060202.html?mode=V&no=54cf49d1498121eb2e7e15cb0ecc48f7&GotoPage=1"
        },
        {
            "date": "Nov 06",
            "name": "Blue phosphorus: How a semiconductor becomes a metal",
            "place": "Technische Universität Dresden",
            "description": "Blue phosphorus, an atomically thin synthetic semiconductor, becomes metallic as soon as it is converted into a double layer. This has been discovered by an interdisciplinary team led by Prof Thomas Heine from TU Dresden and Prof Gabriel Merino from the Mexican research institute Cinvestav Merida. The scientists are first to describe the possibility of constructing nanoscale, highly efficient transistors consisting of only one element. The results of these investigations were published as highlight article in the current issue of the journal 'Physical Review Letters'.",
            "link": "https://tu-dresden.de/mn/der-bereich/news/blue-phosphorus-how-a-semiconductor-becomes-a-metal?set_language=en"
        },
        {
            "date": "Nov 05",
            "name": "Laser-Powered Nanomotors Chart Their Own Course",
            "place": "Institute of Industrial Science, The University of Tokyo",
            "description": "Researchers from the Institute of Industrial Science, the University of Tokyo (UTokyo-IIS) have designed novel linear nanomotors that can be moved in controlled directions using light. This work opens the way for new microfluidics, including lab-on-a-chip systems with optically actuated pumps and valves.",
            "link": "https://www.iis.u-tokyo.ac.jp/en/news/3397/"
        },
        {
            "date": "Nov 05",
            "name": "Future Information Technologies: Germanium telluride's hidden properties at the nanoscale revealed",
            "place": "Helmholtz-Zentrum Berlin für Materialien und Energie",
            "description": "Germanium Telluride is an interesting candidate material for spintronic devices. In a comprehensive study at BESSY II, a Helmholtz-RSF Joint Research Group has now revealed how the spin texture switches by ferroelectric polarization within individual nanodomains.",
            "link": "https://www.helmholtz-berlin.de/pubbin/news_seite?nid=22323;sprache=en;seitenid=1"
        },
        {
            "date": "Nov 04",
            "name": "Scientists Grow Carbon Nanotube Forest Much Longer Than Any Other",
            "place": "Waseda University",
            "description": "Novel technique yields a carbon nanotube forest of record length, potentially revolutionizing the future of many industries",
            "link": "https://www.waseda.jp/top/en/news/73953"
        },            
        {
            "date": "Oct 22",
            "name": "Turning streetwear into solar concentrators",
            "place": "Swiss Federal Laboratories for Materials Science and Technology (EMPA)",
            "description": "Researchers at Empa and ETH Zurich succeeded in developing a material that works like a luminescent solar concentrator and can even be applied to textiles. This opens up numerous possibilities for producing energy directly where it is needed, i.e. in the use of everyday electronics.",
            "link": "https://www.empa.ch/web/s604/wearable-solar-cells"
        },
        {
            "date": "Oct 20",
            "name": "Highly selective membranes",
            "place": "University of Tokyo",
            "description": "Membranes with microscopic pores are useful for water filtration. The effect of pore size on water filtration is well-understood, as is the role of ions, charged atoms, that interact with the membrane. For the first time, researchers have successfully described the impact water molecules have on other water molecules and on ions as part of the filtration mechanism. The researchers detail a feedback system between water molecules which opens up new design possibilities for highly selective membranes. Applications could include virus filters.",
            "link": "https://www.u-tokyo.ac.jp/focus/en/press/z0508_00132.html"
        },
        {
            "date": "Oct 19",
            "name": "High levels of microplastics released from infant feeding bottles during formula prep",
            "place": "Trinity College Dublin",
            "description": "New research shows that high levels of microplastics (MPs) are released from infant-feeding bottles (IFBs) during formula preparation. The research also indicates a strong relationship between heat and MP release, such that warmer liquids (formula or water used to sterilise bottles) result in far greater release of MPs.",
            "link": "https://www.tcd.ie/news_events/articles/high-levels-of-microplastics-released-from-infant-feeding-bottles-during-formula-preparation/"
        },
        {
            "date": "Oct 19",
            "name": "Creating perfect edges in 2D-materials",
            "place": "Chalmers University of Technology",
            "description": "Ultrathin materials such as graphene promise a revolution in nanoscience and technology. Researchers at Chalmers University of Technology, Sweden, have now made an important advance within the field. In a recent paper in Nature Communications they present a method for controlling the edges of two-dimensional materials using a ‘magic’ chemical.",
            "link": "https://news.cision.com/chalmers/r/creating-perfect-edges-in-2d-materials,c3218564"
        },    
        {
            "date": "Oct 07",
            "name": "New findings pave the way to environmentally friendly supercapacitors",
            "place": "Graz University of Technology",
            "description": "Similar to batteries, supercapacitors are suitable for the repeated storage of electrical energy. TU Graz researchers have presented a particularly safe and sustainable variant of such a supercapacitor in Nature Communications.",
            "link": "https://www.tugraz.at/en/tu-graz/services/news-stories/tu-graz-news/singleview/article/neue-erkenntnisse-ebnen-den-weg-zu-umweltfreundlichen-superkondensatoren0/"
        },
        {
            "date": "Oct 06",
            "name": "Diamonds are a quantum scientist’s best friend",
            "place": "University of the Witwatersrand",
            "description": "Diamonds have a firm foothold in our lexicon. Their many properties often serve as superlatives for quality, clarity and hardiness. Aside from the popularity of this rare material in ornamental and decorative use, these precious stones are also highly valued in industry where they are used to cut and polish other hard materials and build radiation detectors.",
            "link": "https://www.wits.ac.za/news/latest-news/research-news/2020/2020-10/diamonds-are-a-quantum-scientists-best-friend.html#:~:text=The%20Wits%20NSTPL%20has%20developed,regarded%20as%20a%20quantum%20material."
        },
        {
            "date": "Oct 01",
            "name": "Our health: New focus on the synergy effect of nanoparticles",
            "place": "University of Southern Denmark",
            "description": "Nanoparticles are valuable and useful in many products, but according to a new study, they can also damage our cells. Researchers are concerned about the effect of lifelong exposure to the human organism.",
            "link": "https://www.sdu.dk/en/om_sdu/fakulteterne/naturvidenskab/nyheder-2020/nyt-fokus-paa-nanopartiklers-synergieffekt"
        },
        {
            "date": "Oct 01",
            "name": "The most sensitive and fastest graphene microwave bolometer",
            "place": "ICFO",
            "description": "Scientists from Harvard, ICFO, MIT, Raytheon BBN Technologies and NIMS construct the fastest and most sensitive graphene-based microwave bolometer achieved so far.",
            "link": "https://www.icfo.eu/newsroom/news/article/4838"
        },
        {
            "date": "Sep 30",
            "name": "Zebrafish embryos help prove what happens to nanoparticles in the blood",
            "place": "Aarhus University",
            "description": "What happens to the nanoparticles when they are injected into the bloodstream, for example, to destroy solid tumours? With new results published in ACS Nano, researchers from Aarhus University are now ready to tackle such a challenging question using zebrafish embryos as a new study model in nanomedicine and nanotoxicology.",
            "link": "https://mbg.au.dk/en/news-and-events/news-item/artikel/zebrafish-embryos-help-prove-what-happens-to-nanoparticles-in-the-blood/"
        },
        {
            "date": "Sep 30",
            "name": "Nanomotors as probes to sense cancer environment ",
            "place": "Indian Institute of Science",
            "description": "An interdisciplinary team of researchers from the Indian Institute of Science (IISc) has used a 3D tumour model and magnetically-driven nanomotors to probe the microenvironment of cancer cells. The team consists of researchers from the Centre for Nano Science and Engineering (CeNSE) and Department of Molecular Reproduction, Development and Genetics (MRDG).   ",
            "link": "https://www.iisc.ac.in/events/nanomotors-as-probes-to-sense-cancer-environment/"
        },
        {
            "date": "Sep 28",
            "name": "Terraced graphene for ultrasensitive magnetic field sensor",
            "place": "National University of Singapore",
            "description": "NUS physicists have developed a sensitive two-dimensional (2-D) magnetic field sensor, which can potentially improve the detection of nanoscale magnetic domains for data storage applications.",
            "link": "https://www.science.nus.edu.sg/blog/2020/09/28/terraced-graphene-for-ultrasensitive-magnetic-field-sensor/"
        },
        {
            "date": "Sep 25",
            "name": "Secure nano-carrier delivers medications directly to cells",
            "place": "Technical University of Munich (TUM)",
            "description": "Medications often have unwanted side-effects. One reason is that they reach not only the unhealthy cells for which they are intended, but also reach and have an impact on healthy cells. Researchers at the Technical University of Munich (TUM), working together with the KTH Royal Institute of Technology in Stockholm, have developed a stable nano-carrier for medications. A special mechanism makes sure the drugs are only released in diseased cells.",
            "link": "https://www.tum.de/nc/en/about-tum/news/press-releases/details/36236/"
        },
        {
            "date": "Sep 25",
            "name": "Nanosecond laser-induced amplification of a photochromic reaction in a diarylethene nanoparticle",
            "place": "Ehime University",
            "description": "An Ehime University group led by Dr. Ishibashi and Prof. Asahi reported that when a nanosecond laser pulse was irradiated to diarylethene nanoparticles which show the photo-induced isomerization reaction from the colored closed-form to the colorless open-form, the ring-opening reaction was at most 80 times more effective than that in the solution phase. The amplification could be well explained as a ‘photosynergetic effect’ coupled with nanoscale photothermal conversion and a photochemical reaction. There are very few reports of such a nanosecond laser pulse induced amplified photochemical reaction in nanoparticles, indicating a new photoenergy conversion method.",
            "link": "https://www.asiaresearchnews.com/content/nanosecond-laser-induced-amplification-photochromic-reaction-diarylethene-nanoparticle"
        },
        {
            "date": "Sep 24",
            "name": "Lithium Batteries: New Nanochannels Make Them Charge Faster",
            "place": "University of Twente",
            "description": "A new technology to be used in lithium batteries can make them charge faster. The material graphite that was often used, already had a successor that could not further be improved, was the assumption. Until now, as researchers of the MESA+ Institute of the University of Twente found out that by nano structuring the material, new ‘paths’ will be created for lithium ions. This makes the battery charge faster, the researchers show in their paper in Journal of Power Sources.",
            "link": "https://www.utwente.nl/en/news/2020/9/787582/lithium-batteries-new-nanochannels-make-them-charge-faster"
        },
        {
            "date": "Sep 23",
            "name": "Nanostructures with a unique property",
            "place": "Paul Scherrer Institute",
            "description": "Nanoscale vortices known as skyrmions can be created in many magnetic materials. For the first time, researchers at PSI have managed to create and identify antiferromagnetic skyrmions with a unique property: critical elements inside them are arranged in opposing directions. Scientists have succeeded in visualising this phenomenon using neutron scattering. Their discovery is a major step towards developing potential new applications, such as more efficient computers. The results of the research are published today in the journal Nature.",
            "link": "https://www.psi.ch/en/media/our-research/nanostructures-with-a-unique-property"
        },
        {
            "date": "Sep 23",
            "name": "NTU Singapore scientists devise 'Trojan horse' approach to kill cancer cells without using drugs ",
            "place": "Nanyang Technological University",
            "description": "Cancer cells are killed in lab experiments and tumour growth reduced in mice, using a new approach that turns a nanoparticle into a 'Trojan horse' that causes cancer cells to self-destruct, a research team at the Nanyang Technological University, Singapore (NTU Singapore) has found.",
            "link": "http://news.ntu.edu.sg/pages/newsdetail.aspx?URL=http://news.ntu.edu.sg/news/Pages/NR2020_Sep23.aspx&Guid=8a36c19f-9d5b-45b7-86bc-a5cd655eefc7&Category=@NTU"
        },
        {
            "date": "Sep 23",
            "name": "Bristol scientists shine light on tiny crystals behind unexpected violent eruptions",
            "place": "University of Bristol",
            "description": "In a new study of volcanic processes, Bristol scientists have demonstrated the role nanolites play in the creation of violent eruptions at otherwise ‘calm’ and predictable volcanoes.",
            "link": "http://www.bristol.ac.uk/news/2020/september/nanolites.html"
        },
        {
            "date": "Sep 22",
            "name": "New Materials: A Toggle Switch for Catalysis",
            "place": "Vienna University of Technology",
            "description": "Electrochemical reactions, which will play an important role in the future of energy supply, can now be explained in detail, thanks to measurements carried out by TU Wien and DESY.",
            "link": "https://www.tuwien.at/en/tu-wien/news/news-articles/news/new-materials-a-toggle-switch-for-catalysis/"
        },
        {
            "date": "Sep 22",
            "name": "Biosynthesized Silver Nanoparticles are Promising for Pest Management",
            "place": "Chinese Academy of Sciences",
            "description": "In recent years, with the purpose of generating environment-friendly nanoparticles encompassing a vast range of applications, the green synthesis approach involving plants has gained great attention. ",
            "link": "http://english.cas.cn/newsroom/research_news/life/202009/t20200922_244123.shtml"
        },               
        {
            "date": "Sep 16",
            "name": "Anti-reflective coating inspired by fly eyes",
            "place": "Université de Genève",
            "description": "A team from UNIGE has artificially reproduced a nanoscale coating on different types of surfaces that usually covers the eyes of fruit flies, and which provides anti-reflective, anti-adhesive properties.",
            "link": "https://www.unige.ch/communication/communiques/en/2020/un-revetement-antireflet-sinspire-des-yeux-de-mouches/"
        },
        {
            "date": "Sep 15",
            "name": "Great progress for electronic gadgets of the future",
            "place": "Norwegian University of Science and Technology",
            "description": "A new discovery is an important step towards smaller, more advanced electronics. And maybe more environmentally friendly gadgets, too.",
            "link": "https://norwegianscitechnews.com/2020/09/great-progress-for-electronic-gadgets-of-the-future/"
        },
        {
            "date": "Sep 15",
            "name": "Going Small for Big Solutions: Sub-Nanoparticle Catalysts Made from Coinage Elements as Effective Catalysts",
            "place": "Tokyo Institute of Technology",
            "description": "'Sub-nanometer' particles (SNPs) are very popular because of their diverse applications, but technical difficulties in their synthesis has hindered research in this field. Scientists at the Tokyo Institute of Technology (Tokyo tech) used an 'atom-hybridization method' to overcome this barrier they developed to study the reactivity of alloy SNPs made from three coinage metal elements. Their findings are an important step in improving the knowledge about properties of finite elements and help in building a sustainable society.",
            "link": "https://www.titech.ac.jp/english/news/2020/047862.html"
        },
        {
            "date": "Sep 15",
            "name": "Single photons from a silicon chip",
            "place": "Helmholtz-Zentrum Dresden-Rossendorf",
            "description": "Quantum technology holds great promise: Just a few years from now, quantum computers are expected to revolutionize database searches, AI systems, and computational simulations. Today already, quantum cryptography can guarantee absolutely secure data transfer, albeit with limitations. The greatest possible compatibility with our current silicon-based electronics will be a key advantage. And that is precisely where physicists from the Helmholtz-Zentrum Dresden-Rossendorf (HZDR) and TU Dresden have made remarkable progress: The team has designed a silicon-based light source to generate single photons that propagate well in glass fibers.",
            "link": "https://www.hzdr.de/db/Cms?pOid=61675&pNid=0"
        },
        {
            "date": "Sep 14",
            "name": "Bioactive nano-capsules to hijack cell behavior",
            "place": "University of Basel",
            "description": "Many diseases are caused by defects in signaling pathways of body cells. In the future, bioactive nanocapsules could become a valuable tool for medicine to control these pathways. Researchers from the University of Basel have taken an important step in this direction: They succeed in having several different nanocapsules work in tandem to amplify a natural signaling cascade and influence cell behavior.",
            "link": "https://www.unibas.ch/en/News-Events/News/Uni-Research/Bioactive-nano-capsules-to-hijack-cell-behavior.html"
        }, 
        {
            "date": "Sep 12",
            "name": "Get Diamonds, Take Temperature: Quantum Thermometer Using Nanodiamonds Senses a ‘Fever’ in Tiny Worms C. elegans",
            "place": "Osaka City University",
            "description": "Measuring the temperature of objects at a nanometer-scale has been a long challenge, especially in living biological samples, because of the lack of precise and reliable nanothermometers. An international team of researchers has realized a quantum technology to probe temperature on a nanometer-scale, and have observed a ‘fever’ in tiny nematode worms under pharmacological treatment. This strengthens the connection between quantum sensing and biology and ushers in novel thermal imaging technologies in biomedical research.",
            "link": "https://www.osaka-cu.ac.jp/en/news/2020/200912-1"
        }, 
        {
            "date": "Sep 11",
            "name": "New on/off functionality for fast, sensitive, ultra-small technologies",
            "place": "Osaka University",
            "description": "How do you turn on and off an ultra-small component in advanced technologies? You need an actuator, a device that transmits an input such as electricity into physical motion. However, actuators in small-scale technologies to date have critical limitations. For example, if it's difficult to integrate the actuator into semiconductor electronics, real-world applications of the technology will be limited. An actuator design that operates quickly, has precise on/off control, and is compatible with modern electronics would be immensely useful.",
            "link": "https://resou.osaka-u.ac.jp/en/research/2020/20200911_1"
        },     
        {
            "date": "Sep 11",
            "name": "Significant leap forward in method for cancer treatment",
            "place": "Eindhoven University of Technology",
            "description": "Eindhoven University of Technology Professor Jan C.M. van Hest has announced a breakthrough in non-invasive cancer treatment. His Institute for Complex Molecular Systems partnered with several Chinese research institutions to test a nanotechnology that addresses the drawbacks to photodynamic therapy, an emerging cancer treatment. A paper detailing the successful test of the methodology was recently published in the journal ACS Nano.",
            "link": "https://www.tue.nl/en/news/news-overview/11-09-2020-significant-leap-forward-in-method-for-cancer-treatment/#:~:text=TU%2Fe%20researchers%20develop%20nanotechnology,in%20non%2Dinvasive%20cancer%20treatment."
        }, 
        {
            "date": "Sep 07",
            "name": "Bio-based photo-resin invented by Lithuanian researchers promises a breakthrough in rapid prototyping",
            "place": "Kaunas University of Technology",
            "description": "Lithuanian researchers from Kaunas University of Technology and Vilnius University synthesised and tested a bio-based resin for optical 3D printing (O3DP). The bio-based resin made from renewable raw materials proved to be universal for both table-top 3D printers and state-of-the-art ultrafast laser, suitable for O3DP in the scales from nano- to macro- dimensions. This, according to the researchers, is a unique property for a single photo-resin.",
            "link": "https://en.ktu.edu/news/bio-based-photo-resin-invented-by-lithuanian-researchers-promises-a-breakthrough-in-rapid-prototyping/#:~:text=The%20novel%20bio%2Dbased%20photo,University%20of%20Technology%20(KTU).&text=%E2%80%9CCurrently%2C%20only%20thermoplastic%20bio%2D,used%20for%20optical%203D%20printing."
        }, 
        {
            "date": "Sep 07",
            "name": "A tiny instrument to measure the faintest magnetic fields",
            "place": "Swiss Nanoscience Institute, University of Basel",
            "description": "Physicists at the University of Basel have developed a minuscule instrument able to detect extremely faint magnetic fields. At the heart of the superconducting quantum interference device are two atomically thin layers of graphene, which the researchers combined with boron nitride. Instruments like this one have applications in areas such as medicine, besides being used to research new materials.",
            "link": "https://nanoscience.ch/en/2020/09/07/a-tiny-instrument-to-measure-the-faintest-magnetic-fields/"
        }, 
        {
            "date": "Sep 03",
            "name": "Nanoearthquakes control spin centers in SiC",
            "place": "Forschungsverbund Berlin",
            "description": "Researchers from the Paul-Drude-Institut in Berlin, the Helmholtz-Zentrum in Dresden and the Ioffe Institute in St. Petersburg have demonstrated the use of elastic vibrations to manipulate the spin states of optically active color centers in SiC at room temperature.",
            "link": "https://www.fv-berlin.de/infos-fuer/medien-und-oeffentlichkeit/news/nanoearthquakes-control-spin-centers-in-sic"
        }, 
        {
            "date": "Sep 03",
            "name": "Autonomous Robot Plays with NanoLEGO",
            "place": "Forschungszentrum Juelich",
            "description": "Molecules are the building blocks of everyday life. Many materials are composed of them, a little like a LEGO model consists of a multitude of different bricks. But while individual LEGO bricks can be simply shifted or removed, this is not so easy in the nanoworld. Atoms and molecules behave in a completely different way to macroscopic objects and each brick requires its own “instruction manual”. Scientists from Jülich and Berlin have now developed an artificial intelligence system that autonomously learns how to grip and move individual molecules using a scanning tunnelling microscope. The method, which has been published in Science Advances, is not only relevant for research but also for novel production technologies such as molecular 3D printing.",
            "link": "https://www.fz-juelich.de/SharedDocs/Pressemitteilungen/UK/EN/2020/2020-09-03-ki-stm-en.html?nn=748728"
        }, 
        {
            "date": "Sep 02",
            "name": "New electronic skin can react to pain like human skin",
            "place": "RMIT University",
            "description": "Researchers have developed electronic artificial skin that reacts to pain just like real skin, opening the way to better prosthetics, smarter robotics and non-invasive alternatives to skin grafts.",
            "link": "https://www.rmit.edu.au/news/all-news/2020/sep/electronic-skin"
        }, 
        {
            "date": "Aug 31",
            "name": "New method: efficiently removing steroid hormones from water",
            "place": "Karlsruher Institut für Technologie",
            "description": "Micropollutants pollute water all over the world. These include steroid hormones, which conventional methods are insufficient to eliminate. Researchers at the Karlsruhe Institute of Technology (KIT) have developed an innovative filtration system that combines a polymer membrane with activated carbon. In this system, they now use particularly small carbon particles so that they achieve the recommended value of one nanogram of estradiol - the most physiologically effective estrogen - per liter proposed by the European Commission for drinking water. The team reports on the improved process in the journal Water Research.",
            "link": "https://www.kit.edu/kit/pi_2020_072_neues-verfahren-steroidhormone-effizient-aus-wasser-entfernen.php"
        }, 
        {
            "date": "Aug 28",
            "name": "Huge nanomachine helps the immune system",
            "place": "Ruhr-University Bochum",
            "description": "An imposing nanomachine is responsible for a small but important step towards a successful immune response. Researchers use simulations to understand how they work.",
            "link": "https://news.rub.de/wissenschaft/2020-08-28-theoretische-chemie-riesige-nanomaschine-hilft-dem-immunsystem"
        },
        {
            "date": "Aug 28",
            "name": "Round Nanoparticles Improve Quality Factors of Surface Lattice Resonances: Study",
            "place": "Chinese Academy of Sciences",
            "description": "Plasmonic surface lattice resonances (SLRs) supported by metal nanoparticle arrays have many merits such as strong field enhancements extended over large volumes, as well as long lifetimes, narrow linewidths, angle-dependent dispersion, and a wide range of wavelength tunability. ",
            "link": "http://english.cas.cn/newsroom/research_news/tech/202008/t20200828_242194.shtml"
        },
        {
            "date": "Aug 28",
            "name": "Scientists Find Direct Evidence of Thickening Organic Film at Soil-water Micro-interfaces",
            "place": "Chinese Academy of Sciences",
            "description": "Soil organic matter is essential for maintenance of soil fertility, absorption of pollutants and mitigation of global climate change. In the past few decades, the long-term protection mechanism of organic matter in soil and sediment has been extensively studied.",
            "link": "http://english.cas.cn/newsroom/research_news/earth/202008/t20200828_242179.shtml"
        },
        {
            "date": "Aug 27",
            "name": "Scientists perfect knot-tying techniques with molecular string",
            "place": "University of Manchester",
            "description": "A group of chemists from Manchester have successfully tied a series of microscopic knots using individual molecules for the first time, ushering in the advent of a form of nano-scale weaving which could create a new generation of advanced materials.",
            "link": "https://www.manchester.ac.uk/discover/news/scientists-perfect-knot-tying-techniques-with-molecular-string/"
        },
        {
            "date": "Aug 27",
            "name": "New tech extracts potential to identify quality graphene cheaper and faster",
            "place": "Monash University",
            "description": "Engineers at Australia’s Monash University have developed world-first technology that can help industry identify and export high quality graphene cheaper, faster and more accurately than current methods.",
            "link": "https://www.monash.edu/news/articles/new-tech-extracts-potential-to-identify-quality-graphene-cheaper-and-faster"
        },
        {
            "date": "Aug 25",
            "name": "Pots of gold engineered to help with early disease detection",
            "place": "University of Queensland",
            "description": "University of Queensland researchers have developed biosensors that use nanoengineered porous gold which more effectively detect early signs of disease, improving patient outcomes.",
            "link": "https://www.uq.edu.au/news/article/2020/08/pots-of-gold-engineered-help-early-disease-detection#:~:text=University%20of%20Queensland%20researchers%20have,of%20disease%2C%20improving%20patient%20outcomes."
        },      
        {
            "date": "Aug 25",
            "name": "A Four-State Magnetic Tunnel Junction for Novel Spintronics Applications",
            "place": "Bar-Ilan University",
            "description": "A novel magnetic tunnel junction, which has four resistance states instead of two states in existing magnetic tunnel junctions, may pave the way to novel spintronics devices, including multi-level magnetic memory.",
            "link": "https://www1.biu.ac.il/indexE.php?id=33&pt=20&pid=4&level=1&cPath=4&type=1&news=3539"
        },
        {
            "date": "Aug 24",
            "name": "Fuel cells for hydrogen vehicles are becoming longer lasting",
            "place": "University of Bern",
            "description": "An international research team led by the University of Bern has succeeded in developing an electrocatalyst for hydrogen fuel cells which, in contrast to the catalysts commonly used today, does not require a carbon carrier and is therefore much more stable. The new process is industrially applicable and can be used to further optimize fuel cell powered vehicles without CO₂ emissions.",
            "link": "https://www.unibe.ch/news/media_news/media_relations_e/media_releases/2020/media_releases_2020/fuel_cells_for_hydrogen_vehicles_are_becoming_longer_lasting/index_eng.html"
        },
        {
            "date": "Aug 24",
            "name": "Scientists get atomistic picture of platinum catalyst degradation",
            "place": "European Synchrotron Radiation Facility",
            "description": "Degradation of platinum, used as a key electrode material in the hydrogen economy, severely shortens the lifetime of  electrochemical energy conversion devices, such as fuel cells. For the first time, scientists elucidated the movements of the platinum atoms that lead to catalyst surface degradation. Their results are published today in Nature Catalysis.",
            "link": "https://www.esrf.eu/home/news/general/content-news/general/scientists-get-atomistic-picture-of-platinum-catalyst-degradation.html"
        },
        {
            "date": "Aug 24",
            "name": "Velcro method for more precise binding of drug particles",
            "place": "Eindhoven University of Technology",
            "description": "In order to deliver drug particles to the right place in the body, a field known as nanomedicine, selectivity plays an important role. After all, the drug only has to attach itself to the cells that need it. A theory from 2011 predicts that selectivity is not only based on the type of receptors, but also on the number and strength of the receptors on the cell. Researchers at Eindhoven University of Technology are now proving this experimentally. They published their results in the journal PNAS.",
            "link": "https://www.tue.nl/en/news/news-overview/24-08-2020-velcro-method-for-more-precise-binding-of-drug-particles/"
        },
        {
            "date": "Aug 24",
            "name": "New Ultra-Long Circulating Nanoparticle Developed for Chronic Myeloid Leukemia",
            "place": "Chinese Academy of Sciences",
            "description": "By conjugating CHMFL-ABL-053 to an amphiphilic polymer and self-assembling into a nanoparticle (NP) with a high loading, an ultra-long circulating nanomaterial was prepared by researchers recently.",
            "link": "http://english.cas.cn/newsroom/research_news/life/202008/t20200824_241988.shtml"
        },
        {
            "date": "Aug 24",
            "name": "Application of Two Engineering Nanomaterials Provides Novel Way to Improve Salt Tolerance in Plants",
            "place": "Chinese Academy of Sciences",
            "description": "Sophora alopecuroides is an important traditional Chinese medicine. Salt stress, as one of the most hampering abiotic factors, can severely affect plant growth and crop yield. It is of great significance to improve the salt tolerance of S. alopecuroides for increasing yield and quality, and thereby promoting the local sustainable development of agriculture. ",
            "link": "http://english.cas.cn/newsroom/research_news/life/202008/t20200824_241996.shtml"
        },
        {
            "date": "Aug 20",
            "name": "Surface deep: Light-responsive top layer of plastic film induces movement",
            "place": "Nagoya University",
            "description": "Azobenzene-containing plastic film is a peculiar material: its surface can change shape when exposed to light, making it a valuable component in modern technologies/devices like TV screens and solar cells. Scientists now show that only a thin, topmost layer of the light-dependent azobenzene-containing plastic film needs to be light-sensitive, rather than the entire film, opening up new ways to potentially reduce production costs and revolutionize its use.",
            "link": "http://en.nagoya-u.ac.jp/research/activities/news/2020/08/surface-deep-light-responsive-top-layer-of-plastic-film-induces-movement.html"
        },
        {
            "date": "Aug 19",
            "name": "Trapping and controlling light at the interface of atomically thin nanomaterials",
            "place": "SPIE--International Society for Optics and Photonics",
            "description": "Scientists at Cornell University propose a new method to confine light in an atomically thin graphene layer by leveraging topological phenomena that occur at the interface of specially designed nanomaterials. Their method brings together two rapidly advancing fields in applied and fundamental physics: graphene nanolight and topological photonics.",
            "link": "https://spie.org/news/trapping-and-controlling-light-at-the-interface-of-atomically-thin-nanomaterials"
        },
        {
            "date": "Aug 19",
            "name": "Insect wings inspire new ways to fight superbugs",
            "place": "RMIT University",
            "description": "Scientists have revealed how nanomaterials inspired by insect wings are able to destroy bacteria on contact.",
            "link": "https://www.rmit.edu.au/news/all-news/2020/aug/insect-wings-superbugs"
        },
        {
            "date": "Aug 18",
            "name": "Further Details Revealed About a Highly-efficient Anticancer Drug Delivery System",
            "place": "Tohoku University",
            "description": "The majority of drug delivery systems use nano carriers to transport drugs due to their small size and ability to distribute drugs to otherwise inaccessible sites of the body. The downside to this small size, however, is that large quantities are needed to match the required dosage.",
            "link": "https://www.tohoku.ac.jp/en/press/sn38npd_further_details_revealed.html"
        },          
        {
            "date": "Aug 17",
            "name": "Scientists use photons as threads to weave novel forms of matter",
            "place": "University of Southampton",
            "description": "New research from the University of Southampton has successfully discovered a way to bind two negatively charged electron-like particles which could create opportunities to form novel materials for use in new technological developments.",
            "link": "https://www.southampton.ac.uk/news/2020/08/photons-weaved-together.page"
        },
        {
            "date": "Aug 17",
            "name": "Energy-Efficient Tuning of Spintronic Neurons",
            "place": "Tohoku University",
            "description": "The human brain efficiently executes highly sophisticated tasks, such as image and speech recognition, with an exceptionally lower energy budget than today's computers can. The development of energy-efficient and tunable artificial neurons capable of emulating brain-inspired processes has, therefore, been a major research goal for decades.",
            "link": "https://www.tohoku.ac.jp/en/press/energy_efficient_tuning_of_spintronic_neurons.html"
        },
        {
            "date": "Aug 13",
            "name": "Why nanomaterial quality matters, and the smart new way to check it",
            "place": "University of Sussex",
            "description": "A new way to check the quality of nanomaterials like graphene has emerged from a team at the University of Sussex.",
            "link": "https://www.sussex.ac.uk/research/full-news-list?id=52534"
        },
        {
            "date": "Aug 12",
            "name": "Spider silk inspires new class of functional synthetic polymers",
            "place": "University of Groningen",
            "description": "Synthetic polymers have changed the world around us, and it would be hard to imagine a world without them. However, they do have their problems. It is for instance hard from a synthetic point of view to precisely control their molecular structure. This makes it harder to finely tune some of their properties, such as the ability to transport ions. To overcome this problem, University of Groningen assistant professor Giuseppe Portale decided to take inspiration from nature. The result was published in Science Advances on July 17: a new class of polymers based on protein-like materials that work as proton conductors and might be useful in future bio-electronic devices.",
            "link": "https://www.rug.nl/sciencelinx/nieuws/2020/08/spider-silk-inspires-new-class-of-functional-synthetic-polymers?lang=en"
        },
        {
            "date": "Aug 12",
            "name": "Nanotubes in the eye that help us see",
            "place": "University of Montreal Hospital Research Centre (CRCHUM)",
            "description": "Researchers at the CRCHUM find a new structure by which cells in the retina communicate with each other, regulating blood supply to keep vision intact.",
            "link": "https://www.chumontreal.qc.ca/en/crchum/nouvelles/nanotubes-eye-help-us-see"
        },
        {
            "date": "Aug 11",
            "name": "Porous Liquids Allow for Efficient Gas Separation",
            "place": "Karlsruher Institut für Technologie (KIT)",
            "description": "Jointly with cooperation partners, a researcher of Karlsruhe Institute of Technology (KIT) has developed “porous liquids”: Nanoparticles, that are able to separate gas molecules of different sizes from each other, float – finely distributed – in a solvent. This is because the particles have empty pores, through whose openings only molecules of a certain size can penetrate. These porous liquids may be used directly or processed into membranes that efficiently separate propene from gaseous mixtures. Propen, in turn, is employed as the starting material for propylene, a widely used plastic material. This could replace the energy-intensive distillation that has been the common procedure up to now. The team reports on the results in Nature Materials. (DOI: 10.1038/s41563-020-0764-y).    ",
            "link": "http://www.kit.edu/kit/english/pi_2020_067_porous-liquids-allow-for-efficient-gas-separation.php"
        },
        {
            "date": "Aug 10",
            "name": "From nanocellulose to gold",
            "place": "Linköping University",
            "description": "When nanocellulose is combined with various types of metal nanoparticles, materials are formed with many new and exciting properties. They may be antibacterial, change colour under pressure, or convert light to heat.",
            "link": "https://liu.se/en/news-item/nanocellulosa-blir-till-guld"
        },
        {
            "date": "Aug 07",
            "name": "A titanate nanowire mask that can eliminate pathogens",
            "place": "Ecole Polytechnique Fédérale de Lausanne",
            "description": "Filter “paper” made from titanium oxide nanowires is capable of trapping pathogens and destroying them with light. This discovery by an EPFL laboratory could be put to use in personal protective equipment, as well as in ventilation and air conditioning systems.",
            "link": "https://news.epfl.ch/news/a-titanate-nanowire-mask-that-can-eliminate-pathog/"
        },
        {
            "date": "Aug 07",
            "name": "Anode Material for Safe Batteries with a Long Cycle Life",
            "place": "Karlsruher Institut für Technologie (KIT)",
            "description": "Researchers at Karlsruhe Institute of Technology (KIT) and Jilin University in Changchun/China investigated a highly promising anode material for future high-performance batteries – lithium lanthanum titanate with a perovskite crystal structure (LLTO). As the team reported in the Nature Communications journal, LLTO can improve the energy density, power density, charging rate, safety, and cycle life of batteries without requiring a decrease of the particle size from micro to nano scale. (DOI: 10.1038/s41467-020-17233-1)",
            "link": "http://www.kit.edu/kit/english/pi_2020_064_anode-material-for-safe-batteries-with-a-long-cycle-life.php"
        },
        {
            "date": "Aug 06",
            "name": "Efficient valves for electron spins",
            "place": "University of Basel",
            "description": "Researchers at the University of Basel in collaboration with colleagues from Pisa have developed a new concept that uses the electron spin to switch an electrical current. In addition to fundamental research, such spin valves are also the key elements in spintronics – a type of electronics that exploits the spin instead of the charge of electrons. The results were published in the scientific journal Communications Physics.",
            "link": "https://www.unibas.ch/en/News-Events/News/Uni-Research/Efficient-valves-for-electron-spins.html#:~:text=Researchers%20at%20the%20University%20of,to%20switch%20an%20electrical%20current.&text=The%20idea%20behind%20it%20is,instead%20of%20the%20electrical%20charge."
        },
        {
            "date": "Aug 05",
            "name": "May the force be with you: detecting ultrafast light by its force",
            "place": "McGill University",
            "description": "A McGill research team has developed a new technique to detect nano-sized imperfections in materials. They believe this discovery will lead to improvements in the optical detectors used in a wide range of technologies, from cell phones to cameras and fiber optics, as well as in solar cells.",
            "link": "https://www.mcgill.ca/newsroom/channels/news/may-force-be-you-detecting-ultrafast-light-its-force-323479"
        },
        {
            "date": "Aug 05",
            "name": "Molecular Forces: The Surprising Stretching Behaviour of DNA",
            "place": "Vienna University of Technology",
            "description": "What happens when you pull a DNA molecule? It behaves quite differently than we are used to from macroscopic objects. Scientists at TU Wien were now able to explain this.",
            "link": "tuwien.at/en/tu-wien/news/news-articles/news/molecular-forces-the-surprising-stretching-behaviour-of-dna/"
        },            
        {
            "date": "Jul 30",
            "name": "TU Graz Researchers synthesize nanoparticles tailored for special applications",
            "place": "Graz University of Technology",
            "description": "“Core-shell” clusters pave the way for new efficient nanomaterials that make catalysts, magnetic and laser sensors or measuring devices for detecting electromagnetic radiation more efficient.",
            "link": "https://www.tugraz.at/en/tu-graz/services/news-stories/tu-graz-news/singleview/article/tu-graz-forschende-modellieren-nanopartikel-nach-mass0/"
        },
        {
            "date": "Jul 27",
            "name": "Water molecules are gold for nanocatalysis",
            "place": "Ruhr-University Bochum",
            "description": "Nanocatalysts made of gold nanoparticles dispersed on metal oxides are very promising for the industrial, selective oxidation of compounds, including alcohols, into valuable chemicals. They show high catalytic activity, particularly in aqueous solution. A team of researchers from RUB has been able to explain why: Water molecules play an active role in facilitating the oxygen dissociation needed for the oxidation reaction. The team of Professor Dominik Marx, Chair of Theoretical Chemistry, reports in the high-impact journal ACS Catalysis on 14 July 2020.",
            "link": "https://news.rub.de/english/2020-07-27-chemistry-water-molecules-are-gold-nanocatalysis"
        },
        {
            "date": "Jul 23",
            "name": "Trapping tiny particles: A versatile tool for nanomanipulation",
            "place": "Okinawa Institute of Science and Technology (OIST) Graduate University",
            "description": "Nanoparticles are tiny. At just 1/1000th of a millimeter, they’re impossible to see with the naked eye. But, despite being small, they’re extremely important in many ways. If scientists want to take a close look at DNA, proteins, or viruses, then being able to isolate and monitor nanoparticles is essential.",
            "link": "https://www.oist.jp/news-center/news/2020/7/15/trapping-tiny-particles-versatile-tool-nanomanipulation"
        },
        {
            "date": "Jul 23",
            "name": "Scientists develop new material for longer-lasting fuel cells",
            "place": "Queen Mary University of London",
            "description": "New research, involving scientists at Queen Mary University of London, suggests that graphene could be used to make more durable hydrogen fuel cells for cars.",
            "link": "https://www.qmul.ac.uk/media/news/2020/se/scientists-develop-new-material-for-longer-lasting-fuel-cells.html"
        },
        {
            "date": "Jul 22",
            "name": "Photonic crystal light converter",
            "place": "University of Tokyo",
            "description": "Spectroscopy is the use of light to analyze physical objects and biological samples. Different kinds of light can provide different kinds of information. Vacuum ultraviolet light is useful as it can aid people in a broad range of research fields, but generation of that light has been difficult and expensive. Researchers created a new device to efficiently generate this special kind of light using an ultrathin film with nanoscale perforations.",
            "link": "https://www.u-tokyo.ac.jp/focus/en/press/z0508_00121.html"
        },
        {
            "date": "Jul 20",
            "name": "A plot twist in pharmaceuticals: single nanoparticles could pave the way for medicines on demand",
            "place": "University of Bath",
            "description": "For the first time, a single, twisted nanoparticle has been accurately measured and characterised in a lab, taking scientists one vital step closer to a time when medicines will be produced and blended on a microscopic scale.",
            "link": "https://www.bath.ac.uk/announcements/a-plot-twist-in-pharmaceuticals-single-nanoparticles-could-pave-the-way-for-medicines-on-demand/"
        },      
        {
            "date": "Jul 29",
            "name": "Transforming e-waste into a strong, protective coating for metal ",
            "place": "American Chemical Society",
            "description": "A typical recycling process converts large quantities of items made of a single material into more of the same. However, this approach isn’t feasible for old electronic devices, or “e-waste,” because they contain small amounts of many different materials that cannot be readily separated. Now, in ACS Omega, researchers report a selective, small-scale microrecycling strategy, which they use to convert old printed circuit boards and monitor components into a new type of strong metal coating.",
            "link": "https://www.acs.org/content/acs/en/pressroom/presspacs/2020/acs-presspac-july-29-2020/transforming-e-waste-into-a-strong-protective-coating-for-metal.html"
        },
        {
            "date": "Jul 28",
            "name": "Room temperature superconductivity creeping toward possibility",
            "place": "Penn State University",
            "description": "The possibility of achieving room temperature superconductivity took a tiny step forward with a recent discovery by a team of Penn State physicists and materials scientists.",
            "link": "https://news.psu.edu/story/626941/2020/07/28/research/room-temperature-superconductivity-creeping-toward-possibility"
        },
        {
            "date": "Jul 28",
            "name": "Solving materials problems with a quantum computer",
            "place": "Argonne National Laboratory",
            "description": "Quantum computers have enormous potential for calculations using novel algorithms and involving amounts of data far beyond the capacity of today’s supercomputers. While such computers have been built, they are still in their infancy and have limited applicability for solving complex problems in materials science and chemistry. For example, they only permit the simulation of the properties of a few atoms for materials research.",
            "link": "https://www.anl.gov/article/solving-materials-problems-with-a-quantum-computer"
        },
        {
            "date": "Jul 28",
            "name": "Discovery Will Allow More Sophisticated Work at Nanoscale",
            "place": "University of Houston",
            "description": "The movement of fluids through small capillaries and channels is crucial for processes ranging from blood flow through the brain to power generation and electronic cooling systems, but that movement often stops when the channel is smaller than 10 nanometers.",
            "link": "https://uh.edu/news-events/stories/july-2020/07282020ghasemi-ion-transport.php"
        },
        {
            "date": "Jul 27",
            "name": "Origami Metamaterials Reveal Reversible Auxeticity Combined with High Deformation Recoverability",
            "place": "Northwestern University",
            "description": "The simplicity and elegance of origami, an ancient Japanese art form, has motivated researchers to explore its application in the world of materials.",
            "link": "https://www.mccormick.northwestern.edu/news/articles/2020/07/origami-metamaterials-reveal-reversible-auxeticity-combined-with-high-deformation-recoverability.html"
        },
        {
            "date": "Jul 20",
            "name": "New Nano Drug Candidate Kills Aggressive Breast Cancer Cells",
            "place": "University of Arkansas",
            "description": "Researchers at the University of Arkansas have developed a new nano drug candidate that kills triple negative breast cancer cells.",
            "link": "https://news.uark.edu/articles/54282/new-nano-drug-candidate-kills-aggressive-breast-cancer-cells#:~:text=New%20Nano%20Drug%20Candidate%20Kills%20Aggressive%20Breast%20Cancer%20Cells,-July%2020%2C%202020&text=FAYETTEVILLE%2C%20Ark.,fatal%20types%20of%20breast%20cancer."
        },
        {
            "date": "Jul 19",
            "name": "A mechanical way to stimulate neurons",
            "place": "Massachusetts Institute of Technology",
            "description": "In addition to responding to electrical and chemical stimuli, many of the body’s neural cells can also respond to mechanical effects, such as pressure or vibration. But these responses have been more difficult for researchers to study, because there has been no easily controllable method for inducing such mechanical stimulation of the cells. Now, researchers at MIT and elsewhere have found a new method for doing just that.",
            "link": "http://news.mit.edu/2020/neural-cell-stimulation-magnet-0720"
        },
        {
            "date": "Jul 17",
            "name": "Droplet biosensing method opens the door for faster identification of COVID-19",
            "place": "Virginia Tech",
            "description": "Mechanical engineering associate professor Jiangtao Cheng and electrical and computer engineering assistant professor Wei Zhou have developed an ultrasensitive biosensing method that could dramatically shorten the amount of time required to verify the presence of the COVID-19 virus in a sample. Their peer-reviewed research was published in ACS Nano on June 29.",
            "link": "https://vtnews.vt.edu/articles/2020/07/cheng-zhou-dropletbiosensing.html"
        },        
        {
            "date": "Jul 15",
            "name": "Designing DNA From Scratch: Engineering the Functions of Micrometer-Sized DNA Droplets",
            "place": "Tokyo Institute of Technology",
            "description": "Scientists at Tokyo Institute of Technology (Tokyo Tech) have constructed 'DNA droplets' comprising designed DNA nanostructures. The droplets exhibit dynamic functions such as fusion, fission, Janus-shape formation, and protein capture. Their technique is expected to be applicable to a wide variety of biomaterials, opening doors to many promising applications in materials design, drug delivery, and even artificial cell-like molecular systems.",
            "link": "https://www.titech.ac.jp/english/news/2020/047296.html"
        },
        {
            "date": "Jul 15",
            "name": "New Promising Treatment Uses Smart Nanoparticles to Target Lung Cancer",
            "place": "Lund University",
            "description": "A new and promising approach for treatment of lung cancer has been developed by researchers at Lund University. The treatment combines a novel surgical approach with smart nanoparticles to specifically target lung tumors. The new study has been published in the July issue of Advanced Therapeutics.",
            "link": "https://www.lunduniversity.lu.se/article/new-promising-treatment-uses-smart-nanoparticles-target-lung-cancer"
        },
        {
            "date": "Jul 14",
            "name": "Par­tic­u­late plutonium re­leased from the Fukushima Daii­chi melt­downs",
            "place": "University of Helsinki",
            "description": "New research strongly suggests that the nano-scale heterogeneity that is common in normal nuclear fuels is still present in the fuel debris that remains inside Fukushima's damaged reactors.",
            "link": "https://www.helsinki.fi/en/news/science-news/particulate-plutonium-released-from-the-fukushima-daiichi-meltdowns"
        },
        {
            "date": "Jul 12",
            "name": "Magnetic Memory States Go Exponential",
            "place": "Bar-Ilan University",
            "description": "A newly-discovered ability to stabilize and control exponential number of discrete magnetic states in a relatively simple structure may pave the way to multi-level magnetic memory with extremely large number of states per cell.",
            "link": "https://www1.biu.ac.il/indexE.php?id=33&pt=20&pid=4&level=1&cPath=4&type=1&news=3510"
        },
        {
            "date": "Jul 10",
            "name": "Robust high-performance data storage through magnetic anisotropy",
            "place": "Helmholtz-Zentrum Berlin für Materialien und Energie",
            "description": "The latest generation of magnetic hard drives is made of magnetic thin films, which are invar materials. They allow extremely robust and high data storage density by local heating of ultrasmall nano-domains with a laser, so called heat assisted magnetic recording or HAMR. The volume in such invar materials hardly expands despite heating. A technologically relevant material for such HAMR data memories are thin films of iron-platinum nanograins. An international team led by the joint research group of Prof. Dr. Matias Bargheer at HZB and the University of Potsdam has now observed experimentally for the first time how a special spin-lattice interaction in these iron-platinum thin films cancels out the thermal expansion of the crystal lattice. The study has been published in Science Advances.",
            "link": "https://www.helmholtz-berlin.de/pubbin/news_seite?nid=21603;sprache=en;seitenid=74699"
        },
        {
            "date": "Jul 07",
            "name": "Scientists create new device to light up the way for quantum technologies",
            "place": "Trinity College Dublin",
            "description": "Researchers at CRANN and Trinity’s School of Physics have created an innovative new device that will emit single particles of light, or photons, from quantum dots that are the key to practical quantum computers, quantum communications, and other quantum devices.",
            "link": "https://www.tcd.ie/news_events/articles/scientists-create-new-device-to-light-up-the-way-for-quantum-technologies/#:~:text=Researchers%20at%20CRANN%20and%20Trinity's,communications%2C%20and%20other%20quantum%20devices."
        },
        {
            "date": "Jul 06",
            "name": "Cell ‘membrane on a chip’ could speed up screening of drug candidates for COVID-19",
            "place": "University of Cambridge",
            "description": "Researchers have developed a human cell ‘membrane on a chip’ that allows continuous monitoring of how drugs and infectious agents interact with our cells, and may soon be used to test potential drug candidates for COVID-19.",
            "link": "https://www.cam.ac.uk/research/news/cell-membrane-on-a-chip-could-speed-up-screening-of-drug-candidates-for-covid-19"
        },
        {
            "date": "Jul 03",
            "name": "A new way towards super-fast motion of vortices in superconductors discovered",
            "place": "University of Vienna",
            "description": "A team of scientists from Austria, Germany and Ukraine has found a new superconducting system in which magnetic flux quanta can move at velocities of 10-15 km/s. This opens access to investigations of the rich physics of non-equilibrium collective systems and renders a direct-write Nb-C superconductor as a candidate material for single-photon detectors. The results are published in Nature Communications.",
            "link": "https://physik.univie.ac.at/en/news/news-detail/news/a-new-way-towards-super-fast-motion-of-vortices-in-superconductors-discovered/?tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=5ab8934eed58ae88150af31539d52342"
        },        
        {
            "date": "Jul 02",
            "name": "The lightest shielding material in the world",
            "place": "Swiss Federal Laboratories for Materials Science and Technology (EMPA)",
            "description": "Empa researchers have succeeded in applying aerogels to microelectronics: Aerogels based on cellulose nanofibers can effectively shield electromagnetic radiation over a wide frequency range – and they are unrivalled in terms of weight.",
            "link": "https://www.empa.ch/web/s604/cellulose-emi-shielding"
        },
        {
            "date": "Jul 02",
            "name": "Spintronics: Faster data processing through ultrashort electric pulses ",
            "place": "Martin-Luther-Universität Halle-Wittenberg",
            "description": "Physicists at Martin Luther University Halle-Wittenberg (MLU) and Lanzhou University in China developed a simple concept that could improve significantly magnetic-based data processing. Using ultrashort electric pulses in the terahertz range, data can be written, read and erased very quickly. This would make data processing faster, more compact and energy efficient. The researchers confirmed their theory by running complex simulations and the results were published in the journal 'NPG Asia Materials'.",
            "link": "https://pressemitteilungen.pr.uni-halle.de/index.php?modus=pmanzeige&pm_id=3289"
        },
        {
            "date": "Jul 01",
            "name": "Building a Harder Diamond",
            "place": "University of Tsukuba",
            "description": "Scientists at the University of Tsukuba use computer calculations to propose a new way to rearrange the carbon atoms in a diamond to make it even harder, which may be useful in industrial applications that rely on synthetic cutting diamonds. ",
            "link": "https://www.tsukuba.ac.jp/en/research-list/p202007011400"
        },
        {
            "date": "Jul 01",
            "name": "Teflon pipe makes a cheap, simple reactor for silica particle synthesis",
            "place": "ARC Centre of Excellence in Exciton Science",
            "description": "Researchers in Australia and China have proposed an innovative and cost-effective new method for creating silica beads, which have a number of key uses, ranging from nanomedicine and bioimaging to the production of paper and polished concrete.",
            "link": "https://excitonscience.com/news/teflon-pipe-makes-cheap-simple-reactor-silica-particle-synthesis"
        },
        {
            "date": "Jun 25",
            "name": "Researchers Uncover New Environmentally-Friendly Approach to Water Treatment",
            "place": "Swansea University",
            "description": "Researchers from Swansea University have developed a new environmentally friendly method for removing toxic chemicals from water.",
            "link": "https://www.swansea.ac.uk/press-office/news-events/news/2020/06/researchers-uncover-new-environmentally-friendly-approach-to-water-treatment.php"
        },
        {
            "date": "Jun 25",
            "name": "New knowledge about the energy levels in quantum dots",
            "place": "Ruhr-University Bochum",
            "description": "Researchers have experimentally proven the theoretically predicted Auger effect in quantum dots. The findings help to understand the structures that could form the basis of quantum communication.",
            "link": "https://news.rub.de/presseinformationen/wissenschaft/2020-06-25-physik-neue-erkenntnisse-ueber-die-energieniveaus-quantenpunkten"
        },
        {
            "date": "Jun 25",
            "name": "AI could help improve performance of lithium-ion batteries and fuel cells",
            "place": "Imperial College London",
            "description": "Imperial researchers have demonstrated how machine learning could help design lithium-ion batteries and fuel cells with better performance.",
            "link": "https://www.imperial.ac.uk/news/198713/ai-could-help-improve-performance-lithium-ion/"
        },
        {
            "date": "Jun 22",
            "name": "Super-resolution microscopy reveals a twist inside of cells",
            "place": "Ecole Polytechnique Fédérale de Lausanne",
            "description": "EPFL biophysicists have developed a high-throughput super-resolution microscope to probe nanoscale structures and dynamics of mammalian cells, showing in unprecedented detail the twists and turns of an organelle important for cell division.",
            "link": "https://news.epfl.ch/news/super-resolution-microscopy-reveals-a-twist-inside/"
        },        
        {
            "date": "Jun 19",
            "name": "Researchers pioneer new production method for heterostructure devices",
            "place": "University of Exeter",
            "description": "Researchers at the University of Exeter have developed a pioneering production method for heterostructure devices, based on 2D materials such as graphene.",
            "link": "https://www.exeter.ac.uk/news/research/title_802030_en.html"
        },
        {
            "date": "Jun 18",
            "name": "Graphene smart textiles developed for heat adaptive clothing",
            "place": "University of Manchester",
            "description": "New research on the two-dimensional (2D) material graphene has allowed researchers to create smart adaptive clothing which can lower the body temperature of the wearer in hot climates.",
            "link": "https://www.manchester.ac.uk/discover/news/graphene-smart-textiles-developed-for-heat-adaptive-clothing/"
        },
        {
            "date": "Jun 18",
            "name": "Researchers create a photographic film of a molecular switch",
            "place": "University of Münster",
            "description": "Molecular switches – they are the molecular counterparts of electrical switches and play an important role in many processes in nature. Such molecules can reversibly interconvert between two or more states and thereby control molecular processes. In living organisms, for example, they play a role in muscle contraction but also our visual perception is based on the dynamics of a molecular switch in the eye. Scientists are working intensively to develop novel molecular components that enable switching between different states, so that molecular processes can be specifically controlled.",
            "link": "https://www.uni-muenster.de/news/view.php?cmdid=11073"
        },
        {
            "date": "Jun 18",
            "name": "Towards ultra-sensitive diagnostic chips",
            "place": "Swinburne University of Technology",
            "description": "An international team, led by Swinburne researchers, has developed an ultra-thin nanostructure gold film – or metasurface – with the potential to revolutionise next-generation bio-sensing chips.",
            "link": "http://www.swinburne.edu.au/news/latest-news/2020/06/towards-ultra-sensitive-diagnostic-chips.php"
        },
        {
            "date": "Jun 18",
            "name": "‘Nanotorch’ highlights ultrafast biochemical reactions",
            "place": "Eindhoven University of Technology",
            "description": "Yuyang Wang used single nanoparticles that illuminate single fluorescent molecules to detect ultrafast biochemical reactions.",
            "link": "https://www.tue.nl/en/news/news-overview/18-06-2020-nanotorch-highlights-ultrafast-biochemical-reactions/"
        },
        {
            "date": "Jun 16",
            "name": "The smallest motor in the world",
            "place": "Swiss Federal Laboratories for Materials Science and Technology (EMPA)",
            "description": "A research team from Empa and EPFL has developed a molecular motor which consists of only 16 atoms and rotates reliably in one direction. It could allow energy harvesting at the atomic level. The special feature of the motor is that it moves exactly at the boundary between classical motion and quantum tunneling - and has revealed puzzling phenomena to researchers in the quantum realm.",
            "link": "https://www.empa.ch/web/s604/molecular-motor"
        },
        {
            "date": "Jun 16",
            "name": "New Nanoparticle Drug Combination For Atherosclerosis​",
            "place": "The Korea Advanced Institute of Science and Technology (KAIST)",
            "description": "Physicochemical cargo-switching nanoparticles (CSNP) designed by KAIST can help significantly reduce cholesterol and macrophage foam cells in arteries, which are the two main triggers for atherosclerotic plaque and inflammation.",
            "link": "http://news.kaist.ac.kr/newsen/html/news/?mode=V&mng_no=8430"
        },
        {
            "date": "Jun 16",
            "name": "A new family of nanocars ready for the next nano Grand Prix",
            "place": "Nara Institute of Science and Technology",
            "description": "According to the British Royal Automobile and the French Automobile clubs, the first car was created in 1770 by the Frenchman Joseph Cugnot. This 'Fardier' (French name for a trolley used to transport heavy loads) was a car propelled by a steam engine and powered by a boiler. This 7 m long self-propelled machine reached a speed of 4 km/h, for an average autonomy of 15 min. 250 years later, researchers at the Nara Institute of Science and Technology (NAIST), Japan, in partnership with colleagues in the University Paul Sabatier (Toulouse, France), report in Chemistry - A European Journal a new family of nanocars integrating a dipole to speed up their motion in the nanoworld.",
            "link": "http://www.naist.jp/en/research_achievements/2020/06/007100.html"
        },
        {
            "date": "Jun 12",
            "name": "Minimizing thermal conductivity of crystalline material with optimal nanostructure",
            "place": "Japan Science and Technology Agency",
            "description": "Professor Junichiro Shiomi et al. from The University of Tokyo aimed to reduce the thermal conductivity of semiconductor materials by reducing the internal nanostructure, and successfully minimized thermal conductivity by designing, fabricating, and evaluating the optimal nanostructure-multilayer materials through materials informatics (MI), which combines machine learning and molecular simulation. ",
            "link": "https://www.jst.go.jp/pr/announce/20200603-3/index_e.html"
        },
        {
            "date": "Jun 11",
            "name": "Engineers find neat way to turn waste carbon dioxide into useful material",
            "place": "University of New South Wales",
            "description": "Making catalysts to convert waste carbon dioxide into useful industrial products has been expensive and complicated – until now. UNSW engineers show it’s as easy as playing with Lego.",
            "link": "https://newsroom.unsw.edu.au/news/science-tech/engineers-find-neat-way-turn-waste-carbon-dioxide-useful-material"
        },
        {
            "date": "Jun 11",
            "name": "Ultra-thin camera lenses could see the light of day",
            "place": "Chalmers University of Technology",
            "description": "In the future, camera lenses could be thousands of times thinner and significantly less resource-intensive to manufacture. Researchers from Chalmers now present a new technology for making the artificial materials known as ‘metasurfaces’, which consist of a multitude of interacting nanoparticles that together can control light. They could have great use in the optical technology of tomorrow. ​​​​​",
            "link": "https://www.chalmers.se/en/departments/physics/news/Pages/Ultra_thin_camera_lenses_of_the_future_could_see_the_light_of_day.aspx"
        },           
        {
            "date": "Jun 11",
            "name": "UQ’s advanced nanotechnology to improve success of dental implants",
            "place": "University of Queensland",
            "description": "A technological advancement that may prove crucial in the long-term success of dental implants has been developed by University of Queensland researchers.",
            "link": "https://habs.uq.edu.au/article/2020/06/uq%E2%80%99s-advanced-nanotechnology-improve-success-dental-implants"
        },
        {
            "date": "Jun 10",
            "name": "New sensor technology could speed up blood tests for COVID patients",
            "place": "University of York",
            "description": "Researchers are using laser-light technology to develop handheld biosensors with the potential to deliver fast, real-time blood test results for patients including those suffering from COVID-19 with secondary infections such as pneumonia.",
            "link": "https://www.york.ac.uk/news-and-events/news/2020/research/blood-tests-covid/"
        },
        {
            "date": "Jun 10",
            "name": "New discovery: skyrmions can split like biological cells",
            "place": "Ames Laboratory",
            "description": "Scientists at the U.S. Department of Energy’s Ames Laboratory have discovered that skyrmions— a type of quasiparticle with properties that could lead to the next generation of data storage and transfer— reproduce by splitting in a way very similar to biological cell division.",
            "link": "https://www.ameslab.gov/news/new-discovery-skyrmions-can-split-like-biological-cells"
        },
        {
            "date": "Jun 10",
            "name": "Flexible and recyclable optoelectronics move a step closer",
            "place": "ARC Centre of Excellence in Exciton Science",
            "description": "Australian researchers have demonstrated the strong potential for a new type of flexible, recyclable electrodes to be used in creating cheaper solar cells, touchscreens, wearable ‘e-skins’ and next-generation responsive windows.",
            "link": "https://excitonscience.com/news/flexible-and-recyclable-optoelectronics-move-step-closer"
        },
        {
            "date": "Jun 09",
            "name": "HKUST Scientists Develop World's First Spherical Artificial Eye with 3D Retina",
            "place": "Hong Kong University of Science and Technology",
            "description": "An international team led by scientists at the Hong Kong University of Science and Technology (HKUST) has recently developed the world’s first 3D artificial eye with capabilities better than existing bionic eyes and in some cases, even exceed those of the human eyes, bringing vision to humanoid robots and new hope to patients with visual impairment. ",
            "link": "https://www.ust.hk/news/research-and-innovation/hkust-scientists-develop-worlds-first-spherical-artificial-eye-3d"
        },
        {
            "date": "Jun 09",
            "name": "Renewable fuel from carbon dioxide with the aid of solar energy",
            "place": "inköping University",
            "description": "Researchers at LiU are attempting to convert carbon dioxide, a greenhouse gas, to fuel using energy from sunlight. Recent results have shown that it is possible to use their technique to selectively produce methane, carbon monoxide or formic acid from carbon dioxide and water.",
            "link": "https://liu.se/en/news-item/fornybart-bransle-kan-bildas-av-koldioxid-med-hjalp-av-solenergi"
        },
        {
            "date": "Jun 08",
            "name": "Machine learning predicts nanoparticles’ structure and dynamics",
            "place": "University of Jyväskylä - Jyväskylän yliopisto",
            "description": "Researchers at the Nanoscience Center and at the Faculty of Information Technology at the University of Jyväskylä in Finland have demonstrated that new distance-based machine learning methods, developed in the University of Jyväskylä, are capable of predicting structures and atomic dynamics of nanoparticles reliably. The new methods are significantly faster than traditional simulation methods used for nanoparticle research and will facilitate more efficient explorations of particle-particle reactions and particles’ functionality in their environment. The study was published in a Special Issue devoted to machine learning in The Journal of Physical Chemistry on May 15, 2020.",
            "link": "https://www.jyu.fi/en/current/archive/2020/06/machine-learning-predicts-nanoparticles2019-structure-and-dynamics"
        },
        {
            "date": "Jun 04",
            "name": "High-speed atomic video",
            "place": "University of Tokyo",
            "description": "A team including researchers from the Department of Chemistry at the University of Tokyo has successfully captured video of single molecules in motion at 1,600 frames per second. This is 100 times faster than previous experiments of this nature. They accomplished this by combining a powerful electron microscope with a highly sensitive camera and advanced image processing. This method could aid many areas of nanoscale research.",
            "link": "https://www.u-tokyo.ac.jp/focus/en/press/z0508_00117.html"
        },
        {
            "date": "Jun 03",
            "name": "Graphene and 2D materials could move electronics beyond ‘Moore’s Law’",
            "place": "University of Manchester",
            "description": "A team of researchers based in Manchester, the Netherlands, Singapore, Spain, Switzerland and the USA has published a new review on a field of computer device development known as spintronics, which could use graphene as a building block for next-generation electronics.",
            "link": "https://www.manchester.ac.uk/discover/news/graphene-and-2d-materials-could-move-electronics-beyond-moores-law/"
        },
        {
            "date": "Jun 03",
            "name": "Major breakthrough in extremely water-repellent materials makes them durable enough for the real world",
            "place": "Aalto University",
            "description": "A new armour-plated superhydrophobic material has been developed for potential uses in medical equipment, solar panels and more",
            "link": "https://www.aalto.fi/en/news/major-breakthrough-in-extremely-water-repellent-materials-makes-them-durable-enough-for-the"
        },
        {
            "date": "Jun 03",
            "name": "Solar cells, phone displays & lighting could be transformed by nanocrystal assembly method",
            "place": "ARC Centre of Excellence in Exciton Science",
            "description": "Smart phones, tablets and laptop displays, camera lenses, biosensing devices, integrated chips and solar photovoltaic cells are among the applications that could stand to benefit from an innovative method of nanocrystal assembly pioneered by Australian scientists, led by the ARC Centre of Excellence in Exciton Science (Exciton Science).",
            "link": "https://excitonscience.com/news/solar-cells-phone-displays-lighting-could-be-transformed-nanocrystal-assembly-method"
        },
        {
            "date": "May 26",
            "name": "A new law in laser physics could make eye surgery simpler",
            "place": "University of Sydney",
            "description": "By revisiting a simple type of laser, scientists have discovered a way to exponentially increase the amount of energy released in incredibly short periods of time, with potential applications in surgery.",
            "link": "https://www.sydney.edu.au/news-opinion/news/2020/05/26/new-law-soliton-laser-physics-could-make-eye-surgery-simpler.html"
        },
        {
            "date": "May 26",
            "name": "Watching single protons moving at water-solid interfaces",
            "place": "Ecole Polytechnique Fédérale de Lausanne",
            "description": "Scientists at EPFL have been able to observe single protons moving at the interface between water and a solid surface. Their research reveals the strong interactions of these charges with surfaces.",
            "link": "https://news.epfl.ch/news/watching-single-protons-moving-at-water-solid-inte/"
        },
        {
            "date": "May 25",
            "name": "Microbial Cyborgs: Bacteria Supplying Power",
            "place": "Karlsruher Institut für Technologie (KIT)",
            "description": "Electronic devices are still made of lifeless materials. One day, however, “microbial cyborgs” might be used in fuel cells, biosensors, or bioreactors. Scientists of Karlsruhe Institute of Technology (KIT) have created the necessary prerequisite by developing a programmable, biohybrid system consisting of a nanocomposite and the Shewanella oneidensis bacterium that produces electrons. The material serves as a scaffold for the bacteria and, at the same time, conducts the microbially produced current.",
            "link": "http://www.kit.edu/kit/english/pi_2020_033_microbial-cyborgs-bacteria-supplying-power.php"
        },
        {
            "date": "May 22",
            "name": "Next-generation solar cells pass strict international tests",
            "place": "University of Sydney",
            "description": "Light-weight, cheap and ultra-thin, perovskite crystals have promised to shake-up renewable energy for some time. Research by Professor Anita Ho-Baillie means they are ready to take the next steps towards commercialisation.",
            "link": "https://www.sydney.edu.au/news-opinion/news/2020/05/22/perovskite-solar-cells-pass-strict-international-tests.html"
        },
        {
            "date": "May 19",
            "name": "HKBU scientists eliminate drug side effects by manipulating molecular chirality",
            "place": "Hong Kong Baptist University",
            "description": "Scientists from Hong Kong Baptist University (HKBU) have developed a novel technique that can produce pure therapeutic drugs without the associated side effects. ",
            "link": "https://cpro.hkbu.edu.hk/en/press_release/detail/HKBU-scientists-eliminate-drug-side-effects-by-manipulating-molecular-chirality"
        },
        {
            "date": "May 15",
            "name": "A Theoretical Boost to Nano-Scale Devices​",
            "place": "The Korea Advanced Institute of Science and Technology (KAIST)",
            "description": "Semiconductor companies are struggling to develop devices that are mere nanometers in size, and much of the challenge lies in being able to more accurately describe the underlying physics at that nano-scale. But a new computational approach that has been in the works for a decade could break down these barriers.",
            "link": "https://news.kaist.ac.kr/newsen/html/news/?mode=V&mng_no=7250&skey=&sval=a+theoretical+boost&list_s_date=&list_e_date=&GotoPage=1"
        },
        {
            "date": "May 15",
            "name": "Eavesdropping on single molecules with light by replaying the chatter",
            "place": "University of Exeter",
            "description": "Scientists have pioneered a new technique to expose hidden biochemical pathways involving single molecules at the nanoscale.",
            "link": "http://www.exeter.ac.uk/news/homepage/title_796795_en.html"
        },
        {
            "date": "May 11",
            "name": "On the road to non-toxic and stable perovskite solar cells",
            "place": "Helmholtz-Zentrum Berlin für Materialien und Energie",
            "description": "The promising halide perovskite materials for solar energy conversion show high efficiencies, but this comes at a cost: The best perovskite materials incorporate toxic lead which poses a hazard to the environment. To replace lead by less toxic elements is not easy since lead-free perovskites show lower stability and poor efficiencies. Now, an international collaboration has engineered a new hybrid perovskite material with promising efficiency and stability.",
            "link": "https://www.helmholtz-berlin.de/pubbin/news_seite?nid=21321;sprache=en;seitenid=1"
        },
        {
            "date": "May 11",
            "name": "Material manufacturing from particles takes a giant step forward",
            "place": "Aalto University",
            "description": "Tiny fibrils extracted from plants have been getting a lot of attention for their strength. These nanomaterials have shown great promise in outperforming plastics, and even replacing them. A team led by Aalto University has now shown another remarkable property of nanocelluloses: their strong binding properties to form new materials with any particle.",
            "link": "https://www.aalto.fi/en/news/material-manufacturing-from-particles-takes-a-giant-step-forward"
        },
        {
            "date": "May 11",
            "name": "Raise your glass: new nanotech clears haze from white wine",
            "place": "University of South Australia",
            "description": "Sauvignon Blanc, Semillon, or Chardonnay – when you reach for your favourite white, it’s the clean, clear sparkle that first catches your eye. Or does it? When white wines look cloudy it’s a sign of protein instability, and a sure-fire way to turn customers away.",
            "link": "https://www.unisa.edu.au/Media-Centre/Releases/2020/raise-your-glass-new-nanotech-clears-haze-from-white-wine/"
        },
        {
            "date": "May 08",
            "name": "Chemistry breakthrough could speed up drug development",
            "place": "Newcastle University",
            "description": "Scientists have successfully developed a new technique to reliably grow crystals of organic soluble molecules from nanoscale droplets, unlocking the potential of accelerated new drug development.",
            "link": "https://www.ncl.ac.uk/press/articles/latest/2020/05/chem/"
        },
        {
            "date": "May 07",
            "name": "Laser loop couples quantum systems over a distance",
            "place": "University of Basel",
            "description": "For the first time, researchers have succeeded in creating strong coupling between quantum systems over a greater distance. They accomplished this with a novel method in which a laser loop connects the systems, enabling nearly lossless exchange of information and strong interaction between them. In the scientific journal Science, the physicists from the University of Basel and University of Hanover reported that the new method opens up new possibilities in quantum networks and quantum sensor technology.",
            "link": "https://www.unibas.ch/en/News-Events/News/Uni-Research/Laser-loop-couples-quantum-systems-over-a-distance.html"
        },
        {
            "date": "May 07",
            "name": "Highly efficient hydrogen gas production using sunlight, water and hematite",
            "place": "Kobe University",
            "description": "A research group led by Associate Professor TACHIKAWA Takashi of Kobe University’s Molecular Photoscience Research Center has succeeded in developing a strategy that greatly increases the amount of hydrogen produced from sunlight and water using hematite photocatalysts (*1).",
            "link": "https://www.kobe-u.ac.jp/research_at_kobe_en/NEWS/news/2020_05_07_01.html"
        },
        {
            "date": "May 07",
            "name": "Light, sound, action: extending the life of acoustic waves on microchips",
            "place": "University of Sydney",
            "description": "Microchips without electrons will allow for the invention of data processing systems that don't overheat, have low energy costs and reduce greenhouse gas emissions. This foundational work will help scientists invent systems to achieve those aims.",
            "link": "https://www.sydney.edu.au/news-opinion/news/2020/05/07/light-sound-action-extending-life-acoustic-waves-on-phonon-photonic-microchips.html"
        },              
        {
            "date": "May 06",
            "name": "Tiny devices promise new horizon for medical imaging",
            "place": "University of Strathclyde",
            "description": "Miniature devices that could be developed into safe, high-resolution imaging technology, with uses such as helping doctors identify potentially deadly cancers and treat them early, have been created in research involving the University of Strathclyde.",
            "link": "https://www.strath.ac.uk/whystrathclyde/news/tinydevicespromisenewhorizonformedicalimaging/"
        },
        {
            "date": "May 06",
            "name": "Plant viruses could be used to prevent and treat human autoimmune diseases",
            "place": "John Innes Centre",
            "description": "Researchers have taken positive steps towards using plant virus-based particles for the treatment of human autoimmune diseases such as type 1 diabetes and rheumatoid arthritis.",
            "link": "https://www.jic.ac.uk/press-release/plant-viruses-could-be-used-to-prevent-and-treat-human-autoimmune-diseases/"
        },
        {
            "date": "May 05",
            "name": "Towards metallic polymers by exploiting two faces of the same coin: topological order and π-conjugation",
            "place": "IMDEA Nanociencia",
            "description": "Researchers at IMDEA Nanociencia, Universidad Autónoma de Madrid and Universidad Complutense de Madrid present a new strategy to fabricate quasi-metallic 1D polymers with atomic precision, in collaboration with The Czech Academy of Science, EMPA (Zürich, Switzerland) and RCATM (Olomouc, Czech Republic). This investigation within the framework of the ‘ERC Consolidator Grant ELECNANO’ and the ‘Comunidad de Madrid QUIMTRONIC project’ advances the possibility to design stable organic polymers with vanishing electronic bandgaps, whose applications range from molecular optoelectronics to quantum information technology.",
            "link": "https://www.nanociencia.imdea.org/home-en/news/item/towards-metallic-polymers"
        },
        {
            "date": "May 04",
            "name": "User research at BESSY II: How new materials increase the efficiency of direct ethanol fuel cells",
            "place": "Helmholtz-Zentrum Berlin für Materialien und Energie",
            "description": "A group from Brazil and an HZB team have investigated a novel composite membrane for ethanol fuel cells. It consists of the polymer Nafion, in which nanoparticles of a titanium compound are embedded by the rarely explored melt extrusion process. At BESSY II they were able to observe in detail, how the nanoparticles in the Nafion matrix are distributed and how they contribute to increase proton conductivity.",
            "link": "https://www.helmholtz-berlin.de/pubbin/news_seite?nid=21288;sprache=en;seitenid=382"
        },
        {
            "date": "May 04",
            "name": "Twisting 2D materials uncovers their superpowers – Researchers demonstrated twisting on record-breaking scale",
            "place": "Aalto University",
            "description": "Aalto researchers in an international collaboration have developed a completely new method for twisting atomically-thin materials, paving the way for applications of ‘twistronics’ based on tunable 2D materials",
            "link": "https://www.aalto.fi/en/news/twisting-2d-materials-uncovers-their-superpowers-researchers-demonstrated-twisting-on-record"
        },
        {
            "date": "May 01",
            "name": "Breakthrough in molecular machines",
            "place": "University of Southern Denmark",
            "description": "Molecular machines have the potential to revolutionize the future - if we can find a way to control them. SDU researchers now report that they have found a way to control the small machines so that they move in a certain direction - for example, into the bloodstream.",
            "link": "https://www.sdu.dk/en/nyheder/Forskningsnyheder/Gennembrud-i-arbejdet-med-molekylaere-maskiner"
        },
        {
            "date": "Apr 30",
            "name": "New STM technique with super sharp frozen carbon monoxide needle points way to new and purer pharmaceuticals",
            "place": "University of Warwick",
            "description": "Using an ultra-thin and sharp needle tipped with a single carbon monoxide molecule frozen to minus 266 degrees centigrade, researchers from the University of Warwick and Cardiff identified and mapped the location of every molecular bond on the surface of a material.",
            "link": "https://warwick.ac.uk/newsandevents/pressreleases/new_stm_technique"
        },
        {
            "date": "Apr 30",
            "name": "Intricate Magnetic Configuration of 3D Nanoscale Gyroid Networks Revealed",
            "place": "Tohoku University",
            "description": "A multinational team of researchers from Tohoku University and institutions in the UK, Germany and Switzerland has revealed the magnetic states of nanoscale gyroids, 3D chiral network-like nanostructures. The findings add a new candidate system for research into unconventional information processing and emergent phenomena relevant to spintronics.",
            "link": "https://www.tohoku.ac.jp/en/press/magnetic_configuration_3d_nanoscale_gyroid_networks.html"
        },
        {
            "date": "Apr 30",
            "name": "New study reveals unexpected softness of bilayer graphen",
            "place": "Queen Mary University of London",
            "description": "In the study, published in the journal Physical Review B, the researchers showed that bilayer graphene, consisting of two layers of graphene, was noticeably softer than both two-dimensional (2D) graphene and three-dimensional (3D) graphite along the stacking direction.",
            "link": "https://www.qmul.ac.uk/media/news/2020/se/new-study-reveals-unexpected-softness-of-bilayer-graphene.html"
        },
        {
            "date": "Apr 27",
            "name": "Ultra-precision nano-sensor could detect iron disorders",
            "place": "University of Sydney",
            "description": "The University of Sydney's Tissue Engineering and Biomaterials Research Unit and the Australian Research Centre for Innovative BioEngineeing have developed a hypersensitive nano-sensor to detect harmful \"free\" iron disorders.",
            "link": "https://www.sydney.edu.au/news-opinion/news/2020/04/27/ultra-precision-nano-sensor-could-detect-iron-disorders.html"
        },
        {
            "date": "Apr 27",
            "name": "I can’t reach with the screwdriver, please pass the laser!",
            "place": "University of the Witwatersrand",
            "description": "Researchers have demonstrated the world’s first metasurface laser that produces “super-chiral light”: light with ultra-high angular momentum. The light from this laser can be used as a type of “optical spanner” to or for encoding information in optical communications. ",
            "link": "http://www.wits.ac.za/news/latest-news/research-news/2020/2020-04/i-cant-reach-with-the-screwdriver-please-pass-the-laser-.html"
        },           
        {
            "date": "Apr 27",
            "name": "Synthesis of silicon intercalated monolayer blue phosphorus",
            "place": "National University of Singapore",
            "description": "NUS chemists have developed a method to synthetically produce monolayer blue phosphorus for potential semiconductor applications.",
            "link": "https://www.science.nus.edu.sg/blog/2020/04/27/synthesis-of-silicon-intercalated-monolayer-blue-phosphorus/"
        },
        {
            "date": "Apr 23",
            "name": "Multi-Functionalization of Graphene for Molecular Targeted Cancer Therapy",
            "place": "Japan Advanced Institute of Science and Technology",
            "description": "Three functional molecules (near-infrared fluorescent probe, tumor targeting molecule, and anticancer drug) are successfully decollated onto the surface of graphene molecule. The multi-functional graphene allows effective cancer cell elimination",
            "link": "https://www.jaist.ac.jp/english/whatsnew/press/2020/04/23-1.html"
        },
        {
            "date": "Apr 23",
            "name": "Scientists Show a Way to Create Optical Chips and Solar Cell Details from Perovskite",
            "place": "ITMO University",
            "description": "It’s not a common thing in modern science when the results of one research give significant application results in three different fields of technology. Physicists from ITMO University and their colleagues from Far Eastern Federal University (FEFU) succeeded in conducting a series of experiments on laser processing of perovskite. They used their results to show how to create solar cells of any color, churn out millions of nanolasers for future optical transistors, as well as inscribe information that can only be read by those who it was intended for. The results were published in Small.",
            "link": "https://news.itmo.ru/en/science/photonics/news/9361/"
        },
        {
            "date": "Apr 21",
            "name": "A new biosensor for the COVID-19 virus",
            "place": "Swiss Federal Laboratories for Materials Science and Technology (EMPA)",
            "description": "A team of researchers from Empa, ETH Zurich and Zurich University Hospital has succeeded in developing a novel sensor for detecting the new coronavirus. In future it could be used to measure the concentration of the virus in the environment - for example in places where there are many people or in hospital ventilation systems.",
            "link": "https://www.empa.ch/web/s604/coronatest"
        },
        {
            "date": "Apr 21",
            "name": "Diamonds shine in energy storage solution",
            "place": "Queensland University of Technology",
            "description": "QUT researchers have proposed the design of a new carbon nanostructure made from diamond nanothreads that could one day be used for mechanical energy storage, wearable technologies, and biomedical applications.",
            "link": "https://www.qut.edu.au/news?id=161689"
        },
        {
            "date": "Apr 21",
            "name": "New hybrid material improves the performance of silicon in Li-ion batteries",
            "place": "University of Eastern Finland",
            "description": "Researchers at the University of Eastern Finland have developed a new hybrid material of mesoporous silicon microparticles and carbon nanotubes that can improve the performance of silicon in Li-ion batteries. Advances in battery technology are essential for sustainable development and for achieving climate neutrality.",
            "link": "https://www.uef.fi/en/news/new-hybrid-material-improves-the-performance-of-silicon-in-li-ion-batteries"
        },
        {
            "date": "Apr 21",
            "name": "New solution to capture microplastics before they enter waterways",
            "place": "Technical Research Centre of Finland",
            "description": "A thousand litres of seawater can contain up to 8.3 million particles of microplastics. Until now, identifying these very small particles has been difficult – usually they are only detected once they have accumulated in the bodies of fish. A method developed at VTT utilises nanocellulose structures for early particle identification. Nanocellulose would allow particles to be captured even before they enter waterways.",
            "link": "https://www.vttresearch.com/en/news-and-ideas/new-solution-capture-microplastics-they-enter-waterways"
        },
        {
            "date": "Apr 21",
            "name": "New nanocarrier drug delivery technology crosses the blood-brain barrier",
            "place": "Kumamoto University",
            "description": "A Japanese research team has developed a cyclic peptide (a chain of amino acids bonded circularly) that enhances blood-brain barrier (BBB) penetration. By attaching the cyclic peptide to the surface of nanoparticles, research and development of new drug nanocarriers for drug delivery to the brain becomes possible.",
            "link": "https://ewww.kumamoto-u.ac.jp/sp/en/news/375/"
        },
        {
            "date": "Apr 20",
            "name": "Photonic microwave generation using on-chip optical frequency combs",
            "place": "Ecole Polytechnique Fédérale de Lausanne",
            "description": "Using integrated photonic chips fabricated at EPFL, scientists have demonstrated laser-based microwave generators. These microwave signals, as well as their optical carriers, could be used in radars, satellite communications and future 5G wireless networks.",
            "link": "https://news.epfl.ch/news/photonic-microwave-generation-using-on-chip-optica/"
        },
        {
            "date": "Apr 20",
            "name": "Researchers Propose Flexible Pressure Sensor for Human-machine Interaction",
            "place": "Chinese Academy of Sciences",
            "description": "Flexible pressure sensors have attracted considerable attention due to their potential applications in electronic skins. To date, lots of approaches have been reported to achieve effective transformation from mechanical stimuli to electrical signals. ",
            "link": "http://english.cas.cn/newsroom/research_news/infotech/202004/t20200420_235012.shtml"
        },
        {
            "date": "Apr 17",
            "name": "Acidic alert",
            "place": "Ludwig Maximilian University of Munich",
            "description": "LMU researchers have synthesized nanoparticles that can be induced by a change in pH to release a deadly dose of ionized iron within cells. This mechanism could potentially open up new approaches to the targeted elimination of malignant tumors.",
            "link": "https://www.en.uni-muenchen.de/news/newsarchiv/2020/ploetz_iron.html"
        },
        {
            "date": "Apr 16",
            "name": "Single-atom-layer Trap (SALT): A Pivotal Microscopic Feature for Li-ion Migration",
            "place": "University of Science and Technology of China",
            "description": "On April 14th, Prof. MA Cheng from the University of Science and Technology of China (USTC) and his colleagues made an important discovery on the mechanism of Li-ion migration in solid electrolytes for batteries. They observed a new type of microscopic feature that can significantly influence ionic transport.",
            "link": "https://en.ustc.edu.cn/2020/0415/c15527a418244/page.htm"
        },
        {
            "date": "Apr 15",
            "name": "Scientists discover new features of molecular elevator",
            "place": "Moscow Institute of Physics and Technology",
            "description": "Biophysicists from the Moscow Institute of Physics and Technology and the University of Groningen in the Netherlands have visualized a nearly complete transport cycle of the mammalian glutamate transporter homologue from archaea. They confirmed that the transport mechanism resembles that of an elevator: A “door” opens, ions and substrate molecules come in, the door closes, and they travel through the membrane. Presumably the mammalian transporters operate the same way, so this discovery is potentially important for developing new treatments for schizophrenia and other mental illnesses caused by malfunctioning of these transporters. ",
            "link": "https://mipt.ru/english/news/scientists_discover_new_features_of_molecular_elevator"
        },             
        {
            "date": "Apr 09",
            "name": "Scientists Propose Novel Bifunctional Iron Nanocomposite Catalyst",
            "place": "Chinese Academy of Sciences",
            "description": "Oxidation of alkenes to carbonyl compounds is one of the most important industrial reactions. The oxidation products are important and useful intermediates or building blocks in synthetic organic chemistry, pharmaceuticals, agrochemicals, and bulk/fine chemicals.  ",
            "link": "http://english.cas.cn/newsroom/research_news/chem/202004/t20200409_234553.shtml"
        },
        {
            "date": "Apr 08",
            "name": "Eindhoven researchers present revolutionary light-emitting silicon",
            "place": "Eindhoven University of Technology",
            "description": "Emitting light from silicon has been the ‘Holy Grail’ in the microelectronics industry for decades. Solving this puzzle would revolutionize computing, as chips will become faster than ever. Researchers from Eindhoven University of Technology now succeeded: they have developed an alloy with silicon that can emit light. The results have been published in the journal Nature. The team will now start creating a silicon laser to be integrated into current chips.",
            "link": "https://www.tue.nl/en/news/news-overview/08-04-2020-eindhoven-researchers-present-revolutionary-light-emitting-silicon/"
        },  
        {
            "date": "Apr 07",
            "name": "Physicists produce stable water-based graphene dispersions",
            "place": "Umea University",
            "description": "Umeå researchers show how activated graphene, activated carbons and other hydrophobic carbons can be dispersed in water in a form of micrometer-sized particles. The key agent that helps to make these dispersions last for days is the oxidized form of graphene named graphene oxide. The authors have applied for patent for the method to prepare dispersions.",
            "link": "https://www.umu.se/en/news/physicists-produce-stable-water-based-graphene-dispersions_9066278/"
        },
        {
            "date": "Apr 06",
            "name": "UCD Researchers Discover New Method to Generate Substantial Volumes of Nanobubbles in Water",
            "place": "University College Dublin",
            "description": "Researchers at University College Dublin (UCD) have discovered a new energy-efficient method to generate and release substantial volumes of metastable, nano-scale gas bubbles in water, in excess of natural solubility levels.",
            "link": "https://www.ucd.ie/innovation/news-and-events/latest-news/ucd-researchers-new-nanobubbles-generation/name,490167,en.html"
        },
        {
            "date": "Apr 03",
            "name": "3D Reconstructions of Individual Nanoparticles",
            "place": "Institute for Basic Science",
            "description": "Liquid phase electron microscopy illuminates 3D atomic structures of platinum nanoparticles, advancing full control of nanoengineering.",
            "link": "https://www.ibs.re.kr/cop/bbs/BBSMSTR_000000000738/selectBoardArticle.do?nttId=18295&pageIndex=1&searchCnd=&searchWrd="
        },
        {
            "date": "Mar 31",
            "name": "Scientists find a way to extract colour from black",
            "place": "University of Birmingham",
            "description": "Scientists have developed a way of extracting a richer palette of colours from the available spectrum by harnessing disordered patterns inspired by nature that would typically be seen as black.",
            "link": "https://www.birmingham.ac.uk/news/latest/2020/03/scientists-find-a-way-to-extract-colour-from-black.aspx"
        },    
        {
            "date": "Mar 30",
            "name": "Phage capsid against influenza: perfectly fitting inhibitor prevents viral infection",
            "place": "Forschungsverbund Berlin e.V.",
            "description": "A new approach brings the hope of new therapeutic options for suppressing seasonal influenza and avian flu: On the basis of an empty – and therefore non-infectious – shell of a phage virus, researchers from Berlin have developed a chemically modified phage capsid that “stifles” influenza viruses.",
            "link": "https://www.fv-berlin.de/en/info-for/the-media-and-public/news/phagen-kapsid-gegen-influenza-passgenauer-inhibitor-verhindert-virale-infektion"
        },
        {
            "date": "Mar 27",
            "name": "Graphene-iron filters a promising gas separation tool: research",
            "place": "University of New South Wales",
            "description": "UNSW researchers have shown how a new class of low-cost graphene-based membranes – a type of filter used in industry sectors that generate enormous mixed waste gases, such as solid plastic waste, biowaste or wastewater – can be selectively tuned to separate different gases from gaseous mixtures. ",
            "link": "https://newsroom.unsw.edu.au/news/science-tech/graphene-iron-filters-promising-gas-separation-tool-research"
        },
        {
            "date": "Mar 26",
            "name": "3D printer sensors could make breath tests for diabetes possible",
            "place": "Kiel University",
            "description": "The production of highly sensitive sensors is a complex process: it requires many different steps and the almost dust-free environment of special cleanrooms. A research team from Materials Science at Kiel University (CAU) and from Biomedical Engineering at the Technical University of Moldova has now developed a procedure to produce extremely sensitive and energy-efficient sensors using 3D printing. ",
            "link": "https://www.uni-kiel.de/en/university/details/news/091-3d-druck"
        },
        {
            "date": "Mar 25",
            "name": "A nanoscale device that can see through walls",
            "place": "Ecole Polytechnique Fédérale de Lausanne",
            "description": "Researchers at EPFL have developed a nanodevice that operates more than 10 times faster than today’s fastest transistors, and about 100 times faster than the transistors you have on your computers. This new device enables the generation of high-power terahertz waves. These waves, which are notoriously difficult to produce, are useful in a rich variety of applications ranging from imaging and sensing to high-speed wireless communications. The high-power picosecond operation of these device also hold immense promise to some advanced medical treatment techniques such as cancer therapy. The team’s pioneering compact source, described today in Nature, paves the way for untold new applications.",
            "link": "https://news.epfl.ch/news/a-nanoscale-device-that-can-see-through-walls/"
        },
        {
            "date": "Mar 25",
            "name": "Innovative Thinner Electrolyte Can Improve Functioning of Solid Oxide Fuel Cells",
            "place": "Tokyo University of Science",
            "description": "Solid oxide fuel cells (SOFCs) are clean and highly efficient power generation systems, which can generate electrical energy but are limited by their high operating temperatures and infrequent applications. Researchers from the Tokyo University of Science led by Dr Tohru Higuchi, in their new study, explore how the efficiency of SOFCs can be increased by lowering their operating temperature and could be an alternative to nuclear and thermal power generation in the future.",
            "link": "https://www.tus.ac.jp/en/mediarelations/archive/20200325001.html"
        },    
        {
            "date": "Mar 24",
            "name": "AI Finds 2D Materials in the Blink of an Eye",
            "place": "University of Tokyo",
            "description": "Researchers at the Institute of Industrial Science, a part of The University of Tokyo, demonstrated a novel artificial intelligence system that can find and label 2D materials in microscope images in the blink of an eye. This work can help shorten the time required for 2D material-based electronics to be ready for consumer devices.",
            "link": "https://www.iis.u-tokyo.ac.jp/en/news/3270/"
        },  
        {
            "date": "Mar 23",
            "name": "Graphite nanoplatelets prevent infections",
            "place": "Chalmers University of Technology",
            "description": "Graphite nanoplatelets integrated into plastic medical surfaces can prevent infections, killing 99.99 per cent of bacteria which try to attach – a cheap and viable potential solution to a problem which affects millions, costs huge amounts of time and money, and accelerates antibiotic resistance. This is according to research from Chalmers University of Technology, Sweden, in the journal Small.​",
            "link": "https://www.chalmers.se/en/departments/bio/news/Pages/Graphite-nanoplatelets-on-medical-devices-prevent-infections-.aspx"
        }, 
        {
            "date": "Mar 23",
            "name": "New material developed could help clean energy revolution",
            "place": "Aalto University",
            "description": "Researchers developed a promising graphene–carbon nanotube catalyst, giving them better control over hugely important chemical reactions for producing hydrogen fuel.",
            "link": "https://www.aalto.fi/en/news/new-material-developed-could-help-clean-energy-revolution"
        }, 
        {
            "date": "Mar 23",
            "name": "Researchers observe ultrafast processes of single molecules in liquid helium for the first time",
            "place": "Graz University of Technology",
            "description": "Graz University of Technology researchers describe in Physical Review Letters how a molecule moves in the protective environment of a quantum fluid.",
            "link": "https://www.tugraz.at/en/tu-graz/services/news-stories/tu-graz-news/singleview/article/forschende-beobachten-erstmals-ultraschnelle-prozesse-einzelner-molekuele-in-fluessigem-helium0/"
        }, 
        {
            "date": "Mar 20",
            "name": "A pigment from ancient Egypt to modern microscopy",
            "place": "University of Göttingen",
            "description": "University of Göttingen has produced a new nanomaterial based on the Egyptian blue pigment, which is ideally suited for applications in imaging using near infrared spectroscopy and microscopy. The results have been published in the journal Nature Communications.",
            "link": "https://goettingen-campus.de/news/view?tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=316&cHash=b1fb2ec38b21e16550c95fd1be5fb15f"
        }, 
        {
            "date": "Mar 19",
            "name": "How molecules self-assemble into superstructures",
            "place": "Kiel University",
            "description": "Most technical functional units are built bit by bit according to a well-designed construction plan. The components are sequentially put in place by humans or machines. Life, however, is based on a different principle. It starts bottom-up with molecular self-assembly. The crystallization of sugar or salt are simple examples of self-assembly processes, where almost perfect crystals form from molecules that randomly move in a solution. To better understand the growth of macroscopic structures from molecules, a research team of physicists and chemists of Kiel University has mimicked such processes with custom-made molecules. As recently reported in the journal Angewandte Chemie they fabricated a variety of patterns over a wide range of sizes including the largest structures reported so far.",
            "link": "https://www.uni-kiel.de/en/university/details/news/075-superstrukturen"
        }, 
        {
            "date": "Mar 17",
            "name": "Semiconductors can behave like metals and superconductors",
            "place": "Swansea University",
            "description": "The crystal structure at the surface of semiconductor materials can make them behave like metals and even like superconductors, a joint Swansea/Rostock research team has shown. The discovery potentially opens the door to advances like more energy-efficient electronic devices.",
            "link": "https://www.swansea.ac.uk/press-office/news-events/news/2020/03/semiconductors-can-behave-like-metals-and-superconductors.php"
        }, 
        {
            "date": "Mar 17",
            "name": "Nanostructured rubber-like material could replace human tissue",
            "place": "Chalmers University of Technology",
            "description": "Researchers from Chalmers University of Technology, Sweden, have created a new, rubber-like material with a unique set of properties, which could act as a replacement for human tissue in medical procedures. The material has the potential to make a big difference to many people's lives. The research was recently published in the highly regarded scientific journal ACS Nano.",
            "link": "https://www.chalmers.se/en/departments/chem/news/Pages/Nanostructured-rubber-like.aspx"
        }, 
        {
            "date": "Mar 16",
            "name": "Machine learning technique sharpens prediction of material's mechanical properties",
            "place": "Nanyang Technological University",
            "description": "Scientists at Nanyang Technological University, Singapore (NTU Singapore), Massachusetts Institute of Technology (MIT), and Brown University have developed new approaches that significantly improve the accuracy of an important material testing technique by harnessing the power of machine learning. ",
            "link": "http://news.ntu.edu.sg/pages/newsdetail.aspx?URL=http://news.ntu.edu.sg/news/Pages/NR2020_Mar17.aspx&Guid=eda98e23-2b42-4913-ab8d-901270564089&Category=News+Releases"
        }, 
        {
            "date": "Mar 13",
            "name": "Graphene solar heating film offers new opportunity for efficient thermal energy harvesting",
            "place": "Swinburne University of Technology",
            "description": "Swinburne researchers have developed a highly efficient film that absorbs sunlight with minimal heat loss and rapidly heats up to 83°C. The graphene metamaterial film has great potential for use in solar thermal energy harvesting and conversion, thermophotovoltaics, solar seawater desalination, wastewater treatment, light emitters and photodetectors.",
            "link": "https://www.swinburne.edu.au/news/latest-news/2020/03/graphene-solar-heating-film-offers-new-opportunity-for-efficient-thermal-energy-harvesting.php"
        },
        {
            "date": "Mar 13",
            "name": "3D Hierarchically Porous Nanostructured Catalyst Helps Efficiently Reduce CO2​",
            "place": "The Korea Advanced Institute of Science and Technology (KAIST)",
            "description": "KAIST researchers developed a three-dimensional (3D) hierarchically porous nanostructured catalyst with carbon dioxide (CO2) to carbon monoxide (CO) conversion rate up to 3.96 times higher than that of conventional nanoporous gold catalysts. This new catalyst helps overcome the existing limitations of the mass transport that has been a major cause of decreases in the CO2 conversion rate, holding a strong promise for the large-scale and cost-effective electrochemical conversion of CO2 into useful chemicals.",
            "link": "http://news.kaist.ac.kr/newsen/html/news/?mode=V&mng_no=6470"
        },
        {
            "date": "Mar 12",
            "name": "How impermeable is the impermeable graphene?",
            "place": "University of Manchester",
            "description": "New experiments by researchers at The University of Manchester have placed the best limits yet on impermeability of graphene and other two-dimensional materials to gases and liquids. The work has also revealed that the carbon sheet can act as a powerful catalyst for hydrogen splitting, a finding that promises cheap and abundant catalysts in the future.",
            "link": "https://www.manchester.ac.uk/discover/news/how-impermeable-is-the-impermeable-graphene/"
        },
        {
            "date": "Mar 12",
            "name": "New universal carrier ink for 3D printing",
            "place": "ETH Zurich",
            "description": "Researchers at ETH have produced a gel from cellulose fibres and biodegradable nanoparticles that liquifies when pressed through the nozzle of a 3D printer, but then quickly returns to its original shape. Their invention paves the way for personalised biomaterial implants.",
            "link": "https://ethz.ch/en/news-and-events/eth-news/news/2020/03/universal-carrier-ink-for-3d-printing.html"
        },
        {
            "date": "Mar 12",
            "name": "Gold nanoparticles uncover amyloid fibrils",
            "place": "Ecole Polytechnique Federale de Lausanne",
            "description": "EPFL scientists have developed powerful tools to unmask the diversity of amyloid fibrils, which are associated with Alzheimer’s disease and other neurodegenerative disorders. The scientists made the breakthrough by developing gold nanoparticles that combine with cryogenic transmission electron microscopy, to provide rapid and unprecedented images of fibrils.",
            "link": "https://news.epfl.ch/news/gold-nanoparticles-uncover-amyloid-fibrils/"
        },
        {
            "date": "Mar 11",
            "name": "Yellow is the new brown",
            "place": "Swiss Federal Laboratories for Materials Science and Technology",
            "description": "If different types of vegetables and fruits are stored together, they influence each other's ripening process. This is due to ethylene, which is emitted by some plant-based foodstuff and accelerates ripening. To prevent excessive food waste due to accelerated ripening Empa and ETH Zurich researchers are developing a new catalyst that degrades ethylene into water and carbon dioxide.",
            "link": "https://www.empa.ch/web/s604/fresh-fruit"
        },
        {
            "date": "Mar 11",
            "name": "Caught in a spin: spiral vortex streamlines delivery of nanomaterials into cells",
            "place": "Okinawa Institute of Science and Technology",
            "description": "The membrane surrounding cells acts as a selective barrier, cradling and protecting the cell’s contents from the external surroundings and choosing which substances to allow in or out of the cell. Scientists have therefore struggled to engineer efficient methods of delivering nanomaterials, such as DNA, proteins and drugs, into cells.",
            "link": "https://www.oist.jp/news-center/news/2020/3/11/caught-spin-spiral-vortices-streamline-delivery-nanomaterials-cells"
        },
        {
            "date": "Mar 10",
            "name": "The Degree of Survival: Nanoparticles and Heat Cure Intestinal Cancer in Mice",
            "place": "The National University of Science and Technology MISIS",
            "description": "A group of scientists from NUST MISIS has presented the test results of an innovative oncotherapy technology based on hyperthermia — heating a tumor to a certain temperature due to nanoparticles introduced into it. The drug based on cobalt ferrite nanoparticles cured 100% of the mice with intestinal cancer from the experimental group. Project results have been published in the Nanomedicine: Nanotechnology, Biology, and Medicine international scientific journal.",
            "link": "https://en.misis.ru/university/news/science/2020-03/6557/"
        },
        {
            "date": "Mar 09",
            "name": "New carbon membrane generates a hundred times more power",
            "place": "Leiden University",
            "description": "Leiden chemists have created a new ultrathin membrane only one molecule thick. The membrane can produce a hundred times more power from seawater than the best membranes used today. The researchers have published their findings in Nature Nanotechnology.",
            "link": "https://www.universiteitleiden.nl/en/news/2020/03/new-carbon-membrane-generates-a-hundred-times-more-power"
        },
        {
            "date": "Mar 06",
            "name": "Tickling an atom to investigate the behaviour of materials",
            "place": "University of Leeds",
            "description": "The position of a single atom in a material can change the fundamental properties of that material, so scientists need something in their toolbox to measure how that atom will behave.",
            "link": "https://www.leeds.ac.uk/news/article/4558/tickling_an_atom_to_investigate_the_behaviour_of_materials"
        },
        {
            "date": "Mar 06",
            "name": "Tough, flexible sensor invented for wearable tech",
            "place": "University of Waterloo",
            "description": "Researchers have utilized 3D printing and nanotechnology to create a durable, flexible sensor for wearable devices to monitor everything from vital signs to athletic performance.",
            "link": "https://uwaterloo.ca/news/news/tough-flexible-sensor-invented-wearable-tech"
        },
        {
            "date": "Mar 05",
            "name": "Nanoscale spectroscopy review showcases a bright future",
            "place": "University of Technology Sydney",
            "description": "Modern society is working closer to the nanoscale than it realises. Breakthroughs and advances in developing and manipulating nanostructures have led to technological progress that not only drives imaging and sensing devices but also makes possible mainstays of modern life such as touch screens and high resolution LED displays.",
            "link": "https://www.uts.edu.au/about/faculty-science/news/nanoscale-spectroscopy-review-showcases-bright-future"
        },
        {
            "date": "Mar 05",
            "name": "Water splitting observed on the nanometer scale",
            "place": "Max Planck Institute for Polymer Research",
            "description": "Whether as a fuel or in energy storage: hydrogen is being traded as the energy carrier of the future. To date, existing methodologies have not been able to elucidate how exactly the electrochemical process of water splitting into hydrogen and oxygen takes place at the molecular scale on a catalyst surface. Scientists at the Max Planck Institute for Polymer Research (MPI-P) in Mainz have now developed a new method to investigate such processes 'live' on the nanometer scale. The new detailed insights into the splitting of water on gold surfaces could aid the design of energy-efficient electro-catalysts.",
            "link": "https://www.mpip-mainz.mpg.de/en/press/pr-2020-03"
        },
        {
            "date": "Mar 05",
            "name": "Cooling magnets with sound",
            "place": "University of Innsbruck",
            "description": "Today, most quantum experiments are carried out with the help of light, including those in nanomechanics, where tiny objects are cooled with electromagnetic waves to such an extent that they reveal quantum properties. Now, a team of physicists led by Oriol Romero-Isart is proposing to cool microparticles with sound wave instead.",
            "link": "https://www.uibk.ac.at/newsroom/cooling-magnets-with-sound.html.en"
        },
        {
            "date": "Mar 04",
            "name": "Biomaterial discovery enables 3D printing of tissue-like vascular structures",
            "place": "University of Nottingham",
            "description": "Biomaterial discovery enables 3D printing of tissue-like vascular structures",
            "link": "https://www.nottingham.ac.uk/pharmacy/news/2020/biomaterial-discovery-enables-3d-printing-of-tissue-like-vascular-structures.aspx"
        },
        {
            "date": "Mar 04",
            "name": "Using molecules to draw on quantum materials",
            "place": "Institut national de la recherche scientifique - INRS",
            "description": "Over millennia, civilizations progressed through the Stone, Bronze, and Iron Ages. Now the time has come for quantum materials to change the way we live, thanks in part to research conducted at the Institut National de la Recherche Scientifique (INRS) and McGill University. ",
            "link": "http://www.inrs.ca/english/actualites/using-molecules-draw-quantum-materials"
        },
        {
            "date": "Mar 04",
            "name": "Magnetic whirls in future data storage devices",
            "place": "Martin-Luther-Universität Halle-Wittenberg",
            "description": "Magnetic (anti)skyrmions are microscopically small whirls that are found in special classes of magnetic materials. These nano-objects could be used to host digital data by their presence or absence in a sequence along a magnetic stripe. A team of scientists from the Max Planck institutes (MPI) of Microstructure Physics in Halle and for Chemical Physics of Solids in Dresden and the Martin Luther University Halle-Wittenberg (MLU) has now made the observation that skyrmions and antiskyrmions can coexist bringing about the possibility to expand their capabilities in storage devices. The results were published in the scientific journal 'Nature Communications'.",
            "link": "https://pressemitteilungen.pr.uni-halle.de/index.php?modus=pmanzeige&pm_id=3241"
        },
        {
            "date": "Mar 02",
            "name": "Exciting apparatus helps atoms see the light",
            "place": "Okinawa Institute of Science and Technology",
            "description": "Researchers in the Light-Matter Interactions for Quantum Technologies Unit at the Okinawa Institute of Science and Technology Graduate University (OIST) have generated Rydberg atoms – unusually large excited atoms – near nanometer-thin optical fibers. Their findings, published recently in Physical Review Research, mark progress toward a new platform for quantum information processing, which has the potential to revolutionize material and drug discoveries and provide more secure quantum communication.",
            "link": "https://www.oist.jp/news-center/news/2020/2/26/exciting-apparatus-helps-atoms-see-light"
        },
        {
            "date": "Mar 02",
            "name": "Hygroscopic Micro/Nanolenses along Carbon Nanotube Ion Channels",
            "place": "Ulsan National Institute of Science and Technology",
            "description": "A novel technology, capable of analyzing nanomaterials in our daily lives with the use of common ‘salt’ has been developed. This allows various molecules to amplify up to hundreds of times the signals they produce in response to light, thereby making them very useful for nanomaterial research.",
            "link": "https://news.unist.ac.kr/hygroscopic-micronanolenses-along-carbon-nanotube-ion-channels/"
        },
        {
            "date": "Mar 02",
            "name": "Carbon chains can adopt fusilli or spaghetti type shapes depending if they have odd or even numbers of atoms",
            "place": "University of Bristol",
            "description": "Scientists at the University of Bristol have now found that carbon chains can also adopt helical shapes, but, unlike DNA, the shape is dependent on how many atoms there are in the chain, with chains having even numbers of carbon atoms adopting helical, fusilli-like shapes and chains with odd numbers of carbon atoms adopting floppy, spaghetti-like shapes.",
            "link": "http://www.bristol.ac.uk/news/2020/march/carbon-chains-helical-shapes-.html"
        },
        {
            "date": "Feb 27",
            "name": "A new template for nonspherical viral nanocages",
            "place": "University of Twente",
            "description": "In nature, viruses use nanocages to protect their genome. Some of these viruses can be disassembled into protein units to remove their genome. These protein units can then be reassembled into nanocages by other templates, the so-called virus-like particles. For her PhD thesis, University of Twente candidate Shuqin Cao worked on a new template for these virus-like particles to use them in several different biomedical applications.",
            "link": "https://www.utwente.nl/en/news/2020/2/519973/a-new-template-for-non-spherical-viral-nanocages"
        },
        {
            "date": "Feb 27",
            "name": "Oil separation made easier with 2D material membrane",
            "place": "University of Manchester",
            "description": "University of Manchester researchers have made a leap forward in overcoming one of the biggest problems in membrane technology- membrane fouling.",
            "link": "https://www.manchester.ac.uk/discover/news/oil-separation-made-easier-with-2d-material-membrane/"
        },
        {
            "date": "Feb 24",
            "name": "Regioselective Magnetization Enables Chiral Semiconducting Heteronanorods",
            "place": "University of Science and Technology of China",
            "description": "The USTC team of Chinese Academy of Science (CAS) led by Prof. YU Shuhong (USTC), collaborating with Prof. TANG Zhiyong (National Center for Nanoscience and Technology, China) and Prof. Edward H. Sargent (University of Toronto), has shed new lights on the topic of chiral inorganic nanomaterials.  Researchers demonstrated a regioselective magnetization strategy, achieving a library of semiconducting heteronanorods with chiroptical activities. The research article entitled “Regioselective magnetization in semiconducting nanorods” was published in Nature Nanotechnology (Nat. Nanotechnol. 2020, 10.1038/s41565-019-0606-8) on Jan 20th.",
            "link": "https://en.ustc.edu.cn/2020/0221/c15527a413615/page.htm"
        },
        {
            "date": "Feb 24",
            "name": "Watching magnetic nano ‘tornadoes’ in 3D",
            "place": "University of Cambridge",
            "description": "Scientists have developed a three-dimensional imaging technique to observe complex behaviours in magnets, including fast-moving waves and ‘tornadoes’ thousands of times thinner than a human hair.",
            "link": "https://www.cam.ac.uk/research/news/watching-magnetic-nano-tornadoes-in-3d"
        },
        {
            "date": "Feb 24",
            "name": "The combination of plant-based particles and water forms an “eco” super-glue",
            "place": "Aalto University",
            "description": "Plant-based cellulose nanocrystals have remarkable inherent properties, and when combined with water, a powerful adhesive is formed that competes in strength with Superglue, without the need for toxic solvents.",
            "link": "https://www.aalto.fi/en/news/the-combination-of-plant-based-particles-and-water-forms-an-eco-super-glue"
        },
        {
            "date": "Feb 24",
            "name": "Short film of a magnetic nano-vortex",
            "place": "Paul Scherrer Institute",
            "description": "For the first time, researchers at the Paul Scherrer Institute PSI have recorded a \"3D film\" of magnetic processes on the nanometer scale. This reveals a variety of dynamics inside the material, including the motion of swirling boundaries between different magnetic domains. The insights were gained with a method newly developed at the Swiss Light Source SLS. It could help to make magnetic data storage devices more compact and efficient. The researchers are publishing the results of their investigations today in the journal Nature Nanotechnology.",
            "link": "https://www.psi.ch/en/media/our-research/short-film-of-a-magnetic-nano-vortex"
        },
        {
            "date": "Feb 24",
            "name": "Directing nanoparticles straight to tumors",
            "place": "Helmholtz-Zentrum Dresden-Rossendorf",
            "description": "Modern anticancer therapies aim to attack tumor cells while sparing healthy tissue. An interdisciplinary team of researchers at Helmholtz-Zentrum Dresden-Rossendorf (HZDR) and FU Berlin has made important progress in this area: the scientists have produced tiny nanoparticles that are designed to specifically target cancer cells. They can navigate directly to the tumor cells and visualize those using advanced imaging techniques. Both in petri dishes and animal models, the scientists were able to effectively guide the nanoparticles to the cancer cells. The next step is to combine the new technique with therapeutic approaches.",
            "link": "https://www.hzdr.de/db/Cms?pOid=60276&pNid=99"
        },
        {
            "date": "Feb 20",
            "name": "Russian scientists found an effective way to obtain fuel for hydrogen engines",
            "place": "Immanuel Kant Baltic Federal University",
            "description": "One of the most promising alternative energy sources is hydrogen, which can be extracted from water and air. A catalyst is needed for a chemical process that releases hydrogen from an H2O molecule. It can be made, for example, from platinum, or from molybdenum. But these are quite expensive materials. Therefore, the output energy is expensive too.",
            "link": "http://eng.kantiana.ru/news/261301/"
        },
        {
            "date": "Feb 19",
            "name": "Scientists Develop a New Gold Nanocatalyst with High Catalytic Activity and Excellent Stability",
            "place": "Chinese Academy of Sciences",
            "description": "A joint research team led by Prof. HUANG Jiahui and Prof. QIAO Botao from the Dalian Institute of Chemical Physics (DICP) of the Chinese Academy of Sciences (CAS), as well as Prof. SUN Keju from Yanshan University, developed an anti-sintering gold nanocatalyst with high catalytic activity. The results were published in Nature Communications.",
            "link": "http://english.cas.cn/newsroom/research_news/chem/202002/t20200219_230027.shtml"
        },
        {
            "date": "Feb 17",
            "name": "The origins of roughness",
            "place": "University of Freiburg",
            "description": "Most natural and artificial surfaces are rough: metals and even glasses that appear smooth to the naked eye can look like jagged mountain ranges under the microscope. There is currently no uniform theory about the origin of this roughness despite it being observed on all scales, from the atomic to the tectonic. Scientists suspect that the rough surface is formed by irreversible plastic deformation that occurs in many processes of mechanical machining of components such as milling. ",
            "link": "http://www.pr.uni-freiburg.de/pm-en/press-releases-2020/the-origins-of-roughness"
        },
        {
            "date": "Feb 12",
            "name": "X-ray microscopy at BESSY II: Nanoparticles can change cells",
            "place": "Helmholtz-Zentrum Berlin für Materialien und Energie",
            "description": "Nanoparticles easily enter into cells. New insights about how they are distributed and what they do there are shown for the first time by high-resolution 3D microscopy images from BESSY II. For example, certain nanoparticles accumulate preferentially in certain organelles of the cell. This can increase the energy costs in the cell. \"The cell looks like it has just run a marathon, apparently, the cell requires energy to absorb such nanoparticles\" says lead author James McNally.",
            "link": "https://www.helmholtz-berlin.de/pubbin/news_seite?nid=21060&sprache=en"
        },
        {
            "date": "Feb 10",
            "name": "Harnessing the sun to bring fresh water to remote or disaster-struck communities",
            "place": "University of Bath",
            "description": "A device that takes a novel approach to removing salt from water has been developed in Bath, paving the way for small, solar-powered desalination units",
            "link": "https://www.bath.ac.uk/announcements/harnessing-the-sun-to-bring-fresh-water-to-remote-or-disaster-struck-communities/"
        },
        {
            "year": 2020,
            "date": "Feb 11",
            "name": "New sensor provides better leak protection in buildings",
            "place": "University of Waterloo",
            "description": "A new, battery-free sensor can detect water leaks in buildings at a fraction of the cost of existing systems.",
            "link": "https://uwaterloo.ca/news/news/new-sensor-provides-better-leak-protection-buildings"
        },
        {
            "year": 2020,
            "date": "Feb 10",
            "name": "Cerium oxide nanoparticles may improve hepatocellular carcinoma prognosis",
            "place": "Catalan Institute of Nanoscience and Nanotechnology",
            "description": "This liver cancer is the most common and is in need of new therapeutic approaches. A long-term collaboration between IDIBAPS and ICN2, led by Prof. Wladimiro Jiménez and Prof. ICREA Víctor F. Puntes, has demonstrated that the administration of cerium oxide nanoparticles in a rat animal model can compete with the best currently available treatments. The Research published in Hepatology shows that human tissues also absorb and retain the nanoparticles, making them a potential and promising new drug strategy.",
            "link": "https://icn2.cat/en/news/4453-cerium-oxide-nanoparticles-may-improve-hepatocellular-carcinoma-prognosis"
        },
        {
            "year": 2020,
            "date": "Feb 10",
            "name": "Brain temperature can now be measured using light",
            "place": "Swinburne University of Technology",
            "description": "Researchers led by physicist Dr Blanca del Rosal Rabes have developed a technique for measuring brain temperature changes using near-infrared light. The technique uses thermosensitive nanoparticles to measure brain temperature through the skin and the skull. Dr del Rosal Rabes was awarded a 2020 ARC Discovery Early Career Researcher Award to further her work.",
            "link": "http://www.swinburne.edu.au/news/latest-news/2020/02/brain-temperature-can-now-be-measured-using-light.php"
        },
        {
            "year": 2020,
            "date": "Feb 07",
            "name": "Bending diamond is possible, at the nanoscale",
            "place": "University of Technology Sydney",
            "description": "Diamond is prized by scientists and jewellers alike, largely for a range of extraordinary properties including exceptional hardness. Now Australian researchers, led by University of Technology Sydney (UTS) physicists, have discovered diamond can be bent and deformed, at the nanoscale at least.",
            "link": "https://www.uts.edu.au/about/faculty-science/news/bending-diamond-possible-nanoscale"
        },
        {
            "year": 2020,
            "date": "Feb 07",
            "name": "The power of going small: Copper oxide subnanoparticle catalysts prove most superior",
            "place": "Tokyo Institute of Technology",
            "description": "Scientists at Tokyo Institute of Technology have shown that copper oxide particles on the sub-nanoscale are more powerful catalysts than those on the nanoscale. These subnanoparticles can also catalyze the oxidation reactions of aromatic hydrocarbons far more effectively than catalysts currently used in industry. This study paves the way to better and more efficient utilization of aromatic hydrocarbons, which are important materials for both research and industry.",
            "link": "https://www.titech.ac.jp/english/news/2020/046240.html"
        },
        {
            "year": 2020,
            "date": "Feb 06",
            "name": "A gold butterfly can make its own semiconductor skin",
            "place": "Hokkaido University",
            "description": "A nanoscale gold butterfly provides a more precise route for growing/synthesizing nanosized semiconductors that can be used in nano-lasers and other applications.",
            "link": "https://www.global.hokudai.ac.jp/blog/a-gold-butterfly-can-make-its-own-semiconductor-skin/"
        },
        {
            "year": 2020,
            "date": "Feb 05",
            "name": "New research builds upon carbon nanotubes to create a novel functional structure",
            "place": "University of Tokyo",
            "description": "For decades, carbon nanotubes held great promise of developments in the field of electronics and more. But one drawback to realizing these innovations has been the difficulty of incorporating additional materials into nanotubes. For the first time, researchers have grown crystals of various materials uniformly onto the surface of carbon nanotubes. They hope these modified structures will exhibit functions useful in electronic, chemical or other applications.",
            "link": "https://www.u-tokyo.ac.jp/focus/en/press/z0508_00091.html"
        },
        {
            "year": 2020,
            "date": "Feb 04",
            "name": "Sweet Nanoparticles trick Kidney",
            "place": "University of Freiburg",
            "description": "Researchers engineer tiny particles with sugar molecules to prevent side effect in cancer therapy",
            "link": "http://www.pr.uni-freiburg.de/pm-en/press-releases-2020/sweet-nanoparticles-trick-kidney"
        },
        {
            "year": 2020,
            "date": "Feb 03",
            "name": "New graphene amplifier has been able to unlock hidden frequencies in the electromagnetic spectrum",
            "place": "Loughborough University",
            "description": "Researchers have created a unique device which will unlock the elusive terahertz wavelengths and make revolutionary new technologies possible.",
            "link": "https://www.lboro.ac.uk/news-events/news/2020/february/graphene-amplifier-unlock-electromagnetic-spectrum/"
        },
        {
            "year": 2020,
            "date": "Jan 31",
            "name": "First view of hydrogen at the metal-to-metal hydride interface",
            "place": "University of Groningen",
            "description": "University of Groningen physicists have visualized hydrogen at the titanium/titanium hydride interface using a transmission electron microscope. Using a new technique, they succeeded in visualizing both the metal and the hydrogen atoms in a single image, allowing them to test different theoretical models that describe the interface structure. The results were published on 31 January in the journal Science Advances.",
            "link": "https://www.rug.nl/sciencelinx/nieuws/2020/01/first-view-of-hydrogen-at-the-metal-to-metal-hydride-interface"
        },
        {
            "year": 2020,
            "date": "Jan 30",
            "name": "A nanoscale lattice of palladium and yttrium makes for a superlative carbon-linking catalyst",
            "place": "Tokyo Institute of Technology",
            "description": "A group of materials scientists at Tokyo Institute of Technology has shown that a palladium-based intermetallic electride, Y3Pd2, can improve the efficiency of carbon–carbon cross-coupling reactions. Their findings point the way to a more sustainable world through catalysis.",
            "link": "https://www.titech.ac.jp/english/news/2020/046183.html"
        },
        {
            "year": 2020,
            "date": "Jan 30",
            "name": "Graphene can withstand over one billion high-stress cycles before failing, U of T researchers find",
            "place": "University of Toronto",
            "description": "Graphene is a paradox: It is the thinnest material known to science, yet also one of the strongest. Now, researchers at the University of Toronto’s Faculty of Applied Science & Engineering have shown that graphene is also highly resistant to fatigue – able to withstand more than a billion cycles of high stress before it breaks.",
            "link": "https://www.utoronto.ca/news/graphene-can-withstand-over-one-billion-high-stress-cycles-failing-u-t-researchers-find"
        },
        {
            "year": 2020,
            "date": "Jan 30",
            "name": "A Quantum of Solid",
            "place": "University of Vienna",
            "description": "Researchers in Austria use lasers to levitate and cool a glass nanoparticle into the quantum regime. Although it is trapped in a room temperature environment, the particle’s motion is solely governed by the laws of quantum physics. The team of scientists from the University of Vienna, the Austrian Academy of Sciences and the Massachusetts Institute of Technology (MIT) published their new study in the journal Science.",
            "link": "https://medienportal.univie.ac.at/presse/aktuelle-pressemeldungen/detailansicht/artikel/a-quantum-of-solid/"
        },
        {
            "year": 2020,
            "date": "Jan 30",
            "name": "A Quantum of Solid",
            "place": "University of Vienna",
            "description": "Researchers in Austria use lasers to levitate and cool a glass nanoparticle into the quantum regime. Although it is trapped in a room temperature environment, the particle’s motion is solely governed by the laws of quantum physics. The team of scientists from the University of Vienna, the Austrian Academy of Sciences and the Massachusetts Institute of Technology (MIT) published their new study in the journal Science.",
            "link": "https://medienportal.univie.ac.at/presse/aktuelle-pressemeldungen/detailansicht/artikel/a-quantum-of-solid/"
        },
        {
            "year": 2020,
            "date": "Jan 29",
            "name": "Graphene Flagship publishes handbook of graphene manufacturing",
            "place": "Graphene Flagship",
            "description": "Encompassing more than 1,500 references and the knowledge of 70 co-authors from EU-funded Graphene Flagship partners and associate members, the article aims to provide a single source of knowledge on graphene and related layered materials (GRMs).",
            "link": "https://graphene-flagship.eu/news/Pages/Graphene-Flagship-publishes-handbook-of-graphene-manufacturing.aspx"
        },
        {
            "year": 2020,
            "date": "Jan 28",
            "name": "Crab-shell and seaweed compounds spin into yarns for sustainable and functional materials",
            "place": "Aalto University",
            "description": "Biobased fibres are made from two renewable marine resources and with promise in advanced applications, in wovens and medical materials, among others. The threads draw strength from the crab chitin component and flexibility from seaweed alginate.",
            "link": "https://www.aalto.fi/en/news/crab-shell-and-seaweed-compounds-spin-into-yarns-for-sustainable-and-functional-materials"
        },
        {
            "year": 2020,
            "date": "Jan 28",
            "name": "Putting a nanomachine to work",
            "place": "Ludwig-Maximilians-Universität München",
            "description": "A team of chemists at LMU has successfully coupled the directed motion of a light-activated molecular motor to a different chemical unit – thus taking an important step toward the realization of synthetic nanomachines.",
            "link": "http://www.en.uni-muenchen.de/news/newsarchiv/2020/dube_motor.html"
        },
        {
            "year": 2020,
            "date": "Jan 28",
            "name": "Microswimmers swim faster over slippery surfaces",
            "place": "Leiden University",
            "description": "Tiny self-propelling spheres, measuring only micrometers, move faster over a hydrophobic silicone surface than they do over hydrophilic glass. 'Almost nobody had realised that the substrate matters', says Stefania Ketzetzi, the researcher who discovered the effect, researched it and explained it. She publishes about it in the journal Physical Review Letters.",
            "link": "https://www.universiteitleiden.nl/en/news/2020/01/microswimmers-swim-faster-over-slippery-surfaces"
        },
        {
            "year": 2020,
            "date": "Jan 28",
            "name": "It’s closeness that counts: how proximity affects the resistance of graphene",
            "place": "University of Göttingen",
            "description": "Graphene is often seen as the wonder material of the future. Scientists can now grow perfect graphene layers on square centimetre-sized crystals. A research team from the University of Göttingen, together with the Chemnitz University of Technology and the Physikalisch-Technische Bundesanstalt Braunschweig, has investigated the influence of the underlying crystal on the electrical resistance of graphene. Contrary to previous assumptions, the new results show that the process known as the ‘proximity effect’ varies considerably at a nanometre scale. The results have been published in Nature Communications.",
            "link": "https://www.uni-goettingen.de/en/135974.html?id=5796"
        },
        {
            "year": 2020,
            "date": "Jan 27",
            "name": "Synchronized Swimming: Biology On a Micro-Scale",
            "place": "Okinawa Institute of Science and Technology",
            "description": "Specialized stringy fluids flow through the human joints and help constitute substances such as mucus. These fluids contain long, flexible molecules like polymers or proteins, giving them the ability to stretch and absorb shock.",
            "link": "https://www.oist.jp/news-center/news/2020/1/27/synchronized-swimming-biology-micro-scale"
        },
        {
            "year": 2020,
            "date": "Jan 27",
            "name": "Nanocontainers introduced into the nucleus of living cells",
            "place": "University of Basel",
            "description": "An interdisciplinary team from the University of Basel has succeeded in creating a direct path for artificial nanocontainers to enter into the nucleus of living cells. To this end, they produced biocompatible polymer vesicles that can pass through the pores that decorate the membrane of the cell nucleus. In this way, it might be possible to transport drugs directly into the cell’s control center. The researchers have published their latest findings in the Proceedings of the National Academy of Sciences.",
            "link": "https://www.unibas.ch/en/News-Events/News/Uni-Research/Nanocontainers-introduced-into-the-nucleus-of-living-cells.html"
        },
        {
            "year": 2020,
            "date": "Jan 24",
            "name": "Acoustic wave fields reveal forces and torques",
            "place": "RIKEN",
            "description": "A theoretical analysis indicates that sound waves can manipulate particles in an analogous way to light beams.",
            "link": "https://www.riken.jp/en/news_pubs/research_news/rr/20200124_3/index.html"
        },
        {
            "year": 2020,
            "date": "Jan 23",
            "name": "FORTH-IESL Researchers explain how disorder in tiny crystals enables heat-therapeutic systems",
            "place": "Foundation For Research and Technology - Hellas",
            "description": "A new research study at the Institute of Electronic Structure and Laser (IESL) of the Foundation for Research and Technology-Hellas (FORTH) finds that minute crystals, many thousand times smaller than a particle of dust, when they are dressed by the right kind of imperfections, adjust their electronic properties to favorably convert energy into heat, an important attribute for potential use in smart materials for energy, health, sensors etc. ",
            "link": "https://www.forth.gr/index_main.php?l=e&c=20&i=1660"
        },
        {
            "year": 2020,
            "date": "Jan 23",
            "name": "How're your cells' motors running?",
            "place": "Kyoto University",
            "description": "A new 'molecular nano-patterning' technique reveals that some molecular motors coordinate differently.",
            "link": "https://www.kyoto-u.ac.jp/en/research/research_results/2019/200123_1.html"
        },
        {
            "year": 2020,
            "date": "Jan 22",
            "name": "New type of curved acoustic beams to provide manipulations with nanoparticles",
            "place": "Tomsk Polytechnic University",
            "description": "Scientists of Tomsk Polytechnic University and Tomsk State University jointly with their colleagues from Spain modeled and experimentally confirmed the existence of a new type of curved acoustic wave beams – acoustical hooks. They constitute a curved acoustical stream with an important property to bend at a distance less than a wavelength. Thereby, they could become a promising tool to provide ultrasonic manipulations with  particles at an extra-small distance – at a sub-wave level. These manipulations are necessary for biomedical research, in synthesis of new materials. ",
            "link": "https://news.tpu.ru/en/news/2020/01/22/35776/"
        },
        {
            "year": 2020,
            "date": "Jan 22",
            "name": "Big Data at the Nanoscale",
            "place": "University of Luxembourg",
            "description": "An international team of scientists, including physicists from the University of Luxembourg, have reported a comprehensive view-point on how machine learning approaches can be used in Nanoscience to analyse and extract new insights from large data sets, and accelerate material discovery, and to guide experimental design. Moreover, they discuss some of the main physical challenging behind the realisation of tailored memristive devices for machine learning.",
            "link": "https://wwwen.uni.lu/university/news/latest_news/big_data_at_the_nanoscale"
        },
        {
            "year": 2020,
            "date": "Jan 22",
            "name": "Deep-sea osmolyte makes biomolecular machines heat-tolerant",
            "place": "Hokkaido University",
            "description": "Researchers have discovered a method to control biomolecular machines over a wide temperature range using deep-sea osmolyte trimethylamine N-oxide (TMAO). This finding could open a new dimension in the application of artificial machines fabricated from biomolecular motors and other proteins.",
            "link": "https://www.global.hokudai.ac.jp/blog/deep-sea-osmolyte-makes-biomolecular-machines-heat-tolerant/"
        },
        {
            "year": 2020,
            "date": "Jan 22",
            "name": "MIPT researchers obtain atomically thin molybdenum disulfide films on large-area substrates",
            "place": "Moscow Institute of Physics and Technology",
            "description": "Researchers from the Moscow Institute of Physics and Technology have managed to grow atomically thin films of molybdenum disulfide spanning up to several tens of square centimeters. It was demonstrated that the material’s structure can be modified by varying the synthesis temperature. The films, which are of interest to electronics and optoelectronics, were obtained at 900-1,000 degrees Celsius. The findings were published in the journal ACS Applied Nano Materials.",
            "link": "https://mipt.ru/english/news/mipt_researchers_obtain_atomically_thin_molybdenum_disulfide_films_on_large_area_substrates"
        },
        {
            "year": 2020,
            "date": "Jan 21",
            "name": "Designer-Defect Mediated Clamping of Ferroelectric Domain Walls For More-Stable Nanoelectronics",
            "place": "University of New South Wales",
            "description": "Improved polarisation retention in ferroelectric a significant step forward for domain-wall nanoelectronics in data storage. Engineering defects in ferroelectrics provides key to improved polarisation stability. Researchers achieved stability greater than one year (a 2000% improvement)",
            "link": "http://www.fleet.org.au/blog/designer-defect-mediated-clamping-of-ferroelectric-domain-walls-for-more-stable-nanoelectronics/"
        },
        {
            "year": 2020,
            "date": "Jan 21",
            "name": "Well-designed substrates make large single crystal bi-/tri-layer graphene possible",
            "place": "Institute for Basic Science",
            "description": "IBS researchers fabricate single crystal copper nickel alloy foils as substrates for the growth of multilayer graphene with specific stacking pattern, and unprecedented quality and size.",
            "link": "https://www.ibs.re.kr/cop/bbs/BBSMSTR_000000000738/selectBoardArticle.do?nttId=18059"
        },
        {
            "year": 2020,
            "date": "Jan 20",
            "name": "Addressing Global Warming with new Nanoparticles and Sunshine",
            "place": "Institute for Basic Science",
            "description": "Harvesting sunlight, researchers of the Center for Integrated Nanostructure Physics, within the Institute for Basic Science (IBS, South Korea) published in Materials Today a new strategy to transform carbon dioxide (CO2) into oxygen (O2) and pure carbon monoxide (CO) without side-products in water. This artificial photosynthesis method could bring new solutions to environmental pollution and global warming.",
            "link": "https://www.ibs.re.kr/cop/bbs/BBSMSTR_000000000738/selectBoardArticle.do?nttId=18056"
        },
        {
            "year": 2020,
            "date": "Jan 20",
            "name": "Dialling up the heat on nanoparticles",
            "place": "University of Bath",
            "description": "The ability of metallic nanoparticles to harvest and control light is transforming scientific research, according to physicists from the University of Bath.",
            "link": "https://www.bath.ac.uk/announcements/dialling-up-the-heat-on-nanoparticles/"
        },
        {
            "year": 2020,
            "date": "Jan 20",
            "name": "Portable device helps doctors diagnose sepsis faster",
            "place": "Ecole Polytechnique Federale de Lausanne",
            "description": "EPFL researchers have developed a highly sensitive and portable optical biosensor that stands to accelerate the diagnosis of fatal conditions like sepsis. It could be used by ambulances and hospitals to improve the triage process and save lives.",
            "link": "https://news.epfl.ch/news/portable-device-helps-doctors-diagnose-sepsis-fast/"
        },
        {
            "year": 2020,
            "date": "Jan 17",
            "name": "Designer-Defect Mediated Clamping Of Ferroelectric Domain Walls For More-Stable Nanoelectronics",
            "place": "FLEET",
            "description": "A UNSW study published today in Nature Communications presents an exciting step towards domain-wall nanoelectronics: a novel form of future electronics based on nano-scale conduction paths, and which could allow for extremely dense memory storage. ",
            "link": "http://www.fleet.org.au/blog/designer-defect-mediated-clamping-of-ferroelectric-domain-walls-for-more-stable-nanoelectronics/"
        },
        {
            "year": 2020,
            "date": "Jan 17",
            "name": "How sensitive can your quantum detector be?",
            "place": "Aalto University",
            "description": "A new device measures the tiniest energies in superconducting circuits, an essential step for quantum technology",
            "link": "https://www.aalto.fi/en/news/how-sensitive-can-your-quantum-detector-be"
        },
        {
            "year": 2020,
            "date": "Jan 17",
            "name": "Walking with atoms – chemical bond making and breaking recorded in action",
            "place": "University of Nottingham",
            "description": "Scientists have for the first time captured and filmed atoms bonding, using advanced microscopy methods they captured a moment of breaking a chemical bond, around half a million times smaller than the width of a human hair.",
            "link": "https://www.nottingham.ac.uk/news/walking-with-atoms"
        },
        {
            "year": 2020,
            "date": "Jan 17",
            "name": "Programmable Nests for Cells",
            "place": "Karlsruher Institut für Technologie",
            "description": "KIT Researchers Develop Novel Composites of DNA, Silica Particles, and Carbon Nanotubes – Properties Can Be Tailored to Various Applications",
            "link": "https://www.kit.edu/kit/english/pi_2019_161_programmable-nests-for-cells.php"
        },
        {
            "year": 2020,
            "date": "Jan 16",
            "name": "Colloidal Quantum Dot Photodetectors can now see further than before",
            "place": "Colloidal Quantum Dot Photodetectors can now see further than before",
            "description": "An ICFO study published in Nanoletters reports on the development of a colloidal quantum dot photodetector capable of detecting light in the far infrared. ",
            "link": "=https://www.icfo.eu/newsroom/news/article/4594"
        },
        {
            "year": 2020,
            "date": "Jan 16",
            "name": "Pretty with a twist - Complex, porous, chiral nano-patterns arise from a simple linear building blocks",
            "place": "Technical University of Munich",
            "description": "Nanoscience can arrange minute molecular entities into nanometric patterns in an orderly manner using self-assembly protocols. Scientists at the Technical University of Munich (TUM) have functionalized a simple rod-like building block with hydroxamic acids at both ends. They form molecular networks that not only display the complexity and beauty of mono-component self-assembly on surfaces; they also exhibit exceptional properties.",
            "link": "https://www.tum.de/nc/en/about-tum/news/press-releases/details/35868/"
        },
        {
            "year": 2020,
            "date": "Jan 15",
            "name": "Decontaminating pesticide-polluted water using engineered nanomaterial",
            "place": "Institut National de la Recherche Scientifique ",
            "description": "Atrazine is one of the most widely used pesticides in North America. Professors My Ali El Khakani and Patrick Drogui of INRS have developed a new method to degrade it which combines a new nanostructured material and sunlight.",
            "link": "http://www.inrs.ca/english/actualites/decontaminating-pesticide-polluted-water-using-engineered-nanomaterial"
        },
        {
            "year": 2020,
            "date": "Jan 14",
            "name": "Scientists Studied bacterial cells in the Photoemission Spectrum",
            "place": "Immanuel Kant Baltic Federal University",
            "description": "A team of Russian scientists working in cooperation with international colleagues used a new method combining visual microscopic observations and photoemission spectrum registration that can be used to create a map of the physical and chemical state of cell surface. The team studied the cells of the colon bacillus Escherichia coli that are a promising material for the development of nature-like technologies. The study was supported with a grant of the Russian Science Foundation, and the article about it was published in the Results in Physics journal.",
            "link": "https://eng.kantiana.ru/news/261234/"
        },
        {
            "year": 2020,
            "date": "Jan 14",
            "name": "Silica particles may lead to new treatments for obesity and diabetes",
            "place": "Stockholm University",
            "description": "Engineered ingestible molecular traps created from mesoporous silica particles (MSPs) introduced to the gut can have an effect on food efficiency and metabolic risk factors. The results from studies on mice, published in Nanomedicine, demonstrate the potential to reduce the energy uptake into the body and could lead to new treatments for obesity and diabetes",
            "link": "https://www.su.se/english/research/research-news/silica-particles-may-lead-to-new-treatments-for-obesity-and-diabetes-1.478953"
        },
        {
            "year": 2020,
            "date": "Jan 14",
            "name": "Nano-engineering technique could aid exploration, scalability of next-gen electronics",
            "place": "University of Nebraska - Lincoln",
            "description": "Nebraska engineers Peter and Eli Sutter have shown that the elemental condiment can spice up a nanomaterial sandwich by putting a literal twist on the multi-layered classic.",
            "link": "https://news.unl.edu/newsrooms/today/article/nano-engineering-technique-could-aid-exploration-scalability-of-next-gen/"
        },
        {
            "year": 2020,
            "date": "Jan 14",
            "name": "Most engineered nanoparticles enter tumours through cells – not between them",
            "place": "University of Toronto",
            "description": "University of Toronto researchers have discovered that an active rather than passive process dictates which nanoparticles enter solid tumours, upending decades of thinking in the field of cancer nanomedicine and pointing toward more effective nanotherapies.",
            "link": "https://www.utoronto.ca/news/most-engineered-nanoparticles-enter-tumours-through-cells-not-between-them-u-t-researchers-find"
        },
        {
            "year": 2020,
            "date": "Jan 13",
            "name": "Bacteria shredding tech to fight drug-resistant superbugs",
            "place": "RMIT University",
            "description": "Researchers have used liquid metals to develop new bacteria-destroying technology that could be the answer to the deadly problem of antibiotic resistance.",
            "link": "https://www.rmit.edu.au/news/all-news/2020/jan/bacteria-liquid-metal"
        },
        {
            "year": 2020,
            "date": "Jan 10",
            "name": "An 18-carat gold nugget made of plastic",
            "place": "ETH Zurich",
            "description": "ETH researchers have created an incredibly lightweight 18-\u200bcarat gold, using a matrix of plastic in place of metallic alloy elements.",
            "link": "https://ethz.ch/en/news-and-events/eth-news/news/2020/01/gold-nugget-made-of-plastic.html"
        },
        {
            "year": 2020,
            "date": "Jan 09",
            "name": "Copper-based nanomaterials can kill cancer cells in mice",
            "place": "KU Leuven",
            "description": "An interdisciplinary team of scientists from KU Leuven, the University of Bremen, the Leibniz Institute of Materials Engineering, and the University of Ioannina has succeeded in killing tumour cells in mice using nano-sized copper compounds together with immunotherapy. After the therapy, the cancer did not return.",
            "link": "https://nieuws.kuleuven.be/en/content/2020/copper-based-nanomaterials-can-kill-cancer-cells-in-mice"
        },
        {
            "year": 2020,
            "date": "Jan 09",
            "name": "Illuminating the World of Nanoparticles",
            "place": "Okinawa Institute of Science and Technology Graduate University",
            "description": "Scientists at the Okinawa Institute of Science and Technology Graduate University (OIST) have developed a light-based device that can act as a biosensor, detecting biological substances in materials; for example, harmful pathogens in food samples.",
            "link": "https://www.oist.jp/news-center/news/2020/1/8/illuminating-world-nanoparticles"
        },
        {
            "year": 2020,
            "date": "Jan 08",
            "name": "Light-up wheels: Unique organic light-emitting molecular emitters",
            "place": "Osaka University",
            "description": "A team including researchers from Osaka University has produced a new molecular emitter for organic light-emitting diodes (OLEDs). Using rational chemical design with U-shaped synthetic building blocks, the scientists were able to arrange the electron donors and acceptors into a large ring called a “macrocycle.” The wheel-shaped molecule could potentially be used not only in OLEDs but also in tiny, energy-efficient chemical sensors in the future.",
            "link": "http://resou.osaka-u.ac.jp/en/research/2020/20200108_2"
        },
        {
            "year": 2020,
            "date": "Jan 08",
            "name": "Nanobubbles in nanodroplets",
            "place": "University of Freiburg",
            "description": "Freiburg researchers investigate ultrafast reaction of superfluid helium triggerd by extreme ultraviolet laser pulses",
            "link": "https://www.pr.uni-freiburg.de/pm/2020/nanobubbles-in-nanodroplets"
        },
        {
            "year": 2020,
            "date": "Jan 08",
            "name": "Nano antennas for data transfer",
            "place": "University of Würzburg",
            "description": "For the first time, physicists from the University of Würzburg have successfully converted electrical signals into photons and radiated them in specific directions using a low-footprint optical antenna that is only 800 nanometres in size.",
            "link": "https://www.uni-wuerzburg.de/en/news-and-events/news/detail/news/nano-antennas-for-data-transfer/"
        },
        {
            "year": 2020,
            "date": "Jan 07",
            "name": "New method gives robust transistors",
            "place": "linköping University",
            "description": "A new method to fit together layers of semiconductors as thin as a few nanometres has resulted in not only a scientific discovery but also a new type of transistor for high-power electronic devices. The result, published in Applied Physics Letters, has aroused huge interest.",
            "link": "https://liu.se/en/news-item/nyupptackt-metod-ger-supertaliga-transistorer"
        },
        {
            "year": 2020,
            "date": "Jan 07",
            "name": "uOttawa tool to democratize nanopore research",
            "place": "University of Ottawa",
            "description": "A nanopore is a tiny hole in a thin membrane with a diameter of around a billionth of a meter, or about the width of a single DNA molecule. The potential applications of these nanopores are so diverse - from medicine to information technology (IT) - that they could have a major impact on our daily lives. Now a team of researchers at the University of Ottawa is democratizing entry into the field of nanopore research by offering up a unique tool to accelerate the development of new applications and discoveries.",
            "link": "https://media.uottawa.ca/news/uottawa-tool-democratize-nanopore-research"
        },
        {
            "year": 2020,
            "date": "Jan 04",
            "name": "Clusters of gold atoms form peculiar pyramidal shape",
            "place": "KU Leuven",
            "description": "Freestanding clusters of twenty gold atoms take the shape of a pyramid, researchers discovered. This is in contrast with most elements, which organize themselves by forming shells around one central atom. The team of researchers led by KU Leuven published their findings in Science Advances.",
            "link": "https://nieuws.kuleuven.be/en/content/2020/clusters-of-gold-atoms-form-peculiar-pyramidal-shape"
        },
    ],
    '2019': [
        {
            "year": 2019,
            "date": "Dec 26",
            "name": "Development of ultrathin durable membrane for efficient oil and water separation",
            "place": "Kobe University",
            "description": "Researchers led by Professor MATSUYAMA Hideto and Professor YOSHIOKA Tomohisa at Kobe University’s Research Center for Membrane and Film Technology have succeeded in developing an ultrathin membrane with a fouling-resistant silica surface treatment for high performance separation of oil from water.",
            "link": "https://mbg.au.dk/en/news-and-events/news-item/artikel/researchers-create-synthetic-nanopores-made-from-dna/"
        },
        {
            "year": 2019,
            "date": "Dec 23",
            "name": "2D materials: arrangement of atoms measured in silicene",
            "place": "University of Basel",
            "description": "Silicene consists of a single layer of silicon atoms. In contrast to the ultra-flat material graphene, which is made of carbon, silicene shows surface irregularities that influence its electronic properties. Now, physicists from the University of Basel have been able to precisely determine this corrugated structure. As they report in the journal PNAS, their method is also suitable for analyzing other two-dimensional materials.",
            "link": "https://www.unibas.ch/en/News-Events/News/Uni-Research/2D-materials-arrangement-of-atoms-measured-in-silicene.html"
        },
        {
            "year": 2019,
            "date": "Dec 20",
            "name": "Researcher’s break the geometric limitations of moiré pattern in graphene heterostructures",
            "place": "University of Manchester",
            "description": "Researchers at The University of Manchester have uncovered interesting phenomena when multiple two-dimensional materials are combined into van der Waals heterostructures (layered ‘sandwiches’ of different materials).",
            "link": "https://www.manchester.ac.uk/discover/news/researchers-break-the-geometric-limitations-of-moire-pattern-in-graphene-heterostructures/"
        },
        {
            "year": 2019,
            "date": "Dec 20",
            "name": "From 3D to 2D and back: Reversible conversion of lipid spheres into ultra-thin sheets",
            "place": "Tokyo Institute of Technology",
            "description": "Scientists at the Tokyo Institute of Technology (Tokyo Tech) and the University of Tokyo have developed a technique for the reversible conversion of 3D lipid vesicles into 2D ultra-thin nanosheets. Both the stable nanosheets and the reversible 2D–3D conversion process can find various applications in the pharmaceutical, bioengineering, food, and cosmetic sciences.",
            "link": "https://www.titech.ac.jp/english/news/2019/045899.html"
        },
        {
            "year": 2019,
            "date": "Dec 17",
            "name": "Improved 3D Nanoprinting Technique to Build Nanoskyscrapers",
            "place": "Institute for Basic Science, Korea",
            "description": "Nanowalls, nanobridges, nano “jungle gyms”: it could seem the descriptionof a Lilliputian village, but these are actual 3D-printed components with tremendous potential applications in nanoelectronics, smart materials and biomedical devices. Researchers at the Center for Soft and Living Matter (CSLM), within the Institute for Basic Science (IBS, South Korea) have improved the 3D nanoprinting process that enables to build precise, self-stacked, tall-and-narrow nanostructures. As shown in their latest publication in Nano Letters, the team also used this technique to produce transparent nanoelectrodes with high optical transmission and controllable conductivity.",
            "link": "https://www.ibs.re.kr/cop/bbs/BBSMSTR_000000000738/selectBoardArticle.do?nttId=17962"
        },
        {
            "year": 2019,
            "date": "Dec 13",
            "name": "Researchers create synthetic nanopores made from DNA",
            "place": "Aarhus University",
            "description": "A scientific study has resulted in the construction of a synthetic DNA nanopore capable of selectively translocating protein-size macromolecules across lipid bilayers.",
            "link": "https://mbg.au.dk/en/news-and-events/news-item/artikel/researchers-create-synthetic-nanopores-made-from-dna/"
        },
        {
            "year": 2019,
            "date": "Dec 12",
            "name": "Researchers Perfect Nanoscience Tool For Studies of Nuclear Waste Storage",
            "place": "University of Guelph",
            "description": "The study involved the first-ever use of antimatter to investigate processes connected to potential long-term storage of waste from nuclear reactors.",
            "link": "https://www.uoguelph.ca/about"
        },
        {
            "year": 2019,
            "date": "Dec 12",
            "name": "New Blueprint for nanomaterial development offers hope to newborns, elderly and busy doctors",
            "place": "University of Sussex",
            "description": "Physicist has published a ‘blueprint’ to help scientists understand how to optimise the effectiveness of the nanomaterials which are used in health sensors.",
            "link": "https://www.sussex.ac.uk/news/all?id=50500"
        },
        {
            "year": 2019,
            "date": "Dec 11",
            "name": "Researchers close in on new nonvolatile memory",
            "place": "Moscow Institute of Physics and Technology",
            "description": "Researchers have achieved a breakthrough on the way to new types of nonvolatile memory devices. ",
            "link": "https://mipt.ru/english/news/mipt_researchers_close_in_on_new_nonvolatile_memory"
        },
        {
            "year": 2019,
            "date": "Dec 10",
            "name": "How light can a foldable and long-lasting battery be?",
            "place": "Pohang University of Science & Technology",
            "description": "The research team led by Professor Soojin Park developed a three-dimensional monolithic organic battery electrode.",
            "link": "http://postech.ac.kr/eng/how-light-a-foldable-and-long-lasting-battery-can-be/?pageds=1&k=&c="
        },
        {
            "year": 2019,
            "date": "Dec 10",
            "name": "How to induce magnetism in graphene",
            "place": "Swiss Federal Laboratories for Materials Science and Technology (EMPA)",
            "description": "Researchers have now succeeded in building a nanographene with magnetic properties that could be a decisive component for spin-based electronics functioning at room temperature.",
            "link": "https://www.empa.ch/web/s604/topological-frustration"
        },
        {
            "year": 2019,
            "date": "Dec 10",
            "name": "Combined technique measures nanostructures ten times better than before",
            "place": "Delft University of Technology",
            "description": "Researchers have combined two techniques that are used to measure the structure of biomolecules, creating a method that is ten times more sensitive.",
            "link": "https://www.tudelft.nl/en/powerweb/tnw/combined-technique-measures-nanostructures-ten-times-better-than-before/"
        },
        {
            "year": 2019,
            "date": "Dec 09",
            "name": "Speedy and precise multicolor imaging of biomolecules now possible",
            "place": "National Institutes of Natural Sciences",
            "description": "For the first time, researchers can track biological molecules with unprecedented speed and precision thanks to the use of multi-metallic nanoparticles.",
            "link": "https://www.ims.ac.jp/en/news/2019/11/25_4477.html"
        },
        {
            "year": 2019,
            "date": "Dec 09",
            "name": "Electrons Caught Flowing like Water for the First Time",
            "place": "Weizmann Institute of Science",
            "description": "The findings could help reduce resistance in electronic devices.",
            "link": "https://wis-wander.weizmann.ac.il/space-physics/electrons-caught-flowing-water-first-time"
        },
        {
            "year": 2019,
            "date": "Dec 09",
            "name": "Creating switchable plasmons in plastics",
            "place": "linköping University",
            "description": "Researchers have developed optical nanoantennas made from a conducting polymer.",
            "link": "https://liu.se/en/news-item/de-skapar-styrbara-plasmoner-i-plast"
        },
        {
            "year": 2019,
            "date": "Dec 09",
            "name": "Imec presents forksheet device as the ultimate solution to push scaling towards the 2nm technology node",
            "place": "IMEC",
            "description": "TCAD simulations of a new forksheet device show 10 percent performance boost and 20 percent cell area reduction compared to gate-all-around nanosheet devices.",
            "link": "https://www.imec-int.com/en/articles/imec-presents-forksheet-device-as-the-ultimate-solution-to-push-scaling-towards-the-2nm-technology-node"
        },
        {
            "year": 2019,
            "date": "Dec 03",
            "name": "Paradoxical replacement tissue for medicine",
            "place": "Swiss Federal Laboratories for Materials Science and Technology",
            "description": "A new study shows how this amazing behavior can be improved – and even used to treat injuries and tissue damage.",
            "link": "https://www.empa.ch/web/s604/auxetics?inheritRedirect=true"
        },
        {
            "year": 2019,
            "date": "Dec 03",
            "name": "Successful instrument guidance through deep and convulted blood vessel networks",
            "place": "Polytechnique Montréal",
            "description": "Latest breakthrough by a research team opens up new horizons for endovascular surgery.",
            "link": "https://www.polymtl.ca/carrefour-actualite/en/news/successful-instrument-guidance-through-deep-and-convoluted-blood-vessel-networks"
        },
        {
            "year": 2019,
            "date": "Dec 03",
            "name": "Electron correlations in carbon nanostructures",
            "place": "Kiel University",
            "description": "Physicists elucidate the behaviour of electrons in graphene nanoribbons.",
            "link": "https://www.uni-kiel.de/en/details/news/375-graphen"
        },
        {
            "year": 2019,
            "date": "Dec 03",
            "name": "Smog-eating graphene composite reduces atmospheric pollution",
            "place": "Graphene Flagship",
            "description": "Researchers have developed a graphene-titania photocatalyst that degrades up to 70% more atmospheric nitrogen oxides (NOx) than standard titania nanoparticles in tests on real pollutants.",
            "link": "https://graphene-flagship.eu/news/Pages/Smog-eating-graphene-composite-reduces-atmospheric-pollution.aspx"
        },
        {
            "year": 2019,
            "date": "Dec 03",
            "name": "Imaging Technique Gives Catalytic 2D Material Engineering a Better View",
            "place": "Kanazawa University",
            "description": "A scanning electrochemical cell imaging technique shows how nanoscale structural features affect the catalytic activity of MoS2 monolayers for hydrogen evolution reactions.",
            "link": "https://www.kanazawa-u.ac.jp/latest-research/74369"
        },
        {
            "year": 2019,
            "date": "Dec 02",
            "name": "Grain boundaries in graphene do not affect spin transport",
            "place": "Catalan Institute of Nanoscience and Nanotechnology",
            "description": "Researchers have used numerical simulations to show that spin diffusion length is independent of grain size.",
            "link": "https://icn2.cat/en/news/4408-grain-boundaries-in-graphene-do-not-affect-spin-transport"
        },
        {
            "year": 2019,
            "date": "Nov 29",
            "name": "Stretchable, highly conductive film promising for wearable electronics",
            "place": "RIKEN",
            "description": "Engineers have made a breathable material that is both highly stretchable and has good electrical conductivity, making it promising for on-skin electronics for people and wiring for robots.",
            "link": "https://www.riken.jp/en/news_pubs/research_news/rr/20191129_1/index.html"
        },
        {
            "year": 2019,
            "date": "Nov 29",
            "name": "Graphenea launches highly flat monolayer graphene on copper thin film",
            "place": "Graphenea",
            "description": "With extremely low roughness that is less than 4 nm, this new product is targeted at applications in photonics, high-performance electronics, magnetic memory, and freestanding membranes.",
            "link": "https://www.graphenea.com/blogs/graphene-news/graphenea-launches-highly-flat-monolayer-graphene-on-copper-thin-film"
        },
        {
            "year": 2019,
            "date": "Nov 27",
            "name": "Molecular eraser enables better data storage and computers for AI",
            "place": "University of Alberta",
            "description": "Scientists have added a crucial tool to the atomic-scale manufacturing toolkit with major implications for today’s data driven—carbon intensive—world, according to new research.",
            "link": "https://www.ualberta.ca/science/news/2019/november/data-storage-ai-carbon-emissions"
        },
        {
            "year": 2019,
            "date": "Nov 27",
            "name": "Cutting nanoparticles down to size",
            "place": "University of Birmingham",
            "description": "Researchers have demonstrated a technique that will allow chemists to more closely control the size and shape of nanoparticles.",
            "link": "https://www.birmingham.ac.uk/news/latest/2019/11/cutting-nanoparticles-down-to-size.aspx"
        },
        {
            "year": 2019,
            "date": "Nov 26",
            "name": "New study shows unique magnetic transitions in quasicrystal-like structures",
            "place": "Tokyo University of Science",
            "description": "Scientists showed for the first time the presence of unique magnetic transitions in peculiar structures similar to quasicrystals.",
            "link": "https://www.tus.ac.jp/en/mediarelations/archive/20191126001.html"
        },
        {
            "year": 2019,
            "date": "Nov 25",
            "name": "Scratching the Surface of Perovskites",
            "place": "Okinawa Institute of Science and Technology (OIST) Graduate University",
            "description": "Researchers have, for the first time, characterized the structural defects that prompt the movement of ions, destabilizing the perovskite materials.",
            "link": "https://www.oist.jp/news-center/news/2019/11/21/scratching-surface-perovskites"
        },
        {
            "year": 2019,
            "date": "Nov 22",
            "name": "Old newspapers can be used to grow carbon nanotubes",
            "place": "Swansea University",
            "description": "A research has found that old newspapers can be used as a low cost, eco-friendly material on which to grow single walled carbon nanotubes on a large scale.",
            "link": "https://www.swansea.ac.uk/press-office/news-events/news/2019/11/research-shows-old-newspapers-can-be-used-to-grow-carbon-nanotubes.php"
        },
        {
            "year": 2019,
            "date": "Nov 22",
            "name": "New method for using spin waves in magnetic materials",
            "place": "University of Münster",
            "description": "Physicists find a way to eliminate unwanted damping / Study in Nature Communications.",
            "link": "https://www.uni-muenster.de/news/view.php?cmdid=10652"
        },
        {
            "year": 2019,
            "date": "Nov 22",
            "name": "A “simulation booster” for nanoelectronics",
            "place": "ETH Zurich",
            "description": "Researchers have developed a method that can simulate nanoelectronics devices and their properties realistically, quickly and efficiently.",
            "link": "https://ethz.ch/en/news-and-events/eth-news/news/2019/11/simulation-booster-for-nanoelectronics.html"
        },
        {
            "year": 2019,
            "date": "Nov 21",
            "name": "New way to know an old friend: New method reveals clean carbon nanotube transistors with superb properties",
            "place": "Aalto University",
            "description": "Scientists have found a new way to make ultra-clean carbon nanotube transistors with superior semiconducting properties.",
            "link": "https://www.aalto.fi/en/news/new-way-to-know-an-old-friend-new-method-reveals-clean-carbon-nanotube-transistors-with-superb"
        },
        {
            "year": 2019,
            "date": "Nov 20",
            "name": "Nanotechnology shown to inhibit development of Alzheimer's disease",
            "place": "Technion-Israel Institute of Technology",
            "description": "Researchers have developed new technology for transporting drugs within silicon nanostructures to the brain. ",
            "link": "https://www.technion.ac.il/en/2019/11/brain-guard/"
        },
        {
            "year": 2019,
            "date": "Nov 18",
            "name": "Economizing on iridium",
            "place": "LMU Munich",
            "description": "A new kind of electrode made of highly porous material does an excellent job with just a hint of iridium.",
            "link": "https://www.en.uni-muenchen.de/news/newsarchiv/2019/boehm_bein_iridium.html"
        },
        {
            "year": 2019,
            "date": "Nov 18",
            "name": "Stabilizing ligands make nanoclusters brighter ",
            "place": "King Abdullah University of Science and Technology",
            "description": "Large cylindrical ligands increase stability and enhance light emission of silver nanoclusters.",
            "link": "https://discovery.kaust.edu.sa/en/article/893/stabilizing-ligands-make-nanoclusters-brighter%C2%A0"
        },
        {
            "year": 2019,
            "date": "Nov 18",
            "name": "Tuning quantum materials with hydrogen gas",
            "place": "Delft University of Technology",
            "description": "Researchers have discovered a method to stretch and compress quantum materials using hydrogen gas. They demonstrated this effect using a tiny string of a material called tungsten trioxide, which acts as a sponge for hydrogen.",
            "link": "https://www.tudelft.nl/en/2019/tnw/tuning-quantum-materials-with-hydrogen-gas/"
        },
        {
            "year": 2019,
            "date": "Nov 15",
            "name": "Storing energy in hydrogen 20 times more effective using platinum-nickel catalyst",
            "place": "Eindhoven University of Technology",
            "description": "Researchers have now developed an alternative with a 20x higher activity: a catalyst with hollow nanocages of an alloy of nickel and platinum. ",
            "link": "https://www.tue.nl/en/news/news-overview/storing-energy-in-hydrogen-20-times-more-effective-using-platinum-nickel-catalyst/"
        },
        {
            "year": 2019,
            "date": "Nov 14",
            "name": "Carbon nanotubes open new horizons for neuroscience: controlling neural cell outgrowth",
            "place": "University of Oulu",
            "description": "Researchers have demonstrated in collaboration with Tampere University that carbon nanotubes can be used to control the direction of neural cells growth.",
            "link": "https://www.oulu.fi/university/news/carbonnanotubes"
        },
        {
            "year": 2019,
            "date": "Nov 13",
            "name": "Light at the end of the nanotunnel for future catalysts",
            "place": "Chalmers University of Technology",
            "description": "Using a new type of nanoreactor, researchers have succeeded in mapping catalytic reactions on individual metallic nanoparticles.",
            "link": "https://www.chalmers.se/en/departments/physics/news/Pages/Light-at-the-end-of-the-nano-tunnel-for-future-catalysts.aspx"
        },
        {
            "year": 2019,
            "date": "Nov 13",
            "name": "Rational transparent conductor design provides a boost to carbon nanotubes application",
            "place": "Skolkovo Institute of Science and Technology",
            "description": "Researchers have rationally designed a novel p-type flexible transparent conductor using single-walled carbon nanotubes.",
            "link": "https://www.skoltech.ru/en/2019/11/rational-transparent-conductor-design-provides-a-boost-to-carbon-nanotubes-application/"
        },
        {
            "year": 2019,
            "date": "Nov 12",
            "name": "Magnetic tuning at the nanoscale",
            "place": "Helmholtz-Zentrum Dresden-Rossendorf",
            "description": "Deploying the helium-ion microscope at the HZDR to manipulate nanoscale material properties.",
            "link": "https://www.hzdr.de/db/Cms?pOid=59728&pNid=99"
        },
        {
            "year": 2019,
            "date": "Nov 10",
            "name": "New weapon in fight against lethal fungi",
            "place": "Monash University",
            "description": "Researchers have gained insights into how nanoparticles could be used to identify the presence of invasive and sometimes deadly microbes, and deliver targeted treatments more effectively.",
            "link": "https://www.monash.edu/news/articles/study-points-to-new-weapon-in-fight-against-lethal-fungi"
        },
        {
            "year": 2019,
            "date": "Nov 08",
            "name": "Self-assembled microspheres of silica to cool surfaces without energy consumption",
            "place": "Catalan Institute of Nanoscience and Nanotechnology",
            "description": "Researchers have developed a new material able to cool another one by emitting infrared radiation.",
            "link": "https://icn2.cat/en/news/4385-self-assembled-microspheres-of-silica-to-cool-surfaces-without-energy-consumption"
        },
        {
            "year": 2019,
            "date": "Nov 08",
            "name": "Strain-induced isomerisation of molecular chains",
            "place": "National University of Singapore",
            "description": "Scientists have demonstrated a strain-induced structural rearrangement of one-dimensional (1D) metal-organic molecular chains for potential use in fabricating functional nanostructures.",
            "link": "http://www.science.nus.edu.sg/research-highlights/2633-strain-induced-isomerisation-of-molecular-chains"
        },
        {
            "year": 2019,
            "date": "Nov 07",
            "name": "Breakthrough Way to Look at the Surface of Nanoparticles, Accelerating Nano-engineering of Materials",
            "place": "Singapore-MIT Alliance for Research and Technology (SMART)",
            "description": "Researchers have made a ground-breaking discovery that allows scientists to ‘look’ at the surface density of dispersed nanoparticles.",
            "link": "https://smart.mit.edu/news-events/news/smart-discovers-breakthrough-way-to-look-at-the-surface-of-nanoparticles--accelerating-nano-engineering-of-materials"
        },
        {
            "year": 2019,
            "date": "Nov 07",
            "name": "Mathematics at the speed of light",
            "place": "AMOLF",
            "description": "Researchers in New York have created a nanostructured surface capable of performing on-the-fly mathematical operations on an input image. ",
            "link": "https://amolf.nl/news/mathematics-at-the-speed-of-light"
        },
        {
            "year": 2019,
            "date": "Nov 07",
            "name": "Tiny transporters could deliver treatment to stroke patients",
            "place": "University of Manchester",
            "description": "Research shows that tiny vesicles called liposomes, just 100 nanometres in diameter can translocate through the damaged blood brain barrier following stroke.",
            "link": "https://www.manchester.ac.uk/discover/news/tiny-transporters-could-deliver-treatment-tostroke-patients/"
        },
        {
            "year": 2019,
            "date": "Nov 05",
            "name": "Suspended layers make a special superconductor",
            "place": " University of Groningen",
            "description": "Researchers studied superconductivity in a double layer of molybdenum disulfide and discovered new superconducting states.",
            "link": "https://www.rug.nl/sciencelinx/nieuws/2019/11/20191105_superconductivity?lang=en"
        },
        {
            "year": 2019,
            "date": "Nov 05",
            "name": "Ultrafast Quantum Motion in a Nanoscale Trap Detected",
            "place": "The Korea Advanced Institute of Science and Technology (KAIST)",
            "description": "Researchers have reported the detection of a picosecond electron motion in a silicon transistor. This study has presented a new protocol for measuring ultrafast electronic dynamics in an effective time-resolved fashion of picosecond resolution.",
            "link": "http://www.kaist.edu/_prog/_board/?mode=V&no=104322&code=ed_news&site_dvs_cd=en&menu_dvs_cd=0601&list_typ=B&skey=&sval=&smonth=&site_dvs=&GotoPage="
        },
        {
            "year": 2019,
            "date": "Nov 05",
            "name": "Nanovehicles that mimic nature could deliver treatments of the future",
            "place": "Horizon: The EU Research & Innovation Magazine",
            "description": "Researchers are working on a project to create nano-sized crystals of zinc oxide that can kill cancer cells from the inside.",
            "link": "https://horizon-magazine.eu/article/nanovehicles-mimic-nature-could-deliver-treatments-future.html"
        },
        {
            "year": 2019,
            "date": "Nov 04",
            "name": "Picosun expands selection of biocompatible ALD materials for medical applications",
            "place": "Picosun Group",
            "description": "Picosun expands its selection of biocompatible ALD materials to be used in medical applications.",
            "link": "https://www.picosun.com/press/picosun-expands-selection-of-biocompatible-ald-materials-for-medical-applications/"
        },
        {
            "year": 2019,
            "date": "Oct 31",
            "name": "Nano technology breakthrough enables conversion of infrared light to energy",
            "place": "KTH Royal Institute of Technology",
            "description": "Invisible infrared light accounts for half of all solar radiation on the Earth's surface, yet ordinary solar energy systems have limited ability in converting it to power. A breakthrough in research at KTH could change that.",
            "link": "https://www.kth.se/en/aktuellt/nyheter/nano-technology-breakthrough-enables-conversion-of-infrared-light-to-energy-1.936083"
        },
        {
            "year": 2019,
            "date": "Oct 30",
            "name": "Nanoceramics from the ball mill",
            "place": "Max-Planck-Gesellschaft",
            "description": "Automotive catalysts, among others, and materials for dental implants could become more robust and easier to manufacture than ever before. This is because chemists have found a way to produce corundum (also known as alpha-alumina), a particularly stable variant of alumina, in the form of nanoparticles using simple mechanochemistry in a ball mill. The particles could be used, among other things, as a resistant carrier material in automotive catalysts or as a starting material for particularly hard ceramics. A first industrial company is already working on large-scale production of nanocorundum using the Mülheim process.",
            "link": "https://www.mpg.de/14078015/korund-nanoparticles-mechanochemistry"
        },
        {
            "year": 2019,
            "date": "Oct 30",
            "name": "Syringe-Injectable, Self-Expandable and Ultraconformable Magnetic Nanosheets",
            "place": "Singapore University of Technology and Design",
            "description": "The ultrathin films are able to be injected using minimally-invasive syringe needles and can be used as a platform to deliver molecular and cellular drugs. The use of shape-memory polymer also enables unprecedented temperature-dependent control to allow for adhesion and removal of the nanosheets on biological surfaces.",
            "link": "https://www.sutd.edu.sg/Research/Research-News/2019/10/SUTD-develops-smp-nmp-nanosheets"
        },
        {
            "year": 2019,
            "date": "Oct 28",
            "name": "Creating a nanospace like no other",
            "place": "Tokyo Institute of Technology",
            "description": "Researchers have built a self-assembled nanocage with a very unusual nanospace: Its walls are made of antiaromatic molecules, which are generally considered too unstable to work with. By overturning assumptions about the limits of nano-chemical engineering, the study creates an entirely new nanospace for scientists to explore. Nanometer-sized cavities are already finding a range of useful applications in chemistry, medicine and environmental science.",
            "link": "https://www.titech.ac.jp/english/news/2019/045515.html"
        },
        {
            "year": 2019,
            "date": "Oct 25",
            "name": "Glowing nanoparticles control biological processes",
            "place": "National University of Singapore",
            "description": "The biological technique of ‘optogenetics’ uses light to control cells within living tissues that have been genetically modified to be light-sensitive. However, there is limited control of processes like this, as the light can activate several genes at once, and deeply penetrating light is often needed to reach the genes in living tissues.",
            "link": "https://news.nus.edu.sg/research/glowing-nanparticles-control-biological-processes"
        },
        {
            "year": 2019,
            "date": "Oct 25",
            "name": "Hydrogen boride nanosheets: A promising material for hydrogen carrier",
            "place": "Tokyo Institute of Technology",
            "description": "Researchers report a promising hydrogen carrier in the form of hydrogen boride nanosheets1. This two-dimensional material, which has only recently begun to be explored, could go on to be used as safe, light-weight, high-capacity hydrogen storage materials.",
            "link": "https://www.titech.ac.jp/english/news/2019/045474.html"
        },
        {
            "year": 2019,
            "date": "Oct 24",
            "name": "Plastic nanoparticles make larval zebrafish hyperactive",
            "place": "Leiden University",
            "description": "Nanoplastics influence the behaviour of larval zebrafish, says new research by the Institute of Biology Leiden (IBL) and the Institute of Environmental Sciences (CML). The researchers observed that a certain type of nanoparticles leads to stress reactions in the sugar balance, resulting in hyperactivity in the fish larvae. The study was published on 18 October in Nature Communications Biology.",
            "link": "https://www.universiteitleiden.nl/en/news/2019/10/plastic-nanoparticles-make-larval-zebrafish-hyperactive"
        },
        {
            "year": 2019,
            "date": "Oct 24",
            "name": "Determining the shapes of atomic clusters",
            "place": "Springer",
            "description": "By considering the crystal structures of atomic clusters in new ways, researchers may be able to better assess whether the groups have distinctive shapes, or whether they are amorphous.",
            "link": "https://www.springer.com/gp/about-springer/media/research-news/all-english-research-news/determining-the-shapes-of-atomic-clusters/17305618"
        },
        {
            "year": 2019,
            "date": "Oct 23",
            "name": "Excitons will shape the future of electronic devices",
            "place": "Ecole Polytechnique Federale de Lausanne (EPFL)",
            "description": "Excitons are quasiparticles made from the excited state of electrons and – according to research being carried out EPFL – have the potential to boost the energy efficiency of our everyday devices.",
            "link": "https://actu.epfl.ch/news/excitons-will-shape-the-future-of-electronic-devic/"
        },
        {
            "year": 2019,
            "date": "Oct 22",
            "name": "Probing work and heat dissipation in the quantum Hall edges of graphene",
            "place": "Weizmann Institute of Science",
            "description": "Combining nano-SQUID on tip with scanning gate measurements in the quantum Hall phase of graphene scientists were able to measure and identify work and heat dissipation processes separately.",
            "link": "https://www.weizmann.ac.il/condmat/superc/research-activities/probing-work-and-heat-dissipation-quantum-hall-edges-graphene"
        },
        {
            "year": 2019,
            "date": "Oct 21",
            "name": "Pinpointing biomolecules with nanometer accuracy",
            "place": "Tokyo Institute of Technology",
            "description": "Scientists demonstrate a new approach in fluorescence microscopy that can be used to locate individual biomolecules in 3D space with nanometer-scale precision.",
            "link": "https://www.titech.ac.jp/english/news/2019/045502.html"
        },
        {
            "year": 2019,
            "date": "Oct 18",
            "name": "Energy flow in the nano range",
            "place": "University of Würzburg",
            "description": "It is crucial for photovoltaics and other technical applications, how efficiently energy spreads in a small volume. With new methods, the path of energy in the nanometer range can now be followed precisely.",
            "link": "https://www.uni-wuerzburg.de/en/news-and-events/news/detail/news/energy-flow-in-the-nano-range/"
        },
        {
            "year": 2019,
            "date": "Oct 17",
            "name": "Double layer of graphene helps to control spin currents - New type of transistor one step closer",
            "place": "University of Groningen",
            "description": "Physicist discovered a way to transport spins over long enough distances to make such devices feasible.",
            "link": "https://www.rug.nl/sciencelinx/nieuws/2019/10/20191017_spintransistor"
        },
        {
            "year": 2019,
            "date": "Oct 17",
            "name": "A new approach to tackle superbugs",
            "place": "University of Leeds",
            "description": "Scientists have uncovered a novel antibiotic-free approach that could help prevent and treat one of the most widespread bacterial pathogens, using nanocapsules made of natural ingredients.",
            "link": "https://www.leeds.ac.uk/news/article/4482/a_new_approach_for_tackling_superbugs"
        },
        {
            "year": 2019,
            "date": "Oct 16",
            "name": "Quantum dots technology to revolutionize healthcare and sensing technology",
            "place": "University of Oulu",
            "description": "Researchers of the Optoelectronics and Measurement Techniques Unit (OPEM) at the University of Oulu have invented a new method of producing ultra-sensitive hyper-spectral photodetectors. At the heart of the discovery are colloidal quantum dots, developed together with the researchers at the University of Toronto, Canada. ",
            "link": "https://www.oulu.fi/university/news/quantum-dots"
        },
        {
            "year": 2019,
            "date": "Oct 14",
            "name": "The nano-guitar string that plays itself",
            "place": "Lancaster University",
            "description": "Scientists have created a nano-electronic circuit which vibrates without any external force. Just as a guitar string vibrates when plucked, the wire -- 100,000 times thinner than a guitar string -- vibrates when forced into motion by an oscillating voltage. The surprise came when they repeated the experiment without the forcing voltage. Under the right conditions, the wire oscillated of its own accord. The nano-guitar string was playing itself.",
            "link": "https://www.lancaster.ac.uk/physics/about-us/news/the-nano-guitar-string-that-plays-itself"
        },
        {
            "year": 2019,
            "date": "Oct 14",
            "name": "Liquid metals the secret ingredients to clean up environment",
            "place": "University of New South Wales",
            "description": "Liquid metal catalysts show great promise for capturing carbon and cleaning up pollutants, requiring so little energy they can even be created in the kitchen.",
            "link": "https://newsroom.unsw.edu.au/news/science-tech/liquid-metals-secret-ingredients-clean-environment"
        },
        {
            "year": 2019,
            "date": "Oct 13",
            "name": "Liquid metals the secret to clean up environment",
            "place": "ARC Centre of Excellence in Future Low-Energy Electronics Technologies",
            "description": "Forget the laboratory, substances that can solve environmental problems by capturing carbon dioxide, decontaminating water and cleaning up pollutants can be easily created in a kitchen, a UNSW Sydney study shows.",
            "link": "http://www.fleet.org.au/blog/liquid-metals-the-secret-ingredients-to-clean-up-environment/"
        },
        {
            "year": 2019,
            "date": "Oct 10",
            "name": "Controlling the charge state of organic molecule quantum dots in a 2D nanoarray",
            "place": "ARC Centre of Excellence in Future Low-Energy Electronics Technologies",
            "description": "Researchers have fabricated a self-assembled, carbon-based nanofilm where the charge state (ie, electronically neutral or positive) can be controlled at the level of individual molecules. Molecular self-assembly on a metal results in a high-density, 2D, organic quantum-dot array with electric-field-controllable charge state, with the organic molecules used as 'nano-sized building blocks' in fabrication of functional nanomaterials. Achieved densities are an order of magnitude larger than conventional inorganic systems.",
            "link": "http://www.fleet.org.au/blog/controlling-the-charge-state-of-organic-molecule-quantum-dots-in-a-2d-nanoarray/"
        },
        {
            "year": 2019,
            "date": "Oct 10",
            "name": "Scientists design graphene filter to purify methane from biogas",
            "place": "University of New South Wales",
            "description": "UNSW researchers are using 'wonder material' graphene to generate sustainable energy in municipal wastewater treatment plants.",
            "link": "https://newsroom.unsw.edu.au/news/science-tech/unsw-scientists-design-graphene-filter-purify-methane-biogas"
        },
        {
            "year": 2019,
            "date": "Oct 10",
            "name": "Watching energy transport through biomimetic nanotubes",
            "place": "University of Groningen",
            "description": "Scientists have investigated a simple biomimetic light-harvesting system using advanced spectroscopy combined with a microfluidic platform. The double-walled nanotubes work very efficiently at low light intensities, while they are able to get rid of excess energy at high intensities. These properties are useful in the design of novel materials for the harvesting and transport of photon energy.",
            "link": "https://www.rug.nl/sciencelinx/nieuws/2019/10/20191010_nanotubes"
        },
        {
            "year": 2019,
            "date": "Oct 10",
            "name": "Scientists simplify lithium-sulfur battery production to meet future energy storage needs",
            "place": "NanoBio Lab",
            "description": "Singapore scientists from NanoBio Lab (NBL) of A*STAR have developed a novel approach to prepare next-generation lithium-sulfur cathodes, which simplifies the typically time-consuming and complicated process for producing them. This represents a promising step towards the commercialization of lithium-sulfur batteries, and addresses industry's need for a practical approach towards scaling up the production of new materials that improve battery performance.",
            "link": "http://www.nbl.a-star.edu.sg/news/"
        },
        {
            "year": 2019,
            "date": "Oct 9",
            "name": "Single-particle spectroscopy of CsPbBr3 perovskite nanocrystals reveals the origin low electroluminescence efficiency",
            "place": "Tokyo Institute of Technology",
            "description": "Researchers from Tokyo Institute of Technology (Tokyo Tech) used the method of single-particle spectroscopy to study electroluminescence in light-emitting devices. They discovered that efficient charge funneling between individual perovskite nanocrystals and the phenomenon of emission blinking are responsible for the low efficiencies of perovskite light-emitting devices.",
            "link": "https://www.titech.ac.jp/english/news/2019/045406.html"
        },
        {
            "year": 2019,
            "date": "Oct 8",
            "name": "Cooling nanotube resonators with electrons",
            "place": "ICFO-The Institute of Photonic Sciences",
            "description": "Researchers report on a technique that uses electron transport to cool a nanomechanical resonator near the quantum regime.",
            "link": "http://www.icfo.eu/newsroom/news/article/4532"
        },
        {
            "year": 2019,
            "date": "Oct 3",
            "name": "A filament fit for space: Silk is proven to thrive in outer space temperatures",
            "place": "University of Oxford",
            "description": "The scientists who discovered that natural silks get stronger the colder they get, have finally solved the puzzle of why.",
            "link": "http://www.ox.ac.uk/news/2019-10-03-filament-fit-space-silk-proven-thrive-outer-space-temperatures"
        },
        {
            "year": 2019,
            "date": "Oct 3",
            "name": "Rise of the nanomachines in the war on diabetes",
            "place": "CSIRO",
            "description": "Anti-diabetic drugs may become cheaper and more accessible thanks to a breakthrough from CSIRO, Australia's national science agency.",
            "link": "https://research.csiro.au/synthetic-biology-fsp/1154-2/"
        },
        {
            "year": 2019,
            "date": "Sep 20",
            "name": "New method for the measurement of nano-structured light fields",
            "place": "University of Münster",
            "description": "Physicists and chemists have jointly succeeded in developing a so-called nano-tomographic technique which is able to detect the typically invisible properties of nano-structured fields in the focus of a lens. Such a method may help to establish nano-structured light landscapes as a tool for material machining, optical tweezers, or high-resolution imaging.",
            "link": "https://www.uni-muenster.de/news/view.php?cmdid=10530"
        },
        {
            "year": 2019,
            "date": "Sep 18",
            "name": "Scientists develop DNA microcapsules with built-in ion channels",
            "place": "Tokyo Institute of Technology",
            "description": "A Research group reports a way of constructing DNA-based microcapsules that hold great promise for the development of new functional materials and devices. They showed that tiny pores on the surface of these capsules can act as ion channels. Their study will accelerate advances in artificial cell engineering and molecular robotics, as well as nanotechnology itself.",
            "link": "https://www.titech.ac.jp/english/news/2019/045078.html"
        },
        {
            "year": 2019,
            "date": "Sep 17",
            "name": "Nanoparticles used to transport anti-cancer agent to cells",
            "place": "University of Cambridge",
            "description": "Scientists from the University of Cambridge have developed a platform that uses nanoparticles known as metal-organic frameworks to deliver a promising anti-cancer agent to cells.",
            "link": "https://www.cam.ac.uk/research/news/nanoparticles-used-to-transport-anti-cancer-agent-to-cells"
        },
        {
            "year": 2019,
            "date": "Sep 16",
            "name": "Eco-friendly method for the synthesis of iron oxide nanoparticles",
            "place": "University of Wisconsin-Madison",
            "description": "A team of scientists from Ural Federal University (Yekaterinburg), Bangladesh University of Engineering and Technology and other collaborator have published an article about a new method for the synthesis of magnetic nanoparticles",
            "link": "https://news.wisc.edu/electric-tech-could-help-reverse-baldness/"
        },
        {
            "year": 2019,
            "date": "Sep 13",
            "name": "Scientists create a nanomaterial that is both twisted and untwisted at the same time",
            "place": "University of Bath",
            "description": "Recently, a new class of nanoscale materials have been developed to help distinguish the chirality of molecules. These so-called 'nanomaterials' usually consist of tiny twisted metal wires, that are chiral themselves.",
            "link": "https://www.bath.ac.uk/announcements/scientists-illuminate-secrets-of-a-nanomaterial-that-is-both-twisted-and-untwisted-at-the-same-time/"
        },
        {
            "year": 2019,
            "date": "Sep 12",
            "name": "Significant progress made in inverse photoconductance",
            "place": "University of Valencia",
            "description": "Valencia University (UV) researchers have modified the photoconductance of nanoparticles of tungsten oxide (WO3) in a controlled manner. This has potential applications in photonics and optomechanics. The results have been published in Advanced Science.",
            "link": "https://www.uv.es/uvweb/uv-news/en/formats-periodistics/opinion/cientifics-de-l-icmuv-aconsegueixen-importants-avancos-en-l-estudi-de-la-fotoconductivitat-inversa-1286012532756/Novetat.html?id=1286092932161&plantilla=UV_Noticies/Page/TPGDetaillNews"
        },
        {
            "year": 2019,
            "date": "Sep 12",
            "name": "Simple copper becomes an effective spintronic component thanks to molecular film",
            "place": "The University of Tokyo",
            "description": "Physicists created a new way to fabricate special kinds of electronic components known as spintronic devices. These high-performance, low-power devices have a promising future, so efficient ways to make them are highly sought after. The new fabrication method is interesting because it uses organic molecules which are relatively easy to configure for different purposes. Layers of molecules could be painted or printed onto metals to create new electronic functions.",
            "link": "https://www.issp.u-tokyo.ac.jp/maincontents/pressrelease2_en.html"
        },
        {
            "year": 2019,
            "date": "Sep 10",
            "name": "Clarification of a new synthesis mechanism of semiconductor atomic sheet",
            "place": "Japan Science and Technology Agency",
            "description": "Researchers have succeeded in clarifying a new synthesis mechanism regarding transition metal dichalcogenides (TMD), which are semiconductor atomic sheets having thickness in atomic order. Because it is difficult to directly observe the aspect of the growing process of TMD in a special environment, the initial growth process remained unclear, and it has been desirable to elucidate a detailed mechanism of synthesis to obtain high-quality TMD.",
            "link": "https://www.jst.go.jp/pr/announce/20190910/index_e.html"
        },
        {
            "year": 2019,
            "date": "Sep 9",
            "name": "Superoscillation takes nanoscale measurements with light",
            "place": "Nanyang Technological University",
            "description": "Scientists in Singapore have developed a new way to measure distances at the nanoscale using light, an advance that could be beneficial to advanced manufacturing processes.",
            "link": "http://news.ntu.edu.sg/pages/newsdetail.aspx?URL=http://news.ntu.edu.sg/news/Pages/NR2019_Sep05.aspx&Guid=c546a6a9-422e-4d7a-a636-3c4d0cbef2a6&Category=All"
        },
        {
            "year": 2019,
            "date": "Sep 6",
            "name": "Nanoparticles in lithium-sulphur batteries detected with neutron experiment",
            "place": "Helmholtz-Zentrum Berlin",
            "description": "A team has for the first time precisely analyed how nanoparticles of lithium sulphide and sulphur precipitate onto battery electrodes during the course of the charging cycle. The results can help increase the service life of lithium-sulphur batteries.",
            "link": "https://www.helmholtz-berlin.de/pubbin/news_seite?nid=20766;sprache=en;seitenid=74699"
        },
        {
            "year": 2019,
            "date": "Sep 5",
            "name": "Precious metal flecks could be catalyst for better cancer therapies",
            "place": "University of Edinburgh",
            "description": "Tiny extracts of a precious metal used widely in industry could play a vital role in new cancer therapies.",
            "link": "https://www.ed.ac.uk/igmm/news-and-events/news-2019/metal-flecks-catalyst-better-cancer-therapies"
        },
        {
            "year": 2019,
            "date": "Sep 5",
            "name": "Nanowires replace Newton's famous glass prism ",
            "place": "University of Cambridge",
            "description": "Scientists have designed an ultra-miniaturized device that could directly image single cells without the need for a microscope or make chemical fingerprint analysis possible from a smartphone.",
            "link": "https://www.cam.ac.uk/research/news/nanowires-replace-newtons-famous-glass-prism"
        },
        {
            "year": 2019,
            "date": "Sep 5",
            "name": "Scientists develop optical ruler that can measure down to the nanoscale ",
            "place": "Nanyang Technological University, Singapore",
            "description": "Scientists at Nanyang Technological University, Singapore (NTU Singapore) have developed a new way to measure distances at the nanoscale—one nanometer being one billionth of a meter—using light.",
            "link": "https://media.ntu.edu.sg/NewsReleases/Pages/newsdetail.aspx?news=c546a6a9-422e-4d7a-a636-3c4d0cbef2a6"
        },
        {
            "year": 2019,
            "date": "Sep 5",
            "name": "Artificial intelligence helps to predict hybrid nanoparticle structures ",
            "place": "University of Jyväskylä, Finland",
            "description": "Researchers at the Nanoscience Center and Faculty of Information Technology in the University of Jyväskylä, Finland, have achieved a significant step forward in predicting atomic structures of hybrid nanoparticles.",
            "link": "https://www.jyu.fi/it/en/research/research-projects/academy-of-finland/hypridipartikkelit"
        },
        {
            "year": 2019,
            "date": "Sep 4",
            "name": "Studying heart cells with nanovolcanoes ",
            "place": "Ecole polytechnique fédérale de Lausanne",
            "description": "Researchers at EPFL and the University of Bern have developed a groundbreaking method for studying the electrical signals of cardiac muscle cells. The technology has numerous potential applications in basic and applied research – such as improving the search for mechanisms underlying cardiac arrhythmias.",
            "link": "https://actu.epfl.ch/news/studying-heart-cells-with-nanovolcanoes/"
        },
        {
            "year": 2019,
            "date": "Sep 4",
            "name": "'Resonance' raman spectroscopy with 1-nanometer resolution",
            "place": "Japan Science and Technology Agency (JST)",
            "description": "Tip-enhanced Raman spectroscopy resolved 'resonance' Raman scattering with 1-nm resolution in ultrathin zinc oxide films epitaxially grown on a single-crystal silver surface. Tip-enhanced 'resonance' Raman scattering can be used to investigate a specific chemical structure at nanoscale and even at the single-molecule level and also provides a new approach for the atomic-scale optical characterization of local electronic states. ",
            "link": "https://www.jst.go.jp/pr/info/info1386/index_e.html"
        },
        {
            "year": 2019,
            "date": "Sep 3",
            "name": "Graphene layer enables advance in super-resolution microscopy ",
            "place": "University of Göttingen",
            "description": "Researchers have developed a new method that uses the unusual properties of graphene to interact with fluorescing molecules. This method allows scientists to optically measure extremely small distances, in the order of 1 ångström (one ten-billionth of a meter) with high accuracy for the first time. This enabled researchers to measure the thickness of lipid bilayers, the stuff that makes the membranes of all living cells.",
            "link": "https://www.uni-goettingen.de/en/3240.html?id=5580"
        },
        {
            "year": 2019,
            "date": "Sep 3",
            "name": "Color-change urine test for cancer shows potential in mouse study ",
            "place": "Imperial College London",
            "description": "A simple and sensitive urine test has produced a color change in urine to signal growing tumors in mice.",
            "link": "https://www.imperial.ac.uk/news/192750/colourchange-urine-test-cancer-shows-potential/"
        },
        {
            "year": 2019,
            "date": "Sep 3",
            "name": "Biodegradable anti-cancer treatment micro-robot ",
            "place": "Daegu Gyeongbuk Institute of Science and Technology",
            "description": "Professor Hongsoo Choi's research team in the Department of Robotics Engineering & DGIST-ETH Microrobot Research Center (DEMRC) at DGIST (President Young Kuk) succeeded in developing a biodegradable micro-robot that can perform hyperthermia treatment and control drug release.",
            "link": "https://www.dgist.ac.kr/en/html/sub06/060202.html?mode=V&no=1aac2ce6501a0ea68a15e06b9035068e"
        },
        {
            "year": 2019,
            "date": "Sep 2",
            "name": "Graphene layer enables advance in super-resolution microscopy",
            "place": "Georg-August University of Göttingen",
            "description": "Researchers have developed a new method that uses the unusual properties of graphene to interact with fluorescing molecules. This method allows scientists to optically measure extremely small distances, in the order of 1 ångström (one ten-billionth of a meter) with high accuracy for the first time. This enabled researchers to measure the thickness of lipid bilayers, the stuff that makes the membranes of all living cells.",
            "link": "https://www.uni-goettingen.de/en/3240.html?id=5580"
        },
        {
            "year": 2019,
            "date": "Sep 2",
            "name": "Atomically thin minerals show promise as proton conducting membranes for green technologies ",
            "place": "The University of Manchester",
            "description": "Researchers at The University of Manchester discovered that atomically- thin micas – the name given to a type of common mineral found in soil – are excellent proton conductors. This surprising result is important for the use of 2D materials in applications such as fuel cells and other hydrogen-related technologies.",
            "link": "https://www.manchester.ac.uk/discover/news/atomically-thin-minerals-show-promise-as-proton-conducting-membranes-for-green-technologies/"
        },
        {
            "year": 2019,
            "date": "Aug 30",
            "name": "Psychosensory electronic skin technology for future AI and humanoid development ",
            "place": "Daegu Gyeongbuk Institute of Science and Technology",
            "description": "Scientists have developed electronic skin technology for robots or electronic devices to feel pain through sense of touch. Expected to be applied in humanoid that needs 5 human senses and patients wearing prosthetic hands.",
            "link": "https://www.dgist.ac.kr/kr/html/sub06/060102.html?mode=V&no=7534e3522cbc8e2e5846053a8e038691"
        },
        {
            "year": 2019,
            "date": "Aug 30",
            "name": "Directional plasmon excitation at molecular scales",
            "place": "National University of Singapore",
            "description": "NUS scientists have developed a method for directional excitation of plasmons at molecular length scale with electrically driven sources. Photonic devices which make use of light can transmit information much faster than nanoelectronic systems.",
            "link": "http://www.science.nus.edu.sg/research-highlights/2605-directional-plasmon-excitation-at-molecular-scales"
        },
        {
            "year": 2019,
            "date": "Aug 30",
            "name": "Nanotechnology companies which are Publicly Listed ",
            "place": "Invest in Nano",
            "description": "Like most scientific industries that require a lot of equipment, years of research and development, and specific expertise, the companies within the nanotechnology industry require large amounts of funds to take nanomaterials from the idea and concept stage to the end-user product—regardless of whether the focus is raw material sales or consumer products.",
            "link": "https://www.investinnano.com/news-1/nanotechnology-companies-which-are-publicly-listed"
        },
        {
            "year": 2019,
            "date": "Aug 29",
            "name": "Beetle scales hold secret to creating sustainable paint from recycled plastic, research shows ",
            "place": "The University of Sheffield",
            "description": "The structure of ultra-white beetle scales could hold the key to making bright-white sustainable paint using recycled plastic waste, scientists have discovered.",
            "link": "https://www.sheffield.ac.uk/news/nr/beetle-scales-sustainable-paint-recycled-plastic-1.861566"
        },
        {
            "year": 2019,
            "date": "Aug 29",
            "name": "Better chemistry through tiny antennae ",
            "place": "The University of Tokyo",
            "description": "A research team has developed a new method for actively controlling the breaking of chemical bonds by shining infrared lasers on tiny antennae. This research may have applications in improving the yields of chemical reactions.",
            "link": "https://www.iis.u-tokyo.ac.jp/en/news/3147/"
        },
        {
            "year": 2019,
            "date": "Aug 28",
            "name": "EV Group and SCHOTT Partner to Demonstrate Readiness of 300-mm Nanoimprint Lithography for High-Volume Augmented/Mixed Reality Glass Manufacturing ",
            "place": "EV Group",
            "description": "EV Group (EVG), a leading supplier of wafer bonding and lithography equipment for the MEMS, nanotechnology and semiconductor markets, today announced that it has teamed up with SCHOTT, one of the world’s leading technology groups in the areas of specialty glass and glass ceramics, to demonstrate the readiness of 300-mm (12 inch) nanoimprint lithography (NIL) for high-volume patterning of high-refractive index (HRI) glass wafers used in the manufacture of waveguides/light guides for next-generation augmented/mixed reality (AR/MR) headsets.",
            "link": "https://www.evgroup.com/company/news/detail/ev-group-and-schott-partner-to-demonstrate-readiness-of-300-mm-nanoimprint-lithography-for-high-volume-augmented-mixed-reality-glass-manufacturing-1566985083/"
        },
        {
            "year": 2019,
            "date": "Aug 27",
            "name": "Biological risk potential of nanoparticles studied ",
            "place": "University of Düsseldorf",
            "description": "Carbon nanoparticles are a promising tool for biomedical applications, for example for targeted transportation of biologically active compounds into cells. A team of researchers has now examined whether these particles are potentially dangerous for the organism and how cells cope with them once they have been incorporated.",
            "link": "https://www.uni-duesseldorf.de/home/startseite/news-detailansicht-inkl-gb/article/biologisches-gefahrenpotenzial-von-nanopartikeln-untersucht.html?cHash=6a83d93818308c95f373e4c02d35839b"
        },
        {
            "year": 2019,
            "date": "Aug 26",
            "name": "Moisture-Powered, Multifunctional Flexible Sensing Systems",
            "place": "Suzhou Institute of Nano-tech and Nano-bionics",
            "description": "(Nanowerk Spotlight) As flexible, wearable electronics move into the mainstream, the question of how to power these devices becomes a key issue. Connecting ultrathin, almost skin-like electronics and sensors with bulky, conventional batteries defeats the purpose. The ideal solution are self-powered devices that contain a built-in power generation capability that does not rely on external sources such as batteries or supercapacitors.",
            "link": "http://english.sinano.cas.cn/rh/rp/201908/t20190826_215721.html"
        },
        {
            "year": 2019,
            "date": "Aug 26",
            "name": "A 2 nm sized nanomachine able to spin and transfer its rotational energy",
            "place": "Nara Institute of Science and Technology",
            "description": "A collaboration of researchers in France, Japan and the United States have developed a new nanosized propeller which can act as gears. This propeller, when bound to a gold surface, can be activated through thermal, electrical or mechanical energy to spin unidirectionally either clockwise or counterclockwise. Its compatibility with solid state surfaces planar technology suggests this propeller can be used to build more efficient devices for electronics or mechanics applications.",
            "link": "http://www.naist.jp/en/research_achievements/2019/09/006153.html"
        },
        {
            "year": 2019,
            "date": "Aug 22",
            "name": "Artificial Muscles Bloom, Dance, and Wave ",
            "place": "Korea Advanced Institute of Science and Technology",
            "description": "Researchers have developed an ultrathin, artificial muscle for soft robotics. The advancement, recently reported in the journal Science Robotics, was demonstrated with a robotic blooming flower brooch, dancing robotic butterflies and fluttering tree leaves on a kinetic art piece. ",
            "link": "http://www.kaist.edu/_prog/_board/?mode=V&no=101381&code=ed_news&site_dvs_cd=en&menu_dvs_cd=0601&list_typ=B&skey=&sval=&smonth=&site_dvs=&GotoPage="
        },
        {
            "year": 2019,
            "date": "Aug 22",
            "name": "First microscopic look at a tiny phenomenon with big potential implications",
            "place": "Tohoku University",
            "description": "Matter behaves differently when it's tiny. At the nanoscale, electric current cuts through mountains of particles, spinning them into vortexes that can be used intentionally in quantum computing.",
            "link": "https://www.tohoku.ac.jp/en/press/microscopic_look_at_a_tiny_phenomenon.html"
        },
        {
            "year": 2019,
            "date": "Aug 22",
            "name": "Structure of protein nano turbine revealed",
            "place": "Institute of Science and Technology Austria",
            "description": "Structural biologist Professor Leonid Sazanov and his research group from the Institute of Science and Technology Austria (IST Austria) in Klosterneuburg, Austria have now determined the first atomic structure of the representative of the V/A-ATPase family, filling in the gap in the evolutionary tree of these essential molecular machines. ",
            "link": "https://ist.ac.at/en/news/structure-of-protein-nano-turbine-revealed/"
        },
        {
            "year": 2019,
            "date": "Aug 22",
            "name": "Exploring the interaction of polystyrene nanoplastics and blood plasma proteins",
            "place": "Australian Nuclear Science and Technology Organisation",
            "description": "Contributing to a better understanding of how nanoplastics interact with blood plasma proteins and other biological molecules within the body. ",
            "link": "https://www.ansto.gov.au/news/interactions-of-nanoplastics"
        },
        {
            "year": 2019,
            "date": "Aug 22",
            "name": "Flexible photodetectors that change device properties ",
            "place": "SINC La ciencia es noticia",
            "description": "Experts in new CSIC materials have developed flexible semiconductor photodetectors three atoms thick, which can be folded, stretched or compressed. The innovation is part of the development of a new type of electronics, the deformatronics, in which the deformations are used to modify not only the geometry of the device but its properties and its operation.",
            "link": "https://www.agenciasinc.es/Noticias/Fotodetectores-flexibles-que-cambian-las-propiedades-de-los-dispositivos"
        },
        {
            "year": 2019,
            "date": "Aug 21",
            "name": "Color-changing artificial 'chameleon skin' powered by nanomachines",
            "place": "University of Cambridge",
            "description": "Researchers have developed artificial ‘chameleon skin’ that changes colour when exposed to light and could be used in applications such as active camouflage and large-scale dynamic displays.",
            "link": "https://www.cam.ac.uk/research/news/colour-changing-artificial-chameleon-skin-powered-by-nanomachines"
        },
        {
            "year": 2019,
            "date": "Aug 20",
            "name": "Wired for sound: A third wave emerges in integrated circuits",
            "place": "The University of Sydney",
            "description": "A research renaissance into chip-based control of light-sound interactions could transform our 5G and broadband networks, satellite communications, sensor technology and defence industries. ",
            "link": "https://sydney.edu.au/news-opinion/news/2019/08/20/brillouin-scattering--a-third-wave-emerges-in-integrated-circuit.html"
        },
        {
            "year": 2019,
            "date": "Aug 20",
            "name": "Scientists find way to cut nanoparticle toxicity levels",
            "place": "National Research Nuclear University MEPhI",
            "description": "Bioengineers and biophysicists from the National Research Nuclear University MEPhI, the Sechenov First Moscow State Medical University, the Universite de Reims Champagne-Ardenne in France, and the University of Tubingen in Germany have discovered that the toxicity of nanoparticles depends more on their size and the extent to which their surface area is charged than on their chemical composition.",
            "link": "https://eng.mephi.ru/news/120393"
        },
        {
            "year": 2019,
            "date": "Aug 19",
            "name": "Hydrogen induces high-temperature superconductivity in a monolayer material",
            "place": "University of Antwerp",
            "description": "UAntwerp researchers from the CMT group, Dr Jonas Bekaert and Prof Milorad Milosevic, in collaboration with Swedish researchers have predicted that an atomically thin layer of hydrogen will boost the critical temperature of a thin superconductor to above a hundred kelvin.",
            "link": "https://www.uantwerpen.be/en/research-groups/cmt/featured/news/"
        },
        {
            "year": 2019,
            "date": "Aug 19",
            "name": "Graphene sensors that measure air quality are step closer to mass market",
            "place": "University of Manchester",
            "description": "Graphene-based sensors that can measure the quality of air using the 2D Material could soon enter mass production thanks to a new partnership between a University of Manchester spin-out company and Chinese corporation, Tunghsu Optoelectronics.",
            "link": "https://www.manchester.ac.uk/discover/news/graphene-sensors-that-measure-air-quality-are-step-closer-to-mass-market/"
        },
        {
            "year": 2019,
            "date": "Aug 19",
            "name": "Paper filter from local algae could save millions of lives in Bangladesh",
            "place": "Uppsala University",
            "description": "In large parts of Bangladesh, obtaining safe drinking water is a constant challenge. A research group from Uppsala University and the University of Dhaka in Bangladesh have identified a possible solution: Using locally growing algae, they have created a paper filter that has proved excellent for removing viruses and bacteria both in the lab and in field tests.",
            "link": "http://www.uu.se/en/news-media/news/article/?id=12974&area=2,5,10,16,32,50&typ=artikel&lang=en"
        },
        {
            "year": 2019,
            "date": "Aug 14",
            "name": "Nanoparticle therapy targets lymph node metastases",
            "place": "N/A",
            "description": "Lymph nodes (LNs) are normally the primary site of tumor metastasis, and effective delivery of chemotherapeutics into LNs through systemic administration is critical for metastatic cancer treatment. Here, we uncovered that improved perfusion in a primary tumor facilitates nanoparticle translocation to LNs for inhibiting tumor metastasis.",
            "link": "https://pubs.acs.org/doi/10.1021/acsnano.9b03472"
        },
        {
            "year": 2019,
            "date": "Aug 7",
            "name": "Scientists find a way to cut nanoparticle toxicity ",
            "place": "National Research Nuclear University MEPhI",
            "description": "Bioengineers and biophysicists from the National Research Nuclear University MEPhI, the Sechenov First Moscow State Medical University, the Universite de Reims Champagne-Ardenne in France, and the University of Tubingen in Germany have discovered that the toxicity of nanoparticles depends more on their size and the extent to which their surface area is charged than on their chemical composition.",
            "link": "https://eng.mephi.ru/news/120393"
        },
        {
            "year": 2019,
            "date": "Aug 7",
            "name": "Manipulating Brain Cells by Smartphone",
            "place": "Korea Advanced Institute of Science and Technology",
            "description": "Researchers have developed a soft neural implant that can be wirelessly controlled using a smartphone. It is the first wireless neural device capable of indefinitely delivering multiple drugs and multiple colour lights, which neuroscientists believe can speed up efforts to uncover brain diseases such as Parkinson’s, Alzheimer’s, addiction, depression, and pain.",
            "link": "http://www.kaist.edu/_prog/_board/?mode=V&no=100721&code=ed_news&site_dvs_cd=en&menu_dvs_cd=0601&list_typ=B&skey=&sval=&smonth=&site_dvs=&GotoPage="
        },
        {
            "year": 2019,
            "date": "Aug 6",
            "name": "Scientists create the world's thinnest gold",
            "place": "University of Leeds",
            "description": "Scientists at the University of Leeds have created a new form of gold which is just two atoms thick – the thinnest unsupported gold ever created.",
            "link": "https://www.leeds.ac.uk/news/article/4456/scientists_create_the_worlds_thinnest_gold"
        },
        {
            "year": 2019,
            "date": "Aug 6",
            "name": "TAU scientists develop nano-vaccine for melanoma ",
            "place": "Tel Aviv University",
            "description": "Injection of nanoparticle has proven effective in mouse models, researchers say. ",
            "link": "https://english.tau.ac.il/news/nano_vaccine"
        },
        {
            "year": 2019,
            "date": "Aug 6",
            "name": "3D-printing customized MXene architectures",
            "place": "The University of Manchester",
            "description": "Researchers at the University of Manchester have demonstrated for the first time the possibility to print three-dimensional freestanding MXene objects. They developed 3D-printing inks that are composed solely of large few-layer MXene flakes and water as the solvent – without the need for additives to control the ink's rheological properties.",
            "link": "https://sites.google.com/view/nano3d/highlights"
        },
        {
            "year": 2019,
            "date": "Aug 5",
            "name": "Using quantum dots and a smartphone to find killer bacteria",
            "place": "Macquarie University",
            "description": "Australian scientists develop cheap and rapid way to identify antibiotic-resistant golden staph (MRSA).A combination of off-the-shelf quantum dot nanotechnology and a smartphone camera soon could allow doctors to identify antibiotic-resistant bacteria in just 40 minutes, potentially saving patient lives.",
            "link": "https://www.mq.edu.au/about/about-the-university/faculties-and-departments/faculty-of-science-and-engineering/news-and-events/departmental-news/news/using-quantum-dots-and-a-smartphone-to-find-killer-bacteria"
        },
        {
            "year": 2019,
            "date": "Aug 2",
            "name": "Magnetic coils could be used to break down 90% of plastic in ocean by 2040",
            "place": "The Ocean Cleanup",
            "description": "The ocean is big. Cleaning up the Great Pacific Garbage Patch using conventional methods – vessels and nets – would take thousands of years and tens of billions of dollars to complete. Our passive systems are estimated to remove half the Great Pacific Garbage patch in just five years, and at a fraction of the cost.",
            "link": "https://theoceancleanup.com/technology/"
        },
        {
            "year": 2019,
            "date": "Jul 25",
            "name": "New nanoparticle combination therapy shows effective resuscitation for massive hemorrhage",
            "place": "Waseda University",
            "description": "A Japanese research team successfully resuscitated rabbits with coagulopathy, or an impaired ability to form blood clots, from severe hemorrhage shock by using two different nanoparticles; one with hemostatic potential and the other with an oxygen-carrying potential.",
            "link": "https://www.waseda.jp/top/en-news/65973"
        },
        {
            "year": 2019,
            "date": "Jul 24",
            "name": "Unconventional phenomena triggered by acoustic waves in 2D materials",
            "place": "Institute for Basic Science",
            "description": "Opening a new way to manipulate valley transport by acoustic methods. Researchers at the Center for Theoretical Physics of Complex Systems(PCS), within the Institute for Basic Science(IBS, South Korea), and colleagues have reported a novel phenomenon, called Valley Acoustoelectric Effect, which takes place in 2D materials, similar to graphene. This research is published in Physical Review Lettersand brings new insights to the study of valleytronics.",
            "link": "https://www.ibs.re.kr/cop/bbs/BBSMSTR_000000000738/selectBoardArticle.do?nttId=17479&pageIndex=1&searchCnd=&searchWrd="
        },
        {
            "year": 2019,
            "date": "Jul 16",
            "name": "Fluorine Speeds Up Two-Dimensional Materials Growth ",
            "place": "Institute for Basic Science",
            "description": "By spatially confining fluorine, scientists could activate feeding gases while disabling its harmful effects.",
            "link": "https://www.ibs.re.kr/cop/bbs/BBSMSTR_000000000738/selectBoardArticle.do?nttId=17401&pageIndex=1&searchCnd=&searchWrd="
        },
        {
            "year": 2019,
            "date": "Jul 4",
            "name": "Investing In The Nanotechnology Market",
            "place": "Invest in Nano",
            "description": "Nanotechnology—whether it’s the actual production of the nanomaterials themselves or their implementation into various applications and markets—is one of the largest growing industries in the world. It is an industry that has been rapidly developing, advancing and growing over the last ten years and is expected to grow to $125 billion by 2024—roughly double what it is now.",
            "link": "https://www.investinnano.com/news-1/investing-in-the-nanotechnology-market"
        },
        {
            "year": 2019,
            "date": "Jul 3",
            "name": "Graphenes now go monolayer and single crystalline",
            "place": "Institute for Basic Science",
            "description": "The high-performance device is fabricated in “clean areas” in between graphene folds. ",
            "link": "https://www.ibs.re.kr/cop/bbs/BBSMSTR_000000000738/selectBoardArticle.do?nttId=17350&pageIndex=1&searchCnd=&searchWrd="
        },
        {
            "year": 2019,
            "date": "Jul 2",
            "name": "World’s smallest MRI performed on single atoms",
            "place": "Institute for Basic Science",
            "description": "Magnetic resonance imaging enables to scan the magnetic field of single atoms with unprecedented resolution.",
            "link": "https://www.ibs.re.kr/cop/bbs/BBSMSTR_000000000738/selectBoardArticle.do?nttId=17340&pageIndex=1&searchCnd=&searchWrd="
        }
    ]
}

const EXPAND_SCALER = 7;

class News extends Component {
    constructor(props) {
        super(props)
        this.path = '/news'
        let { state } = this.props.location;
        let title = null;
        if (state) {
            title = state.title
        }
        this.state = {
            title: title == null ? 'ca' : title,
            data: {},
            image: CalBlue,
            renderData: [],
            /**
             * 
             * The expanded object stores the current expand index for each year
             * e.g. { '2020': 3, '2019': 1 }
             * 
             * The value of each key has the following values:
             * n (n >= 1) stands for normal unit expand scale
             * 0 means the current data length is less than the ${EXPAND_SCALER}
             * -1 means the current data is fully expanded
             */
            expanded: {}
        }
    }

    componentWillMount() {}

    componentDidMount() {
        this.handleChangeTab(this.state.title)
        this.scrollToTop();
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    handleChangeTab = (param) => {
        let data = CAL_NEWS;
        let image = CalBlue;
        let expanded = {};
        let renderData = {};
        switch(param) {
            case 'ca':
                data = CAL_NEWS;
                image = CalBlue;
                break;
            case 'us':
                data = US_NEWS;
                image = USA;
                break;
            case 'global':
                data = GLOBAL_NEWS;
                image = InternationalBlue;
                break;
        }
        // Initialize the expand-data
        Object.keys(data).forEach(element => {
            expanded[element] = data[element].length > EXPAND_SCALER;
            renderData[element] = data[element].slice(0, 1 * EXPAND_SCALER);
        });
        
        this.setState({
            title: param,
            data: data,
            image: image,
            expanded: expanded,
            renderData: renderData
        });
    }

    /**
     * Expand the news one time, appending {EXPAND_SCALER} news to the end
     */
    handleExpandContent = (year) => {
        if (this.state.expanded[year] < 0) {
            return;
        }
        const { data } = this.state;
        // Process expand operation
        this.setState((prevState) => {
            let expanded = Object.assign({}, prevState.expanded);
            let renderData = Object.assign({}, prevState.renderData);

            expanded[year] += 1;
            let newData = data[year].slice((expanded[year] - 1) * EXPAND_SCALER, (expanded[year]) * EXPAND_SCALER);
            console.log(newData)
            renderData[year] = [...renderData[year], ...newData];
            console.log(renderData)
            if (newData.length < EXPAND_SCALER) {
                expanded[year] = -1;
            }
            return {
                expanded: expanded,
                renderData: renderData
            }
        })
    }

    /**
     * Expand all the news
     */
    handleExpandAllContent = (year) => {
        if (this.state.expanded[year] < 0) {
            return;
        }
        const { data } = this.state;
        // Process expand-all operation
        this.setState((prevState) => {
            let expanded = Object.assign({}, prevState.expanded);
            let renderData = Object.assign({}, prevState.renderData);
            expanded[year] = -1;
            renderData[year] = data[year];
            return {
                expanded: expanded,
                renderData: renderData
            }
        })
    }

    /**
     * Collapse all the news
     */
    handleCollapseAllContent = (year) => {
        const { data } = this.state;
        // Process collapse-all operation
        this.setState((prevState) => {
            let expanded = Object.assign({}, prevState.expanded);
            let renderData = Object.assign({}, prevState.renderData);
            expanded[year] = data[year].length > EXPAND_SCALER;
            renderData[year] = data[year].slice(0, 1 * EXPAND_SCALER);
            return {
                expanded: expanded,
                renderData: renderData
            }
        })
    }

    render() {
        const { title, renderData, expanded, image } = this.state;
        return (
            <div>
                <NavBar path={this.path} handler={this.handleChangeTab}/>
                <div className="container1">
                    <div className="row">
                        <div className="col-sm-3 submenu-tabs">
                            <button onClick={() => this.handleChangeTab('ca')} className={title == 'ca' ? "news-active-tab first-tab" : "news-tab first-tab"}><span>California News </span></button>
                            <button onClick={() => this.handleChangeTab('us')} className={title == 'us' ? "news-active-tab mt-3" : "news-tab mt-3"}><span>USA News </span></button>
                            <button onClick={() => this.handleChangeTab('global')} className={title == 'global' ? "news-active-tab mt-3" : "news-tab mt-3"}><span>International News </span></button>
                        </div>
                        <div className="col-sm-6">
                            <div className="typing">
                                <h5><br/><br/><br/><br/><br/><br/>See what's happening in Nanotech...</h5>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <img className="img-fluid mx-auto d-block news-image" src={image} alt="Image"/>
                        </div>
                    </div>
                    {
                        this.state.title == 'ca' ? (
                            <table className="mt-5">
                                <thead>
                                    <tr>
                                        <th width="10%">date</th>
                                        <th width="25%">Title</th>
                                        <th width="10%">place</th>
                                        <th width="45%">description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Feb 10</td><td>SDNI And OmniNano Initiate a Collaboration For Nanotechnology Curriculum Development</td><td>SDNI – UC San Diego</td><td><p>UC San Diego-based SDNI and OmniNano have initiated a collaboration for the development of Nanotechnology curriculum and focused courses targeting K-12 schools as well as community colleges. Courses developed for K-12 education will align with the California Next Generation Science Standards (NGSS). </p><p> “This collaboration, enabling the combination of the rich science and engineering potential of SDNI-UCSD with the high quality OmniNano digital platform, will accelerate SDNI outreach goals and will be a catalyst in the execution of its California NanoTech 2025 Project. OmniNano will benefit of multidisciplinary expertise in nanotechnology contents as well as substantial exposure by becoming a part of the aggressive SDNI outreach program” said Dr. Yves Theriault, SDNI’s Executive Director of Education Programs and Outreach.</p></td></tr>
                                </tbody>
                            </table>
                        ) : (<div></div>)
                    }
                    {
                        Object.keys(renderData).sort().reverse().map((year, i) => {
                            const currentYear = renderData[year];
                            let showAll = expanded[year] == 1;                          
                            return (
                                <div key={i}>
                                    <div className="mt-5 mb-5 row">
                                        <h4 className="news-title">{year}</h4>
                                        {
                                            expanded[year] ? (
                                                <button onClick={() => showAll ? this.handleExpandAllContent(year) : this.handleCollapseAllContent(year)} 
                                                        type="button" 
                                                        className="btn btn-link">
                                                    { showAll ? 'Show All' : 'Collapse All' }
                                                </button>
                                            ) : (<span></span>)
                                        }
                                    </div>
                                    <table className="mb-5">
                                        <thead>
                                        <tr>
                                            <th width="10%">date</th>
                                            <th width="25%">Title</th>
                                            <th width="10%">place</th>
                                            <th width="35%">description</th>
                                            <th width="10%">link</th>
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
                                                                {
                                                                    item.description.split("\n").map((item, idx) => (
                                                                        <p key={idx}>{item}</p>
                                                                    ))
                                                                }
                                                            </td>
                                                            <td>  
                                                                {
                                                                    item.link == '' || item.link.length < 1 ?
                                                                    <span></span>
                                                                    :
                                                                    <a href={item.link}>
                                                                        <button className="read-more-button">Read More</button>
                                                                    </a>
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>

                                    </table>
                                    {
                                        expanded[year] > 0 ?
                                        (<div className="load-container mt-5 mb-5">
                                            <button onClick={() => this.handleExpandContent(year)} 
                                                    type="button" 
                                                    className="btn btn-primary">
                                                    Load More
                                            </button>
                                        </div>) :
                                        (<div></div>)
                                    }
                                </div>
                            )
                        })
                    }
                
                    <a onClick={() => {this.scrollToTop()}} href="" className="text-center"><p><span className="news-back-to-top">Back to Top</span><br/><br/><br/></p></a>
                </div> 
                <Footer/>
            </div>
        );
    }
}

export default News;