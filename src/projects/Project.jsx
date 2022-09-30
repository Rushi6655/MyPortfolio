import React from 'react'
import './project.scss'
import limg from './libraryimg.png'
import limg1 from './libraryimg1.png'
export const Project = () => {
  return (
    <div className='project' id='projects'>
        <div className='container'>
            <h1>Projects</h1>
            <div className='list'>
              <div className='item'>
              <label className='lable'>Library Mangment System</label>
              <img className='demoimg' src={limg} alt="" />
              <img className='demoimg' src={limg1} alt="" />
              </div>
              
            </div>
        </div>
    </div>
  )
}
