import "./gallery.scss"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"

// Add your real image filenames here as you add them to /public/gallery/<slug>/
const galleries = {
    "3d-modeling": {
        title: "3D Modeling",
        images: [],
    },
    "drawing": {
        title: "Drawing",
        images: [],
    },
    "woodworking": {
        title: "Woodworking",
        images: [],
    },
};

const container = {
    animate: {
        transition: { staggerChildren: 0.08 },
    },
};

const item = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const Gallery = () => {
    const { hobby } = useParams();
    const data = galleries[hobby];

    if (!data) {
        return (
            <div className="gallery">
                <Link to="/" state={{ scrollTo: "Hobbies" }} className="back">← Back home</Link>
                <h1>Not found</h1>
                <p>No gallery exists for "{hobby}".</p>
            </div>
        );
    }

    return (
        <div className="gallery">
            <Link to="/" state={{ scrollTo: "Hobbies" }} className="back">← Back home</Link>
            <h1>{data.title}</h1>

            {data.images.length === 0 ? (
                <p className="empty">
                    No images added yet — drop files into{" "}
                    <code>/public/gallery/{hobby}/</code> and list them in{" "}
                    <code>Gallery.jsx</code>.
                </p>
            ) : (
                <motion.div
                    className="grid"
                    variants={container}
                    initial="initial"
                    animate="animate"
                >
                    {data.images.map((src) => (
                        <motion.img
                            key={src}
                            variants={item}
                            src={`${import.meta.env.BASE_URL}gallery/${hobby}/${src}`}
                            alt={`${data.title} work`}
                        />
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Gallery