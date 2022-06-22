import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="divNav">
      <img className="imgLogo" src={Logo} alt="Logo Henry"></img>
      <h3 className="title">Henry Weather App</h3>
      <SearchBar className="searchBar" onSearch={onSearch}></SearchBar>
    </div>
  );
}

export default Nav;
