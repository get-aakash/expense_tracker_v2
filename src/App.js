import './App.css';
import {Registration} from './pages/Registration';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ForgetPassword } from './pages/ForgetPassword';
import { PrivateRouter } from './pages/PrivateRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='register' element={<Registration />} />
          <Route
            path="dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route path='password-reset' element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
export default App;



