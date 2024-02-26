import axios from "axios";
import c from "./client.config.json";
const baseURL = c["protocol"] + "://" + c["host"] + ":" + c["port"] + "/" + c["path"] + c["version"];


export const Api = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

const req = {
    "playerId" : 12,
    "lala": "lulu",
    "tournament": "tour",
    "acivments": "dupa"
}

const apifunc = {
    "params": ["playerId", "lala"],
    "body": ["acivments"],
}

function prepareParams(data, params) {
    if (params.length == 0) {
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
    if (body === undefined || body.length == 0) {
        return {}
    }

    for (var i = 0; i < body.length; i++) {
        if (!data.hasOwnProperty(body[i])) {
            throw Error("Invalid request, lack of body parameter: " + body[i])
        }
    }
    
    const dictionary = {};
    for (const key of apifunc["body"]) {
        if (data.hasOwnProperty(key)) {
            dictionary[key] = data[key];
        }
    }

    return dictionary
}

function Request(data, apifunc) {
    console.log(apifunc)
    const path = apifunc["path"];
    const method = apifunc["method"];
    const params = apifunc["params"];
    const body = apifunc["body"];

    const reqParams = prepareParams(data, params);
    const reqBody = prepareBody(data, body);

    const url = path + reqParams;
    if (method == "GET") {
        return Api.get(url)
    } else if (method == "POST") {
        return Api.post(url, reqBody)
    } else if (method == "PUT") {
        return Api.put(url, reqBody)
    } else if (method == "DELETE") {
        return Api.delete(url)
    }
}

const achivments = c["urls"]["achivments"]
const gametype = c["urls"]["gametype"]
const player = c["urls"]["player"]
const team = c["urls"]["points"]
const tournament = c["urls"]["tournament"]
const userSettings = c["urls"]["userSettings"]

function getAcivmentsForPlayer(request) {
    console.log(achivments)
    return Request(request, achivments["functions"]["GetAchivmentsForPlayer"])
}

const req1 = {playerId: 1}
getAcivmentsForPlayer(req1)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

Api.processError = (err) => {
    throw Error(err.message)
}

