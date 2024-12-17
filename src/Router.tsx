import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/index.tsx';
import Recruitment from './pages/recruitment/index.tsx';
import SantaNews from './pages/santaNews/index.tsx';
import SantaTest from './pages/santaTest/index.tsx';
import Salary from './pages/salary/index.tsx';


const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/recruitment" element={<Recruitment />} />
    <Route path="/santaNews" element={<SantaNews />} />
    <Route path="/santaTest" element={<SantaTest />} />
    <Route path="/salary" element={<Salary />} />
  </Routes>
);

export default Router;