import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './components/MainComponents/Projects';
import './App.css';
import Graph
  from './components/AppLevelComponents/Graph';
import Home from './components/AppLevelComponents/Home';
import NavBar from './components/AppLevelComponents/NavBar';

function App() {
  return (<>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;