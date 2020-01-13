import * as React from "react";
import {getPerson} from "../services/swapi";

export class People extends React.Component {
    state = {
        id: this.props.match.params.id,
        details: {},
        prev: ''
    }

    componentDidMount() {
        getPerson(this.state.id).then(details => {this.setState(details)});
    }

    render() {
        return (
            <div >
                <a href="/" className="button">Return To People List</a>
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{ this.state.details.name }</p>
                                <p className="subtitle is-6">{ this.state.details.gender }</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Height</th>
                                    <th>Birth year</th>
                                    <th>Hair Color</th>
                                    <th>Skin Color</th>
                                    <th>Eye Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ this.state.details.height }</td>
                                    <td>{ this.state.details.birth_year }</td>
                                    <td>{ this.state.details.hair_color }</td>
                                    <td>{ this.state.details.skin_color }</td>
                                    <td>{ this.state.details.eye_color }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}