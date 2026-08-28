import "./portfolio.scss"
import {useRef} from 'react'
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"place holder",
          // replace img
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWgGEfUAzdeNYoK0j5DeMgRwd-ipvazgGW7j-_z58vg&s=10",
        desc:"lorem ipsum dolor sit amet consectetur adipiscing elit et ut excepteur sint ipsum mollitia fugiat amet atque soluta illum praesentium ad voluptate quo officia fugiat et non nam placeat est cum libero irure eu eiusmod aliquip amet commodo omnis eu omnis mollit dolore quo consequatur do minim vel facilis corrupti",
    },
    {
        id:2,
        title:"place holder",
          // replace img
        img:"",
        desc:"lorem ipsum dolor sit amet consectetur adipiscing elit et ut excepteur sint ipsum mollitia fugiat amet atque soluta illum praesentium ad voluptate quo officia fugiat et non nam placeat est cum libero irure eu eiusmod aliquip amet commodo omnis eu omnis mollit dolore quo consequatur do minim vel facilis corrupti",
    },
    {
        id:3,
        title:"place holder",
          // replace img
        img:"",
        desc:"lorem ipsum dolor sit amet consectetur adipiscing elit et ut excepteur sint ipsum mollitia fugiat amet atque soluta illum praesentium ad voluptate quo officia fugiat et non nam placeat est cum libero irure eu eiusmod aliquip amet commodo omnis eu omnis mollit dolore quo consequatur do minim vel facilis corrupti",
        },
    {
        id:4,
        title:"This Portfolio Site",
          // TODO: swap for a screenshot of the live site
        img:"",
        desc:"A React + Vite portfolio built from the ground up, with a visual identity drawn straight from my color grading work — parallax scroll, animated transitions, and a dark, cinematic palette throughout.",
    },
];

const Single = ({item}) => {

    const ref = useRef();

    const{scrollYProgress} = useScroll({target:ref,}); //offset:["start start","end start",]});

    const y = useTransform(scrollYProgress, [0,1],[-500, 500])


    return(
        <section> 
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref ={ref}>
                        <img src={item.img} alt=""/>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See More</button>
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
        <div className="portfolio" ref={ref}>
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