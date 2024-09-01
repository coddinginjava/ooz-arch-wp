import React from 'react'
import { staffs } from '../../AppConfig'
import "./teamMembers.scss"
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Image } from '@chakra-ui/react'


const TeamCard = ({ person }) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={require(`@assets/team-members/${person.image}`)}
                    alt={person.name}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading color='blue.600' size='lg'>{person.name}</Heading>
                    <Text fontSize='mg'>
                        {person.role}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export const TeamMembers = () => {

    return (
        <div className='desk-tm-main'>
            {staffs.members.map(member => <TeamCard key={member.id} person={member} />)}
        </div>
    )
}



