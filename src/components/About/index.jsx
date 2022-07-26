import { AboutContainer, AboutGrid, AboutSection } from './style'

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutGrid>
        <AboutSection columnNumber={'1/span 2'}>
          <h2>Sobre mim</h2>
          <p>
            Eu estou estudando Análise e Desenvolvimento de Sistemas e
            recentemente completei um curso de 1000 horas em desenvolvimento
            web. Continuo estudando React e outras bibliotecas enquanto procuro
            um trabalho na área e espero começar a trabalhar com programação
            logo. Se quiser ler mais, aqui está meu {''}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1RgReMydK4oDmFZ2oR0tQpPkuJxbybN2Z/view?usp=sharing"
            >
              CV
            </a>
          </p>
        </AboutSection>
        <AboutSection columnNumber={'1'}>
          <h2>Sobre este projeto</h2>
          <p>
            Esta página está em um "estado experimental", estou usando este
            ambiente para explorar alguns elementos que eu não tive o prazer de
            usar antes. Eu recomendo que fique alerta aqui pois logo mais
            teremos boas mudanças
          </p>
        </AboutSection>

        <AboutSection columnNumber={'2'}>
          <h2>Minha Stack</h2>
          <p>
            Para além da combinação basica de HTML5, CSS3, Javascript ES6+ e
            React 17/18, eu também frequentemente utilizo router-dom5/6
            react-redux com e sem o toolkit, styled-components, axios,chakra-ui
            e material-ui
          </p>
        </AboutSection>
      </AboutGrid>
    </AboutContainer>
  )
}
export default About
