import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loadable from "react-loadable";
const LoadableBrickContainer = Loadable({
    loader: () => import("./BrickContainer"),
    loading() {
        return <div><i className="fas fa-spinner fa-pulse"></i> Loading...</div>
    }
});
class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body-container">                
                <LoadableBrickContainer />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            
        }
    }
}


export default connect(mapStateToProps)(Body);
