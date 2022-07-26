import { useState, useRef, useEffect } from 'react'
import {
  ButtonContact,
  ContactContainer,
  ModalContact,
  ModalContainer,
  ModalContactOption,
  ButtonNest,
} from './style'

import { FaDiscord, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModal = () => {
    setModalOpen((prev) => !prev)
  }
  const copyText = (e) => {
    const text = e.target
    navigator.clipboard.writeText(text?.innerHTML)
  }

  function handleClickAway(ref) {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setModalOpen((prev) => !prev)
        }
      }
      modalOpen && document.addEventListener('mousedown', handleClickOutside)
      //cleanUp
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [modalOpen])
  }
  const refModal = useRef(null)
  handleClickAway(refModal)

  return (
    <>
      <ContactContainer id="contact">
        <h3>Para dizer olá ou mandar um feedback:</h3>
        <ButtonNest>
          <ButtonContact as="a" href="mailto:kevinaryel.dev@gmail.com">
            Vou enviar um email
          </ButtonContact>
          <ButtonContact onClick={handleModal}>
            Quero outras opções
          </ButtonContact>
        </ButtonNest>
      </ContactContainer>
      <ModalContainer open={modalOpen}>
        <ModalContact ref={refModal}>
          <div className="decor-line" />
          <ModalContactOption>
            <div className="decoration discord">
              <FaDiscord /> Discord
            </div>
            <p onClick={copyText}>KevinAryel#3329</p>
          </ModalContactOption>
          <ModalContactOption>
            <div className="decoration linkedin">
              <FaLinkedin /> Linkedin
            </div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kevinaryeldev/"
            >
              kevinaryeldev
            </a>
          </ModalContactOption>
        </ModalContact>
      </ModalContainer>
    </>
  )
}
export default Contact
