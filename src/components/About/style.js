import styled from 'styled-components'
import myImage from './../../img/20395954.jpg'

export const AboutGrid = styled.div`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  gap: 20px;
  grid-template-columns: 90%;
  grid-template-rows: auto auto auto;
  @media (min-width: 1024px) {
    grid-template-columns: 45% 45%;
    grid-template-rows: auto auto;
  }
`

export const AboutContainer = styled.section`
  background-image: url(${myImage});
  background-size: cover;
  box-shadow: inset 0 0 1em 1em #000000e5;
  box-sizing: border-box;
  padding: 100px 5vw;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AboutSection = styled.div`
  box-sizing: border-box;
  border: 2px solid rgba(130, 181, 65, 0.8);
  border-radius: 0.5rem;
  grid-column: 1 / span 2;
  padding: 1rem;
  background-color: rgba(130, 181, 65, 0.15);
  color: rgba(240, 240, 240, 0.8);
  h2 {
    border-bottom: 2px solid white;
    padding-left: 1rem;
    padding-bottom: 2px;
  }

  @media (min-width: 1024px) {
    grid-column: ${(props) => props.columnNumber && props.columnNumber};
  } ;
`
