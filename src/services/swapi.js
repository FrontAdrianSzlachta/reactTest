const swapiApiUrl = 'https://swapi.co/api/'
const endpoints = {
    people: swapiApiUrl + "people/",
    planets: swapiApiUrl + "planets/",
    films: swapiApiUrl + "films/",
    species: swapiApiUrl + "species/",
    vehicles: swapiApiUrl + "vehicles/",
    starships: swapiApiUrl + "starships/"
}

function getAllPeoples() {
    return fetch(endpoints.people, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json; charset=utf-8',
            'X-Requested-With': 'XMLHttpRequest'
        })
    })
    .then((response) => response.json())
    .then(json => {return{ people: json.results, next: json.next, prev: json.previous }});
}

function getAllPeoplesFromPage(link) {
    return fetch(link, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json; charset=utf-8',
            'X-Requested-With': 'XMLHttpRequest'
        })
    })
        .then((response) => response.json())
        .then(json => {return{ people: json.results, next: json.next, prev: json.previous }});
}

function getPerson(id) {
    return fetch(endpoints.people+""+id+"/?format=json", {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
        .then((response) => response.json())
        .then(json => {console.log(json);return { details: json }});
}

export {
    getAllPeoples,
    getAllPeoplesFromPage,
    getPerson
}