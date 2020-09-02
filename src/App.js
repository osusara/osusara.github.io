import React from "react";
import "./App.css";

import Layout from "./components/layout"
import Blog from "./components/blog"

function App() {
  return (
    <div className="body">
      <Layout className="mx-4">
        <Blog />
      </Layout>
    </div>
  );
}

export default App;
