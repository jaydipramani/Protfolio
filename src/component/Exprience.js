import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">

            <LiIcon refrence={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}>
                <h3 className="capitalize font-bold text-2xl">{position}&nbsp;<a href={companyLink}
                    target="_blank"
                    className="text-primary capitalize"
                >@{company}</a></h3>
                <span>
                    {time} | {address}
                </span>
                <p className="font-medium w-full">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Exprience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Exprience
            </h2>



            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />
                <ul className="w-full flex flex-col items-start justify-between ml-4">

                    <Details position="Mobile App Developer" company="Appmocx Pvt. Ltd." companyLink="https://appmocx.com/" time="May-2023 - Present" address="Bengaluru, Karnataka."
                        work="During my time at Appmocx, I contributed to innovative solutions in education technology, crafting seamless interfaces and user-friendly applications. One highlight was my work on Fun2Do, an educational app where I merged my passion for tech with a commitment to engaging learning experiences. Collaborating with educators and designers, we revolutionized how students interacted with educational content. Challenges pushed me to think creatively, resulting in tangible impacts on users' lives. It was rewarding to see our efforts translate into enhanced learning experiences for students of all ages. Being part of a team with a shared goal of empowering learners filled every day with excitement and purpose. My experience at Appmocx and with Fun2Do honed my technical skills and deepened my appreciation for technology in education. I am grateful for the opportunity to have been part of such a dynamic and forward-thinking team." />

                    <Details position="Mobile App Developer" company="Capset Infotech" companyLink="https://www.capsetinfotech.com/" time="Oct-2022 - Apr-2023" address="Surat, Gujarat."
                        work="During my tenure at Capset Infotech, I played a pivotal role in multiple projects focused on video players and photo/video editing apps. I collaborated closely with talented teams to enhance user experiences and functionality across platforms. My responsibilities included delving into the intricacies of video playback and optimizing performance. Additionally, I contributed to the development of intuitive tools and features for editing multimedia content. Through hands-on experience, I refined my skills in multimedia software development and problem-solving. My dedication to innovation and attention to detail were evident in each project I undertook. Working in this dynamic environment fueled my passion for technology and creativity. I consistently aimed to deliver high-quality solutions that met and exceeded user expectations. My time at Capset Infotech was marked by a commitment to excellence and a drive to push the boundaries of multimedia software development." />

                    <Details position="Sr. Android Developer" company="Weapplinse Technology" companyLink="https://www.weapplinse.com/" time="Jan-2022 - Sep-2022" address="Surat, Gujarat."
                        work="'m a dedicated professional at Weapplinse Technology, with experience in projects like Kardder Trufit and Captyr. Specializing in Socket.IO, I've developed real-time communication systems for enhanced user experiences. In Kardder Trufit, I led the integration of robust communication features into the platform. Similarly, in Captyr, I optimized functionalities using Socket.IO for seamless data exchange. My role involves collaboration with cross-functional teams for innovative solutions. I'm committed to continuous learning, staying updated with emerging technologies. My passion lies in driving innovation and excellence in software development. At Weapplinse, I contribute to pushing technological boundaries and achieving impactful results. Looking forward to further opportunities to make meaningful contributions in the tech industry." />

                    <Details position="Android Developer" company="NJD Technologies" companyLink="" time="Dec-2020 - Dec-2021" address="Surat, Gujarat."
                        work="During my time at NJD Technologies from December 2020 to December 2021, I specialized in integrating Firebase In-App Purchases as an Android Developer. My responsibilities included ensuring seamless transaction flows within Android applications. I collaborated closely with teams to implement and optimize in-app purchase functionalities. This role honed my expertise in Firebase integration, Kotlin programming, and Android app development using data binding and SQLite for efficient data management. Additionally, I gained experience in incorporating ads to support monetization strategies, contributing to the enhancement of user experiences and meeting client requirements." />


                    <Details position="Android Developer Intren" company="Brightech Infotech" companyLink="" time="Aug-2020 - Nov-2020" address="Surat, Gujarat."
                        work="Interned as an Android Developer at Brightech Infotech from August 2020 to November 2020, where I immersed myself in mobile app development. Developed proficiency in Java/Kotlin, Android SDK, and collaborated with teams to deliver impactful solutions. Eager learner, constantly seeking opportunities to expand skills and contribute innovative ideas. Passionate about leveraging technology to solve real-world challenges." />

                </ul>
            </div>

        </div>
    )
}

export default Exprience;