import { Heading, Text } from "@chakra-ui/react";

export default function ExperienceCard(props: any){
    return(
        <div className="experienceHeading">
            <div className="detail">
                <Heading
                    as='h1'
                    size='md'
                    color='#0B3B0B'
                    fontFamily='sans-serif'>
                    {props.position}
                </Heading>
                <Text
                    fontSize='md'>
                    {props.location}
                </Text>
            </div>
            <div className="detail">
                <Text
                    fontSize='md'
                    as='b'>
                    {props.workplace}
                </Text>
                <Text
                    fontSize='md'>
                    {props.date}
                </Text>
            </div>
        </div>
    )
}
