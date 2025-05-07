import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoodBoardEditor from "./pages/MoodBoardEditor";
import MoodBoardView from "./pages/MoodBoardView";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/new" element={<MoodBoardEditor />} />
          <Route path="/board/:id/edit" element={<MoodBoardEditor />} />
          <Route path="/board/:id/view" element={<MoodBoardView />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App
