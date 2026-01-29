import developer from "assets/images/dev.png";
import mage from "assets/images/mage.png"
import priest from "assets/images/priest.png"
import ranger from "assets/images/ranger.png"
import warrior from "assets/images/warrior.png"
import Assassin from "assets/images/assassin.png"
import { useState, useMemo} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight  } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion';


function AboutSection() {

const charactersClasses ={
    developerClass:{
      name: "Desenvolvedor Full Stack",
      bio: <>"Meu Nome é <strong>Victor Nogueira</strong>  e Sou um <strong>Desenvolvedor Full Stack</strong>, com foco em gerar valor através da tecnologia. Tenho experiência na construção de <strong>sistemas integrados</strong> e <strong>automações</strong>, priorizando a <strong>escalabilidade</strong> e a <strong>resolução de problemas</strong> com código limpo."</>,
      image: developer,
      classSkills: ["Python","Vue.js","MySQL","JavaScript"]
    },
    mageClass:{
      name: "Mago, Arcanista Transcendente",
      bio: <>"Mestre da tecelagem arcana, o <strong>Mago</strong> transcende os limites físicos para dobrar a realidade à sua vontade. Através de um intelecto rigoroso e do domínio de fluxos elementares, ele converte conhecimento puro em poder destrutivo. No campo de batalha, é uma peça tática de alto impacto, capaz de ditar o ritmo do combate com feitiços de controle de área e explosões de energia devastadoras."</>,
      image: mage,
      classSkills: ["Bola de Fogo", "Teleporte", "Escudo Arcano", "Invocação"]
    },
    priestClass:{
      name: "Sumo-Sacerdote, Teurgo da Alvorada",
      bio:<>"O <strong>Sacerdote</strong> é o alicerce espiritual e a salvaguarda da vida diante do caos. Portador da luz sagrada, sua presença transmuta o desespero em resiliência, purificando males e restaurando o vigor dos aliados através de preces ancestrais. Mais do que um curandeiro, ele é o guia estratégico que garante a sustentabilidade do grupo, provando que a verdadeira força reside na capacidade de resistir."</>,
      image: priest,
      classSkills: ["Cura Divina", "Ressurreição", "Purificação", "Benção"]
    },
    rangerClass:{
      name: "Arqueiro, Caçador de Feras",
      bio: <>"Especialista em letalidade à distância e sobrevivência em ambientes hostis, o <strong>Ranger</strong> combina precisão cirúrgica com instinto selvagem. Mestre do terreno e da antecipação, ele utiliza a natureza como aliada para emboscar ameaças e abater alvos prioritários antes mesmo da primeira linha de defesa ser alcançada. Sua agilidade e visão aguçada fazem dele um sentinela indispensável."</>,
      image: ranger,
      classSkills: ["Tiro de Precisão", "Camuflagem", "Rastreamento", "Armadilha de Urso"]
    },
    warriorClass:{
      name: "Guerreiro, Protetor da Força",
      bio: <>"O <strong>Guerreiro</strong> é o bastião inabalável da linha de frente, onde a força bruta encontra a disciplina marcial. Revestido em aço e determinação, ele atrai a fúria dos inimigos para si, protegendo os flancos mais frágeis com uma resistência física sem paralelos. No centro do conflito, ele não apenas sobrevive, mas domina o espaço, utilizando sua maestria com armas para romper formações adversárias."</>,
      image: warrior,
      classSkills: ["Golpe Esmagador", "Provocação", "Investida", "Postura Defensiva"]
    },
    assassinClass:{
      name: "Assassino, Lâmina Fantasma",
      bio: <>"O <strong>Assassino</strong> é a personificação da morte silenciosa, operando nas sombras onde a armadura e a magia não podem alcançar. Especialista em infiltração e execução, ele ignora o confronto direto para desferir golpes fatais em pontos vitais. Sua presença é uma ameaça constante e invisível, capaz de encerrar conflitos em segundos através de venenos letais e uma velocidade de reação sobre-humana."</>,
      image: Assassin,
      classSkills: ["Assassinato", "Esconder-se", "Arremessar Arma", "Envenenar Adaga"]
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
        <AnimatePresence mode="wait">
          <motion.img
            key={currentClassIndex}
            src={actualClass.image}
            alt="class-image"
            className="class-image-swiper"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) nextClass();
              if (info.offset.x > 50) prevClass();
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ cursor: 'grab' }}
          />
        </AnimatePresence>
        <span><strong>Classe: </strong>{actualClass.name}</span>
        <div className="change-class-buttons">
          <button className="change-class-left" onClick={prevClass}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="change-class-right" onClick={nextClass}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>

      <div className="right-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentClassIndex}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="motion-container"
          >
            <div className="right-card-top">
              <span><strong>Bio:</strong> {actualClass.bio}</span>
            </div>

            <div className="right-card-bottom">
              {actualClass.classSkills.map((skill, index) => (
                <span key={index} className="stats-tecnologies">{skill}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
);
}

export default AboutSection;