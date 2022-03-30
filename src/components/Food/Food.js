import React from "react";
import {Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Food.css";

const Food = ({ food }) => {
  // const showDetails = () => {
  //      console.log("clicked");
  // }
  // console.log(food);
  const { strMeal, strMealThumb , idMeal} = food;
  return (
    <Col Lin md={4} className="mb-4 cursor-pointer">
      <div className="card">
        <div className="image">
          <img style={{ width: "300px" }} src={strMealThumb} alt="" />
        </div>
        <h5>Name : {strMeal} </h5>
        <Link to={`/food/${idMeal}`}>Show Details</Link>
      </div>
    </Col>
  );
};

export default Food;

/*
<Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.ImgOverlay>
            <Card.Title>{strMeal} </Card.Title>
          </Card.ImgOverlay>
          <Link to=':food'>Show Details</Link>
          <Button onClick={showDetails} variant="secondary">Show Details</Button> 
          </Card.Body>
          </Card>
*/
