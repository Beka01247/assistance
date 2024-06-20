import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import UserControl from "./components/UserControl/UserControl";
import ContentControl from "./components/ContentControl/ContentControl";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin" element={<UserControl />} />
        <Route path="/content" element={<ContentControl />} />
      </Routes>
    </Router>
  );
}

export default App;
