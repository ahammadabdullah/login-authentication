import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex gap-6 justify-center text-3xl mb-10">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/signup"}>SignUp</NavLink>
    </div>
  );
};

export default NavBar;
