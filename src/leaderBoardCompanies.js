import React from 'react'
import LeaderBoardCompany from './leaderBoardCompany'

const leaderBoardCompanies = (props) => {
    return (

        <div>
            {props.data.map((indvSlot, index) => (
                <LeaderBoardCompany indvSlot={indvSlot} rank={index}  ></LeaderBoardCompany>
            ))}
        </div>
    )
}

export default leaderBoardCompanies
