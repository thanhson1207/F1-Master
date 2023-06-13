import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import DriverPage from "./Page/drivers/DriverPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<DriverPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
