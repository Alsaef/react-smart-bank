import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const accountNumber = e.target.accountNumber.value;
    const pin = e.target.pin.value;

    if (name && accountNumber && pin) {
      setSuccess(true);
      e.target.reset();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="flex flex-col items-center">
            <FaUserPlus className="text-6xl text-primary mb-3" />
            <h2 className="text-2xl font-semibold text-primary mb-6">Create Account</h2>
          </div>

          {/* Name */}
          <label className="form-control">
            <div className="label">
              <span className="label-text font-medium">Full Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </label>

          {/* Account Number */}
          <label className="form-control mt-4">
            <div className="label">
              <span className="label-text font-medium">Account Number</span>
            </div>
            <input
              type="text"
              name="accountNumber"
              placeholder="Enter account number"
              className="input input-bordered w-full"
              required
            />
          </label>


            <label className="form-control mt-4">
            <div className="label">
              <span className="label-text font-medium">Select Account Type</span>
            </div>
            <select name="role" className="select select-bordered w-full" required>
              <option value="">Select role</option>
              <option value="personal">Personal Account</option>
              <option value="agent">Agent Account</option>
            </select>
          </label>

          {/* PIN */}
          <label className="form-control mt-4">
            <div className="label">
              <span className="label-text font-medium">PIN</span>
            </div>
            <input
              type="password"
              name="pin"
              placeholder="Set a 4-digit PIN"
              className="input input-bordered w-full"
              required
            />
          </label>

          

          {/* Submit */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full text-white">
              Register
            </button>
          </div>

          {success && (
            <p className="text-green-600 text-center mt-3 font-medium">
              Account created successfully! 🎉
            </p>
          )}
        </form>

        <div className="text-center mb-4">
          <Link to={"/login"}>
            Already have an account?{" "}
            <span className="text-primary font-semibold">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
