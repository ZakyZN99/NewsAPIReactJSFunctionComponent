import React, { useState } from "react";
import logoImg from "../assets/img/news.png";

const NavBar = ({onSearch}) =>{
    const [searchData, setsearchData] = useState("");

    const handleInputChange = (e) => {
        setsearchData(e.target.value);
    };

    const handleSearch = () => {
        // Perform the search logic and pass the results to the parent component
        onSearch(searchData);
    };
    return(
        <nav>
        <div className="navbar container flex" >
            <a href="#home">
                <img src={logoImg} className="news-logo" />
            </a>

            <div className="search-bar flex">
                {/* AUTO SEARCHING */}
                {/* <input type="input" name="" className="search-input" id="search-input"  onChange={this.handleInputChange}/> */}


                {/* MANUAL SEARCHING */}
                <input type="input" name="" className="search-input" id="search-input" value={searchData} onChange={handleInputChange} />
                <button className="search-button" id="search-button" onClick={handleSearch}>Search</button>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;