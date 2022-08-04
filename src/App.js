import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
    </div>
  );
}

export default App;
