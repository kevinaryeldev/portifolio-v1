import {
  ProjectsCardContainer,
  ProjectsContainer,
  ProjectsTitle,
} from './style'
import { ProjectsData } from '../../common/constants'
import ProjectsCard from './components/ProjectsCard'

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Projetos:</ProjectsTitle>
      <ProjectsCardContainer>
        {ProjectsData.map((el, index) => {
          return <ProjectsCard key={index} info={el} />
        })}
      </ProjectsCardContainer>
    </ProjectsContainer>
  )
}
export default Projects
