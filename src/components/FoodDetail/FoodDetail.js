import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const FoodDetail = () => {
  const { idMeal } = useParams();
  const [details, setDetails] = useState([]);

  const {strMealThumb, strMeal} = details;
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDetails(data.meals[0]));
  }, [idMeal]);

  return (
    <Container>
      <h4>Food Details</h4>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src= {strMealThumb} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{strMeal} </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FoodDetail;
