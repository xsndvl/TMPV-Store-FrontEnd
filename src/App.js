import './App.css';
import NavBar from "./components/NavBar"
import HomeView from "./views/HomeView"
import ProductView from './views/ProductView';
import Footer from "./components/Footer"
import SpecificProductView from './views/SpecificProductView';
import DetailedProductView from './views/DetailedProductView';

import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom"

function App() {
  document.title = "TMPV Store"
  return (
    <div className="App">
      <Router>
        <NavBar/>

        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/products" element={<ProductView/>}/>
          <Route path="/products/:type" element={<SpecificProductView/>}/>
          <Route path="/products/:type/:id" element={<DetailedProductView/>}/>
        </Routes>

        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
