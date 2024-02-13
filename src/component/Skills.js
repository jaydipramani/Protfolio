import React from 'react';
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold 
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >

            {name}
        </motion.div >
    )
}

const Skills = () => {
    return (<>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>
            Skills
        </h2>

        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-3 shadow-dark cursor-pointer'
                whileHover={{ scale: 1.05 }}>
                App & Web
            </motion.div>

            <Skill name="Android" x="-26vw" y="0vw" />
            <Skill name="Ios" x="26vw" y="0vw" />
            <Skill name="Flutter" x="15vw" y="-12vw" />
            <Skill name="React Native" x="-15vw" y="-12vw" />
            <Skill name="NestJs" x="0vw" y="17.5vw" />

            <Skill name="NodeJs" x="-34vw" y="-10vw" />
            <Skill name="ExpressJs" x="15vw" y="12vw" />
            <Skill name="Laravel" x="34vw" y="-10vw" />
            <Skill name="Angular" x="34vw" y="10vw" />
            <Skill name="ReactJs" x="-34vw" y="10vw" />
            <Skill name="Figma" x="-15vw" y="12vw" />
            <Skill name="Firebase" x="0vw" y="-17.5vw" />

        </div>
    </>
    )
}

export default Skills;