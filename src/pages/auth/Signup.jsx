import React from "react";
import "../auth/auth";
import { useState } from "react";
import BackVid from "../../components/BackVid";
import "./auth.css"

const Signup = () => {
  
  return (
    <div className="hero flex flex-col gap-[5rem]">
        <BackVid/>                        
    </div>
  );
};

export default Signup;


// const [inputs, setInputs] = useState({
//     fullName: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();         
//     console.log(inputs);
//   };
{/* <div className=" ring-2 h-fit w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1>hello henry</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="John Goat"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          

          <div
            to="/login"
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Already have an account?
          </div>

          <div className="">
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div> */}