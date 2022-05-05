import './App.css';
import NavBar from "./components/NavBar"
import HomeView from "./views/HomeView"
import ProductView from './views/ProductView';
import Footer from "./components/Footer"

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
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
