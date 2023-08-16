import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from '../components/List';
import MovieDetails from '../components/MovieDetails';

function Routes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={List} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Routes>
    </Router>
  );
}

export default Routes;
