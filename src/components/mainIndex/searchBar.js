import React, { Component } from 'react';
import "./searchBar.css";
import TextField from '@material-ui/core/TextField';
import DropDownList from './dropDownList';
import $ from 'jquery'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { putSearchBarValue } from '../../store/actions';
import { store } from '../../index';



let arrForWords = [];
let arrForVideoId = [];


class SearchBarComponent extends Component {
    constructor(props) {
        super(props);
        this.dropDownList = this.dropDownList.bind(this);
        this.state = {
            dropDownListSearchBar : null,
            searchValue : "",
            dropDownWords: []
        };
    };

    dropDownList(e) {
        this.setState({dropDownWords : arrForWords});

        if (e.target.value === "") {
            this.setState({dropDownListSearchBar : ""});
        }
        else {
            this.setState({dropDownListSearchBar : <DropDownList words = {arrForWords} videoId = {arrForVideoId}/>});
        }

        this.props.currentSearchBarValue(e.target.value);
    }
    render() {
        let q = $('#searchBar').val();
        function search() {
           $.get(
               "https://www.googleapis.com/youtube/v3/search", {
                   part: 'snippet, id',
                   q: q,
                   type: 'video',
                   key: 'AIzaSyD6c6Ppaa1UHmL3LQFIQBOQJpTxMeSTJbg',
                },
                    function(data) {
                        arrForWords = data.items.map(function(item) {return(item.snippet.title.length < 40 ? item.snippet.title : item.snippet.title.substr(0, 40) + "...")});
                        arrForVideoId = data.items.map(function(item) {return(item.id.videoId)});
                    }
                );
        }
        console.log(store.getState());
        search();
        return (
            <form id = "search-form" action="/list">
                <TextField
                    label="Search field"
                    type="search"
                    id="searchBar"
                    margin="normal"
                    fullWidth
                    onChange={this.dropDownList}
                />
                {this.state.dropDownListSearchBar}
            </form>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        searchBarValue: state.searchBarValue,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        currentSearchBarValue: bindActionCreators(putSearchBarValue, dispatch),
    }
}

export const WrappedSearchBarComponent = connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);
