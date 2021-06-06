import React, { useState } from "react";
import "../App.css";
import Heading from "./Heading/Heading";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Footer/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  function setThemeType(isDark) {
    if (isDark) {
      setIsDark(true);
    } else setIsDark(false);
  }
  return (
    <div>
      <Router>
        <Heading handleClick={setThemeType} />
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/projects">
              <Projects isDark={isDark} />
            </Route>
            <Route path="/contact">
              <Contact isDark={isDark} />
            </Route>
            <Route path="/about">
              <About isDark={isDark} />
            </Route>
            <Route path="/">
              <Home isDark={isDark} />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer isDark={isDark} />
    </div>
  );
}
