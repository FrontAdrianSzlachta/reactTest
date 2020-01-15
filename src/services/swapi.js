const swapiApiUrl = 'https://swapi.co/api/'
const endpoints = {
    people: swapiApiUrl + "people/"
}

export default function getAllPeople() {
    return function(dispatch) {
        dispatch({ type: "SET_LOADING", isLoading: true });
        return fetch(endpoints.people, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            })
        })
        .then((response) => response.json())
        .then((json) => {
            dispatch({ type: "SET_PEOPLE", people: json.results });
            dispatch({ type: "SET_NEXT_PAGE", next: json.next });
            dispatch({ type: "SET_PREVIOUS_PAGE", prev: json.previous });
            dispatch({ type: "SET_LOADING", isLoading: false });
        });
    };
}

export function getAllPeopleFromPage(link) {
    return function(dispatch) {
        dispatch({ type: "SET_LOADING", isLoading: true });
        return fetch(link, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            })
        })
        .then((response) => response.json())
        .then(json => {
            dispatch({ type: "SET_PEOPLE", people: json.results });
            dispatch({ type: "SET_NEXT_PAGE", next: json.next });
            dispatch({ type: "SET_PREVIOUS_PAGE", prev: json.previous });
            dispatch({ type: "SET_LOADING", isLoading: false });
        });
    }
}

export function getPerson(id) {
    return function(dispatch) {
        dispatch({ type: "SET_LOADING", isLoading: true });
        return fetch(endpoints.people + "" + id + "/?format=json", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        .then((response) => response.json())
        .then(json => {
            dispatch({ type: "SET_PERSON", person: json });
            dispatch({ type: "SET_LOADING", isLoading: false });
        });
    }
}