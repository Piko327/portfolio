import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Icons = () => {
  return (
      <div className="hero__icons">
          <a
              className="hero__icon" href="https://www.linkedin.com/in/fiki-ivanov-394463176/"
          >
              <AiFillLinkedin />
          </a>

          <a className="hero__icon" href="https://github.com/fikiivanov">
              <AiFillGithub />
          </a>
      </div>

  )
}

export default Icons