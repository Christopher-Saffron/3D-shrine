import {useState} from 'react'
import { WEBDEVDATA } from './WEBDEVDATA'

import { SzafranProjekt, Portfolio2D, Portfolio3D, PortfolioChoose, SzafranProjektNextJs, Instagram, Amazon, Airbnb, Hulu, Facebook, Blog, MementoMori, SimpleServer, OldServer, TicTacToe, Battleships, Restaurant, Pomodoro, JpLearning } from './WebdevProjects'

const ProjectViewer = ({selectedProject}) => {
  switch (selectedProject) {
    case 'SZAFRAN PROJEKT':
      return <SzafranProjekt  />
    break;
    case 'SZAFRAN PROJEKT migration to NEXTJS':
      return <SzafranProjektNextJs  />
    break;
    case 'Instagram':
      return <Instagram  />
    break;
    case 'Amazon':
      return <Amazon  />
    break;
    case 'Nippon Air':
      return <Airbnb  />
    break;
    case 'Hulu':
      return <Hulu  />
    break;
    case 'Facebook':
      return <Facebook  />
    break;
    case 'Blog':
      return <Blog  />
    break;
    case 'Memento Mori':
      return <MementoMori  />
    break;
    case 'File archive for bricscad projects':
      return <SimpleServer  />
    break;
    case 'File archive for bricscad projects - older version; client + server':
      return <OldServer  />
    break;
    case '[2019] TIC-TAC-TOE with a (fake) chat':
      return <TicTacToe  />
    break;
    case '[2019] Classic Battleship game':
      return <Battleships  />
    break;
    case '[2019] Restaurant website':
      return <Restaurant  />
    break;
    case '[2019] Pomodoro website':
      return <Pomodoro  />
    break;
    case '[2019] Japanese learning website':
      return <JpLearning  />
    break;
    case 'Portfolio 2D':
      return <Portfolio2D  />
    break;
    case 'Portfolio 3D':
      return <Portfolio3D  />
    break;
    case 'Portfolio START':
      return <PortfolioChoose  />
    break;
    default:
      return;
  }
}

const Webdev = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
        <div className={`projects__title ${selectedProject ? 'projects__hide' : ''}`}>
            <img src={process.env.PUBLIC_URL + '/webdev.svg'} alt='' /> 
            <div className='projects__mainContent_title'>WEB DEVELOPMENT </div>
        </div>
      <div className={`projects_mainContent ${selectedProject ? 'projects__hide' : ''}`}>
        <div className='projects__mainContent_grid'>
          {WEBDEVDATA.map(project => {
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
                  <div className='projects__mainContent_gridElement_iconsRow' >
                  {project?.images && project.images.map(tag => {
                      return <img key={tag} className='projects__mainContent_gridElement_icon' src={tag} alt='' />
                    })}
                  </div>
                  <div className='projects__mainContent_gridElement_tags'>
                    {project.tags.map((tag, index) => {
                      return <div key={index} className='projects__mainContent_gridElement_tag'><span style={{color: '#ffaaaa'}}>#</span>{tag}</div>
                    })}
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

export default Webdev
