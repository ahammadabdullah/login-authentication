import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // clear messages
    setErrorMessage("");
    setSuccessMessage("");
    //login authentication
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result.user.emailVerified) {
          setSuccessMessage("Successfully logged In");
        } else {
          setErrorMessage("Please verify your email address");
        }
      })
      .catch((error) => setErrorMessage(error.message));
  };
  const handleForgetPassword = () => {
    setErrorMessage("");
    setSuccessMessage("");
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        setSuccessMessage("password reset mail sent");
      })
      .catch((error) => setErrorMessage(error.message));
    console.log("password Forgot", emailRef.current.value);
  };
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-3xl text-center mb-4">login Here</h2>
      <form onSubmit={handleLogin}>
        <input
          ref={emailRef}
          className="w-full py-2 px-4 mb-3 rounded-lg"
          required
          type="email"
          name="email"
          placeholder="Email Here"
        />
        <input
          className="w-full py-2 px-4 mb-3 rounded-lg "
          required
          type="password"
          name="password"
          placeholder="Password Here"
        />
        <p className="mb-4 cursor-pointer" onClick={handleForgetPassword}>
          forget password?
        </p>
        <input
          className="w-full btn btn-secondary"
          type="submit"
          value="submit"
        />
        {errorMessage && <p className="text-red-800">{errorMessage}</p>}
        {successMessage && <p className="text-green-800">{successMessage}</p>}
      </form>
      <p className="text-center mt-4">
        New to this website?{" "}
        <span>
          <Link to={"/signup"}>SignUp Here</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
