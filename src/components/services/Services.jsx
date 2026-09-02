import "./services.scss"
import {useRef} from 'react'
import {motion, useInView} from "framer-motion"

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1, staggerChildren: 0.1,
        }
    }
}

const Services = () =>{

    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})

    return(
        <motion.div 
            className="services" 
            variants={variants} 
            initial="initial" 
            ref={ref}
            animate={isInView&&"animate"}
        >
            
            <motion.div className="textContainer" variants={variants}>
                <p>
                    Interest &
                    <br/> Passions</p> {/*change feels weird to say*/}
                <hr/> 
            </motion.div>
            <motion.div className="titleContainer"variants={variants}>
                <div className="title">
                    <img src={`${import.meta.env.BASE_URL}people.webp`} alt=""/> {/* TODO: swap for a real headshot */}
                        <h1>
                            <motion.b whileHover={{color:"orange"}}>Software</motion.b> Engineer
                        </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>UT Austin</motion.b> ECE Grad
                    </h1>
                    <a href={`${import.meta.env.BASE_URL}Judah_Thurman.pdf`} target="_blank" rel="noopener noreferrer">
                        <button>Résumé</button>
                    </a>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Full-Stack Development</h2>
                    <p>Java, Python, C/C++, and JavaScript across academic and independent projects, built with Agile workflows from planning through delivery.</p>
                    <a href="https://github.com/JThurm/Judah-Thurman-Portfolio" target="_blank" rel="noopener noreferrer">
                        {/* <button>GO</button> */}
                    </a>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Cybersecurity & DevSecOps</h2>
                    <p>Coursework in systems programming and cybersecurity, with DevSecOps practices — security baked into the build pipeline, not bolted on after.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer"> {/*Update with link*/}
                        {/* <button>GO</button> */}
                    </a>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Machine Learning & Algorithms</h2>
                    <p>A foundation in machine learning, algorithms, and data structures, grounded in rigorous coursework including multivariable calculus.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer"> {/*Update with link*/}
                        {/* <button>GO</button> */}
                    </a>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Cinematography & Color Grading</h2>
                    <p>Hands-on DaVinci Resolve work — node trees, scopes, and skin tone isolation — building a visual language that carries through to how I design software.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer"> {/*Update with link*/}
                        {/* <button>GO</button> */}
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services;