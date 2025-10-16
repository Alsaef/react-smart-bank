import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Login = ({setUser}) => {


 

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const accountNumber=e.target.accountNumber.value;
    const pin=e.target.pin.value;

    if (accountNumber==='123456789'&&pin==="1234") {
        setUser(true)
        return
    }else{
        setUser(false)
        alert('try agin')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-6xl text-primary mb-3" />
            <h2 className="text-2xl font-semibold text-primary mb-6">Bank Login</h2>
          </div>

          {/* Account Number */}
          <label className="form-control">
            <div className="label">
              <span className="label-text font-medium">Account Number</span>
            </div>
            <input
              type="text"
              name="accountNumber"
              placeholder="Enter your account number"
              className="input input-bordered w-full"
              required
            />
          </label>

          {/* PIN */}
          <label className="form-control mt-4">
            <div className="label">
              <span className="label-text font-medium">PIN</span>
            </div>
            <input
              type="password"
              name="pin"
              placeholder="****"
              className="input input-bordered w-full"
              required
            />
          </label>

          {/* Submit */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full text-white">
              Login
            </button>
          </div>

         
        </form>
      </div>
    </div>
  );
};

export default Login;
