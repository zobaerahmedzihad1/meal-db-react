import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFoods(data.meals));
  }, [search]);

  const searchFood = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1 className="text-center text-uppercase mb-4">Delicious Food</h1>
      <InputGroup className="mb-3 mx-auto w-50 mb-5">
        <FormControl
          onChange={searchFood}
          placeholder="Search Your Favorite Food"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-info" id="button-addon2">
          Button
        </Button>
      </InputGroup>
      <Container>
        <h6>AVAILABLE ITEMS : {foods.length} </h6>
        <Row>
          {foods.map((food) => (
            <Food food={food} key={food.idMeal}></Food>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Foods;
