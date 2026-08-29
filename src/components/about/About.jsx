import "./about.scss"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.15,
        },
    },
};

const About = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="about"
            ref={ref}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h2 variants={variants}>About Me</motion.h2>
                <motion.h1 variants={variants}>
                    Judah <b>Thurman</b>
                </motion.h1>
                <motion.p variants={variants}>
                    I'm a Computer Engineering graduate from The University of Texas at Austin. My 
                    background combines software development, computer systems, and 
                    cybersecurity, with a particular interest in building software 
                    that is both technically sound and genuinely useful.
                </motion.p>
                <motion.p variants={variants}>
                    Throughout my time at UT Austin, I've worked on projects ranging 
                    from full-stack web applications to machine-learning systems for 
                    detecting malicious URLs. These experiences have given me a strong 
                    foundation in programming, system design, problem solving, and 
                    working across different layers of technology—from user interfaces
                    and APIs to lower-level systems and security.
                </motion.p>
                <motion.p variants={variants}>
                    I enjoy taking complex problems, breaking them down into smaller pieces, 
                    and turning those ideas into practical solutions. Whether I'm developing 
                    an application, learning a new technology, or improving an existing system, 
                    I'm always looking for ways to build cleaner, more efficient, and more 
                    intuitive software.
                </motion.p>
                <motion.p variants={variants}>
                    I'm currently looking to grow as a software engineer and contribute to 
                    teams building meaningful technology while continuing to expand my skills 
                    across software engineering, systems, and security.
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default About