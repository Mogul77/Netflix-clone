import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 function Banner(){
    const [show, setShow] = useState(null);
    useEffect(()=>{
        fetch("https://api.tvmaze.com/shows")
        .then(res => res.json())
        .then(data => { const randomshow = data[Math.floor(Math.random() * data.length)];
        setShow(randomshow);
        });
    },[]);
    if (!show) return null;
    return(
        <div className = "text-white d-flex align-items-end banner-background"
        style={{
            height: "70vh",
            paddingtop:"60px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${show.image?.original})`
        }}>
            <div className="banner-overlay"></div>
            <div className="p-4 bg-dark bg-opacity-50 w-100 banner-content">
                <h1 className="fw-bold">{show.name}</h1>
                <p className="small">{show.summary?show.summary.replace(/<[^>]+>/g,"").slice(0,180)+"..." 
                :"No description available"}</p>
                <button className="btn btn-danger btn-sm me-2 fw-bold">play</button>
                <button className="btn btn-secondary btn-sm fw-bold">More Info</button>

            </div>
        </div>
    );
}
export default Banner;