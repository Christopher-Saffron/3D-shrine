import React from 'react'
import Webdev from './Webdev/Webdev'
import Models from './Models/Models'
import Videos from './Videos/Videos'
import Bricscad from './Bricscad/Bricscad'
import Unity from './Unity/Unity'
import Skills from './Skills/Skills'
import Blog from './Blog/Blog'
import Resume from './Resume/Resume'

const ContentViewer = ({mainContent}) => {
  return (
    <>
        {mainContent === 'WEBDEV' ? <Webdev /> 
      : mainContent === 'MODELS' ? <Models /> 
      : mainContent === 'VIDEOS' ? <Videos  />
      : mainContent === 'BRICSCAD' ? <Bricscad  />
      : mainContent === 'UNITY' ? <Unity  /> 
      : mainContent === 'SKILLS' ? <Skills  /> 
      : mainContent === 'BLOG' ? <Blog  /> 
      : mainContent === 'RESUME' ? <Resume  /> 
      : ''}
    </>
  )
}

export default ContentViewer