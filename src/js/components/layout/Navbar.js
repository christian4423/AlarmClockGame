// React---------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loadable from "react-loadable";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nav-container">
                <h1 className="h1">Alarms</h1>
                <hr />
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps)(Navbar);