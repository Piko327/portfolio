import  picture from  "./Subject.png"
export const  Home =()=>
{
   return <div className="home">
        <h1 className='home_title'>Hi, I'm Fiki</h1>
       <img className="home_img" src={picture}  alt="profile" />
       <h2  className='home_second_title'>front-end developer</h2>
       <p className="home_description">i craft user interfaces and aplications using modern frontend technologies</p>
        <button className="home_btn">
            Download CV
        </button>
        
    </div>
}