import 'assets/css/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Details from 'pages/Details';
import Cart from 'pages/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories/:idc' element={<Details />} />
          <Route path='/cart/:idc' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
