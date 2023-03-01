import './App.css';
import Registration from './pages/Registration';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='register' element={<Registration />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
export default App;



