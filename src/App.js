// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={6}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={6}
                country="us"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={6}
                country="us"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={6}
                country="us"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={6}
                country="us"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={6}
                country="us"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={6}
                country="us"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
