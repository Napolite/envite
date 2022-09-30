import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/landing";
import Event from "./components/event";
import CreateEvent from "./components/create-event";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
