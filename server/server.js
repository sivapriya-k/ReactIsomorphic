import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import TestComponent from './Test';

const app = express();

app.use( express.static( "dist" ) );

app.get( "*", ( req, res ) => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            const componentJSX = ( <TestComponent data={json}/> );
            const renderComponent = renderToString( componentJSX );
            res.send( htmlTemplate( renderComponent ) );
        });


});

app.listen( 3001 );

function htmlTemplate( renderComponent ) {
    return `
    <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Test React Isomorphic</title>
        </head>
        
        <body>
            <div id="app">${ renderComponent }</div>
           <script type="application/javascript" src="/bundle.js" defer></script>
        </body>
        </html>
    `;
}