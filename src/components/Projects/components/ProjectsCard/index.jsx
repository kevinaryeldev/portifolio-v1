import {
  GitHubLink,
  ProjectCardFooter,
  ProjectCardHeader,
  ProjectsCardStyled,
  ProjectTitleLink,
} from './style'
import { FaGithub } from 'react-icons/fa'

const ProjectsCard = ({ info }) => {
  console.log(info.img)
  const img = info.img
  return (
    <>
      <ProjectsCardStyled img={img}>
        <ProjectCardHeader>
          <ProjectTitleLink href={info.link}>{info.title}</ProjectTitleLink>
          <GitHubLink href={info.githubLink}>
            <FaGithub size={'1.5rem'} />
          </GitHubLink>
        </ProjectCardHeader>
        <ProjectCardFooter>
          <p>{info.description}</p>
        </ProjectCardFooter>
      </ProjectsCardStyled>
    </>
  )
}

export default ProjectsCard
