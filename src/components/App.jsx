import React from 'react';
import HeaderContainer from '../containers/Header';
import ListItemsContainer from '../containers/ListItems';
import FooterContainer from '../containers/Footer'

const App = () => (
  <div className="jumbotron">
    <HeaderContainer />
    <ListItemsContainer />
    <FooterContainer />
  </div>
)

export default App;
