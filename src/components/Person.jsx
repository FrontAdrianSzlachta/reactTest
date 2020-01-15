import * as React from "react";
import { connect } from "react-redux";
import { getPerson } from "../services/swapi";
import Icon from '@mdi/react'
import { mdiAccountBadgeHorizontal, mdiAppleKeyboardControl } from '@mdi/js'

export class Person extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPerson(id);
    }

    render() {
        return (
            <div className="c-person">
                <div className={"pageloader " + (this.props.isLoading ? 'is-active' : '')}><span className="title">Loading...</span></div>
                <a href="/"><Icon path={mdiAppleKeyboardControl} size={3} rotate={-90} color="white"/></a>
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <Icon path={mdiAccountBadgeHorizontal} size={5} />
                                <p className="title is-4">{ this.props.details.name }</p>
                                <p className="subtitle is-6">{ this.props.details.gender }</p>
                            </div>
                        </div>
                    </div>
                    <div className="content columns">
                        <div className="titles column is-half">
                            <p>Height</p>
                            <p>Birth year</p>
                            <p>Hair Color</p>
                            <p>Skin Color</p>
                            <p>Eye Color</p>
                        </div>
                        <div className="data column is-half">
                            <p>{ this.props.details.height }</p>
                            <p>{ this.props.details.birth_year }</p>
                            <p>{ this.props.details.hair_color }</p>
                            <p>{ this.props.details.skin_color }</p>
                            <p>{ this.props.details.eye_color }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        details: state.person,
        isLoading: state.isLoading
    };
}

export default connect(
    mapStateToProps,
    { getPerson }
)(Person);