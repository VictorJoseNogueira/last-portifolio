import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"



function HeaderComponent() {
  
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
      <div className="header-container">
        <h1 className="header-title">Victor Nogueira</h1>  
        <nav>
          <button className="toggle-menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faList} />
          </button>
          {isOpen && (
            <dialog open className="menu-modal">
              <div className="modal-content">
                <button className="close-menu" onClick={() => setIsOpen(false)}>
                  <FontAwesomeIcon icon={faXmark} /></button>
                  <nav>
                    <ul>
                      <li> <a href="#initial-section" onClick={() => setIsOpen(false)}>Inicio</a> </li>
                      <li> <a href="#about-section" onClick={() => setIsOpen(false)}>Sobre</a> </li>
                      <li> <a href="#technologies-section" onClick={() => setIsOpen(false)}>Tecnologias</a></li>
                      <li> <a href="#projects-section" onClick={() => setIsOpen(false)}>Projetos</a> </li>
                      <li> <a href="#contact-section" onClick={() => setIsOpen(false)}>Contato</a> </li>
                    </ul>
                  </nav>
              </div>

            </dialog>
          )
          
          }

        </nav>
    </div>
    </>
  )
}

export default HeaderComponent
