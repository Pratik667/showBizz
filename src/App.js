import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AllProvider } from './Component/AllProvider';
import Home from './Component/Home';
import ShowListing from './Component/ShowListing';
import ShowDetail from './Component/ShowDetail';
import BookingTicket from './Component/BookingTicket';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <AllProvider>
      <Router>
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowListing />} />
          <Route path="/shows/:id" element={<ShowDetail />} />
          <Route path="/booking/:movie" element={<BookingTicket />} />
        </Routes>
        </main>
        <Footer />
      </Router>
    </AllProvider>
  );
}

export default App;
