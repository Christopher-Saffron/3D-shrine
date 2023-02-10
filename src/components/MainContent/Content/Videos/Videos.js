import {useState} from 'react'
import { LoopedVideos, WebsiteVideos, TiktokVideos, SimpleEditing, GamingEditing } from './VideosComponents'
import {VIDEOSDATA} from './VIDEOSDATA'

const ProjectViewer = ({selectedProject}) => {
  switch (selectedProject) {
    case 'Looped videos editing style':
      return <LoopedVideos  />
    break;
    case 'Footage editing for websites':
      return <WebsiteVideos  />
    break;
    case 'Tiktok style editing':
      return <TiktokVideos />
    break;
    case 'Simple editing':
      return <SimpleEditing  />
    break;
    case 'Gaming video editing':
      return <GamingEditing  />
    break;
    default:
      return;
  }
}

const Videos = () => {
  const [selectedProject, setSelectedProject] = useState(null);
    return (
      <>
          <div className={`projects__title ${selectedProject ? 'projects__hide' : ''}`}>
              <img src={process.env.PUBLIC_URL + '/videos.svg'} alt='' /> 
              <div className='projects__mainContent_title'>VIDEO EDITING</div>
          </div>
          <div className={`projects_mainContent ${selectedProject ? 'projects__hide' : ''}`}>
          <div className='projects__mainContent_grid '>
          {VIDEOSDATA.map(project => {
          return (
            <div onClick={() => {setSelectedProject(project.projectName)}} key={project.projectName} className='projects__mainContent_gridElement'>
              <div className='projects__mainContent_gridElement_picture'>
                <img src={project.imgSrc} alt='' />
                <div className='projects__mainContent_gridElement_pictureShadow' />
              </div>
              <div className='projects__mainContent_gridElement_projectInfo' >
                <div className='projects__mainContent_gridElement_name'>
                  {project.projectName}
                </div>
                <div className='projects__mainContent_gridElement_description'>
                  {project.description}
                </div>
              </div>
            </div>
            )
        })}
          </div>
        </div>
        {selectedProject && (
        <>
          <div className='project__tab'>
            <div className='projectShow__box'>
              <ProjectViewer selectedProject={selectedProject} />
            </div>
            
          </div>
          <div className='project_returnButton' onClick={() => {setSelectedProject(null)}}>RETURN to PROJECTS</div>
        </>
      )}
      </>
    )
  }

export default Videos