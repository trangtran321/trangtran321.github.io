import {Button, Link } from '@chakra-ui/react';
import helloIcon from '../../assets/helloworld.svg'; 
import logoIcon from '../../assets/tt_logo.png'; 
import competitve from '../../assets/appcomparison.png';
import prototype1 from '../../assets/prototype1.png';
import prototype2 from '../../assets/prototype2.png';
import userstudy from '../../assets/userstudy.png';
import demo from '../../assets/demo.png';
export default function Helloworld(){
    return (
        <div>       
            {/* Header: contains top left logo icon, page name & divider*/}
            <div className="helloworldHeader">
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
                    <img height={'60px'} width={'60px'} src={logoIcon} alt="logoIcon"/>
                </Button>
            </Link>
                {/* Divider */}
                {/* <img d-flex height={'5%'} width={'60%'} src={headerDivider} alt="headerDivider" style={{margin: 5, padding: 5}}/> */}
            </div>
            {/* Helloworld Page */}
            <div className="helloworldContent" >
                <div
                    style={{color:'#0B3B0B',
                    padding: 20,
                    display: 'flex',
                    justifyContent:'center',
                    alignContent:'center',
                    margin: 20}}>  
                    <img height={'40%'} width={'40%'} src={helloIcon} alt="helloIcon" style={{ padding: 30, margin: 30}}/>
                </div>
                <div className='hwsection'>
                    <h1 className='sectionheader'> Motivation </h1>
                    <h1 className="aboutMeBody">
                        Conceptually, this application asks how one application can leverage the right amount and type of notifications with trusted endorsers of businesses and stylistic content rendering to persuade users to explore new places in the physical world.
                    </h1>
                </div>
                <div className='hwsection'>
                    <h1 className='sectionheader'> Background Research </h1>
                    <h1 className="aboutMeBody"> We explored and tested 45 different applications in travel, recommendation area to gain insights into design preferences and identify the technologies best suited for our project. Below is a competitve analysis on the top five applications that are most similar to our concept. </h1>
                    <img height={'60%'} width={'100%'} src={competitve} alt="competitveanalysis"/>
                </div>
                <div className='hwsection'>
                    <h1 className='sectionheader'> Prototype </h1>
                    <h1 className="aboutMeBody">
                        We created two low-fidelity prototypes to garner user opinions on both the UI/UX and the functional tasks of the application.
                    </h1>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h1 className='sectionheader'> Prototype 1 </h1>
                    <img height={'40%'} width={'80%'} src={prototype1} alt="prototype 1" style={{ padding: 10, margin: 10}}/> 
                    <h1 className='sectionheader'>Prototype 2 </h1>  
                    <img height={'40%'} width={'70%'} src={prototype2} alt="prototype 2" style={{ padding: 10, margin: 10}}/> 
                    
               </div>
                <div className='hwsection'>
                    <h1 className='sectionheader'>User Study Findings</h1>
                    <img height={'50%'} width={'100%'} src={userstudy} alt="user study findings"/>
                </div>
                <div className='hwsection'>
                    <h1 className='sectionheader'>Storyboard</h1>
                    <img height={'50%'} width={'100%'} src={demo} alt="demo"/>
                </div>
            </div>
            </div>
    )
}