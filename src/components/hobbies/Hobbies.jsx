import "./hobbies.scss"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
};

const hobbies = [
    {
        title: "3D Modeling",
        desc: "I like giving ideas a shape before they're real — blocking out concepts and props in 3D the same way I'd sketch out an architecture diagram before writing a line of code.",
    },
    {
        title: "Drawing",
        desc: "Character design and manga-style illustration, usually with a Star Wars-sized influence lurking somewhere in the sketchbook.",
    },
    {
        title: "Woodworking",
        desc: "The most unforgiving debugger I own. No undo button, no console.log — just measure twice, cut once, and live with it.",
    },
];

const Hobbies = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="hobbies"
            ref={ref}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
        >
            <motion.h1 variants={variants}>Beyond The Code</motion.h1>
            <motion.div className="listContainer" variants={variants}>
                {hobbies.map((hobby) => (
                    <motion.div
                        className="box"
                        key={hobby.title}
                        variants={variants}
                        whileHover={{ background: "lightgray", color: "black" }}
                    >
                        <h2>{hobby.title}</h2>
                        <p>{hobby.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Hobbies