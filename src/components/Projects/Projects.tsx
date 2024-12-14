import { Button, Heading, Link } from '@chakra-ui/react';
import logoIcon from '../../assets/tt_logo.png'; 
import headerDivider from '../../assets/g14.png';
import ProjectCard from './ProjectCard';

export default function Projects(){
    return(
        <div className="contactPage">
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
                    <img height={'60px'} width={'60px'} src={logoIcon} alt="logoIcon"/>
                </Button>
            </Link>
                <Heading
                    as='h1'
                    size='2xl'
                    color='#0B3B0B'
                    fontFamily='sans-serif'
                    padding='3'
                > Projects </Heading>

                {/* Divider */}
                <img d-flex height={'5%'} width={'60%'} src={headerDivider} alt="headerDivider" style={{margin: 5, padding: 5}}/>
            </div>
            {/* Projects Page */}
            <div className="pageContent" >
                <div className="projectsCarousel">
                <ProjectCard 
                    url="yYiwxYqQ9vg?list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ" 
                    title="Hello, World" 
                    description="This native iOS appliation is allows users to add recommendations into lists and receive notifications when they are in proximity of a previously saved location."
                    goto="#/Helloworld"
                >
                    <p>
                        Technologies Used: Expo & React Native - iOS, Typescript
                    </p>
                    <p>
                        APIs Used: Google Firestore API, Googe Maps SDK API, Google Places API
                    </p>
                </ProjectCard>
                {/* <ProjectCard url="yYiwxYqQ9vg?list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ" title="Youtube Video" description="This is an example"/>
                <ProjectCard url="yYiwxYqQ9vg?list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ" title="Youtube Video" description="This is an example"/>
                <ProjectCard url="yYiwxYqQ9vg?list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ" title="Youtube Video" description="This is an example"/> */}
                </div>
            </div>

        </div>
    );
};

