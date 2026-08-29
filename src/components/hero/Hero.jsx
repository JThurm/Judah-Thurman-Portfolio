import Portfolio from '../portfolio/Portfolio';
import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    };
    
    return (
        <div className="hero">
            <div className="wrapper">

                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>
                        Judah Thurman
                    </motion.h2>

                    <motion.h1 variants={textVariants}>
                        Software Engineer
                    </motion.h1>

                    <motion.div
                        variants={textVariants}
                        className="buttons"
                    >
                        <motion.button 
                            variants={textVariants}
                            onClick={() => scrollToSection("Portfolio")}
                        >
                            See The Latest Work

                        </motion.button>

                        <motion.button variants={textVariants} onClick={() => scrollToSection("Contact")}>
                            Contact Me
                        </motion.button>
                    </motion.div>

                    <motion.img
                        variants={textVariants}
                        onClick={() => scrollToSection("Services")}
                        animate="scrollButton"
                        src={`${import.meta.env.BASE_URL}scroll.png`}
                        alt=""
                    />
                </motion.div>
            </div>

            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                SOFTWARE ENGINEER · FULL-STACK DEVELOPER · SYSTEMS · SECURITY
            </motion.div>

            <div className="imageContainer">
                <img
                    src={`${import.meta.env.BASE_URL}Subject.png`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Hero;