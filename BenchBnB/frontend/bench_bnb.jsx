import React from 'react';
import ReactDOM from 'react-dom';
import {postUser} from './util/post_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.postUser = postUser;
  ReactDOM.render(<h1>Welcome to Benches n Benches</h1>, root);
});


