import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../server/Test';

ReactDOM.hydrate(
    <Test />,
    document.getElementById('app')
);