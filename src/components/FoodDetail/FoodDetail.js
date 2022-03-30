import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";

const FoodDetail = () => {
  const { idMeal } = useParams();
  const [details, setDetails] = useState([]);

  const { strMealThumb, strMeal, strInstructions, strCategory } = details;
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDetails(data.meals[0]));
  }, [idMeal]);

  return (
    <Container>
      <div className="card mb-3 mt-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={strMealThumb}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h2 className="card-title">{strMeal} </h2>
              <p className="card-text">
                <span style={{ fontWeight: "bold" }}>INSTRUCTIONS :</span>{" "}
                {strInstructions?.slice(0, 300)}
              </p>
            </div>
          </div>
          <div className="col-md-4">
               <Link to={`/food/${idMeal}/${strCategory}`}>Show Ingredient</Link>
               <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FoodDetail;
