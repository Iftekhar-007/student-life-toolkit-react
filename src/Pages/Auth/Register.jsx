import React from "react";

const Register = () => {
  return (
    <div className="w-10/12 mx-auto min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-6 w-full bg-base-200 rounded-2xl shadow-xl overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden md:block">
          <img
            src="https://cdn.pixabay.com/photo/2019/09/30/16/29/registration-4516227_640.jpg"
            alt="Register"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right side - Form */}
        <div className="flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold mb-6">Register</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <a href="/login" className="link link-primary">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
