import './App.css';
import NavBar from "./components/NavBar"
// import Items from './components/Items';
import Home from "./components/Home"
import ProductView from './views/ProductView';

import { 
  BrowserRouter as Router, 
  Link,
  Routes,
  Route
} from "react-router-dom"

function App() {
  document.title = "TMPV Store"
  return (
    <div className="App">
      <Router>
        <NavBar/>

        <Link to="/products"><button>Product View</button></Link>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ProductView/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
