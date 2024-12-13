import { Text } from "@chakra-ui/react";

export default function ExperienceDetails(props: any){
    return(
        <div  className="detail">
            <Text
                fontSize='sm'>
                {props.detail}
            </Text>
        </div>
    )
}
