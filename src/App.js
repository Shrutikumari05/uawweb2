import logo from "./logo.svg";
import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import routes from "./dummy/routes";
//import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />        
            <Routes>
              {routes.map((ele) => (
                <Route
                  key={ele.identifier}
                  exact
                  path={ele.path}
                  element={ele.components}
                />
              ))}
            </Routes>
          
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
