import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home-container">
          <Header />
          <div className="title-name">
            <h1>Donny Vu</h1>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}
