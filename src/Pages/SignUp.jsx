import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  //handle signup btn
  const handleSignUP = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    setErrorMessage("");
    setSuccessMessage("");
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setErrorMessage(
        "Password should be at least 8 character with a number and a letter"
      );
      return;
    } else if (!terms) {
      setErrorMessage("Please accept our terms and condition");
      return;
    }

    //email and password authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser)
          .then(() => setSuccessMessage("email verification set"))
          .catch((error) => setErrorMessage(error.message));
      })
      .catch((error) => setErrorMessage(error.message));

    console.log(name, email, password);
  };
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-3xl text-center mb-4">
        SignUp Here |{" "}
        <small>
          Already have an account?{" "}
          <span>
            <Link to={"/login"}>Login Here</Link>
          </span>{" "}
        </small>
      </h2>
      <form onSubmit={handleSignUP}>
        <input
          className="w-full py-2 px-4 mb-3 rounded-lg"
          required
          type="text"
          name="name"
          placeholder="Name Here"
        />
        <input
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
        <input type="checkbox" name="terms" id="terms" />
        <label className="ml-2" htmlFor="terms">
          Accept our terms and conditions
        </label>
        <input
          className="w-full btn btn-secondary"
          type="submit"
          value="submit"
        />
      </form>
      {errorMessage && <p className="text-red-800">{errorMessage}</p>}
      {successMessage && <p className="text-green-800">{successMessage} </p>}
    </div>
  );
};

export default SignUp;
