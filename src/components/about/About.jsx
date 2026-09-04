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
                    I am an Electrical and Computer Engineering graduate from The University of 
                    Texas at Austin, specializing in software engineering and design. I am passionate
                    about building reliable, user-focused software and solving complex problems through
                    technology. My experience spans full-stack development, systems programming, embedded 
                    systems, and machine learning, with hands-on experience in C/C++, Python, Java, 
                    JavaScript, React, and a variety of modern development tools.
                </motion.p>
                <motion.p variants={variants}>
                    I enjoy understanding how technology works beneath the surface; from the underlying 
                    systems and algorithms to the interfaces and experiences users interact with. This 
                    perspective allows me to approach engineering problems from both a technical and
                    user-centered standpoint, with an emphasis on creating solutions that are efficient, 
                    maintainable, and thoughtfully designed.
                </motion.p>
                <motion.p variants={variants}>
                    As I continue developing as an engineer, I am interested in opportunities that 
                    challenge me to learn, collaborate, and apply my skills to meaningful problems. 
                    Whether developing software, exploring intelligent systems, or working closer to 
                    the hardware, I am motivated by the opportunity to turn complex ideas into 
                    practical solutions and continuously improve the way technology is built and 
                    experienced.
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default About