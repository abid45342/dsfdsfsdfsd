import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    return (
        <div className="flex justify-between">
         <div></div>   
         <div className="nav space-x-5">
            <Link to="/">Home</Link>
            <Link to="/career">Career</Link>
            <Link to="/about">About</Link>
         </div>
         <div className="login">
            <div className="flex items-center gap-3">
                <img src={userIcon} alt="" />
                {
                    user && user.email?
                    <button onClick={logOut} className="btn btn-neutral">LogOut</button>
                    :
                    <Link to="/auth/login" className="btn btn-neutral">Login</Link>
                }
                
            </div>
         </div>
        </div>
    );
};

export default Navbar;