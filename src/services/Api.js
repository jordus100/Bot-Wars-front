import axios from "axios";
import c from "./client.config.json";
const baseURL = c["protocol"] + "://" + c["host"] + ":" + c["port"] + "/" + c["path"] + c["version"];


export const Api = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

function prepareParams(data, params) {
    if (params === undefined || params.length == 0) {
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
const gametype = c["urls"]["gametype"]
const player = c["urls"]["player"]
const points = c["urls"]["points"]
const tournament = c["urls"]["tournament"]
const userSettings = c["urls"]["userSettings"]

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

Api.processError = (err) => {
    throw Error(err.message)
}


export {
    getTournaments,
}