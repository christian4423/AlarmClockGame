import React, { Component } from 'react';
import { connect } from 'react-redux';
import Brick from "./Brick";
import {setGameArray} from "../../actions/gameActions";
import shuffle from "../../util/shuffle";
class BrickContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            classes: ["floral-white", "red-brown", "pineapple", "charcoal", "beige"]
        }
    }
    componentDidMount(){
        let arr = [];
        for(let i = 1; i <= 25; i++){
            arr.push(i);
        }
        arr = shuffle(arr);
        this.props.actions.setGameArray(arr);
    }
    render() {
        const bricks = this.props.red.arr.map((value)=>{
            return <Brick key={value} value={value} color={this.state.classes[value % 5]} />
        })
        return (
            <div className="brick-container">
                {bricks}
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
            setGameArray: (arr) => {dispatch(setGameArray(arr))}
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BrickContainer);
