import React, { useRef, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const { singIn, forgetPassword, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        Swal.fire({
          title: "LogIn successful!",
          icon: "success",
          draggable: true
        });
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  }

  const handleForgotPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      alert("Please enter your email first.");
      return;
    }
    forgetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Password reset email sent!",
          icon: "success",
          draggable: true
        });
      })
      .catch((error) => {
        setError(error.code);
      });
  }

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: `Welcome, ${user.displayName}`,
          icon: "success",
          draggable: true
        });
        navigate("/");
      })
      .catch(() => {
        alert("Google login failed");
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center px-4 py-12 bg-gray-50 dark:bg-gray-900">

      {/* Form Section */}
      <div className="w-full max-w-md p-6 rounded-md shadow bg-white dark:bg-gray-800 dark:text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>

        <div className="my-6 space-y-4 bg-gray-300 dark:bg-gray-700 p-4 rounded-md">
          <button
            onClick={handleGoogleLogin}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white
               focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <FcGoogle size={24} />
            <p>Login with Google</p>
          </button>
        </div>

        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <label className="label">Email</label>
          <input
            type="email"
            ref={emailRef}
            name='email'
            className="input bg-gray-200 dark:bg-gray-700 w-full text-black dark:text-white"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <input
            type="password"
            name='password'
            className="input bg-gray-200 dark:bg-gray-700 w-full text-black dark:text-white"
            placeholder="Password"
            required
          />
          {error && <p className='text-red-500 text-xs'>{error}</p>}
          <div onClick={handleForgotPassword} className="cursor-pointer">
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-neutral w-full mt-4">Login</button>

          <p className='font-bold text-center pt-5'>
            Don’t Have An Account? <Link className='text-secondary' to='/auth/register'>Register</Link>
          </p>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden md:block max-w-md ml-10">
        <img
          src="https://i.ibb.co/hFX9RfWV/registers.jpg"
          alt="Login Illustration"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Login;
