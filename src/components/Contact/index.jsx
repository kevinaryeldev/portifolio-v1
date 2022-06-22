import { useState } from 'react'
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

  return (
    <>
      <ContactContainer id="contact">
        <h3>Say hello or send me a feedback</h3>
        <ButtonContact as="a" href="mailto:kevinaryel.dev@gmail.com">
          Work related
        </ButtonContact>
        <ButtonContact onClick={handleModal}>Just informal</ButtonContact>
      </ContactContainer>
      <ModalContainer open={modalOpen} onClick={handleModal}>
        <ModalContact>
          <div className="decor-line" />
          <ModalContactOption>
            <div className="decoration">
              <FaDiscord /> Discord
            </div>
            <p> KevinAryel#3329</p>
          </ModalContactOption>
        </ModalContact>
      </ModalContainer>
    </>
  )
}
export default Contact
