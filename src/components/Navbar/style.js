import styled from 'styled-components'

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  @media (prefers-reduced-motion: no-preference) {
    background-color: rgba(0, 0, 0, 0.8);
    transition: 3s;
  }

  @media (min-width: 500px) {
    padding: 1.5em 3em;
  }

  div {
    img {
      height: 50px;
    }
  }
`

export const NavbarLinkNest = styled.div`
  display: flex;
  gap: 10px;
`
export const NavbarLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 0.8em;
  font-weight: bolder;
  :hover {
    animation-name: colorLoop;
    animation-duration: 1s;
    animation-iteration-count: 2;
    animation-direction: alternate-reverse;
    color: #82b541;
  }

  @media (min-width: 500px) {
    font-size: 1.2em;
  }

  @keyframes colorLoop {
    0% {
      color: #0085b6;
    }
    100% {
      color: #82b541;
    }
  }
`

export const LogoContainer = styled.div`
  animation: showUp ease-in-out 3s;
  margin-bottom: -2px;
  @keyframes showUp {
    0% {
      opacity: 0;
      transform: rotate(0deg);
    }
    25% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

window.addEventListener('scroll', () => {
  const windowTop = window.scrollY
  console.log(windowTop)
})
