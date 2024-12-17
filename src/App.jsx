import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Blog from "./Components/Blog";
import Projects from "./Components/Projects";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/website-portfolio/blog" element={<Blog />} />
        <Route
          exact
          path="/website-portfolio/projects"
          element={<Projects />}
        />
        <Route exact path="/website-portfolio/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
