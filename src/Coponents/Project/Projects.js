import React from 'react'

function Projects() {
  return (
    <section className='project_selection'>
    <div className='titles'>
    <h2 className='second_title'>What i do</h2>
    <h1 className='title'>My Projects</h1>
</div>

    <ul className='project_container'>
     <li>
      <article className='project'>
        <img src='/project/albumStore.png' className='project_img' alt='albumStore'></img>
        <div className='pseudo' />
        <h3 className='project_title'>Album Store</h3>
        <div  className='btn_container'>
      <a  href="https://album-store-ffa39.web.app/" target="_blank" rel="noopener noreferrer">
        <button className='btn'>Visit</button>
      </a>
    </div>
    <div className='btn_container'>
      <a  href="https://github.com/Piko327/moviecatalog" target="_blank" rel="noopener noreferrer">
        <button className='btn'>GitHub</button>
      </a>
    </div>
      </article>
     </li> 



     <li>
      <article className='project'>
        <h3 className='project_title'>Example </h3>
        <div>
      <a  href="" target="_blank" rel="noopener noreferrer">
        <button className='btn'>Visit</button>
      </a>
    </div>
    <div >
      <a  href="" target="_blank" rel="noopener noreferrer">
        <button className='btn'>GitHub</button>
      </a>
    </div>
      </article>
     </li> 
     <li>
      <article className='project'>
        <h3 className='project_title'>Example </h3>
        <div>
      <a  href="https://bobbyhadz.com" target="_blank" rel="noopener noreferrer">
        <button className='btn'>Visit</button>
      </a>
    </div>
    <div>
      <a  href="https://bobbyhadz.com" target="_blank" rel="noopener noreferrer">
        <button className='btn'>GitHub</button>
      </a>
    </div>
      </article>
     </li> 
    </ul>
    </section>
  )
}

export default Projects