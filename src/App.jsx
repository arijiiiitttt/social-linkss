import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LinksComponent from './components/main/Links';
import NotFoundPageComponent from './components/pages/NotFoundPage';
import UnderProcessComponent from './components/pages/UnderProcess';

function Home() {
  return (
    <>
      <LinksComponent />
    </>
  );
}


// Main App component
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/underProcess" element={<UnderProcessComponent/>} />
          <Route path="/broken" element={<NotFoundPageComponent />} />
          <Route path="*" element={<NotFoundPageComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
