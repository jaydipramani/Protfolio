import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import profilePic from "../../public/images/profile/dev_pro.jpg"
import Skills from "@/component/Skills";
import Exprience from "@/component/Exprience";
import Education from "@/component/Education";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])


    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Jd&apos;s Thoughts | About Page</title>
                <meta name="description" content="" />
            </Head>

            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text={"Passion Fuels Purpose!"} className="mb-16" />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                            <p className="font-medium">
                                Hi, I&apos;m Jaydip Ramani, a mobile app developer and backend developer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients visions to life.
                            </p>
                            <p className="my-4 font-medium">
                                I believe that design is about more than just making things look pretty it&apos;s about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>

                            <p className="font-medium">
                                Whether I&apos;m working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>

                        </div>

                        <div className="col-span-3 relative h-max rounded-full border-2 border-solid border-dark
                        bg-light p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-full bg-dark" />
                            <Image src={profilePic} alt="Jd's Thoughts" className="w-full h-auto rounded-full" />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">
                                    satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={18} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">
                                    completed projects
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">
                                    years of experience
                                </h2>
                            </div>
                        </div>

                    </div>

                    <Skills />
                    <Exprience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about;