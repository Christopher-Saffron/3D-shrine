import React, {useEffect} from 'react'

const MainContent = ({mainContent}) => {
  let contentHolder = document.querySelector('.contentHolder');

 ///ON EVERY CATEGORY CHANGE RESTART IT
  useEffect(() => {
    if (mainContent === undefined) {return}
    
    document.querySelector('.contentHolder').classList.remove('contentHolder-hidden');
    
  }, [mainContent])

  return (
    <div className={`contentHolder ${mainContent === null ? 'contentHolder-beforeNull' : ''}`}>
      <div className='contentBox'>
        <div className='content__name' onClick={() => { contentHolder.classList.toggle('contentHolder-hidden')}}>
          {mainContent}
        </div>
      </div>
    </div>
  )
}

export default MainContent