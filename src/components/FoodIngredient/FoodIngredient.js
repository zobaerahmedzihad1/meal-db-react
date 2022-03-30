import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodIngredient = () => {
  const { strCategory } = useParams();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCategory(data.meals[0]));
  }, [strCategory]);

  return (
    <div>
      <h2>{strCategory} Foods</h2>
      <h5>{category.strMeal}</h5>
    </div>
  );
};

export default FoodIngredient;
