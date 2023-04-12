import  picture from  "./Subject.png"
export const  Home =()=>
{
   return <div className="home">
       <div className='home_title' >
        <p className="home_title_one">Hello</p> 
        <p>, I'm Fiki </p>
        </div>
       <img className="home_img" src={picture}  alt="profile" />
     <div className='home_second_title'>
     <p className="home_second_title_one">front-end </p><p className='home_second_title_second'>developer</p>
     </div>
       <p className="home_description"> A passionate developer having an expirience  of bulding Web Sites and Aplications with JavaScript / React / CSS / HTML 
       </p>
        <button className="home_btn">
            Download CV
        </button>
        
    </div>
}