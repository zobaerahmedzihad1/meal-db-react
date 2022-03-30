import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodIngredient = () => {
  const { strCategory } = useParams();
  const [category, setCategory] = useState([]);
  useEffect(() => {
       const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken`
       fetch()
  }, [strCategory]);

  return (
    <div>
      <h3>Food Ingredient</h3>
    </div>
  );
};

export default FoodIngredient;
