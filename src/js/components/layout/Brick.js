import React, { Component } from 'react';
import { connect } from 'react-redux';


class Brick extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={`__brick __brick--${this.props.color}`}><span>{this.props.value}</span></div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(Brick);
