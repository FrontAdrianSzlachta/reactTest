import * as React from "react";
import { getAllPeoples, getAllPeoplesFromPage } from '../services/swapi.js'

export class PeopleList extends React.Component {
    state = {
        people: [],
        next: '',
        prev: ''
    }

    componentDidMount() {
        getAllPeoples().then(people => {this.setState(people)});
    }

    onePerson = people => {
        const name = people.name;
        const id = people.url.replace("https://swapi.co/api/people/", "");

        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        { name }
                    </p>
                    <a href={`people/${id}`}>Details</a>
                </header>
            </div>
        );
    }

    nextPage = () => {
        if(this.state.next) {
            getAllPeoplesFromPage(this.state.next).then(people => {this.setState(people)});
        }
    }

    prevPage = () => {
        if(this.state.prev) {
            getAllPeoplesFromPage(this.state.prev).then(people => {this.setState(people)});
        }
    }

    render() {
        return (
            <div>
                <ul id="c-PeopleList">
                    { this.state.people.map(this.onePerson) }
                </ul>
                <div className="c-paggination">
                    <div className="c-prev button" onClick={this.prevPage}>Prev</div>
                    <div className="c-next button" onClick={this.nextPage}>Next</div>
                </div>
            </div>
        );
    }
}