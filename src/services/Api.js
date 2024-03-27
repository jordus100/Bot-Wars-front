import axios from "axios";
import c from "./client.config.json";
const baseURL = c["protocol"] + "://" + c["host"] + ":" + c["port"] + "/" + c["path"] + c["version"];


export const Api = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

function prepareParams(data, params) {
    if (params === undefined || params.length === 0) {
        return ""
    }
    for (var i = 0; i < params.length; i++) {
        if (!data.hasOwnProperty(params[i])) {
            throw Error("Invalid request, lack of parameter: " + params[i])
        }
    }

    return "?" + params.map((param) => {
        return "" + param + "=" + data[param]
    }).join("&")
}

function prepareBody(data, body) {
    if (body === undefined || body.length === 0) {
        return {}
    }

    for (var i = 0; i < body.length; i++) {
        if (!data.hasOwnProperty(body[i])) {
            throw Error("Invalid request, lack of body parameter: " + body[i])
        }
    }
    
    const dictionary = {};
    for (const key of body) {
        if (data.hasOwnProperty(key)) {
            dictionary[key] = data[key];
        }
    }

    return dictionary
}

function Request(data, endpoint, apifunc) {
    const path = apifunc["path"];
    const method = apifunc["method"];
    const params = apifunc["params"];
    const body = apifunc["body"];

    const reqParams = prepareParams(data, params);
    const reqBody = prepareBody(data, body);

    console.log(reqParams)
    const h = { 
        "accept": "*/*"
    };

    const url = c["urls"][endpoint]["path"] + path + reqParams;
    return Api({
            method: method,
            url: url,
            data: reqBody,
            headers: h
        })
}

const achivments = c["urls"]["achivments"]
//const gametype = c["urls"]["gametype"]
//const player = c["urls"]["player"]
//const points = c["urls"]["points"]
const tournament = c["urls"]["tournament"]
//const userSettings = c["urls"]["userSettings"]

function getAcivmentsForPlayer(request) {
    return Request(request, "achivments", achivments["functions"]["GetAchivmentsForPlayer"])
}

function getTournaments(request) {
    Request(request, "tournament", tournament["functions"]["GetAllTournaments"])
    .then((res) => {
        return res.data
    }).catch((err) => {
        console.log(err)
    })
}

function getPointsOfHistoryForPlayer(request) {
    //return Request(request, "points", points["functions"]["GetPointsOfHistoryForPlayer"])

    return {
        "data": [
          {
            "id": 1,
            "logDate": "2024-02-06T19:21:17.85",            
            "rating": 12,
            "playerId": 1
          },
          {
            "id": 2,
            "logDate": "2024-02-07T19:21:17.85",            
            "rating": 20,
            "playerId": 1
          },
          {
            "id": 3,
            "logDate": "2024-02-08T19:21:17.85",            
            "rating": 30,
            "playerId": 1
          },
          {
            "id": 4,
            "logDate": "2024-02-09T19:21:17.85",            
            "rating": 40,
            "playerId": 1
          },
          {
            "id": 5,
            "logDate": "2024-02-10T19:21:17.85",            
            "rating": 50,
            "playerId": 1
          },
          {
            "id": 6,
            "logDate": "2024-02-11T19:21:17.85",            
            "rating": 60,
            "playerId": 1
          }
        ]
      }
}

function getUser(request){
    //return Request(request, "userSettings", userSettings["functions"]["GetUser"])

    return {
        "id": request["playerId"],
        "login": "RdmusR_97",
        "rating": 1203,
        "lastSeen": "2024-02-11",
        "joined": "2024-02-06",
        "botsAdded": 5,
        "tournamentsCreated": 3,
        "photoURL": "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1709386522~exp=1709387122~hmac=612506df2e857afd82d8b64b5b44128ef42d1e046876d26074bb46b41abe1fb0"
    }
        
}

function getUsersBots(request){
    //return Request(request, "player", player["functions"]["GetUsersBots"])

    return { "n" : 5,
        "bots": [{
            "game": "TicTacToe",
            "bot": "superBot",
            "lastModification": "2024-02-06T19:21:17.85",
            "fileName": "superBot.cpp"
            },
            {
            "game": "Chess",
            "bot": "chesster",
            "lastModification": "2024-02-06T19:21:17.85",
            "fileName": "chesster.cpp"
            },
            {
            "game": "Checkers",
            "bot": "checky",
            "lastModification": "2024-02-06T19:21:17.85",
            "fileName": "checky.cpp"
            },
            {
            "game": "Monopoly",
            "bot": "monop",
            "lastModification": "2024-02-06T19:21:17.85",
            "fileName": "monop.cpp"
            }
        ]
    }
}

function getAddedGames(request){
    //return Request(request, "gametype", gametype["functions"]["GetAddedGames"])

    return {
        "n" : 5,
        "games": [
            {
                "game": "TicTacToe",
                "lastModification": "2024-02-06T19:21:17.85",
                "fileName": "TicTacToe.cpp"
            },
            {
                "game": "Chess",
                "lastModification": "2024-02-06T19:21:17.85",
                "fileName": "Chess.cpp"
            },
            {
                "game": "Checkers",
                "lastModification": "2024-02-06T19:21:17.85",
                "fileName": "Checkers.cpp"
            },
            {
                "game": "Monopoly",
                "lastModification": "2024-02-06T19:21:17.85",
                "fileName": "Monopoly.cpp"
            }
        ]
    }
}

function getUsersPlayedTournaments(request){
    //return Request(request, "tournament", tournament["functions"]["GetUsersPlayedTournaments"])

    return {
        "n" : 5,
        "tournaments": [
            {
                "tournament": "TicTacToe",
                "place": 1,
                "date": "2024-02-06T19:21:17.85",
                "reference": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                "tournament": "Chess",
                "place": 2,
                "date": "2024-02-06T19:21:17.85",
                "reference": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                "tournament": "Checkers",
                "place": 3,
                "date": "2024-02-06T19:21:17.85",
                "reference": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                "tournament": "Monopoly",
                "place": 4,
                "date": "2024-02-06T19:21:17.85",
                "reference": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        ]
    }
}

Api.processError = (err) => {
    throw Error(err.message)
}


export {
    getTournaments,
    getAcivmentsForPlayer,
    getPointsOfHistoryForPlayer,
    getUser,
    getUsersBots, 
    getAddedGames, 
    getUsersPlayedTournaments,
}