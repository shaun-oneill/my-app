import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { heroes } from './heroes';


class App extends Component {
    constructor() {
        super();
        this.state = {
            heroes: heroes,
            searchField: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredHeroes = this.state.heroes.filter(hero => {
            return hero.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        return (
            <div className="tc">
                <h1>Super Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList heroes={filteredHeroes} />
            </div>
        );
    }
}

export default App;