import React from 'react'
import './contact.scss'
import wicon from './whatsapp.png';
import iicon from './instagram.png';
import gicon from './gmail.png'; 
export const Contact = () => {
  return (
    <div id='contact' className='contactout'>
        <div className='contact'>
        <div className='homebody'>
        <h1 className='heading'>Contact Me</h1>
        <span>This are some of my Social media contact platforms ,where you can contact me directly. </span>
        </div>
        <div className='contactform'>
            <a href="mailto : rushishelke2000@gmail.com">
            <img src={gicon} alt="" className='icons'/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B919595992021&text&app_absent=0">
            <img src={wicon} alt=""  className='icons'/>
            </a>
            <a href="https://www.instagram.com/14_rushi_shelke/">
            <img src={iicon} alt=""  className='icons' />
            </a>
            
        </div>
        </div>
        <div className='footer' id="footer">
            <span className='text1'>Footer</span>
            <div className='footerbody'>
            <span className='text2'>Thank You For Visiting</span>
            </div>
        </div>
    </div>
  )
}
