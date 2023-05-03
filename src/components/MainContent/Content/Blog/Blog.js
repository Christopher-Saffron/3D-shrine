import React from 'react'
import './styles.scss'

const Blog = () => {
  return (
    <div className='blog__holder'>
      <span>Blog section has been moved to a seperate website, would You like to visit it?</span>
      <a target="_blank" rel="noopener noreferrer" href='https://bloghavir.vercel.app/' className='blog__visit'>
       Visit <span>&#62;&#62;</span>
      </a>
    </div>
  )
}

export default Blog