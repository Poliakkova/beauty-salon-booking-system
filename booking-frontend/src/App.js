import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Users from './pages/Users';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/signup" element={<SignUp />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path='/' element={<Home />}/>
          <Route exact path="/users" element={<Users />}/>
          <Route exact path="/adduser" element={<AddUser />}/>
          <Route exact path="/edituser/:id" element={<EditUser />}/>
          <Route exact path="/viewuser/:id" element={<ViewUser />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
