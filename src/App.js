import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Alert from './components/Alert';
import { useState } from "react";
 
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
      setAlert({
        message : message,
        type : type,
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  } 
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
        <Switch>
          <Route exact path="/" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/Signup" element={<Signup showAlert={showAlert}/>} />
        </Switch>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
