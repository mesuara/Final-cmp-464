// App.js
import React from 'react';
import RandomGifSection from './components/RandomGifSection';
import SearchSection from './components/SearchSection';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <RandomGifSection />
        </div>
        <div className="col-md-6">
          <SearchSection />
        </div>
      </div>
    </div>
  );
};

export default App;
