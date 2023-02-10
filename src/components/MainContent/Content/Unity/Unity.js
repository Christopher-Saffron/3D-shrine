import {useState} from 'react'

import { UNITYDATA } from './UNITYDATA'

import { ReplacingParts, AddingParts, WorldCreation, CreatingToggles } from './UnityProjects'

const ProjectViewer = ({selectedProject}) => {
  switch (selectedProject) {
    case 'Replacing work-heavy parts such as hair and clothing':
      return <ReplacingParts />
    break;
    case 'Adding new assets to the avatar':
      return <AddingParts />
    break;
    case 'World creation/upload':
      return <WorldCreation/>
    break;
    case 'Creating toggles and emotes':
      return <CreatingToggles  />
    break;
    default:
      return;
  }
}


const Unity = ({setCurrentProject}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
        <div className={`projects__title ${selectedProject ? 'projects__hide' : ''}`}>
            <img src={process.env.PUBLIC_URL + '/unity.svg'} alt='' /> 
            <div className='projects__mainContent_title'>UNITY - VRCHAT SDK</div>
        </div>
      <div className={`projects_mainContent ${selectedProject ? 'projects__hide' : ''}`}>
        <div className='projects__mainContent_grid '>
        {UNITYDATA.map(project => {
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

export default Unity

