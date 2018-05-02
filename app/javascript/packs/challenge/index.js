import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import styles from './assets/stylesheets/app.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router />, document.getElementById('root')
  )
});