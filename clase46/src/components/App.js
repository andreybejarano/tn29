import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path='/' element={<ContentWrapper />} />
          <Route path='/genres' element={<GenresInDb />} />
          <Route path='/last-movie' element={<LastMovieInDb />} />
          <Route path='/movies' element={<ContentRowMovies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
