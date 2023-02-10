import {useState} from 'react'

import { BRICSCADDATA } from './BRICSCADDATA'

import { MapPreparation, MapStocktaking, TemporaryRoadDesign} from './BricscadProjects'

const ProjectViewer = ({selectedProject}) => {
    switch (selectedProject) {
        case 'Map preparation':
            return <MapPreparation />
          break;
          case 'Map stocktaking':
            return <MapStocktaking />
          break;
          case 'Temporary Road design':
            return <TemporaryRoadDesign />
          break;
      default:
        return;
    }
  }

const Bricscad = ({setCurrentProject}) => {
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <>
            <div className={`projects__title ${selectedProject ? 'projects__hide' : ''}`}>
                <img src={process.env.PUBLIC_URL + '/bricscad.svg'} alt='' /> 
                <div className='projects__mainContent_title'>BRICSCAD</div>
            </div>
            <div className={`projects_mainContent ${selectedProject ? 'projects__hide' : ''}`}>
            <div className='projects__mainContent_grid '>
            {BRICSCADDATA.map(project => {
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

export default Bricscad

