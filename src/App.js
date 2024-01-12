import React from "react";
import data from "./config.json"
import "./App.css";

import Layout from "./components/layout"
import Landing from "./components/landing"
import Blog from "./components/blog"
import Projects from "./components/projects"
import Designs from "./components/designs"
import Contact from "./components/contact"
import Youtube from "./components/youtube"

function App() {
  return (
    <div className="body">
      <Layout className="mx-4">
        <Landing />
        <Projects projects={data.projects} />
        <Blog medium={data.medium} />
        <Designs behance={data.behance} />
        <Youtube youtube={data.youtube} />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
