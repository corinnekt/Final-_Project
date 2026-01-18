// React v17 and React Router v5.3

// Use MockAPI to create a React project meeting the following criteria:
// 3. Allow for all CRUD operations via one or more APIs
// - blog updates
// - account creation
// - comments
// - subscribe
// - commission form bubmission
// - business contact form submission

// each component has its own rendering, listening, and state
// -- some components may only listen and render or only render

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './Components/Layout'; // contains your Navbar
import Home from './Components/Home';
import Forms from './Components/Forms';
import Cv from './Components/Cv';
import Art from './Components/Art';
import Writing from './Components/Writing';
import Subscribe from './Components/Subscribe';
import Preorder from './Components/Preorder';

export default function App() {
  return (
    <div>
      <Layout/>
      
      <div>
        <Home/>
        <Forms/> 
      </div>
    </div>
  );
}
