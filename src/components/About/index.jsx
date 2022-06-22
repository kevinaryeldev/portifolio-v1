import { AboutContainer, AboutGrid, AboutSection } from './style'

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutGrid>
        <AboutSection columnNumber={'1/span 2'}>
          <h2>About me</h2>
          <p>
            I currently study system analysis and development at an brazilian
            university and recently completed an 1000h course on web
            development. I keep only studying react and some libraries while i
            don't find an job on web dev but i hope begin to work with
            programming soon. If you want to read more, here is my {''}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1RgReMydK4oDmFZ2oR0tQpPkuJxbybN2Z/view?usp=sharing"
            >
              CV
            </a>
          </p>
        </AboutSection>
        <AboutSection columnNumber={'1'}>
          <h2> About this project</h2>
          <p>
            This page is now in a "experimental state", i'm using this
            enviroment to explore some elements that i haven't had the pleasure
            of using before. I recommend that you stay tuned here because soon
            we will have good changes
          </p>
        </AboutSection>

        <AboutSection columnNumber={'2'}>
          <h2>My Stack</h2>
          <p>
            Besides the basic combination of HTML5, CSS3, Javascript ES6+ and
            React17/18, i also frequently use router-dom5/6, react-redux with
            and without the toolkit, styled-components, axios, chakra-ui and
            material-ui
          </p>
        </AboutSection>
      </AboutGrid>
    </AboutContainer>
  )
}
export default About
