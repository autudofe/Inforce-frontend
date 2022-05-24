import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="icon ">
        <></>
      </div>
      <div className="name ">
        <p className="header_text_style">Name</p>
      </div>
      <div className="count ">
        <p className="header_text_style">Count</p>
      </div>
      <div className="weight ">
        <p className="header_text_style">Weight</p>
      </div>
      <div className="comments ">
        <p className="header_text_style">Comments</p>
      </div>
      <div className="tools ">
        <i className="fa-solid fa-box-archive " />
      </div>
    </header>
  );
};

export default Header;
