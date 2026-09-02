import "./gallery.scss";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const galleries = {
    "3d-modeling": {
        title: "3D Modeling",
        media: [
            { type: "image", src: "ABS00.png", size: "large", },
            { type: "image", src: "ABS01.png", size: "small", },
            { type: "image", src: "blocks.png", size: "small", },
            { type: "image", src: "Landscape Wallpaper 01.png",  size: "wide", },
            { type: "image", src: "vIrUs01.png",  size: "tall", },
            { type: "image", src: "plexus_wallpaper01.PNG",  size: "wide", },
            { type: "image", src: "Wallpaper.png", size: "small", },
            { type: "image", src: "xbox.jpg", size: "small", },
            { type: "video", src: "Xbox_Animation.mov", size: "large", },
        ],
    },

    "drawing": {
        title: "Drawing",
        media: [
            { type: "image", src: "batman.jpg", size: "large", },
            { type: "image", src: "ironman.jpeg", size: "large", },
        ],
    },

    "woodworking": {
        title: "Woodworking",
        media: [],
    },
};

const container = {
    animate: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const item = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

const Gallery = () => {
    const { hobby } = useParams();
    const data = galleries[hobby];

    if (!data) {
        return (
            <div className="gallery">
                <Link
                    to="/"
                    state={{ scrollTo: "Hobbies" }}
                    className="back"
                >
                    ← Back home
                </Link>

                <h1>Not found</h1>

                <p>
                    No gallery exists for "{hobby}".
                </p>
            </div>
        );
    }

    return (
        <div className="gallery">

            <Link
                to="/"
                state={{ scrollTo: "Hobbies" }}
                className="back"
            >
                ← Back home
            </Link>

            <h1>{data.title}</h1>

            {data.media.length === 0 ? (
                <p className="empty">
                    No media added yet — drop files into{" "}
                    <code>/public/</code> and list them in{" "}
                    <code>Gallery.jsx</code>.
                </p>
            ) : (
                <motion.div
                    className="grid"
                    variants={container}
                    initial="initial"
                    animate="animate"
                >
                    {data.media.map((media) => (
                        <motion.div
                            key={media.src}
                            className={`media ${media.size || "small"}`}
                            variants={item}
                        >
                            {media.type === "image" ? (
                                <img
                                    src={`${import.meta.env.BASE_URL}${media.src}`}
                                    alt={`${data.title} work`}
                                    loading="lazy"
                                />
                            ) : (
                                <video
                                    controls
                                    preload="metadata"
                                >
                                    <source
                                        src={`${import.meta.env.BASE_URL}${media.src}`}
                                        type={
                                            media.src.endsWith(".mov")
                                                ? "video/quicktime"
                                                : "video/mp4"
                                        }
                                    />

                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};
export default Gallery;
