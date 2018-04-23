import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer';
import GameBody from './components/GameBody'
import teams from './teams.json'
const styles = {
  body: {
    background: "url(https://wallpapertag.com/wallpaper/full/5/0/e/357188-cool-basketball-court-background-2718x1808-pc.jpg)",
    backgroundSize: "cover"
  }
}
class App extends Component {
  state = {
    initial: teams
  }

  render() {
    return (
      <div style={styles.body}>
        <Navbar />
        <Jumbotron />
        <div className='container'>
          {(this.state.initial).map(team => {
            return <GameBody
            id={team.id}
            key={team.id} 
            image={team.image} 
            teamname={team.teamname} />
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
