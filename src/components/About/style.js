import styled from 'styled-components'

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
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 40%,
    rgba(5, 5, 5, 1) 70%
  );
  box-sizing: border-box;
  padding: 100px 0;
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
