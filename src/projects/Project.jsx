import React from 'react'
import './project.scss'
import limg from './libraryimg.png'
import limg1 from './libraryimg1.png'
import vimg from './vehicleimg.png'
import vimg1 from './vehicleimg1.png'

export const Project = () => {
  return (
    <div className='project' id='projects'>
        <div className='container'>
            <h1>Projects</h1>
            <div className='list'>
              <div className='item'>
              <label className='lable'>Library Managment System</label>
              <div className='imgbox'>
              <img className='demoimg' src={limg} alt="" />
              <img className='demoimg' src={limg1} alt="" />
              </div>
              </div>
              <div className='item'>
              <label className='lable'>Vehicle Booking Site</label>
              <div className='imgbox'>
              <img className='demoimg' src={vimg} alt="" />
              <img className='demoimg' src={vimg1} alt="" />
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}
