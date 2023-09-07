import NavBar from "./components/NavBar";
import Joke from "./components/Joke";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" exact Component={Joke} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
