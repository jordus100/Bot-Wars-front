import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import GamesList from "./Games/GamesList";

const games = [{name:'Szachy', id:1}, {name:'Warcaby', id:2}, {name:'Scrabble', id:3}, {name:'Chińczyk', id:4}, {name:'Go', id:5}]

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/games",
        element: <GamesList games={games}/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Bot-Wars</title>
        </head>
        <body>
            <RouterProvider router={router}/>
        </body>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
