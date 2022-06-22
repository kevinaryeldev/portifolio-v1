import styled from 'styled-components'

export const ContactContainer = styled.section`
  display: flex;
  height: 100vh;
  min-height: fit-content;
  padding: 100px 2em;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  gap: 20px;
  color: white;
  background-color: #000000e5;
  h3 {
    font-weight: 500;
    font-size: 1.7rem;
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  @media (prefers-reduced-motion: no-preference) {
    animation: fade-in 0.7s normal forwards;
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`
export const ButtonContact = styled.button`
  padding: 0.7rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  width: 140px;
  border-radius: 30px;
  border: 2px solid white;
  box-sizing: border-box;
  background-color: black;
  color: white;
  font-weight: 550;
  display: flex;
  font-family: 'Roboto Serif', serif;
  :hover {
    background-color: white;
    color: black;
    transition: ease 0.7s all;
  }
  :active {
    background-color: #0085b6;
    transition: linear 0.3s;
  }
`
export const ModalContact = styled.div`
  padding: 2rem 3rem 3rem 3rem;
  background-color: #f1f1f1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .decor-line {
    border-bottom: 1px solid gray;
    width: 100%;
  }
  .buttonContainer {
    border-bottom: 1px solid gray;
    width: 100%;
    padding-bottom: 1rem;
    display: flex;
    justify-content: flex-end;
  }
`
export const ModalContactOption = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  .decoration {
    background-color: #738adb;
    padding: 0.7rem;
    border-radius: 10px;
    color: white;
  }
  p {
    font-family: 'Roboto-serif', serif;
    cursor: pointer;
  }
`
