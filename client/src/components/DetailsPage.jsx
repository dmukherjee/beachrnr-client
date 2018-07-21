import React from 'react';

import MainListing from './MainListing.jsx';
import Review from './Review/Review.jsx';
import Nav from './Nav.jsx';

const DetailsPage = () => {
  return <div> 
    <Nav />
    <div> 
      <MainListing />
    </div>
    <Review />
  </div>
}

export default DetailsPage;