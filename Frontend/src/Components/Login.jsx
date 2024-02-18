// import {useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../contects/Authprovider";
// import googleimg from "../assets/google-logo.svg";

const Login = () => {
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password };

    fetch("http://localhost:8000/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert("Invalid Email or Password(^_^)");
        } else {
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        }
      }).catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogIn}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                </div>

                {/* {error ? "Invalid Email or Password(^_^)" : " "} */}
                <p>
                  If you dont have an account please{" "}
                  <Link to={"/sign-up"} className="text-blue-700 underline">
                    Signup
                  </Link>{" "}
                  here..!!
                </p>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                    Log in
                  </button>
                </div>
              </form>

              <hr />
              {/* <div className="flex w-full items-center flex-col mt-5 gap-3">
                <button onClick={handleRegister} className=" block ">
                  {" "}
                  <img
                    src={googleimg}
                    alt=""
                    className="w-12 h-12 inline-block"
                  />{" "}
                  Login with Google
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
