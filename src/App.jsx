import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="md:px-40 min-h-screen">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
