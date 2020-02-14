import React, { Component } from "react";
import _ from 'underscore'
import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

import CalBlue from '../../assets/Image/CaliforniaBlue.png'

const CAL_NEWS = [
    {
        "year": 2020,
        "date": "From SDNI",
        "name": "Engineers developing education kit to teach students practical skills in integrated photonics - UCSD",
        "place": "University of California, San Diego",
        "description": "Also see “Integrated Photonics Plug-and-Play by Abdelkrim El Amili in Optics & Photonics News September 2019”.",
        "link": "http://qi.ucsd.edu/news-article.php?id=3077&_ga=2.185323305.1643724505.1566594742-989170153.1564505844"
    },
    {
        "year": 2019,
        "date": "Jan 17",
        "name": "UCI chemists find fungal shrapnel in the air",
        "place": "University of California - Irvine",
        "description": "In a discovery that has implications for our understanding of the air we breathe, UCI chemists report that they’ve found nanoscale fragments of fungal cells in the atmosphere. ",
        "link": "https://news.uci.edu/2020/01/17/uci-chemists-find-fungal-shrapnel-in-the-air/"
    },
    {
        "year": 2019,
        "date": "Jan 02",
        "name": "Stanford researchers build a particle accelerator that fits on a chip, miniaturizing a technology that can now find new applications in research and medicine",
        "place": "Stanford University",
        "description": "Just as engineers once compressed some of the power of room-sized mainframes into desktop PCs, so too have Stanford researchers shown how to pack some of the punch delivered by today’s ginormous particle accelerators onto a tiny silicon chip.",
        "link": "https://news.stanford.edu/2020/01/02/accelerator-chip-research-fight-cancer/"
    },
    {
        "year": 2018,
        "date": "Dec 11",
        "name": "Heat energy leaps through empty space, thanks to quantum weirdness",
        "place": "University of California - Berkeley",
        "description": "Researchers show that heat energy can travel through a complete vacuum thanks to invisible quantum fluctuations.",
        "link": "https://news.berkeley.edu/2019/12/11/heat-energy-leaps-through-empty-space-thanks-to-quantum-weirdness/"
    },
    {
        "year": 2018,
        "date": "Dec 11",
        "name": "Heat energy leaps through empty space, thanks to quantum weirdness",
        "place": "University of California - Berkeley",
        "description": "Researchers show that heat energy can travel through a complete vacuum thanks to invisible quantum fluctuations.",
        "link": "https://news.berkeley.edu/2019/12/11/heat-energy-leaps-through-empty-space-thanks-to-quantum-weirdness/"
    },
    {
        "year": 2018,
        "date": "Dec 04",
        "name": "Freeze Frame: Scientists Capture Atomic-Scale Snapshots of Artificial Proteins",
        "place": "Lawrence Berkeley National Laboratory",
        "description": "Scientists adapt microscopy technique to build and image peptoid nanosheets with unprecedented atomic precision.",
        "link": "https://newscenter.lbl.gov/2019/12/04/atomic-scale-artificial-proteins/"
    },
    {
        "year": 2018,
        "date": "Dec 02",
        "name": "Making higher-energy light to fight cancer",
        "place": "University of California - Riverside",
        "description": "Researchers use nontoxic silicon nanocrystals to convert low-energy photons into high-energy ones, bringing scientists closer to developing photodynamic treatments for cancer.",
        "link": "https://news.ucr.edu/articles/2019/12/02/making-higher-energy-light-fight-cancer"
    },
    {
        "year": 2018,
        "date": "Dec 02",
        "name": "When solids and liquids meet: In nanoscale detail",
        "place": "Lawrence Berkeley National Laboratory",
        "description": "Infrared technique probes active chemistry at the solid-liquid interface.",
        "link": "https://newscenter.lbl.gov/2019/12/02/solids-and-liquids-in-nanoscale/"
    },
    {
        "year": 2018,
        "date": "Nov 13",
        "name": "Precisely poking cells en masse to cure cancer",
        "place": "University of California - Riverside",
        "description": "Engineers have invented a device that holds potential for mass-producing engineered cells at lower cost, a tipping point for these lifesaving therapies. ",
        "link": "https://news.ucr.edu/articles/2019/11/13/precisely-poking-cells-en-masse-cure-cancer"
    },
    {
        "year": 2018,
        "date": "Oct 25",
        "name": "Micromotors Push Around Single Cells and Particles",
        "place": "University of California - San Diego",
        "description": "A new type of micromotor—powered by ultrasound and steered by magnets—can move around individual cells and microscopic particles in crowded environments without damaging them. The technology could open up new possibilities for targeted drug delivery, nanomedicine, tissue engineering, regenerative medicine and other biomedical applications.",
        "link": "https://ucsdnews.ucsd.edu/pressrelease/micromotors-push-around-single-cells-and-particles"
    },
    {
        "year": 2018,
        "date": "Oct 18",
        "name": "Novel nanoprobes show promise for optical monitoring of neural activity",
        "place": "University of California - Santa Cruz",
        "description": "Researchers have developed ultrasensitive nanoscale optical probes to monitor the bioelectric activity of neurons and other excitable cells. This novel readout technology could enable scientists to study how neural circuits function at an unprecedented scale by monitoring large numbers of individual neurons simultaneously. It could also lead to high-bandwidth brain-machine interfaces with dramatically enhanced precision and functionality.",
        "link": "https://news.ucsc.edu/2019/10/optical-nanoprobes.html"
    },
    {
        "year": 2018,
        "date": "Sep 26",
        "name": "Use of nanopores could lead to cleaner water",
        "place": "Lawrence Livermore National Laboratory",
        "description": "A better understanding of transport at the nanoscale can lead to innovative technologies such as new membranes for water purification, new gas-permeable materials and energy storage devices.",
        "link": "https://www.llnl.gov/news/use-nanopores-could-lead-cleaner-water"
    },
    {
        "year": 2018,
        "date": "Sep 20",
        "name": "NASA Sale Launches HRL Laboratories’ Commercial 3D-Printed Aluminum Effort",
        "place": "HRL Laboratories",
        "description": "A new process for 3D-printing things could pave the way for lighter, faster aircraft that potentially fly further on the same amount of fuel.",
        "link": "http://www.hrl.com/news/2019/09/30/nasa-sale-launches-hrl-laboratories-commercial-3d-printed-aluminum-effort"
    },
    {
        "year": 2018,
        "date": "Aug 21",
        "name": "Deep learning enables scientists to identify cancer cells in blood in milliseconds",
        "place": "University of California, Los Angeles",
        "description": "Technique could allow cells to be extracted in real time, help prevent cancer from spreading",
        "link": "https://newsroom.ucla.edu/releases/deep-learning-identifies-cancer-cells-in-blood"
    },
    {
        "year": 2018,
        "date": "Aug 21",
        "name": "Dr. Meng Group Discover Reason for Lithium Battery Failure",
        "place": "University of California, San Diego",
        "description": "NanoEngineering professor, Dr. Shirley Meng and colleagues have discovered the reason behind the failure of lithium metal batteries. UC San Diego researchersfound that bits of lithium metal deposits are breaking off from the anode surface during discharging and being trapped where the battery can no longer access it. The technique used by the group to measure inactive lithium species was also momentous in that it was the first in the field of battery research.  Study findings were published in Nature.",
        "link": "http://nanoengineering.ucsd.edu/node/695"
    },
    {
        "year": 2018,
        "date": "Aug 20",
        "name": "Technique could make better membranes for next-generation filtration",
        "place": "University of California, Los Angeles",
        "description": "The key to the process is the membrane filter — a thin, semi-porous film that allows certain substances such as water to pass through while separating out other, unwanted substances. But in the past 30 years, there have been no significant improvements in the materials that make up the key layers of commercially produced membrane filters.",
        "link": "http://newsroom.ucla.edu/releases/t-flo-technique-better-membranes-filtration"
    },
    {
        "year": 2018,
        "date": "Aug 16",
        "name": "Optofluidic chip with nanopore 'smart gate' developed for single molecule analysis",
        "place": "University of California, Santa Cruz",
        "description": "Programmable device enables on-demand delivery of individual biomolecules with feedback-controlled gating for high-throughput analysis",
        "link": "https://news.ucsc.edu/2019/08/nanopore-optofluidics.html"
    },
    {
        "year": 2018,
        "date": "Aug 14",
        "name": "Nanocapsule reaches cancer that has spread to central nervous system in mice",
        "place": "University of California, Los Angeles",
        "description": "UCLA RESEARCH BRIEF",
        "link": "https://newsroom.ucla.edu/releases/nanocapsule-cancer-central-nervous-system"
    },
    {
        "year": 2018,
        "date": "Aug 12",
        "name": "NanoEngineering Research Lab Develops Thinnest Optical Device in the World 8/12/2019",
        "place": "University of California, San Diego",
        "description": "UC San Diego - Researchers led by NanoEngineering professor, Dr. Ert. Cubukcu, have developed a wave guide that is three layers of atoms thin - the thinnest optical device in the world. To create it, researchers used advanced micro- and nanofabrication techniques. This breakthrough could lead to the development of higher density and capacity photonic chips. The study findings were published in Nature Nanotechnology.",
        "link": "http://nanoengineering.ucsd.edu/node/692"
    },
    {
        "year": 2018,
        "date": "Jul 07",
        "name": "Darren Lipomi Named Recipient of Presidential Early Career Award",
        "place": "University of California, San Diego",
        "description": "UC San Diego - Congratulations to NanoEngineering professor, Darren Lipomi for being named recipient of the Presidential Early Career Award for Scientists and Engineers (PECASE). This award is the highest honor bestowed by the U.S. government on scientists and engineers in recognition for their contributions to the advancement of science, technology and engineering.",
        "link": "http://nanoengineering.ucsd.edu/node/684"
    }
]

