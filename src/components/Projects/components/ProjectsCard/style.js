import styled from 'styled-components'

export const ProjectsCardStyled = styled.section`
  height: 150px;
  box-sizing: border-box;
  background: url(${(props) => props.img && props.img});
  background-size: cover !important;
  border: 2px solid rgba(130, 181, 65, 0.8);
  border-radius: 0.5rem;
  padding-top: 1rem;
  color: rgba(20, 20, 20, 1);
  display: flex;
  text-align: justify;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 45%;
    height: 200px;
  }
`

export const ProjectCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

export const ProjectTitleLink = styled.a`
  font-weight: 700;
  font-size: 1.25rem;
  background: rgba(240, 240, 240, 0.7);
  border-radius: 5px;
  :hover {
    color: #0085b6;
  }
  transition: ease 1s all;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`

export const GitHubLink = styled.a`
  :hover {
    color: #0085b6;
  }
  transition: ease 1s all;
`

export const ProjectCardFooter = styled.footer`
  padding: 1rem;
  font-weight: 500;
  background-color: rgba(240, 240, 240, 0.6);
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`
