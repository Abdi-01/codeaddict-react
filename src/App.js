import React from 'react';
// import logo from './logo.svg';
import { Route } from 'react-router-dom'
import './App.css';
import LandingPage from './pages/landingpage'
import ProfilePage from './pages/profile'
import GalleryPage from './pages/gallery'
import PortofolioPage from './pages/portfolio'


class App extends React.Component {
  state = {

  }
  render() {
    return (
      <div style={{backgroundColor:'#5F5D5D'}}>
        <Route path='/' component={LandingPage} exact/>
        <Route path='/profile' component={ProfilePage} />
        <Route path='/gallery' component={GalleryPage} />
        <Route path='/portfolio' component={PortofolioPage} />
      </div>
    );
  }
}

export default App;