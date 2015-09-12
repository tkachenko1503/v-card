import React from 'react';
import Layout from './components/layout';

// init on DOM loaded
document.addEventListener("DOMContentLoaded", function(event) {
  let node = document.querySelector('#appContent');
  React.render(<Layout />, node);
});
