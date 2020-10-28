import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
