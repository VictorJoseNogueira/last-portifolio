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
      classSkills: ["Sistemas Integrados", "Automação de Processos", "Escalabilidade", "Clean Code"]    },
    mageClass:{
        name: "Mago (Foco: Ciência de Dados e Lógica)",
        bio: <>"Enxergo padrões onde outros veem apenas o caos. Através dos meus estudos em <strong> Ciência de Dados</strong>, manipulo as artes arcanas de <strong>Python, Pandas e Numpy</strong> para transmutar dados brutos em conhecimento valioso. Minha magia reside na capacidade analítica e no domínio de algoritmos complexos, permitindo-me prever tendências e moldar a realidade através de modelos estatísticos e automações que parecem impossíveis para os não iniciados."</>,
        image: mage,
        classSkills: ["Python Arcano (Core)", "Transmutação Pandas", "Alquimia Numpy", "Predição de Dados"]    },
    warriorClass:{
        name: "Guerreiro (Foco: Estrutura e Fundamentos)",
        bio: <>"Sou o pilar que sustenta a integridade do projeto. Minha força vem da base sólida que construí em <strong>Tecnologia da Informação</strong>, dominando as estruturas fundamentais que permitem a qualquer sistema permanecer de pé. Como um veterano que entende a importância da disciplina, utilizo <strong>POO</strong> (Programação Orientada a Objetos) para criar arquiteturas robustas e organizadas, garantindo que o código seja resistente a falhas e pronto para o combate em ambientes de alta pressão."</>,
        image: warrior,
    classSkills: ["Fortaleza POO", "Arquitetura Java", "Estrutura de Dados", "Resiliência Sistêmica"]
    },
    priestClass:{
        name: "Clérigo (Foco: Segurança e Suporte)",
        bio:<>"Minha missão é proteger a integridade dos sistemas e a santidade dos dados. Com conhecimento em <strong>Cibersegurança pelo programa Hackers do Bem e DIO</strong>, atuo como um guardião, purificando vulnerabilidades e estabelecendo perímetros de defesa. Utilizo as melhores práticas de <strong>Segurança da Informação</strong> para garantir que o fluxo de dados permaneça seguro e que a infraestrutura esteja sempre sob proteção contra as ameaças que espreitam nas sombras da rede."</>,
        image: priest,
        classSkills: ["Escudo Hackers do Bem", "Defesa Cibernética", "Purificação de Vulnerabilidades", "Protocolo de Segurança"]
    },
    rangerClass:{
        name: "Arqueiro (Foco: Precisão e Front-end)",
        bio: <>"Meu foco é a precisão estética e a experiência do usuário. Do meu arsenal, disparo soluções precisas utilizando <strong>React, Vue.js e Bootstrap</strong> para atingir o alvo: uma interface impecável. Com o olhar treinado em <strong>Design Thinking e Figma</strong>, garanto que cada interação seja certeira e funcional. Não importa a distância entre a ideia e a execução, eu ajusto minha mira para entregar um front-end fluido, moderno e tecnicamente perfeito."</>,
        image: ranger,
        classSkills: ["Precisão React/Vue", "Mira Design Thinking", "Estética Figma", "Estilo Bootstrap"]
    },
    assassinClass:{
        name: "Assassino (Foco: Backend e Agilidade)",
        bio: <>"Minha maestria reside no que é invisível aos olhos, mas vital para a sobrevivência do reino. Sou o arquiteto das sombras, utilizando <strong>Node.js, Flask, Express e Django</strong> para construir caminhos lógicos onde a informação flui com velocidade letal e precisão cirúrgica. Assim como um mestre na furtividade, garanto que as engrenagens do servidor e os <strong>Bancos de Dados SQL</strong> operem com máxima performance e zero desperdício. Enquanto o usuário vê a interface, eu governo o submundo do código, garantindo que cada requisição seja atendida instantaneamente, antes mesmo que o sistema perceba minha execução."</>,
        image: Assassin,
        classSkills: ["Execução Node/Express", "Golpe Django/Flask", "Infiltração SQL", "Performance Oculta"]
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
      <div className="left-card animation-appear-left-to-right">
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

      <div className="right-card animation-appear-left-to-right">
            <div className="right-card-top">
              <span><strong>Bio:</strong> {actualClass.bio}</span>
            </div>

            <div className="right-card-bottom">
              {actualClass.classSkills.map((skill, index) => (
                <span key={index} className="stats-tecnologies">{skill}</span>
              ))}
            </div>
      </div>
    </div>
  </section>
);
}

export default AboutSection;