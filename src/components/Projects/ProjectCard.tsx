import { Icon } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {IoArrowForwardOutline} from 'react-icons/io5'

interface Props{
    children?: React.ReactNode;
    title: string;
    onClick?: ()=>void;
    description: string;
    url?: string
    goto: string
}

export default function ProjectCard(props: Props){
    return(
        <div  className="projectCard" onClick={()=> props.onClick}>
            {/* <iframe
                width="382"
                height="215"
                src={`https://www.youtube.com/embed/${props.url}`}
                title={props.description}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe> */}
            <div>
                <h2 style={{
                    fontWeight: "bolder",
                    fontSize: 20
                }}>{props.title}</h2>
                <Link to={props.goto} style={{display: "flex", flexDirection: "row"}}>
                    <p style={{color:"#0B3B0B"}}>Check it out</p>
                    <Icon>
                        <IoArrowForwardOutline size={50} color='#0B3B0B'/>
                    </Icon>
                </Link>
            </div>
            <div> 
                <p>{props.description}</p>
                {props.children}
            </div>
            
        </div>
    )
}
{/* <iframe width="850" height="478" src="https://www.youtube.com/embed/yYiwxYqQ9vg?list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ" title="React CARD components 🃏" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
https://www.youtube.com/watch?v=yYiwxYqQ9vg&list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ&index=3 */}
