import React, { Component } from "react";
import _ from 'underscore'
import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

import CalBlue from '../../assets/Image/CaliforniaBlue.png'
const CAL_NEWS = {
    '2020': [
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
        let expanded = {};
        let renderData = {};
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
        // Initialize the expand-data
        Object.keys(data).forEach(element => {
            expanded[element] = data[element].length > EXPAND_SCALER;
            renderData[element] = data[element].slice(0, 1 * EXPAND_SCALER);
        });
        
        this.setState({
            title: param,
            data: data,
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
        const { title, renderData, expanded } = this.state;
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
                            <img className="img-fluid mx-auto d-block news-image" src={CalBlue} alt="Image"/>
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