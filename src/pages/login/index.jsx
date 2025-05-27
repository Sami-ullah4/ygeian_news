import React, { useState } from "react";
import google from "../../assets/icons/search 1.png";
import link from "../../assets/icons/linkedin 1.png";
import eye from "../../assets/icons/Vector (1).png";
import bg from "../../assets/bg/login_bg.png";
import gradient from "../../assets/bg/gradient.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("User Login Data:", user);
    // You can now send user.userName and user.password to backend
  };
  return (
    <>
      <section className="flex w-[100%] overflow-hidden">
        {/* first div */}
        <div className="flex my-4 flex-col justify-center items-center w-full lg:w-[60%] gap-3 ">
          <h1 className="font-[600] text-center text-[24px] lg:text-[40px] leading-[150%] text-[#002A3C] lg:mb-6">
            Login to Ygeian FOCUS
          </h1>

          {/* Main content container */}
          <div className="flex flex-col  lg:flex-col bg-white items-center justify-center gap-3 lg:gap-6">
            {/* Social login section */}
            <div className="flex flex-col gap-3 w-full px-4 lg:max-w-[640px]">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                <div className="lg:w-[215px] w-[100%] border border-[#D6E0E4] p-3 rounded-full flex justify-center items-center gap-2 hover:bg-gray-50 transition-colors">
                  <img
                    src={google}
                    alt="google icon"
                    className="w-[24px] h-[24px]"
                  />
                  <h1 className="font-semibold text-[16px] leading-[150%] text-[#002A3C]">
                    Login with Google
                  </h1>
                </div>
                <div className="w-[100%] lg:w-[215px]  border border-[#D6E0E4] p-3 rounded-full flex justify-center items-center gap-2 hover:bg-gray-50 transition-colors">
                  <img
                    src={link}
                    alt="linkedin icon"
                    className="w-[24px] h-[24px]"
                  />
                  <h1 className="font-semibold text-[16px] leading-[150%] text-[#002A3C]">
                    Login with LinkedIn
                  </h1>
                </div>
              </div>

              <p className="font-[400] text-[16px] leading-[150%] text-[#375E6C] text-center hidden lg:block">
                or with email
              </p>
            </div>

            {/* Divider for mobile */}
            <div className="lg:hidden w-full px-4 max-w-[480px]">
              <div className="flex items-center gap-2">
                <hr className="flex-1 border-[#D6E0E4]" />
                <span className="text-[#375E6C]">or</span>
                <hr className="flex-1 border-[#D6E0E4]" />
              </div>
            </div>

            {/* Email login form */}
            <div className="flex flex-col items-center w-full gap-3 lg:max-w-[480px]">
              <div className="flex gap-2 flex-col w-full max-w-[480px]  px-4">
                {/* Input fields */}
                <form onSubmit={handleOnSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="userName"
                    value={user.userName}
                    onChange={handleOnChange}
                    className="w-full border border-[#D6E0E4] p-3 rounded-[12px] placeholder:text-[#375E6C] focus:outline-[#43B3E5]"
                    placeholder="Username or email"
                  />
                  <div className="relative w-full">
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleOnChange}
                      className="w-full h-[48px] border border-[#D6E0E4] pr-12 pl-4 rounded-[12px] placeholder:text-[#375E6C] text-[16px] focus:outline-[#43B3E5]"
                      placeholder="Password"
                    />
                    <img
                      src={eye}
                      alt="eye icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer w-[24px] h-[15.51px]"
                    />
                  </div>
                </form>
                <div className="flex justify-center lg:justify-end w-full">
                  <Link to="/resetPassword">
                    <p className="font-[600] text-[14px] leading-[150%] text-[#43B3E5] hover:underline cursor-pointer">
                      <Link to="/resetPassword"> Forgot your password?</Link>
                    </p>
                  </Link>
                </div>
              </div>

              {/* Login button */}
              <div className="w-full max-w-[480px] mt-4 px-4">
                <button className="bg-[#132D5E] text-white w-full rounded-full text-center p-3 hover:bg-[#0F2352] transition-colors">
                  Login
                </button>
              </div>
            </div>
          </div>

          {/* Show only on small screens */}
          <hr className="block lg:hidden" />

          <p className="font-[400] text-[16px] leading-[150%] text-[#375E6C]">
            New to Ygeian FOCUS?
            <span className="block lg:hidden">
              <br />
            </span>
            <span className="text-[#43B3E5] hover:underline cursor-pointer">
              <Link to="/singup"> Register now.</Link>
            </span>
          </p>
        </div>
        {/* 2nd div */}
        <div className="relative w-[40%] h-[300px] lg:h-[100vh] hidden lg:block">
          <img
            src={bg}
            alt="cover image"
            className="w-full h-[100vh] object-cover"
          />
          <img
            src={gradient}
            alt="gradient"
            className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
          />
          <h1 className="absolute top-[69%] text-white  font-[600] text-[40px] leading-[130%] z-20 px-4  ">
            "Because every decision starts with the right information".
          </h1>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
