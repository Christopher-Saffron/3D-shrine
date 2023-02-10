import React from 'react'
import './styles.scss';

import {programming, modeling, bricscad, videos, imageEditing, soundEditing, unity, microsoft,} from './SKILLSDATA.js'

const Skills = () => {
  return (
    <div className='skills__box'>
      <div className='skills__title'>SKILLS</div>
      <p className='skills__category'>Programming</p>
      <div className='skills__flexBox'>
        {programming.map((skill,index) => {
          return (
            <div key={index} className='skills__flexItem'>
              <img className='skills__icon' src={skill.skillImg} alt='' />
              <span className='skills__description'>{skill.skillName}</span>
            </div>
          )
        })}
        
      </div>
      <p className='skills__category'>Video Editing</p>
      <div className='skills__flexBox' style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
        {videos.map((skill,index) => {
          return (
            <div key={index} className='skills__flexItem'>
              <img className='skills__icon' src={skill.skillImg} alt='' />
              <span className='skills__description'>{skill.skillName}</span>
            </div>
          )
        })}
      </div>
      <p className='skills__category'>Image Editing</p>
      <div className='skills__flexBox' style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
        {imageEditing.map((skill,index) => {
          return (
            <div key={index} className='skills__flexItem'>
              <img className='skills__icon' src={skill.skillImg} alt='' />
              <span className='skills__description'>{skill.skillName}</span>
            </div>
          )
        })}
      </div>
      <p className='skills__category'>Sound Editing</p>
      <div className='skills__flexBox' style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
        {soundEditing.map((skill,index) => {
          return (
            <div key={index} className='skills__flexItem'>
              <img className='skills__icon' src={skill.skillImg} alt='' />
              <span className='skills__description'>{skill.skillName}</span>
            </div>
          )
        })}
      </div>
      <p className='skills__category'>Unity Game Engine</p>
      <div className='skills__flexBox' style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
        {unity.map((skill,index) => {
          return (
            <div key={index} className='skills__flexItem'>
              <img className='skills__icon' src={skill.skillImg} alt='' />
              <span className='skills__description'>{skill.skillName}</span>
            </div>
          )
        })}
      </div>
      <p className='skills__category'>Microsoft Software</p>
      <div className='skills__flexBox' style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
        {microsoft.map((skill,index) => {
          return (
            <div key={index} className='skills__flexItem'>
              <img className='skills__icon' src={skill.skillImg} alt='' />
              <span className='skills__description'>{skill.skillName}</span>
            </div>
          )
        })}
      </div>
      <p className='skills__category'>3D Modeling</p>
      <div className='skills__flexBox' style={{gridTemplateColumns: 'repeat(1, 1fr)'}}>
        {modeling.map((skill,index) => {
          return (
            <div key={index} className='skills__flexItem'>
              <img className='skills__icon' src={skill.skillImg} alt='' />
              <span className='skills__description'>{skill.skillName}</span>
            </div>
          )
        })}
      </div>
      <p className='skills__category'>Bricscad</p>
      <div className='skills__flexBox' style={{gridTemplateColumns: 'repeat(1, 1fr)'}}>
        {bricscad.map((skill,index) => {
          return (
            <div key={index} className='skills__flexItem'>
              <img className='skills__icon' src={skill.skillImg} alt='' />
              <span className='skills__description'>{skill.skillName}</span>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Skills