import 'assets/css/app.css';
import HomePage from 'pages/HomePage';
import Details from 'pages/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories/:idc' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
