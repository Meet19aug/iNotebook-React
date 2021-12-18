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

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
        </Switch>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
