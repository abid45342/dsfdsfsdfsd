import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";




const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    
        const email = form.get("email");
        const password= form.get("password");
        userLogin(email,password)
        .then((result)=>{
          const user = result.user;
          setUser(user);
        })
        .catch((err) => {
          alert("wrong ",err.code)
        });



  }
    return (
        <div className=" flex justify-center">
            
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
            <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center font-semibold">
          Dont’t Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>

    </div>
        </div>
    );
};

export default Login;