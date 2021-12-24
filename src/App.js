import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./Pages/NotFound";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import Login from './Pages/Login';
import Register from "./Pages/Register";
import CreateCharacter from "./Pages/CreateCharacter";
import CreateLocation from "./Pages/CreateLocation";
import EditCharacter from "./Pages/EditCharacter";
import CardDetails from "./components/Card/CardDetails";
import EditUser from "./Pages/EditUser";
import Aos from 'aos';
import "aos/dist/aos.css"
import { UserProvider, useUsuario } from "./Context/UserContext";
export default () => <UserProvider>
  <App></App>
</UserProvider>

function App() {
  const [user] = useUsuario();

  useEffect(() => {
    Aos.init({ duration: 1500, easing: 'ease', once: true });
  }, []);

  return (
    <>

      <Router>
        <Navbar users={user} />
        <div className="container-fluid appContainer">
          <Routes>
            <Route exact path="/" element={user.username != "" ? <Home usuario={user} /> : <Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/:id" element={user.username != "" ? <CardDetails /> : <Login />} />
            <Route path="/episodes" element={user.username != "" ? <Episodes /> : <Login />} />
            <Route path="/episodes/:id" element={user.username != "" ? <CardDetails /> : <Login />} />
            <Route path="/location" element={user.username != "" ? <Location /> : <Login />} />
            <Route path="/location/:id" element={user.username != "" ? <CardDetails /> : <Login />} />
            <Route path="/CreateCharacter" element={user.username != "" ? <CreateCharacter /> : <Login />} />
            <Route path="/CreateLocation" element={user.username != "" ? <CreateLocation /> : <Login />} />
            <Route path="/EditUser" element={user.username != "" ? <EditUser /> : <Login />} />
            <Route path="/EditCharacter" element={user.username != "" ? <EditCharacter /> : <Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}


