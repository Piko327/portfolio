import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { CiFacebook } from "react-icons/ci"


const Passwords = () => {

    const [user, setUser] = useState(null);
    const [otp,setOtp]=useState("")

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, "+359885643812", recaptcha);
      setUser(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async  () => {
  try {
      const data = await user.confirm(otp);
      setUser(data.user)
  } catch (error) {
    console.log(error)
  }
    };
    
    return (
      <div>
        {user?.uid == null ? (
          <div className="passwords">
            <h2>Please first authenticate !!</h2>

            <button className="btn" onClick={sendOtp}>
              Send Code
            </button>

            <div id="recaptcha"></div>
            <input onChange={(e) => setOtp(e.target.value)} type="text"></input>
            <button onClick={() => verifyOtp()} className="btn">
              Submit
            </button>
          </div>
        ) : (
          <ul>
            <li>
              <CiFacebook />
            </li>
            <li>
              <CgMail />
            </li>

            <li>
              <CgMail />
            </li>

            <li></li>

            <li></li>

            <li></li>
          </ul>
        )}
      </div>
    );
};

export default Passwords;
