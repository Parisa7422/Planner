import Landing from "./pages/Landing";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
        <Route path="/about-us" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