const US_NEWS = [
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
        "description": "Johns Hopkins researchers report that a type of biodegradable, lab-engineered nanoparticle they fashioned can successfully deliver a 'suicide gene' to pediatric brain tumor cells implanted in the brains of mice. The poly(beta-amino ester) nanoparticles, known as PBAEs, were part of a treatment that also used a drug to kill the cells and prolong the test animals’ survival.",
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
        "name": "Exploring the \u200b'dark side' of a single-crystal complex oxide thin film",
        "place": "Argonne National Laboratory",
        "description": "Analysis from a team led by Argonne researchers reveals never-before-seen details about a type of thin film being explored for advanced microelectronics.",
        "link": "hhttps://www.anl.gov/article/exploring-the-dark-side-of-a-singlecrystal-complex-oxide-thin-film"
    },
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
        "name": "Missing Link between Soft Surface Adhesion and Surface Roughness",
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

const GLOBAL_NEWS = [
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
        "place": "Linköping University",
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
        "description": "Nanowalls, nanobridges, nano “jungle gyms”: it could seem the description of a Lilliputian village, but these are actual 3D-printed components with tremendous potential applications in nanoelectronics, smart materials and biomedical devices. Researchers at the Center for Soft and Living Matter (CSLM), within the Institute for Basic Science (IBS, South Korea) have improved the 3D nanoprinting process that enables to build precise, self-stacked, tall-and-narrow nanostructures. As shown in their latest publication in Nano Letters, the team also used this technique to produce transparent nanoelectrodes with high optical transmission and controllable conductivity.",
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
        "place": "Linköping University",
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

class News extends Component {
    constructor(props) {
        super(props)
        this.path = '/news'
        this.state = {
            title: props.title == null ? 'ca' : props.title,
            data: []
        }
    }

    componentWillMount() {}

    componentDidMount() {
        this.setState({
            data: CAL_NEWS
        })
    }

    handleChangeTab = (param) => {
        let data = CAL_NEWS;
        switch(param) {
            case 'ca':
                data = CAL_NEWS;
                break;
            case 'us':
                data = US_NEWS;
                break;
            case 'global':
                data = GLOBAL_NEWS;
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
                        <div className="col-sm-3">
                            <button onClick={() => this.handleChangeTab('ca')} className={title == 'ca' ? "news-active-tab first-tab" : "news-tab first-tab"}><span>California News </span></button>
                            <button onClick={() => this.handleChangeTab('us')} className={title == 'us' ? "news-active-tab mt-3" : "news-tab mt-3"}><span>USA News </span></button>
                            <button onClick={() => this.handleChangeTab('global')} className={title == 'global' ? "news-active-tab mt-3" : "news-tab mt-3"}><span>International News </span></button>
                        </div>
                        <div className="col-sm-6">
                            <div className="typing">
                                <h5><br/><br/><br/><br/><br/><br/>See what's happening in Nanotechnology...</h5>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <img className="img-fluid mx-auto d-block news-image" src={CalBlue} alt="Image"/>
                        </div>
                    </div>
                
                    {
                        Object.keys(renderData).sort().reverse().map((year, i) => {
                            const currentYear = renderData[year];
                            return (
                                <div key={i}>
                                    <h4 className="mt-5 mb-5">{year}</h4>
                                    <table className="mb-5">
                                        <thead>
                                        <tr>
                                            <th width="10%">Date</th>
                                            <th width="25%">Title</th>
                                            <th width="10%">Place</th>
                                            <th width="35%">Description</th>
                                            <th width="10%">Link</th>
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
                                                            <td>{item.description}</td>
                                                            <td>  
                                                                <a href={item.link}>
                                                                    <button className="read-more-button">Read More</button>
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
                
                    <a href="#" className="text-center"><p><span className="event-back-to-top">Back to Top</span><br/><br/><br/></p></a>
                </div> 
                <Footer/>
            </div>
        );
    }
}

export default News;