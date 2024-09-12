import React, { useRef } from 'react'
import { staffs } from '../../AppConfig'
import "./teamMembers.scss"
import { Card, CardBody, Stack, Heading, Text, Image } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'


const ImageContainer = ({ person }) => {
    return (
        <motion.div className='desk-tm-card'
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
        >
            <Card>
                <CardBody>
                    <Image
                        src={require(`../../assets/team-members/${person.image}`)}
                        alt={person.name}
                        borderRadius='lg'
                        objectFit='cover'
                        maxW={300}
                        minW={300}
                        maxH={220}
                        minH={220}
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading color='blue.600' size='md'>{person.name}</Heading>
                        <Text fontSize='mg'>
                            {person.role}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </motion.div>
    )
}

export const TeamMembers = () => {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: targetRef })
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%'])

    return (
        <div className='desk-tm-main' ref={targetRef}>

            <div className='desk-tm-container-1'>
                <div className='desk-tm-head'>
                    <Heading size='4xl'>Our team</Heading>
                </div>
                <div className='desk-tm-container-2'>
                    <motion.div className='desk-tm-images' style={{ x }}>
                        {staffs.members
                            .sort((a, b) => a.id - b.id)
                            .filter(s => s.active === true)
                            .map(member => <ImageContainer key={member.id} person={member} />)}
                    </motion.div>
                </div>

            </div>

        </div>
    )
}
