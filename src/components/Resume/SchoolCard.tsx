import { Heading, Text } from "@chakra-ui/react";

export default function SchoolCard(props: any){
    return(
        <div className="schoolHeading">
            <Heading
                    as='h1'
                    size='md'
                    color='#0B3B0B'
                    fontFamily='sans-serif'>
                    {props.name}
            </Heading>
            <Text
                fontSize='md'>
                GPA: {props.gpa}
            </Text>
            <Text
                fontSize='md'>
                {props.place}
            </Text>
        </div>
    )
}
