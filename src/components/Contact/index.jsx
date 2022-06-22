import { useState, useRef, useEffect } from 'react'
import {
  ButtonContact,
  ContactContainer,
  ModalContact,
  ModalContainer,
  ModalContactOption,
} from './style'

import { FaDiscord } from 'react-icons/fa'

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
        <h3>Say hello or send me a feedback</h3>
        <div style={{ display: 'flex', gap: 20 }}>
          <ButtonContact as="a" href="mailto:kevinaryel.dev@gmail.com">
            Work related
          </ButtonContact>
          <ButtonContact onClick={handleModal}>Just informal</ButtonContact>
        </div>
      </ContactContainer>
      <ModalContainer open={modalOpen}>
        <ModalContact ref={refModal}>
          <div className="decor-line" />
          <ModalContactOption>
            <div className="decoration">
              <FaDiscord /> Discord
            </div>
            <p onClick={copyText}>KevinAryel#3329</p>
          </ModalContactOption>
        </ModalContact>
      </ModalContainer>
    </>
  )
}
export default Contact
