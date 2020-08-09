import React from "react";
import "./App.css";

import Layout from "./components/layout"
import Blog from "./components/blog"

function App() {
  return (
    <div class="body">
      <Layout>
        <Blog />
      </Layout>
    </div>
  );
}

export default App;
