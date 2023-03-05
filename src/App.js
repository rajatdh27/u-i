import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={user ? <Home /> : <Login />} />
        <Route
          path="/login"
          exact
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/profile/:username"
          exact
          element={user ? <Profile /> : <Login />}
        />
        <Route
          path="/register"
          exact
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
