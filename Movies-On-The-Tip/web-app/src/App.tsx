import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./components/ComingSoon";
import Favourites from "./components/Favourites";
import InTheaters from "./components/InTheaters";
import TopRatedIndian from "./components/TopRatedIndian";
import TopRatedMovies from "./components/TopRatedMovies";

function App() {
  
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<InTheaters />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/topratedindian" element={<TopRatedIndian />} />
            <Route path="/topratedmovies" element={<TopRatedMovies />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
