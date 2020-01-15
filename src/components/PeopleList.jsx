import React, { Component } from "react";
import { connect } from "react-redux";
import getAllPeople, { getAllPeopleFromPage } from '../services/swapi.js';
import Icon from '@mdi/react'
import { mdiAccountBadgeHorizontal, mdiAppleKeyboardControl } from '@mdi/js'

export class PeopleList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllPeople();
    }

    onePerson = people => {
        const name = people.name;
        const id = people.url.replace("https://swapi.co/api/people/", "");

        return (
            <div className="card">
                <header className="card-header">
                    <a href={`person/${id}`}>
                        <p className="card-header-title">
                            { name }
                        </p>
                        <Icon path={mdiAccountBadgeHorizontal} size={1} />
                    </a>
                </header>
            </div>
        );
    }

    nextPage = () => {
        if(this.props.next) {
            this.props.getAllPeopleFromPage(this.props.next);
        }
    }

    prevPage = () => {
        if(this.props.prev) {
            this.props.getAllPeopleFromPage(this.props.prev);
        }
    }

    render() {
        return (
            <div className="c-peopleList">
                <div className={"pageloader " + (this.props.isLoading ? 'is-active' : '')}><span className="title">Loading...</span></div>
                <ul id="c-list">
                    {this.props.people.map(this.onePerson)}
                </ul>
                <div className="pagination is-centered">
                    <a className="pagination-previous" onClick={this.prevPage}><Icon path={mdiAppleKeyboardControl} size={2} rotate={-90} color="white"/></a>
                    <a className="pagination-next" onClick={this.nextPage}><Icon path={mdiAppleKeyboardControl} size={2} rotate={90} color="white" /></a>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        people: state.people,
        next: state.next,
        prev: state.prev,
        isLoading: state.isLoading
    };
}

export default connect(
    mapStateToProps,
    { getAllPeople, getAllPeopleFromPage }
)(PeopleList);