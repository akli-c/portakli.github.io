import "./intro.css"
import Intra from "../../img/intra.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Bonjour, Je m'appelle </h2>
                    <h1 className="i-name">Akli Chitti</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Développeur Web</div>
                            <div className="i-title-item">Développeur Mobile</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Je développe et je façonne des applications mobiles et des sites web modernes et intéractifs pour tout le monde .
                </p>
                </div>
                </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img className="i-img" src={Intra} alt="" />
            </div>
        </div>
    );
};

export default Intro