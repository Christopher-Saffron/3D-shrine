import {useState} from 'react'

import { MODELSDATA } from './MODELSDATA'

import {
  ShrineForPortfolio,
  JapaneseRender,
  MysteryForest,
  Castle,
  Ramiris,
  Ichigo,
  Rimuru,
  Mirio,
  Hayasaka,
  Shinon,
  PortfolioLight,
  Garfield,
  BodySculpting,
  UnusualShapes,
  JapaneseLamps,
  Keyboard
} from './ModelsProjects'


const ProjectViewer = ({selectedProject}) => {
  switch (selectedProject) {
    case 'Shrine for portfolio':
      return <ShrineForPortfolio  />
    break;
    case 'Water reflection render':
      return <JapaneseRender  />
    break;
    case 'Mystery Forest':
      return <MysteryForest  />
    break;
    case 'Land Sculpture':
      return <Castle  />
    break;
    case 'Ramiris':
      return <Ramiris  />
    break;
    case 'Ichigo':
      return <Ichigo  />
    break;
    case 'Rimuru':
      return <Rimuru  />
    break;
    case 'Mirio':
      return <Mirio  />
    break;
    case 'Hayasaka':
      return <Hayasaka  />
    break;
    case '[OLD 2019] Shinon':
      return <Shinon  />
    break;
    case 'Portfolio props':
      return <PortfolioLight  />
    break;
    case 'Garfield Themed Horror Map Assets':
      return <Garfield  />
    break;
    case 'Body sculpting':
      return <BodySculpting  />
    break;
    case 'Unusual shapes practice':
      return <UnusualShapes  />
    break;
    case 'Japanese Lamps':
      return <JapaneseLamps  />
    break;
    case 'My keyboard, mouse and mouse bungee':
      return <Keyboard  />
    break;
    default:
      return;
  }
}

const ModelProjects = ({setCurrentProject}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
        <div className={`projects__title ${selectedProject ? 'projects__hide' : ''}`}>
            <img src={process.env.PUBLIC_URL + '/models.svg'} alt='' /> 
            <div className='projects__mainContent_title'>MODELS</div>
        </div>
      <div className={`projects_mainContent ${selectedProject ? 'projects__hide' : ''}`}>
        <div className='projects__mainContent_grid'>
        {MODELSDATA.map(project => {
            return (
            <div  onClick={() => {setSelectedProject(project.projectName)}} key={project.projectName} className='projects__mainContent_gridElement '>
                <div className='projects__mainContent_gridElement_picture'>
                <img src={project.imgSrc} alt='' />
                <div className='projects__mainContent_gridElement_pictureShadow' />
                </div>
                <div className='projects__mainContent_gridElement_projectInfo' >
                <div className='projects__mainContent_gridElement_name'>
                    {project.projectName}
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

export default ModelProjects

