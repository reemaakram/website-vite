import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; 
import Library from "./pages/Library";
import Users from "./pages/Users";
import Landmarks from "./pages/Landmarks";

const App = () => (
  <Router>
    <Navbar />
    <div style={{ padding: 20, maxWidth: 700, margin: "auto" }}>
      <Routes>
        <Route path="/Library" element={<Library />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Landmarks" element={<Landmarks />} />
      </Routes>
    </div>
  </Router>
);

export default App;
