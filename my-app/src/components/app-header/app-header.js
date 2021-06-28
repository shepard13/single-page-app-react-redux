import React, { Component } from 'react';
import './app-header.css';
export default class AppHeader extends Component {
  render() {
    return (
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <a class='navbar-brand' href='#'>
          Single Page Application React Redux
        </a>
        <button class='btn btn-outline-success my-2 my-sm-0 cart' type='submit'>
          Cart
        </button>
      </nav>
    );
  }
}
