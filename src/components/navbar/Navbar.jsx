import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion";

const Navbar = () => {
    return ( 
        <div className ="navbar">
            {/*sidebar*/}
            <Sidebar/>


            <div className="wrapper">
                <motion.span 
                    initial={{opacity:0, scale: 0.5}} 
                    animate={{opacity:1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    Judah Thurman
                </motion.span>

                <div className= "social">
                    <a
                        href="https://www.linkedin.com/in/judah-t-80a071240/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={`${import.meta.env.BASE_URL}linkedin.svg`} alt="LinkedIn" />
                    </a> 
                    <a 
                        href = "https://www.instagram.com/j.n.thurm/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={`${import.meta.env.BASE_URL}instagram.png`} alt="Instagram" />
                    </a>
                    <a
                        href="https://github.com/JThurm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={`${import.meta.env.BASE_URL}github.png`} alt="GitHub" />
                        
                    </a> {/*TBD*/}
                    {/* <a   href="#"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={`${import.meta.env.BASE_URL}dribbble.png`} alt="" />
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar