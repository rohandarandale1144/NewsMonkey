import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={10} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={10} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={10} country="in" category="entertainment" />} />
            <Route path="/sports" element={<News key="sports" pageSize={10} country="in" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={10} country="in" category="technology" />} />
            <Route path="/science" element={<News key="science" pageSize={10} country="in" category="science" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

