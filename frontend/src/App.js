import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import UserControl from "./components/UserControl/UserControl";
import ContentControl from "./components/ContentControl/ContentControl";
import CreateNotification from "./components/Notification/CreateNotification";
import CategoryControl from "./components/CategoryControl/CategoryControl";
import IncidentModeration from "./components/IncidentModeration/IncidentModeration";
import ModerationChat from "./components/ModerationChat/ModerationChat";
import ChangePassword from "./components/ChangePassword/ChangePassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin" element={<UserControl />} />
        <Route path="/content" element={<ContentControl />} />
        <Route path="/notification" element={<CreateNotification />} />
        <Route path="/category-control" element={<CategoryControl />} />
        <Route path="/moderation-chat" element={<ModerationChat />} />
        <Route path="/incident-moderation" element={<IncidentModeration />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
