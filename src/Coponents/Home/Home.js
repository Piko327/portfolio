import  picture from  "./Subject.png"
export const  Home =()=>
{
   return <div className="home">
        <h1 className='home_title'>Hey, I'm FiKi</h1>
       <img className="home_img" src={picture}  alt="profile" />
       <h2  className='home_second_title'>front-end developer</h2>
       <p className="home_description"> A passionate developer having an expirience  of bulding Web Sites and Aplications with JavaScript / React / CSS / HTML 
       </p>
        <button className="home_btn">
            Download CV
        </button>
        
    </div>
}