import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            heroes: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/shaun-oneill/database/characters')
            .then(response => response.json())
            .then(users => this.setState({ heroes: users }));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const { heroes, searchField } = this.state;
        const filteredHeroes = heroes.filter(hero => {
            return hero.alias.toLowerCase().includes(searchField.toLowerCase());
        })

        return !heroes.length ?
            <h1>Loading..</h1> :
            (
                <div className="tc">
                    <h1>Hero Finder</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList heroes={filteredHeroes} />
                    </Scroll>
                </div>
            );
    }
}

export default App;