import mageImage from "../../assets/images/mago.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight  } from '@fortawesome/free-solid-svg-icons'
function AboutSection() {

    return (
        <section id='about-section' className="about-section">
        <h1>Resumo das Classes</h1>
        <h2>Sobre Mim</h2>
        <div className="about-section-cards">
          <div className="left-card">
          <img src={mageImage} alt="mageImage" />
          <span><strong>Classe: </strong>Desenvolvedor Full Stack</span>
          <div className="change-class-buttons">
            <button className="change-class-left">
            <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button className="change-class-right">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          </div>
          <div className="right-card">
            <div className="right-card-top">
              <span><strong>Bio:</strong>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, inventore iste maiores eum fugit magnam eligendi vitae excepturi dolore. Saepe ullam optio assumenda provident nisi ipsam cupiditate maiores amet ipsa?</span>
            </div>
            <div className="right-card-bottom">
              <span className="stats-tecnologies">Python</span>
              <span className="stats-tecnologies">Vue.js</span>
              <span className="stats-tecnologies">MySQL</span>
              <span className="stats-tecnologies">JavaScript</span>
            </div>
          </div>
        </div>

        </section>
    )

}

export default AboutSection;