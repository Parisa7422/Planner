import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import About from "./pages/About";
import { useAppContext } from "./context/appContext";

function App() {
  const { user } = useAppContext();
  return (
    <BrowserRouter>
      {user && <Navbar />}
      <Routes>
        {/* homepage if user logged in */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Default redirect */}
        <Route path="/register" element={<Register />} />

        {/* Other pages  */}
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
