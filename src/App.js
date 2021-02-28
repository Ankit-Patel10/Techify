import './App.css';
import logo from './logo.PNG';
import React, { useState } from "react";
import rankClicked from './rankClicked.PNG';
import lbUnclicked from './leaderboardUnclicked.PNG';
import rankUnclicked from './rankUnclicked.PNG';
import lbClicked from './leaderboardClicked.PNG';
import Button from '@material-ui/core/Button';
import RankSelections from './rankSelections';


function App() {


  const [leaderboard, setLeaderboard] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="HOME" width="197px" height="54px" />
      </header>

      {!leaderboard ? (
        <div>
          <h1><Button onClick=""><img className="headimagerank" src={rankClicked} alt="RANK" width="200px" height="59px" /></Button><Button onClick={() => setLeaderboard(true)}><img className="headimageleader" src={lbUnclicked} alt="LEADERBOARD" width="200px" height="59px" /></Button></h1>
          <RankSelections></RankSelections>
        </div>
      ) : (
          <div>
            <h1><Button onClick={() => setLeaderboard(false)}><img className="headimagerank" src={rankUnclicked} alt="RANK" width="200px" height="59px" /></Button><Button onClick={() => setLeaderboard(true)}><img className="headimageleader" src={lbClicked} alt="LEADERBOARD" width="200px" height="59px" /></Button></h1>
          </div>
        )}

    </div>
  );
}

export default App;
