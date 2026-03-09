import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <footer className=" footer sm:footer-horizontal bg-neutral text-neutral-content p-13 flex flex-col md:flex-row lg:flex-row justify-evenly">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Policy</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover flex flew-row items-center gap-2">
            <FaTwitter></FaTwitter>
            ToyZone
          </a>
          <a className="link link-hover flex flew-row items-center gap-2">
            <FaLinkedin></FaLinkedin> ToyZone
          </a>
          <a className="link link-hover flex flew-row items-center gap-2">
            <FaFacebook></FaFacebook>ToyZone
          </a>
          <a className="link link-hover flex flew-row items-center gap-2">
            <FiMail></FiMail> toyzon@glmail.com
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
