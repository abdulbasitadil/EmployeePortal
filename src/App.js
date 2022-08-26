import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import DashboardAdmin from './component/DashboardAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
