import React from 'react';

import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';


class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (word) => {
        const response = await unsplash.get('/search/photos/', {
                params: { query: word, per_page: 3 }
            });

            this.setState({ images: response.data.results });
        };

    render() {
    return (<div className="ui container" style={{ marginTop: '10px' }} >
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>);
    }
};

export default App;