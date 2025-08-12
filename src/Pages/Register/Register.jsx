import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [showpassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo)
    // password validate
    const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    if (!passwordRegExp.test(password)) {
      setErrorMessage(' Must be more than 6 characters, including At least one number, At least one lowercase letter,At least one uppercase letter')
      return;
    }
    
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        Swal.fire({
          title: "Register successful!",
          icon: "success",
          draggable: true
        })
        navigate("/")
      })
      .catch((error) => {
        console.log(error.message)
        setErrorMessage(error.message);
      });
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
      
      {/* Form Section */}
      <div className="card bg-base-100 w-full max-w-md shadow-2xl p-6 md:mr-10">
        <h2 className='bg-gray-200 font-semibold mt-2 mb-6 text-3xl text-center rounded-md py-3'>Register your account</h2>
        <div className="card-body bg-gray-100 dark:bg-gray-100 dark:text-gray-800">
          <form onSubmit={handleRegister} className="fieldset relative">
            <label className="label">Your name</label>
            <input type="text" name='name' className="input text-black bg-gray-200" placeholder="Your name" required />

            <label className="label mt-4">Photo URL</label>
            <input type="text" name='photo' className="input text-black bg-gray-200" placeholder="Photo URL" required />

            <label className="label mt-4">Email</label>
            <input type="email" name='email' className="input text-black bg-gray-200" placeholder="Email" required />

            <label className="label mt-4">Password</label>
            <input
              type={showpassword ? 'text' : 'password'}
              name='password'
              className="input text-black bg-gray-200"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showpassword)}
              className='btn btn-xs p-3 absolute top-73 right-10'
            >
              {showpassword ? <FaEyeSlash /> : <FaEye />}
            </button>

            {errorMessage && <p className='text-red-500 mt-2'>{errorMessage}</p>}

            <button type="submit" className="btn btn-neutral mt-6 w-full">Register</button>
            <p className='font-bold text-center pt-5'>
              Already Have An Account? <Link className='text-secondary' to='/auth/login'>Login</Link>
            </p>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block max-w-md">
        <img
          src="https://i.ibb.co.com/hFX9RfWV/registers.jpg"
          alt="Register Illustration"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Register;