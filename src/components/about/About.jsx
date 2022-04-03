import "./about.css"
import about from "../../img/about.jpg"

const About = () => {
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={about} alt="" className="a-img"/>

            </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Oui oui je m'appelle bien Akli</p>
                <p className="a-desc">
                    Lorem ipsum doelorijrhnaddnajefjn
                </p>
                <div className="a-award">
                    <img className="a-award-img" src="https://c.vanceai.com/assets/images/index/index_desc_img-1aeac11335.png" alt=""/>
                    <div className="a-award-texts">
                    <h4 className="a-award-title">Développeur</h4>
                    <p className="a-award-desc">
                        Nemo engin dnagvedzgvea
                    </p>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default About