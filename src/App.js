// Estilos
import './App.css';

// Components
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Cart/Cart';
import Home from './Components/Views/Home';
import Search from './Components/Views/Search';

// React Router Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Context/ItemsContext';

function App() {

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Cart />
          {/* {true ? <Cart /> : null} */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Search' element={<Search />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
