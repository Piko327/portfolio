import React from 'react'

const About = () => {
  return (
     <>
     <section className='education_section'>
   <div className='slide-content'>
   <div className='slide-contnet'>
    <div className='card-wrapper'>
      <div className='card'>
        <div className='image-content'></div>
        <span className='overlay'></span>
        <div className='card-image'>
          <embed src="certificates\Java Advanced - January 2022 - Certificate.pdf"></embed>
        </div>
      </div>
    </div>
   </div>
   </div>


     </section>
<section className='skills_section'>
<h1 className='skills_title'>
    SKILLS
</h1>
    <ul className='skills'>
        <li className='skill'>HTML</li>
        <li className='skill'>CSS</li>
        <li className='skill'>JS</li>
        <li className='skill'>React</li>
        <li className='skill'>MySQL</li>
        <li className='skill'>GitHub</li>
        <li className='skill'>TailWind</li>
        <li className='skill'>Firebase</li>
    </ul>
</section>
  </> 
  )
}

export default About