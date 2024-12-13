import { Button, Heading } from '@chakra-ui/react';
import FrontPage from './Homepage';
import logoIcon from '../assets/tt_logo.png'; 
import headerDivider from '../assets/g14.png';

export default function AboutMe(){
    return(
        <div className="AboutMePage">
        {/* Header: contains top left logo icon, page name & divider*/}
        <div className="pageHeader">
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
                as="a"
                ref={FrontPage}
                >
                <img height={'60px'} width={'60px'} src={logoIcon} alt="logoIcon"/>
            </Button>

            <Heading
                as='h1'
                size='2xl'
                color='#0B3B0B'
                fontFamily='sans-serif'
                padding='3'
            > About Me </Heading>

            {/* Divider */}
            <img d-flex height={'5%'} width={'60%'} src={headerDivider} alt="headerDivider"/>
        </div>
        {/* About Me Content */}
        <div className="pageContent" >
        </div>
    </div>
    );
};

