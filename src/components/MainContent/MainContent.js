import React, {useEffect} from 'react'
import ContentViewer from './Content/ContentViewer';
import './styles.scss'

const MainContent = ({mainContent}) => {
  let contentHolder = document.querySelector('.contentHolder');

 ///ON EVERY CATEGORY CHANGE RESTART IT
  useEffect(() => {
    if (mainContent === undefined) {return}
    
    document.querySelector('.contentHolder').classList.remove('contentHolder-hidden');
    
  }, [mainContent])

  return (
      <div className={`contentHolder ${mainContent === 'RESUME' && 'contentHolder-special'}  ${mainContent === null ? 'contentHolder-beforeNull' : ''}`}>
        <div className='contentBox '>
          <div className='content__name' onClick={() => { contentHolder.classList.toggle('contentHolder-hidden')}}>
            {mainContent}
          </div>
          <ContentViewer mainContent={mainContent} />
        </div>
      </div>
  )
}

export default MainContent