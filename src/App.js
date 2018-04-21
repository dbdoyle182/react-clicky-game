import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer';
import GameBody from './components/GameBody'
import teams from './teams.json'

class App extends Component {
  state = {
    initial: teams
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className='container'>
          {(this.state.initial).map(team => {
            return <GameBody image={team.image} teamname={team.teamname} />
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
