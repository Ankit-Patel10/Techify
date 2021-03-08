import React from 'react'

const leaderBoardCompany = (props) => {


    return (
        <div className="slotStyle">
            <div className="rank">{props.rank + 1}</div>
            <div className="complogo"><img src={props.indvSlot.logo} className="resize" /></div>
            <div className="compname">{props.indvSlot.name}</div>
        </div>
    )
}

export default leaderBoardCompany
