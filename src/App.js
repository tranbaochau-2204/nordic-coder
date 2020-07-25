import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Giphy from './pages/Giphy';
import AboutUs from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail';
import RecentProducts from './components/RecentProducts';
import store from './redux/store';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <BrowserRouter>
          <Header/>
          <div className="page">
            <div className="page-content">
              <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route path="/giphy" component={ Giphy } />
                <Route path="/about-us" component={ AboutUs } />
                <Route path="/product/:productId" component={ ProductDetail } />
              </Switch>
            </div>
            <div className="side-bar">
              <RecentProducts/>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
