import "./portfolio.scss"
import {useRef} from 'react'
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"Current Work",
          // replace img
        link:"https://github.com/JThurm/Moving-Ratings-in-SQL/tree/main",
        img:"https://www.svgrepo.com/show/426429/stack.svg",
        desc:"Analysis of a movie ratings dataset (MovieLens-style schema) to uncover trends in audience preferences over time — how average ratings shift by release year, which genres rise and fall in popularity, and where audience opinion is most divided.",
    },
    {
        id:2,
        title:"Hardware Resource Management",
          // replace img
        link:"https://github.com/JThurm/momentum-swelab",
        img:"https://www.svgrepo.com/show/504052/pc-cpu-computer-hardware-processor-chipset.svg",
        desc:"A web application for managing hardware resources across collaborative projects. Built with React frontend, Flask backend, and MongoDB database.",
    },
    {
        id:3,
        title:"Phishing URL Detection",
          // replace img
        link:"https://github.com/JThurm/ECE-379k-Final-Project",
        img:"https://cdn-icons-png.flaticon.com/512/4835/4835178.png",
        desc:"A high-performance phishing detection system using Random Forest classification trained on lightweight URL features. Achieves 99.73% accuracy with sub-millisecond inference times, enabling real-time, privacy-preserving threat detection without accessing webpage content.",
        },
    {
        id:4,
        title:"Clang Taint Analysis",
          // TODO: swap for a screenshot of the live site
        link:"https://github.com/JThurm/Clang-Taint-Analysis---Senior-Capstone-project",
        img:"https://cdn.prod.website-files.com/6a04589cb55ee4a08198541e/6a0467a0447885d0a35312cc_Ericsson_logo.svg.png", //Ericsson Logo
        desc:"Clang's experimental taint analysis feature may inadequately detect security vulnerabilities from external inputs, risking undetected critical flaws or excessive false positives.",
    },
];

const Single = ({item}) => {

    const ref = useRef();

    const{scrollYProgress} = useScroll({target:ref,}); ;

    const y = useTransform(scrollYProgress, [0,1],[-500, 500])

    return(
        <section> 
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref ={ref}>
                        {item.img ? (
                            <img src={item.img} alt={item.title}/>
                        ) : (
                            <div className="imagePlaceholder">Preview coming soon</div>
                        )}
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        {item.link && (
                            <a className="button" href={item.link} target="_blank" rel="noopener noreferrer">
                                See More
                            </a>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const{scrollYProgress} = useScroll({target:ref,offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping: 30,
    })

    return (
        <div className="portfolio" id="Portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Work</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio