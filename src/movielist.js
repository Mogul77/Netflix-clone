import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function Row({title, shows}){
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleOpen = (movie) =>{
        setSelectedMovie(movie);
        setShowModal(true);
    };
    const handleClose =() => {
        setShowModal(false);
        setSelectedMovie(null);
    };
    return(
        <div className="mt-4">
            <h4 className="fw-bold mb-3">{title}</h4>
            <div className="d-flex overflow-auto">
                {shows.map((movie)=>(
                    <div 
                    key={movie.id}
                    className="me-2 movie-card"
                    style={{minWidth: "165px"}}
                    onClick={()=>handleOpen(movie)}
                    >
                        <img
                        src={movie.image?.medium}
                        alt={movie.name}
                        className="img-fluid rounded shadow" />
                        <p className="small mt-2 text-center">{movie.name}</p>
                        </div>

                ))}
            </div>

            <Modal show={showModal} onHide={handleClose} centered contentClassName="bg-black text-white
            
            
            ">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedMovie?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedMovie?.image?.medium} alt="" className="img-fluid rounded mb-3"/>
                    <p dangerouslySetInnerHTML={{__html:selectedMovie?.summary}}></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Row;