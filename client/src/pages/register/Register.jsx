import { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passRef = useRef();

    const handleClick = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = (e) => {
        e.preventDefault();
        setPassword(passRef.current.value);
    }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix_Logo" />
            <button className="loginBtn">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, Tv shows, and more.</h1>
        <h2>Watch anywhere, Cancel anytime.</h2>
        <p>
            Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
             <div className="input">
                <input type="email" placeholder="enter email" ref={emailRef}/>
                <button className="registerBtn" onClick={handleClick}>Get Started</button>
             </div>
        ) : (
            <form className="input">
                <input type="password" placeholder="password" ref={passRef}/>
                <button className="registerBtn" onClick={handleFinish}>Start</button>
            </form>
        )}
       
      </div>
    </div>
  )
}

export default Register
