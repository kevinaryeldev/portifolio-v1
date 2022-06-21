import styled from 'styled-components'

export const AboutGrid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: 40% 40%;
  gap: 20px;
`

export const AboutContainer = styled.section`
  background-color: inherit;
  box-sizing: border-box;
  padding: 100px 0;
  width: 100%;
  height: 100vh;
  min-height: fit-content;
  display: flex;
  justify-content: center;
`
export const AboutSection = styled.div`
  box-sizing: border-box;
  border: 2px solid;
  grid-column: 1 / span 2;
  padding: 1rem;
  h2 {
    color: wheat;
    border-bottom: 2px solid white;
    padding-left: 1rem;
    padding-bottom: 2px;
  }
  p {
    color: wheat;
  }

  @media (min-width: 1024px) {
    grid-column: ${(props) => props.columnNumber && props.columnNumber};
  } ;
`
