import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {  Link, Navigate, useLocation } from "react-router-dom";
import './Mcqscreen2.css'

export default function Actions({ page, handleAction, questions, review }) {
  const location = useLocation();
  const [count, setCount] = useState();
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleSubmit = () => {
   const list = questions.reduce((a, b) => {
      if (b.options.some(item => item.checked)) {
        a += 20;
      }
      return a;
    }, 0);
    setCount(list);
    setShow(true)
    
  };

const handleReview = ()=> {
  review(true);
  setShow(false);
  
}


  return (
    <div className="Actions my-5">
      { page && page > 1 && page < 5 && (
        <button
          type="button"
          className="btn btn-primary mt-3 mx-2"
          onClick={() => handleAction(page - 1)}
        >
          Prev Question
        </button>
      )}
      <button
        type="button"
        className="btn btn-primary mt-3 mx-2"
        onClick={() => handleAction(page === 5 ? 5 : page + 1)}
      >
        Next Question
      </button>
       {page && page === 5 && (
        <Button variant="primary mt-3 mx-2" onClick={handleSubmit}>
          Submit Question
        </Button>
       )
        
       /* <button type="button" className="btn btn-primary mt-3 mx-2">Submit Question</button>  */}
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {location && location.state.userName} has {count && count >= 70 ? `Passed` : 'Failed'} and you have scored {count}%
          </p>
        </Modal.Body>
         <Modal.Footer> 
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
           <Button variant="primary" onClick={handleReview} >Review</Button>      
        </Modal.Footer>
      </Modal> 

    </div>
  );
} 
