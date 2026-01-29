import developer from "assets/images/dev.png";
import mage from "assets/images/mage.png"
import priest from "assets/images/priest.png"
import ranger from "assets/images/ranger.png"
import warrior from "assets/images/warrior.png"
import Assassin from "assets/images/assassin.png"
import { useState, useMemo} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight  } from '@fortawesome/free-solid-svg-icons'
function AboutSection() {

const charactersClasses ={
    developerClass:{
      name: "Desenvolvedor Full Stack",
      bio: <>Meu Nome é <strong>Victor Nogueira</strong> e sou Desenvolvedor Full Stack com experiência na construção de soluções digitais robustas, atuando desde a análise de requisitos até a entrega final. Tenho forte foco em automação, otimização de processos e criação de sistemas centrados no usuário. Já participei de projetos reais e acadêmicos onde liderei o desenvolvimento de sistemas integrados, aplicando metodologias ágeis, boas práticas de arquitetura e foco em entregas de alto impacto. Com perfil analítico, colaborativo e orientado a resultados, busco constantemente evoluir tecnicamente e agregar valor por meio da tecnologia."</>,
      image: developer,
      classSkills: ["Python","Vue.js","MySQL","JavaScript"]
    },
    mageClass:{
      name: "O Grande Mago",
      bio: <>"Mestre das artes arcanas, o <strong>Mago</strong> canaliza energias elementares para manipular a realidade. Com alto intelecto e vasto conhecimento em feitiços complexos, ele é capaz de causar danos massivos em área e controlar o campo de batalha através da pura força mental."</>,
      image: mage,
      classSkills: ["Bola de Fogo", "Teleporte", "Escudo Arcano", "Invocação"]
    },
    priestClass:{
      name: "O Sumo-Sacerdote",
      bio:<>O Sacerdote é o pilar espiritual do grupo, dedicado à cura e proteção. Utilizando preces e luz sagrada, ele purifica aliados de maldições e garante que a equipe suporte os desafios mais árduos, sendo a linha tênue entre a vida e a derrota.</>,
      image: priest,
      classSkills: ["Cura Divina", "Ressurreição", "Purificação", "Benção"]
    },
    rangerClass:{
      name: "O Caçador de Feras",
      bio: <>"Especialista em sobrevivência e combate à distância, o <strong>Ranger</strong> possui olhos de lince e precisão cirúrgica. Mestre do rastreio e das armadilhas, ele utiliza a agilidade e o conhecimento da natureza para abater alvos antes mesmo de ser detectado.</>,
      image: ranger,
      classSkills: ["Tiro de Precisão", "Camuflagem", "Rastreamento", "Armadilha de Urso"]
    },
    warriorClass:{
      name: "O Poderoso Guerreiro",
      bio: <>O <strong>Guerreiro</strong> é a personificação da força bruta e da resistência. Especialista em combate corpo a corpo, ele utiliza armaduras pesadas e maestria com armas para proteger seus aliados, mantendo-se firme na linha de frente contra qualquer adversidade.</>,
      image: warrior,
      classSkills: ["Golpe Esmagador", "Provocação", "Investida", "Postura Defensiva"]
    },
    assassinClass:{
      name: "O Assassino Furtivo",
      bio: <>O <strong>Assassino</strong> é a personificação da furtividade
      </>,
      image: Assassin,
      classSkills: ["Assassinato", "Esconder-se", "Morte Rapida", "Envenenar Arma"]
    }
  }

const classesKeys = useMemo(() => 
  Object.keys(charactersClasses) as Array<keyof typeof charactersClasses>, 
  [charactersClasses]
);  const [currentClassIndex, setCurrentClass] = useState(0);

  
  const nextClass = () => {
    setCurrentClass((prev) => (prev === classesKeys.length - 1 ? 0 : prev + 1))
  };

  const prevClass = () => {
    setCurrentClass((prev) => (prev === 0 ? classesKeys.length - 1 : prev - 1 ))
  };

  const currentClass = classesKeys[currentClassIndex];
  const actualClass = charactersClasses[currentClass] 

    return (
        <section id='about-section' className="about-section">
        <h1>Resumo das Classes</h1>
        <h2>Sobre Mim</h2>
        <div className="about-section-cards">
          <div className="left-card">
          <img src={actualClass.image} alt="class-image" />
          <span><strong>Classe: </strong>{actualClass.name}</span>
          <div className="change-class-buttons">
            <button
             className="change-class-left"
             onClick={prevClass}>
            <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
            className="change-class-right"
            onClick={nextClass}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          </div>
          <div className="right-card">
            <div className="right-card-top">
              <span><strong>Bio:</strong>
              {actualClass.bio}
              </span>
            </div>
            <div className="right-card-bottom">
              {actualClass.classSkills.map((skill, index) => (
                <span key={index} className="stats-tecnologies">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        </section>
    )

}

export default AboutSection;