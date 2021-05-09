import React from "react";
import "./App.css";
import data from "./config.json"
import Layout from "./components/layout"
import Blog from "./components/blog"
import Designs from "./components/designs"
import Contact from "./components/contact"
import Youtube from "./components/youtube"

function App() {
  return (
    <div className="body">
      <Layout className="mx-4">
        <Blog medium={data.medium} />
        <Designs instagram={data.instagram} />
        <Youtube youtube={data.youtube} />
        {/* <Contact /> */}
      </Layout>
    </div>
  );
}

export default App;
