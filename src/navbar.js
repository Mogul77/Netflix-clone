import React, {useState}from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaSearch, FaBell, FaUserCircle} from "react-icons/fa";
function Navbar({onSearch}) {
    const[query, setQuery] = useState("");
    const handleSearch =() => {
        onSearch(query);
    };
    return(
        <nav className="navbar navbar-dark fixed-top px-3"
        style={{background: "rgba(0,0,0,0.2)"}}>
            <span className="navbar-brand mb-0 h1 text-danger fw-bold fs-1">NETFLIX</span>
            <ul className="navbar-nav flex-row ms-4 gap-4">
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">TV Shows</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Movies</a>
                    </li>
            </ul>
            <div className="ms-auto d-flex align-items-center gap-4">
                <input type="text" className="form-control form-control-sm bg-dark text-white" placeholder="search" style={{width: "150px"}} value={query} onChange={(e) => {const value = e.target.value;
                    setQuery(value);
                    onSearch(value);
                }} />
                <FaSearch size={20} color="white" onClick={handleSearch}/>
                <FaBell size={20} color="white"/>
                <FaUserCircle size={26} color="white"/>
            </div>
        </nav>
    );
}
export default Navbar;