import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.js";
import CompareStats from "./Pages/CompareStats.js";
import Timeline from "./Pages/Timeline.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/CompareStats" element={<CompareStats />} />
          <Route path="/Timeline" element={<Timeline />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
