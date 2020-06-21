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
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ heroes: users }));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const { heroes, searchField } = this.state;
        const filteredHeroes = heroes.filter(hero => {
            return hero.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return !heroes.length ?
            <h1>Loading..</h1> :
            (
                <div className="tc">
                    <h1>Super Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList heroes={filteredHeroes} />
                    </Scroll>
                </div>
            );
    }
}

export default App;