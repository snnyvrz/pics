import React from 'react';

class SearchBar extends React.Component {
    state = { word: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.word);
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.word}  onChange={(e) => this.setState({ word: e.target.value })}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;