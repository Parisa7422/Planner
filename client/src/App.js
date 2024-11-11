import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />
        <Route path="/landing" element={<Landing />} />
        <Route path="/contact-us" element={<h2>Contact us</h2>} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<h2>Error</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
