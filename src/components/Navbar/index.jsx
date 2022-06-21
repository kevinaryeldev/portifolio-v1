import { StyledNav, NavbarLinkNest, NavbarLink, LogoContainer } from './style'
import logo from './../../img/logo.png'

const Navbar = () => {
  return (
    <StyledNav>
      <LogoContainer>
        <img src={logo} alt="Kevin Dev Logo" />
      </LogoContainer>
      <NavbarLinkNest>
        <NavbarLink href="#">Home</NavbarLink>
        <NavbarLink href="#about">About</NavbarLink>
        <NavbarLink href="/projects">Projects</NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarLinkNest>
    </StyledNav>
  )
}
export default Navbar
