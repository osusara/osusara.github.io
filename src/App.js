import React from "react";
import "./App.css";

import Layout from "./components/layout"
import Blog from "./components/blog"
import Contact from "./components/contact"
import Youtube from "./components/youtube"

function App() {
  return (
    <div className="body">
      <Layout className="mx-4">
        <Blog />
        <Youtube />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
