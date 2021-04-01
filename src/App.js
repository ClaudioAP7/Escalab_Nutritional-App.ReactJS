import React, { Fragment } from 'react';

import Header from './components/Header';
import SearchFoodDishes from './components/SearchFoodDishes';
import Footer from './components/Footer';

const App = ()  => (
  <Fragment>
      <Header />
      <SearchFoodDishes />
      <Footer />
  </Fragment>
);

export default App;