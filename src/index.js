import React from 'react';
import Layout from './components/layout/';

function init(node) {
  React.render(<Layout />, node);
}

// init on DOM loaded
document.addEventListener("DOMContentLoaded", function(event) {
  let node = document.querySelector('#appContent');
  init(node);
});
