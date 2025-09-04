import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Student Toolkit</h2>
      <div className="w-10/12 mx-auto min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-6 w-full bg-base-200 rounded-2xl  overflow-hidden">
          {/* Left side - Image */}
          <div className="hidden md:block">
            <img
              src="https://img.freepik.com/free-vector/education-learning-concept-love-reading-people-reading-students-studying-preparing-examination-library-book-lovers-readers-modern-literature-flat-cartoon-vector-illustration_1150-60938.jpg?semt=ais_incoming&w=740&q=80"
              alt="Login"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right side - Form */}
          <div className="flex flex-col justify-center p-8">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <form className="space-y-4">
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
                Login
              </button>
            </form>
            <p className="mt-4 text-sm">
              Don’t have an account?{" "}
              <a href="/register" className="link link-primary">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
