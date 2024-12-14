import { Button, Heading } from '@chakra-ui/react';
import logoIcon from '../assets/tt_logo.png'; 
// import background from '../assets/homepagebackground.png';
import headerDivider from '../assets/g14.png';
import { Link } from 'react-router-dom';

export default function Homepage(){
    return(
        <div className='homePage'>
            {/* top right: logo icon */}
            <div className='pageHeader'>
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
                    <img height={'60px'} width={'60px'} src={logoIcon} alt="logoIcon"/>
                </Button>
                <Heading
                    as='h1'
                    size='4xl'
                    color='#0B3B0B'
                    fontFamily='sans-serif'
                    paddingTop={10}
                > Trang Tran </Heading>
                {/* <div style={{padding: 5, alignContent: "center", justifyContent: "center"}}> */}
                    <img d-flex height={'5%'} width={'60%'} src={headerDivider} alt="headerDivider" style={{margin: 5, padding: 5}}/>
                {/* </div> */}
                
                <div className="navigationButtons"> {
                    /* About Me Page */}
                    {/* <a className='aboutMeButton'> <Link to={"/AboutMe"}> AboutMe </Link> </a> */}
                    {/* Projects Page */}
                    <a className='projectsButton'> <Link to={"#/Projects"}> Projects </Link> </a>
                    {/* Contact Me Page */}
                    <a className='contactButton'> <Link to={"#/Resume"}> Resume </Link> </a>
                </div>
            </div>
            <div className="pageContent" style={{margin: 0
                                                }} >
                <p className="filler">                         </p>
                <h1 className="aboutMeBody">
                    Hi there! I'm Trang, a current computer science graduate student at New Mexico State University.
                    Previous to pursuing my masters degree, I was a full time pastry chef and bread baker. In 2020, I
                    was taken aback by the fragility of our global supply chain during the pandemic.
                    When we needed it to be the most realiable, it failed to deliver to the most vulnerable populations.
                    Being a part of mutual aid communities in New York City at the time taught me that to be a part of this world
                    I needed to actively participate in making it better.
                    In 2022, I made the decision to go back to school full time in the hopes of aiding to build more flexible supply chains
                    and ensure everyone has access to what they need in times of disaster. Since arriving at NMSU, my research has concentrated on Artificial Intelligence and how to implement them in systems where
                    trust is of the highest importance - such as supply chain planning and nuclear reactor safety alert systems.
                    In this time, I also cofounded the International Collaborative Coding Club with several other CS students in order to practice building larger projects as a team. 
                    My time not furiously learning algorithms and data structures is either spent in the ceramic studio or at the community garden.
                </h1>
                <p className="aboutMeTech">
                    Technologies I have most experience with:
                    - Python, HTML, CSS, Javascript, Typescript
                    - C, Java
                </p>
                <div className="contactFooter">
                    <h1><b>Contact Me</b></h1>
                    <div>
                        <h2>Email: <a href="mailto:ttran@nmsu.edu">ttran@nmsu.edu</a></h2>
                        <h2>LinkedIn: <a href="https://www.linkedin.com/in/trangtran321">trangtran321</a></h2>
                    </div>
                </div>
            </div>
    </div>
    );
};


