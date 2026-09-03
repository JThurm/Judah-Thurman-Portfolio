import "./videoBg.scss";

const VideoBG = ({ src, children }) => {
    return (
        <div className="videoBackground">

            <video
                className="backgroundVideo"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
            >
                <source
                    src={`${import.meta.env.BASE_URL}${src}`}
                    type="video/mp4"
                />
            </video>

            <div className="videoOverlay"></div>

            <div className="videoContent">
                {children}
            </div>

        </div>
    );
};

export default VideoBG;