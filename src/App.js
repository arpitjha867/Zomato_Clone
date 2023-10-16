import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import OrderOnline from "./pages/OrderOnline";
import Dining from "./pages/Dining";
import NightLife from "./pages/NightLife";
import FoodInfoPage from "./pages/FoodInfoPage";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {calculateTotal} from './utilities/features/cartSlice'

function App() {
  const dispatch = useDispatch();
  const {cartItems,amount,total} = useSelector(state=> state.cart);
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])
  return (
    <>
     
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/order_online" element={<OrderOnline/>}/>
        <Route path="/dining" element={<Dining/>}/>
        <Route path="/night_life" element={<NightLife/>}/>
        <Route path="/food_info_page" element={<FoodInfoPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>  
    </>
  );
}

export default App;
