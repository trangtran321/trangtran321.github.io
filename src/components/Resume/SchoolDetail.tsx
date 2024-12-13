import { Text } from "@chakra-ui/react";

export default function SchoolDetail(props: any){
    return(
        <div  className="detail">
            <Text
                fontSize='md'
                as='b'>
                {props.degree}
            </Text>
            <Text
                fontSize='md'>
                Graduation:
                <Text
                    fontSize='md'
                    as='i'>
                    {props.date}
                </Text>
            </Text>
        </div>
    )
}
