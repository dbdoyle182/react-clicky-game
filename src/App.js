import React, { Component } from 'react';
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
    initial: teams,
    unselected: teams,
    topScore: 0,
    currentScore: 0,
    message: 'Click a team logo to begin!'
  }

  shuffle = array => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }

  userSelect = id => {
    const selected = this.state.unselected.find(team => team.id === id)

    if(selected === undefined) {
      this.setState({
        unselected: teams,
        currentScore: 0,
        message: 'You guessed incorrectly, try again!',
        topScore: this.state.currentScore > this.state.topScore ? this.state.currentScore : this.state.topScore
        
      })
    }else{
      const unselectedTeams = this.state.unselected.filter(team => team.id !== id)

      this.setState({
        unselected: unselectedTeams,
        message: "You guessed correctly! Pick another logo",
        currentScore: this.state.currentScore + 1,
        topScore: this.state.currentScore >= this.state.topScore ? this.state.currentScore: this.state.topScore
      })

      
    }
    this.shuffle(teams)
  }
  render() {
    return (
      <div style={styles.body}>
        <Jumbotron message={this.state.message} current={this.state.currentScore} top={this.state.topScore}>NBA Memory Game</Jumbotron>
        <div className='container'>
          {(this.state.initial).map(team => {
            return <GameBody
            id={team.id}
            key={team.id} 
            image={team.image} 
            teamname={team.teamname}
            gamelogic={this.userSelect} />
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
