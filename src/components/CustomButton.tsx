import React from "react";

interface Props{
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: ()=>void;
    radius: string;
    width: string;
    margin: number;
    padding: number;
}

export default function CustomButton(props:Props){
    return (
        <button
            onClick={props.onClick}
            style ={{
                backgroundColor: props.color,
                border: props.border,
                borderRadius: props.radius,
                height: props.height,
                width: props.width,
                margin: props.margin,
                padding: props.padding
            }}>
            {props.children}
        </button>
    )
}

// import React, { ReactNode } from 'react';
// import {Button, ButtonProps, Image} from '@chakra-ui/react';
// import { Link as RouterLink} from 'react-router-dom';

// interface NavigationButtonProps extends ButtonProps {
//     to: string
//     imageSrc: string
// }

// const NavigationButton: React.FC<NavigationButtonProps>= ({ to, imageSrc, ...props }) => {
//     return (
//         <Button  
//         as={RouterLink}
//         to={to}
//         m={2}
//         p={3}
//         display="flex"
//         pos="absolute"
//         top="0"
//         right="0"
//         variant="ghost"
//         size="lg"
//         borderRadius="full"
//         {...props}> 
//           <Image src={imageSrc} alt="Logo" boxSize="60px" />
//         </Button>
//     )
// }
