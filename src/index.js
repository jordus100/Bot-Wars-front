import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import GamesList from "./Games/GamesList";
import AddGameForm from "./Games/AddGameForm";
import TournamentsList from "./Tournaments/TournamentsList";
import AddTournamentForm from "./Tournaments/AddTournamentForm";
import { Provider } from 'react-redux';
import store from './User/store';

const games = [{name:'Szachy', id:1}, {name:'Warcaby', id:2}, {name:'Scrabble', id:3}, {name:'Chińczyk', id:4}, {name:'Go', id:5}]

const getListOfTournaments = () => {
    return [{name:'Szachy', id:1}, {name:'Warcaby', id:2}, {name:'Scrabble', id:3}, {name:'Chińczyk', id:4}, {name:'Go', id:5}];
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/games",
        element: <GamesList games={games}/>,
    },
    {
        path: "/games/add",
        element: <AddGameForm games={games}/>,
    },
    {
        path: "/tournaments/add",
        element: <AddTournamentForm />,
        // In Future with more Turnaments
        // Assuming getListOfTypesOfGames returns an array of game types
        //element: <AddTournamentForm gameTypes={getListOfTypesOfGames()} />,
    },
    {
        path: "/tournaments",
        element: <TournamentsList tournaments={getListOfTournaments()}/>,
        // In Future with more Turnaments
        // Assuming getListOfTypesOfGames returns an array of game types
        //element: <AddTournamentForm gameTypes={getListOfTypesOfGames()} />,
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
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </body>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
