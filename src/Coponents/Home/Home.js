import  picture from  "./Subject.png"
export const  Home =()=>
{
   return <div className="home ">
        <h1 className='home_title'>Hi, I'm Fiki</h1>
       <img className="home_img" src={picture}  alt="profile" />
       <p  className='home_decription'>front-end developer</p>
        <button className="home_btn">
            Download CV
        </button>
    </div>
}