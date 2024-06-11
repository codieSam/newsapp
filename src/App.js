import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Newsitem from "./components/Newsitem";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              key="general"
              exact
              path="/"
              element={<News pageSize="8" category="general" />}
            />

            <Route
              key="business"
              exact
              path="/business"
              element={<News pageSize="8" category="business" />}
            />

            <Route
              key="entertainment"
              exact
              path="/entertainment"
              element={<News pageSize="8" category="entertainment" />}
            />

            <Route
              key="health"
              exact
              path="/health"
              element={<News pageSize="8" category="health" />}
            />

            <Route
              key="science"
              exact
              path="/science"
              element={<News pageSize="8" category="science" />}
            />

            <Route
              key="sports"
              exact
              path="/sports"
              element={<News pageSize="8" category="sports" />}
            />

            <Route
              key="technology"
              exact
              path="/technology"
              element={<News pageSize="8" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
