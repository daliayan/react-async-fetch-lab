// create your App component here
import React, { Component } from "react"

class App extends Component {

    state ={
        peopleInSpace: []
    }

    render(){
        return <div>
            <h1> {this.state.peopleInSpace.map((person) => person.name)}
            </h1>
            </div>;
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(({people}) => this.setState({ peopleInSpace: people}))
    }
}

export default App;