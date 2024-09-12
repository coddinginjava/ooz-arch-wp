import React, { useState, useEffect } from 'react';
import "./about.scss"
import logo from "../../assets/logo.jpg"
import { Heading, Text } from '@chakra-ui/react'
// import { motion, spring, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { easeIn } from 'framer-motion/dom';


export const About = () => {

    // const controls = useAnimation();
    // const [ref, inView] = useInView({ threshold: 0.1 });

    // React.useEffect(() => {
    //     if (inView) {
    //         controls.start({ x: 0, opacity: 1 });
    //     } else {
    //         controls.start({ x: "-100%", opacity: 0 });
    //     }
    // }, [controls, inView]);


    return (
        <div className='desk-about'>
            <Heading className='desk-about-heading' as='h1' size='4xl' noOfLines={1}>
                About us
            </Heading>
            <div className='desk-about-container'>
                <div className="desk-about-desc">
                    <Text fontSize='lg' className='desk-about-desc-1'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ad illum nisi doloremque earum quia cum magnam hic odit, vel incidunt maxime, numquam laudantium dolores porro! Quibusdam obcaecati asperiores ea amet sed facere ut nulla non? Numquam sit error aliquid quod reprehenderit tempora do
                    </Text>
                    <Text fontSize='lg' className='desk-about-desc-2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ad illum nisi doloremque earum quia cum magnam hic odit, vel incidunt maxime, numquam laudantium dolores porro! Quibusdam obcaecati asperiores ea amet sed facere ut nulla non? Numquam sit error aliquid quod reprehenderit tempora dolorum corporis, a placeat dolore sint enim, ut doloremque facilis pariatur nulla optio soluta quis architecto nisi. Tempore rerum repellendus nulla quisquam, ipsam sequi assumenda, reprehenderit exercitationem soluta provident optio modi amet ex perspiciatis! Veniam, accusamus beatae, praesentium placeat illo et modi sed, corrupti facilis hic voluptates? Quis dicta itaque veritatis laborum at accusantium assumenda temporibus nemo!
                    </Text>
                </div>
                <div className='desk-about-aside'>
                    <Heading as='h1' size='2xl' >
                        Company Name
                    </Heading>
                    <img height={350} width={350} src={logo} alt='Logo'></img>
                </div>
            </div>
        </div>
    )
}