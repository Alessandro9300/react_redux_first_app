import React from 'react';
import ReactDom from 'react-dom';

const firstH1 = React.createElement('h1', null, 'Ciao mondo!');
const header = React.createElement('header', null, firstH1)

ReactDom.render(header, document.getElementById('root'));
