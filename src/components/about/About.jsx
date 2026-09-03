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
                    I grew up taking things apart to see how they worked, and
                    somewhere along the way I never really stopped. A degree
                    in Electrical & Computer Engineering from The University
                    of Texas at Austin gave that habit a vocabulary: circuits,
                    systems, security, machine learning. Now I'm chasing
                    the same instinct into software, back home in Manvel, TX.
                </motion.p>
                <motion.p variants={variants}>
                    Code, to me, is just another kind of frame — every
                    function has to hold its shape under pressure, same as
                    every shot I color grade has to hold its exposure across
                    a scene. I write in Java, Python, C/C++, and JavaScript,
                    ship the way Agile teams do — plan, build, learn, repeat —
                    and bake security in from the first commit instead of
                    bolting it on at the end. Whether I'm staring at a scope
                    or a stack trace, the job is the same: find what's off,
                    and make it precise.
                </motion.p>
                <motion.p variants={variants}>
                    I want a role that matches my skills, but what actually pulls
                    me in is a problem worth being stubborn about. If that
                    sounds like your kind of work, let's talk.
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default About