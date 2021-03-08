import React from 'react'
import LeaderBoardCompanies from './leaderBoardCompanies'
import SearchBar from './searchBar'
import { useState, useEffect } from 'react'

const LeaderBoard = () => {

    const [leaderBoardData, setleaderBoardData] = useState();

    const fetchLeaderBoard = async () => {
        const res = await fetch('https://rankit-backend.herokuapp.com/company/leaderboards');
        const data = await res.json();
        setleaderBoardData(data);
    };

    useEffect(fetchLeaderBoard, []);

    return (
        <div className="leaderboardinter">
            <div className="SearchBar">
                <SearchBar></SearchBar>
            </div>
            {leaderBoardData && <div className="RankSlots">
                <LeaderBoardCompanies data={leaderBoardData} ></LeaderBoardCompanies>
            </div>}
        </div >
    )
}

export default LeaderBoard
