import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { DribbbleIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, PinterestIcon, StackOverFlowIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </Link>
    )
}


const NavBar = () => {

    // const [mode, setMode] = useThemeSwitcher()
    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-centers justify-between">
            <nav>
                <CustomLink href='/' title="Home" className='mr-4' />
                <CustomLink href='/about' title='About' className='mx-4' />
                <CustomLink href='/projects' title='Projects' className='mx-4' />
                <CustomLink href='/articles' title='Articles' className='ml-4' />
            </nav>



            <nav className="flex items-center justify-center flex-wrap">
                

                <motion.a href="https://github.com/jaydipramani" target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mr-3">
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/jaydip-ramani/" target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3">
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="https://stackoverflow.com/users/23373654/jaydip-ramani" target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3">
                    <StackOverFlowIcon />
                </motion.a>
                <motion.a href="https://www.instagram.com/jaydip__ramani/" target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3">
                    <InstagramIcon />
                </motion.a>
                <motion.a href="https://www.facebook.com/jaydeep.ramani.3152" target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 ml-3">
                    <FacebookIcon />
                </motion.a>


                <button>

                </button>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>

        </header>
    )

}

export default NavBar;