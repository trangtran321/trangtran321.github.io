import { Button, Heading, Link} from '@chakra-ui/react';
import logoIcon from '../../assets/tt_logo.png'; 
import headerDivider from '../../assets/g14.png';
import ExperienceCard from './ExperienceCard';
import SchoolCard from './SchoolCard';
import SchoolDetail from './SchoolDetail';
import ExperienceDetails from './ExperienceDetails';

export default function Resume(){
    return(
        <div className="resumePage">
            {/* Header: contains top left logo icon, page name & divider*/}
            <div className="pageHeader">
                <Link href="/">
                    <Button
                        m={2}
                        p={3}
                        display='flex'
                        pos="absolute"
                        top="0"
                        right="0"
                        variant='ghost'
                        size='2xl'
                        borderRadius='60'
                        >
                        <img height={'60px'} width={'60px'} src={logoIcon} alt="logoIcon" style={{margin: 5, padding: 5}}/>
                    </Button>
                </Link>
                <Heading
                    as='h1'
                    size='2xl'
                    color='#0B3B0B'
                    fontFamily='sans-serif'
                    padding='3'
                > Resume </Heading>
                {/* Divider */}
                <img d-flex height={'5%'} width={'60%'} src={headerDivider} alt="headerDivider"/>
            </div>
             <div className="pageContent">
                <div className="resumeCard">
                    <SchoolCard name='New Mexico State University' place='Las Cruces, NM'  gpa='3.9'/>
                    <SchoolDetail degree='Master of Computer Science' date=' May 2025'/>
                </div>
                <div className="resumeCard">
                    <SchoolCard name='Culinary Institute of America' place='Hyde Park, NY'  gpa='4.0'/>
                    <SchoolDetail degree='Associates of Baking and Pastry' date=' Nov 2014'/>
                </div>
                <div className="resumeCard">
                    <SchoolCard name='New Mexico State University' place='Las Cruces, NM'  gpa='3.9'/>
                    <SchoolDetail degree='Bachelor of Science in Hotel, Restaurant, Tourism Management' date=' Dec 2012'/>
                    <SchoolDetail degree='Bachelor of Arts in French Language' date=' Dec 2012'/>
                </div>
                <div className="resumeCard">
                    <ExperienceCard position='Software Engineer Intern' workplace='ASPEN, Inc.' location='San Mateo, CA' date='May 2024-Present'/>
                    <ExperienceDetails detail='-  Using local Llama3 large language model through Ollama framework to clean historical data for classification.'/>
                    <ExperienceDetails detail="-  Planning and coordinating an extension of the company's C# webApp to automate shipment of software."/>
                    <ExperienceDetails detail="-  Implementing automated shipment extension using Video Studio ASP.NET MVC framework."/>
                    <ExperienceDetails detail="-  Facilitating communication between ASPEN and consulting website designer."/>
                </div>
                <div className="resumeCard">
                    <ExperienceCard position='Artificial Intelligence Research Assistant' workplace='New Mexico State University' location='Las Cruces, NM' date='Jan 2023-Present'/>
                    <ExperienceDetails detail='-  Researching innovative prompt engineering techniques for AI applications'/>
                    <ExperienceDetails detail='-  Designing and executing Python programs that leverage OpenAI and Gemini to conduct research analysis and facilitate comparisons with the Answer Set Programming framework.'/>
                    <ExperienceDetails detail='-  Using LLMs to conduct entity-relationship extraction.'/>
                </div>
                <div className="resumeCard">
                    <ExperienceCard position='U.S. Department of Energy Cyber Security Intern' workplace='Savannah River Environmental Field Station' location='Aiken,SC' date='May 2023-July2023'/>
                    <ExperienceDetails detail='-  Collaborating seamlessly with a cross-functional team to execute a comprehensive cyber policy audit in adherence to the NIST-500 framework.'/>
                    <ExperienceDetails detail='-  Crafting recommendations for audited business, contributing to potential enhancements in cybersecurity strategies.'/>
                    <ExperienceDetails detail='-  Performing digital forensic investigations using programs such as WireShark, CAINE-Linux and Autopsy'/>
                </div>
                <div className="resumeCard">
                    <ExperienceCard position='Software Consultant' workplace='Saint Joseph`s University' location='Remote' date='Oct 2022-May2023'/>
                    <ExperienceDetails detail='-  Reverse engineering algorithm for computing United Nations Sustainable Development Goals (SDG) impact ratings for client universities'/>
                    <ExperienceDetails detail='-  Enhancing software performance by 15% through code optimization'/>
                    <ExperienceDetails detail='-  Restructuring software architecture and authoring comprehensive documentation'/>
                </div>
                <div className="resumeCard">
                    <ExperienceCard position='Teacher`s Assistant - CSI (Java)' workplace='New Mexico State University' location='Las Cruces, NM' date='Jan 2023-May2023'/>
                    <ExperienceDetails detail='-  Assisting undergraduate students with lab assignments and homework in Java programming concepts'/>
                </div>
                <div className="resumeCard">
                    <ExperienceCard position='Bakery Sous Chef' workplace='Blue Hill at Stone Barns' location='Tarrytown, NY' date='Jan 2018-Dec 2020'/>
                    <ExperienceDetails detail='-  Planning and supervising operational activities for four subordinates.'/>
                    <ExperienceDetails detail='-  Conducting outreach and ongoing communication with local grain producers to source high-quality whole grains'/>
                    <ExperienceDetails detail='-  Developing innovative whole grain bread recipes utilizing academic and extension research.'/>
                    <ExperienceDetails detail='-  Creating, troubleshooting and deploying whole grain products that optimize product quality in line with a luxury food brand.'/>
                    <ExperienceDetails detail='-  Conducting informal qualitative and quantitative evaluations of experimental wheat, barley, rye, and buckwheat varieties sourced from Washington State University and Cornell University.'/>
                </div>
            </div>
        </div>
    );
};

