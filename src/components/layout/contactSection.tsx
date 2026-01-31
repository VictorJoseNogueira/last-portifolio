import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faWhatsapp,faLinkedin } from '@fortawesome/free-brands-svg-icons'


// ... resto do seu código
function ContactSection() {

    const contactLinks = {
        emal: {
            buttonName: "Email",
            textLabel:"victorvalim1@gmail.com",
            link: '',
            icon: faEnvelope
        },
        github: {
            buttonName: "Github",
            textLabel:"github/VictorJoseNogueira",
            link: 'https://github.com/VictorJoseNogueira',
            icon: faGithub
        },
        linkedin: {
            buttonName: "Linkedin",
            textLabel:"linkedin/in/victor-nogueira-dev",
            link: 'https://www.linkedin.com/in/victor-jose-nogueira-santos',
            icon: faLinkedin
        },
        watsapp: {
            buttonName: "Watsapp",
            textLabel:"wa.me/+55 (11)9 4907-9807",
            link: 'https://wa.me/5511949079807',
            icon: faWhatsapp
        },
        
    }

    return (
        <section id='contact-section' className="contact-section">
        <h1>Contato</h1>
        <div className="letter-container">
        { Object.entries(contactLinks).map(([key, value]) => (
        <React.Fragment key={key}>
            {value.link === "" ? (
                <span className="letter-button-links"><strong>
                <FontAwesomeIcon icon={value.icon} />
            </strong> {value.textLabel}</span>    
        ):(
            <a className="letter-button-links" target="_blank" rel="noopener noreferrer"
            href={value.link}><strong>
                <FontAwesomeIcon icon={value.icon} />
            </strong> {value.textLabel}</a>
        )
    }
            </React.Fragment>
    ))}
           
        <div className="cursive-container">
            <span className="cursive-text">
                Vamos construir algo juntos? Sinta-se à vontade para me chamar em qualquer uma das redes acima.
            </span>
        </div>
    </div>
        

        </section>
    );
}
export default ContactSection