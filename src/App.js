import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FoodDetail from './components/FoodDetail/FoodDetail';
import FoodIngredient from './components/FoodIngredient/FoodIngredient';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/foods' element={<Foods/>} />
        <Route path='/food/:idMeal' element={<FoodDetail/>}>
          <Route path=':strCategory' element={<FoodIngredient/>}></Route>
        </Route>
        <Route path='/about' element={<About/>} />
        <Route path='*' element= {<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
