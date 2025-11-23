import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import Row from "./movielist";
import Banner from "./banner";
import "./App.css";
import Footer from "./footer";
function App(){
  const [shows, setShows] = useState([]);
  const[filteredShows, setFilteredShows] = useState([]);
  const [SearchActive, setSearchActive] = useState(false);
  useEffect(()=>{
    fetch("https://api.tvmaze.com/shows")
    .then(res=>res.json())
    .then(data=>{ setShows(data); setFilteredShows(data);});
  },[]);
  const handleSearch = (query) => {
   if (query.trim() === ""){
    setFilteredShows(shows);
    setSearchActive(false);
    return;
   }
   const result = shows.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
   setFilteredShows(result);
   setSearchActive(true);
  };
  return(
    <div className="bg-dark text-white min-vh-100">
      
      <Navbar onSearch={handleSearch}/>
      <Banner />
      <div className="container-fluid pt-5">
        {SearchActive &&(
          <Row title="search Results" shows={filteredShows}/>
        )}
        {!SearchActive &&(
          <>
        <Row title="Trending" shows={shows.slice(0,20)} />
        <Row title="Top Rated" shows={shows.slice(20,40)} />
        <Row title="Drama" shows={shows.filter(s => s.genres.includes("Drama"))}/>
        <Row title="Comedy" shows={shows.filter(s => s.genres.includes("Comedy"))}/>
        <Row title="Action" shows={shows.filter(s => s.genres.includes("Action"))}/>
        <Row title="Crime" shows={shows.filter(s => s.genres.includes("Crime"))}/>
          </>
        )}
      
      </div>
      <footer className="bg-black text-center text-white py-3 mt-auto">
        <Footer/>
      </footer>
    </div>
  )
}
export default App;