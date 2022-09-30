import React from 'react'
import './home.scss';
import Img from './home.png';
export const Home = () => {
  return (
    <div id='home' className='home'>
        <div className='homebody'>
        <h1 className='heading'><span>Hey! </span> I am Hrushikesh</h1>
        <h1 className='subtitel'>Full Stack Web Developer</h1>
        <span className='desc'>hey! My name is Hrushikesh Shelke ,I am an full stack developer. I have worked as a Freelancer for more than 6-7 month. During this ,i had compleated many Full Stack projects. Projects in which i use the technologies like Reactjs,Spring Boot,Hibernate,Html5,Css,Javascript,Java,J2ee etc.</span>
        </div>
        <div  className='imgdiv'>
            <img className='img' src={Img} alt="" />
        </div>
    </div>
  )
}
