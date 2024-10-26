import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import { useMovieShowsContext } from '../Component/MoviesShowContext';

// Set the root element for accessibility
Modal.setAppElement('#root');

function BookingTicket() {
  let { movie } = useParams();
  const { movieShows } = useMovieShowsContext();
  const showDetails = movieShows.find((show) => show.title === movie);

  // Modal state to control visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [ticketQuantity, setTicketQuantity] = useState(1); // State for selected ticket quantity

  // Function to open the modal and set the selected show
  const openModal = (show) => {
    setSelectedShow(show);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedShow(null);
  };

  return (
    <section id="booking" className="booking-ticket container" key={showDetails.title}>
      <div className="movie-desc media-desc">
        <h3 className="movie-title">{showDetails.title}</h3>
        <div className="description media-format">
          <span className="form-data release-date">{showDetails.duration}</span>
          <span className="form-data-spacer">•</span>
          <span className="form-data certification">{showDetails.genre}</span>
          <span className="form-data-spacer">•</span>
          <span className="form-data release-date">{showDetails.rating}</span>
        </div>
      </div>
      <div className="movie-avail-desc">
        {Object.keys(showDetails.shows).map(day => (
          <div key={day} className="movie-availability">
            <h2 className="movie-day">{day}</h2>
            <ul className="more-details">
              {showDetails.shows[day].map((show, index) => (
                <li
                  key={index}
                  className="movie-screens"
                  onClick={() => openModal(show)}
                >
                  {show.time} - {show.venue} ({show.screen})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Modal for seat layout and ticket quantity */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Seat Selection Modal"
        className="seat-selection-modal"
        overlayClassName="seat-selection-overlay"
      >
        <h2 className="seat-title">Book Your Seats</h2>
        {selectedShow && (
          <div className="seat-desc">
            <p className="seat-time">Time: {selectedShow.time}</p>
            <p className="seat-venue">Venue: {selectedShow.venue} ({selectedShow.screen})</p>

            {/* Placeholder for seat layout */}
            <div className="seat-layout">
              <p>Seat layout grid goes here...</p>
            </div>

            {/* Ticket quantity selection */}
            <div className="ticket-quantity">
              <label htmlFor="ticketCount">Select number of tickets:</label>
              <div className="ticket-options">
                {[...Array(10)].map((_, i) => (
                  <label key={i} className="radio-button">
                    <input
                      type="radio"
                      name="ticketCount"
                      value={i + 1}
                      checked={ticketQuantity === i + 1}
                      onChange={() => setTicketQuantity(i + 1)}
                    />
                    <span>{i + 1}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Close or confirm buttons */}            
            <button className="btn-confirm" onClick={() => { /* Add booking logic here */ }}>Confirm Booking</button>
            <button className="btn-cancel" onClick={closeModal}>Cancel</button>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default BookingTicket;
