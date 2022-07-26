import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  width: 100%;
  min-height: fit-content;
  background-color: inherit;
  height: 100vh;
  padding: 100px 5vw;
  box-sizing: border-box;
`

export const ProjectsTitle = styled.h2`
  font-size: 1.5em;
  color: wheat;

  @media (min-width: 1024px) {
    font-size: 2em;
  }
`

export const ProjectsCardContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 15px;
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`
