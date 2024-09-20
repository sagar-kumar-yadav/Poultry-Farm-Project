import React from "react";
import "./footer.css";
import Linkdin from "/pIcons/linkedin-ico.png";
import Github from "/pIcons/github-ico.png";
import Instagram from "/pIcons/insta-ico.png";
import Mail from "/pIcons/email.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_upper">
          <div className="footer_row1">
            <h2 className="footer_heading">
              <span>Social</span>
            </h2>
            <div className="footer_social_cont">
              <a href="https://www.linkedin.com/in/sagar-kumar-yadav/">
                <img className="main_footer_icon" src={Linkdin} alt="icon" />
              </a>
              <a href="https://github.com/sagar-kumar-yadav">
                <img className="main_footer_icon" src={Github} alt="icon" />
              </a>
              <a href="https://www.instagram.com/theproffnextdoor/">
                <img className="main_footer_icon" src={Instagram} alt="icon" />
              </a>
              <a href="mailto:sagarkryadav31@gmail.com">
                <img className="main_footer_icon" src={Mail} alt="icon" />
              </a>
            </div>
          </div>
          <div className="footer_row2">
            <h4 className="footer_heading1">Aadarshudyoug Poultry Farm</h4>
            <p className="footer_short_desc">
              <span className=" ">sagarkryadav31@gmail.com</span>
              <span>+91 8578858827</span>
              <span>Pune, Maharashtra</span>
            </p>
          </div>
        </div>

        {/* footer lower */}
        {/* <div className="footer_lower">
          &copy; Copyright 2024. Made by <a className="w-2" href="https://sagar-kumar-yadav.netlify.app/">Sagar Yadav</a>
        </div> */}

        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm  font-semibold py-1">
              &copy; Copyright 2024. Made by{" "}
              <span id="get-current-year">2024</span>
              <Link
                to="https://sagar-kumar-yadav.netlify.app/"
                className=" hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Sagar Yadav
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
