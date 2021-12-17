import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
    </Switch>
      
      </Router>
      
    </>
  );
}

export default App;
