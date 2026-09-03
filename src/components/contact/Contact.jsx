import "./contact.scss"
import {motion, useInView} from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';


const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    },
}

const Contact = () =>{

    const ref = useRef();
    const formRef = useRef();
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    

    const isInView = useInView(ref,{margin:"-100px"});

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zxtxz5e', 'template_4oydn5v', formRef.current, {
        publicKey: 'lyi3ncpcCFizPIECH',
      })
      .then(
        (result) => {
            setSuccess(true)
        },(error) => {
            setError(true)
            console.log(error.text)
        },
      );
  };

    return(
        <motion.div ref={ref} 
        className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>judahthurman86@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Manvel, Tx</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+1 (803)-421-9160</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="phoneSvg" 
                    initial={{opacity:1}} 
                    whileInView={{opacity:0}}
                    transition={{
                        delay: 3,
                        duration:1,
                    }}>
                    <svg width="100%" height="100%" viewBox="0 0 64 64" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none"
                        >
                        <motion.path initial={{pathLength:0}}
                            animate={isInView && {pathLength:1}}
                            transition={{duration: 1.5}}
                        d="M14.87 32a17.67 17.67 0 0 1 0-25"/>
                        <motion.path initial={{pathLength:0}}
                            animate={isInView && {pathLength:1}}
                            transition={{duration: 1.5}}
                             d="M20 26.87a10.41 10.41 0 0 1 0-14.71"/>
                        <motion.path initial={{pathLength:0}}
                            animate={isInView && {pathLength:1}}
                            transition={{duration: 1.5}}
                             d="m28 30-5.43 5.43a8.77 8.77 0 0 0-2.57 6.2V52"/>
                        <motion.path initial={{pathLength:0}}
                            animate={isInView && {pathLength:1}}
                            transition={{duration: 1.5}}
                            d="M40 56h9a3 3 0 0 0 3-3V19a3 3 0 0 0-3-3H31a3 3 0 0 0-3 3v19.33a2 2 0 0 0 3.42 1.42l4.46-4.45a3.23 3.23 0 0 1 4.41-.24 3.12 3.12 0 0 1 .12 4.53l-3.29 3.29a9.83 9.83 0 0 0-2.88 7 6.25 6.25 0 0 1-6.24 6.2"/>
                        <line x1="39" y1="52" x2="41" y2="52"/>
                        <line x1="36" y1="20" x2="44" y2="20"/>
                    </svg>
                </motion.div>
                <motion.form 
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{opacity:0}} 
                    whileInView={{opacity:1}}
                    transition={{
                        delay: 4,
                        duration:1,
                    }}>
                    <input type="text" required placeholder="Name" name="name"/>
                    <input type="email" required placeholder="Email" name="email"/>
                    <textarea rows={8} placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact