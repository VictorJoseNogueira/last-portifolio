
import bootstrapSVG from 'assets/icons/bootstrapSVG.svg';
import cssSVG from 'assets/icons/csslSVG.svg';
import djangoSVG from 'assets/icons/djangoSVG.svg';
import excellSVG from 'assets/icons/excellSVG.svg';
import expressSVG from 'assets/icons/expressSVG.svg';
import figmaSVG from 'assets/icons/figmaSVG.svg';
import flaskSVG from 'assets/icons/flaskSVG.svg';
import githubSVG from 'assets/icons/githubSVG.svg';
import gitSVG from 'assets/icons/gitsvgSVG.svg';
import htmlSVG from 'assets/icons/htmlSVG.svg';
import javaSVG from 'assets/icons/javaSVG.svg';
import jsSVG from 'assets/icons/jsSVG.svg';
import sqlSVG from 'assets/icons/sqlSVG.svg';
import mysqlSVG from 'assets/icons/mysqlSVG.svg';
import nodeSVG from 'assets/icons/nodeSVG.svg';
import numpySVG from 'assets/icons/numpySVG.svg';
import pandasSVG from 'assets/icons/pandasSVG.svg';
import postgresqlSVG from 'assets/icons/postgresqlSVG.svg';
import postmanSVG from 'assets/icons/postmanSVG.svg';
import pythonSVG from 'assets/icons/pythonSVG.svg';
import reactSVG from 'assets/icons/reactSVG.svg';
import vueSVG from 'assets/icons/vueSVG.svg';


function TecnologiesSection() {

const tecnoSkills = {
  python: {
    name: 'Python',
    icon: pythonSVG,
    category: 'Languages'
  },
  javascript: {
    name: 'JavaScript',
    icon: jsSVG,
    category: 'Languages'
  },
  java: {
    name: 'Java',
    icon: javaSVG,
    category: 'Languages'
  },
  sql: {
    name: 'SQL',
    icon: sqlSVG,
    category: 'Database'
  },
  mysql: {
    name: 'MySQL',
    icon: mysqlSVG,
    category: 'Database'
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: postgresqlSVG,
    category: 'Database'
  },
  django: {
    name: 'Django',
    icon: djangoSVG,
    category: 'Back-end'
  },
  flask: {
    name: 'Flask',
    icon: flaskSVG,
    category: 'Back-end'
  },
  nodejs: {
    name: 'Node.js',
    icon: nodeSVG,
    category: 'Back-end'
  },
  express: {
    name: 'Express',
    icon: expressSVG,
    category: 'Back-end'
  },
  vuejs: {
    name: 'Vue.js',
    icon: vueSVG,
    category: 'Front-end'
  },
  reactjs: {
    name: 'React.js',
    icon: reactSVG,
    category: 'Front-end'
  },
  html5: {
    name: 'HTML5',
    icon: htmlSVG,
    category: 'Front-end'
  },
  css3: {
    name: 'CSS3',
    icon: cssSVG,
    category: 'Front-end'
  },
  bootstrap: {
    name: 'Bootstrap',
    icon: bootstrapSVG,
    category: 'Front-end'
  },
  pandas: {
    name: 'Pandas',
    icon: pandasSVG,
    category: 'Data Science & Analysis'
  },
  numpy: {
    name: 'NumPy',
    icon: numpySVG,
    category: 'Data Science & Analysis'
  },
  excel: {
    name: 'Excel',
    icon: excellSVG,
    category: 'Data Science & Analysis'
  },
  git: {
    name: 'Git',
    icon: gitSVG,
    category: 'Tools & Design'
  },
  github: {
    name: 'GitHub',
    icon: githubSVG,
    category: 'Tools & Design'
  },
  postman: {
    name: 'Postman',
    icon: postmanSVG,
    category: 'Tools & Design'
  },
  figma: {
    name: 'Figma',
    icon: figmaSVG,
    category: 'Tools & Design'
  }
};




    return (
            <section id='technologies-section' className="technologies-section">
            <h1>skills</h1>
            <h2>Tecnologias</h2>

             <div className="tecnologies-icons-container">
            {
              Object.values(tecnoSkills).map((skill, index) => (
                  <div className="tecnologies-icon-text animation-appear">

                <img className='tecnologies-icons ' src={skill.icon} alt={skill.name} />
                <span key={index}>{skill.name}</span>
                  </div>
            ))
            }
            </div>
        </section>
    );
}
export default TecnologiesSection
