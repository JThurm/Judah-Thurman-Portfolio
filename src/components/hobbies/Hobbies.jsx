import "./hobbies.scss"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import VideoBG from "../videoBg/VideoBg";

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
        slug: "3d-modeling",
        title: "3D Modeling",
        tagline: "Sketching in the round",
        desc: "There's a version of a thing in my head, and I use 3D modeling as a design sandbox. Allowing me to stress test ideas visually, bringing the same problems to engineering, minus the semicolons.",
    },
    {
        slug: "drawing",
        title: "Drawing",
        tagline: "Pencil before pixel",
        desc: "Character design and manga-style linework, usually with a Star Wars-shaped gravity well pulling the page in one direction. Every sketchbook eventually finds its way back to a lightsaber.",
    },
    // add back with more projects
    // {
    //     slug: "woodworking",
    //     title: "Woodworking",
    //     tagline: "No undo button",
    //     desc: "The one hobby that doesn't forgive a bad commit. No console.log, no Ctrl+Z — just a tape measure, a plan, and the very real chance I ignore both. Measure twice, cut once, mean it.",
    // },
];

const Hobbies = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <VideoBG src="helix.MP4">
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
                        key={hobby.slug}
                        variants={variants}
                        whileHover={{ background: "lightgray", color: "black" }}
                    >
                        <h2>{hobby.title}</h2>
                        <span className="tagline">{hobby.tagline}</span>
                        <p>{hobby.desc}</p>
                        <Link to={`/gallery/${hobby.slug}`} className="viewLink">
                            View gallery →
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
        </VideoBG>
    );
};

export default Hobbies