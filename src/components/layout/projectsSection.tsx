import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import mockImage from 'assets/images/mock-img.png'


function ProjectsSection() {
    const projectList = {
  projeto1: {
    projectTitle: 'Projeto 1',
    projectImageIcon: mockImage,
    projectDescription: 'lorem ipsum dolor sit amet consectetur adipiscing elit.',
    projectLink: '#',
    projectClass: 'Full Stack',
    codeLink: '#',
    demoLink: '#',
    usedTechnologies: ['React.js', 'Python', 'MySQL'],
  },

  projeto2: {
    projectTitle: 'Projeto 2',
    projectImageIcon: mockImage,
    projectDescription: 'lorem ipsum dolor sit amet consectetur adipiscing elit.',
    projectLink: '#',
    projectClass: 'Back-end',
    codeLink: '#',
    demoLink: '#',
    usedTechnologies: ['Node.js', 'Express', 'PostgreSQL'],
  },

  projeto3: {
    projectTitle: 'Projeto 3',
    projectImageIcon: mockImage,
    projectDescription: 'lorem ipsum dolor sit amet consectetur adipiscing elit.',
    projectLink: '#',
    projectClass: 'Front-end',
    codeLink: '#',
    demoLink: '#',
    usedTechnologies: ['Vue.js', 'HTML5', 'CSS3'],
  },
}

    return (
        <section id='projects-section' className="projects-section">
          <h1>QUESTS</h1>
          <h2>Projetos</h2>
          <div className="projects-card-container">
            {Object.values(projectList).map((project) => (
            <div className="projects-card">
              <div className="card-title">
              <h3>{project.projectTitle}</h3>
              <p>{project.projectClass}</p>
              </div>
              <img className="mock-image" src={project.projectImageIcon} alt={project.projectTitle} />
              <p><strong>Descrição:</strong> {project.projectDescription}</p>
              <p>{project.usedTechnologies.join(', ')}</p>
              <div className="project-links">
              <a href={project.codeLink}> <FontAwesomeIcon icon={faGithub} /> Código</a>
              <a href={project.demoLink}> <FontAwesomeIcon icon={faLink} /> Demo</a>
              </div>
            </div>
            )
                    
                    )}
          </div>
        </section>

    );


}

export default ProjectsSection;