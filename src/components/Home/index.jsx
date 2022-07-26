import {
  DescriptionHome,
  HomeContainer,
  HomeContent,
  HomeTitle,
  LinkHomeText,
} from './style'

const Home = () => {
  return (
    <HomeContainer id="home">
      <HomeContent className="content">
        <HomeTitle className="animated1 animatedHome">
          Olá, meu nome é Kevin Aryel
        </HomeTitle>
        <DescriptionHome className="animated2 animatedHome">
          Sou um dev front end soteropolitano, atualmente trabalhando com React
        </DescriptionHome>
        <DescriptionHome className="animated3 animatedHome">
          Sinta-se livre para explorar ou{' '}
          <LinkHomeText href="#contact">me contactar</LinkHomeText>
        </DescriptionHome>
        <DescriptionHome>
          Visite também meu{' '}
          <LinkHomeText
            target="_blank"
            href="https://www.github.com/kevinaryeldev"
          >
            repositório.
          </LinkHomeText>
        </DescriptionHome>
      </HomeContent>
    </HomeContainer>
  )
}
export default Home
