import React, { createElement } from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';
const root = document.getElementById('root');
// Add Google Fonts
const linkPoppins = document.createElement('link');
linkPoppins.rel = 'stylesheet';
linkPoppins.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
const linkRoboto = document.createElement('link');
linkRoboto.rel = 'stylesheet';
linkRoboto.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
document.head.appendChild(linkPoppins);
document.head.appendChild(linkRoboto);
render(<App />, root);