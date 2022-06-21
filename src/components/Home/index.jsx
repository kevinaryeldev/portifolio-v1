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
          Hi, my name is Kevin Aryel
        </HomeTitle>
        <DescriptionHome className="animated2 animatedHome">
          I'm a front end developer based in Brazil, currently working with
          React
        </DescriptionHome>
        <DescriptionHome className="animated3 animatedHome">
          Feel free to explore or{' '}
          <LinkHomeText href="#contact">contact me</LinkHomeText>
        </DescriptionHome>
      </HomeContent>
    </HomeContainer>
  )
}
export default Home
