import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './Component/MoviesContext';
import Home from './Component/Home';
import ShowListing from './Component/ShowListing';
import ShowDetail from './Component/ShowDetail';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowListing />} />
          <Route path="/shows/:id" element={<ShowDetail />} />
        </Routes>
        </main>
        <Footer />
      </Router>
    </MovieProvider>
  );
}

export default App;
