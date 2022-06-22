import styled from 'styled-components'

export const HomeContainer = styled.section`
  background: url('https://i.ibb.co/pngbwBc/gif-rain.gif');
  display: flex;
  align-items: center;
  min-height: fit-content;
  width: 100%;
  height: 100vh;
  background-size: cover;
  padding: 2em;
  box-sizing: border-box;
`
export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;

  @keyframes showLeft {
    form {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .animatedHome {
    @media (prefers-reduced-motion: no-preference) {
      transform: translateX(-150%);
      animation: showLeft ease-out forwards normal;
    }
  }
  .animated1 {
    @media (prefers-reduced-motion: no-preference) {
      animation-duration: 1.5s;
    }
  }
  .animated2 {
    @media (prefers-reduced-motion: no-preference) {
      animation: showLeft ease-out 2s normal forwards;
    }
  }
  .animated3 {
    animation-duration: 2s;
    animation-delay: 2s;
  }
`

export const HomeTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 3em;

  @media (min-width: 1024px) {
    font-size: 3em;
    transition: ease all 1s;
  } ;
`
export const DescriptionHome = styled.p`
  font-size: 1.2em;

  @media (min-width: 1024px) {
    font-size: 1.5em;
    transition: ease all 1s;
  }
`
export const LinkHomeText = styled.a`
  transition: color 0.7s ease-in;
  :hover {
    color: #82b541;
  }
`
