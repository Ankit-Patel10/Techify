import './App.css';
import logo from './logo.PNG';
import React, { useState } from "react";
import rankClicked from './rankClicked.PNG';
import lbUnclicked from './leaderboardUnclicked.PNG';
import rankUnclicked from './rankUnclicked.PNG';
import lbClicked from './leaderboardClicked.PNG';
import Button from '@material-ui/core/Button';
import RankSelections from './rankSelections';
import LeaderBoard from './leaderBoard';

function App() {
  const [leaderboard, setLeaderboard] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="HOME" width="197px" height="54px" />
      </header>

      {!leaderboard ? (
        <div className="rank-page-container">
          <h1><Button><img className="headimagerank" src={rankClicked} alt="RANK" /></Button><Button onClick={() => setLeaderboard(true)}><img className="headimageleader" src={lbUnclicked} alt="LEADERBOARD" /></Button></h1>
          <RankSelections></RankSelections>
        </div>
      ) : (
          <div>
            <h1><Button onClick={() => setLeaderboard(false)}><img className="headimagerank" src={rankUnclicked} alt="RANK" /></Button><Button onClick={() => setLeaderboard(true)}><img className="headimageleader" src={lbClicked} alt="LEADERBOARD" /></Button></h1>
            <LeaderBoard></LeaderBoard>
          </div>
        )}

    </div>
  );
}

export default App;
