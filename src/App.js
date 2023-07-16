import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import OrderOnline from "./pages/OrderOnline";
import Dining from "./pages/Dining";
import NightLife from "./pages/NightLife";

function App() {
  return (
    <>
     
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/order_online" element={<OrderOnline/>}/>
        <Route path="/dining" element={<Dining/>}/>
        <Route path="/night_life" element={<NightLife/>}/>
      </Routes>
    </Router>  
    </>
  );
}

export default App;
