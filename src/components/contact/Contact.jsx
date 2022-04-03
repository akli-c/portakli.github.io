import "./contact.css"
import { useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import { useContext } from "react/cjs/react.development";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef()

    const [done, setDone] = useState(false)

    const theme =useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_sx2ajfw', 'template_w3ahcan', formRef.current, '3iVFCnP8uLCu9EhJh')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contactez moi</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src="https://us.123rf.com/450wm/kebox/kebox1803/kebox180300065/96779661-bot%C3%B3n-redondo-azul-claro-con-icono-de-tel%C3%A9fono-blanco-que-muestra-contacto-telef%C3%B3nico.jpg" alt="" className="c-icon"/>+33 06 68 11 93 64
                    </div>
                    <div className="c-info-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/2302/2302004.png" alt="" className="c-icon"/>Paris et ses périphéries
                    </div>
                    <div className="c-info-item">
                    <a href ="mailto:aklichitti67@gmail.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Circle-icons-email.svg/1024px-Circle-icons-email.svg.png" alt="" className="c-icon"/></a><a href ="mailto:aklichitti67@gmail.com">M'envoyer un mail</a>
                    </div>
                    <div className="c-info-item">
                    <a href ="https://www.linkedin.com/in/aklichitti/"><img src="https://cdn.icon-icons.com/icons2/642/PNG/512/linkedin_icon-icons.com_59208.png" alt="" className="c-icon"/></a><a href ="https://www.linkedin.com/in/aklichitti/">Mon LinkedIn</a>
                    </div>
                </div>
            
            </div>
            <div className="c-right">
            <div className="c-desc">
                <b>Envie de me contacter directement ?</b><p>Vous pouvez directement m'écrire grâce à ce formulaire rapide à remplir :</p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input required="required" style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nom" name="user_name" />
                <input required="required" style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Sujet" name="user_subject" />
                <input required="required" style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                <textarea required="required" style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Objet" name="message" />
                <button>Envoyer</button>
                {done && "Merci pour votre message !"}
            </form>
        </div>
    </div>
</div>           
</div>
    )
}

export default Contact