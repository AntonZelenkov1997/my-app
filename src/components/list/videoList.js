import React, { Component } from 'react';
//import { SearchBarValue } from '../mainIndex/searchBar';
import { connect } from 'react-redux';
import { store } from '../../index';
class VideoList extends Component {

    render() {  
        console.log(store.getState());
        return(
            <h2>Привет - {this.props.searchBarValue}</h2>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchBarValue: state.searchBarValue,
    }
}

export const WrappedVideoList = connect(mapStateToProps)(VideoList);