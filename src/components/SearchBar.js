import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component{
    state={val: ''}
    onInputChange=(event)=>{
        this.setState({val: event.target.value})
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.userSubmit(this.state.val);
    }
    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit} className="flexContainer">
            <label><h2>Image Search: </h2></label>
            <input className="inputStyle"
            value={this.state.val}
            onChange={this.onInputChange}
            type="text"/>
            </form>
            </div>
        )
    }
}
export default SearchBar;