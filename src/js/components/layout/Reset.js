import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setGameArray} from "../../actions/gameActions";
import shuffle from "../../util/shuffle";

class Reset extends Component{
    constructor(props){
        super(props);
        this.gameReset = this.gameReset.bind(this);
    }
    gameReset(){
        let arr = [];
        for(let i = 1; i <= 25; i++){
            arr.push(i);
        }
        arr = shuffle(arr);
        this.props.actions.setGameArray(arr);
    }
    render(){
        return (
            <button className="btn resetbtn" onClick={(e) => this.gameReset(e)}>Reset</button>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            setGameArray: (arr) => {dispatch(setGameArray(arr))}
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Reset);
