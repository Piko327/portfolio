import React from 'react'

function Projects() {
  return (
    <section className='project_selection'>
    <div className='title_container'>
    <h2 className='second_title'>What i do</h2>
    <h1 className='main_title'>My Projects</h1>
</div>

    <ul className='project_container'>
     <li>
      <article className='project'>
        <img src='/project/AlbumStore.png' className='project_img' alt='albumStore'></img>
       
         <p className='project_description'>
         This app allows you to have your own album store with your favorite albums.
          you can also create your account and your albums and edit them.         </p>
        <div
          className='btn_container'>
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
     



    </ul>
    </section>
  )
}

export default Projects