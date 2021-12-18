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
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="This is amazing alert"/>
        <div className="container">
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Signup" element={<Signup/>} />
        </Switch>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
