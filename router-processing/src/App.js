import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import TestProfile from './TestProfile';

const App = () => {
    return (
        <>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profiles</Link>
            </li>
        </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/profile"} element={<TestProfile />} />
            <Route path={"/profile/:username"} element={<TestProfile />} />
          </Routes>
        </>
    );
};

export default App;
