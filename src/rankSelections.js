import React from 'react'
import CompanyCard from './companyCard';
import drawIcon from './drawIcon.PNG';
import Button from '@material-ui/core/Button';
import res from './db.js';
import { useState, useEffect } from "react";



const RankSelections = () => {
    const company1 = res[0]
    const company2 = res[1]
    let draw = false

    const [winnerId, setWinnerId] = useState("");
    useEffect(() => {
        let loserId = 0
        if (winnerId === company1.id && winnerId !== "") {
            loserId = company2.id
            console.log(winnerId)
            console.log(loserId)
            console.log(draw)
        } else if (winnerId === company2.id && winnerId !== "") {
            loserId = company1.id
            console.log(winnerId)
            console.log(loserId)
            console.log(draw)
        }
        else if (winnerId !== "") {
            draw = true
            console.log(winnerId)
            console.log(loserId)
            console.log(draw)
        }

    })

    return (
        <div>
            <div className="bodyimage">
                <CompanyCard disname={company1.name} disimage={company1.logo} disid={company1.id} winnerId={setWinnerId} > </CompanyCard>
            </div>
            <div className="bodyimage">
                <CompanyCard disname={company2.name} disimage={company2.logo} disid={company2.id} winnerId={setWinnerId}> </CompanyCard>
            </div>
            <div className="drawButton">
                <Button onClick={() => setWinnerId(0)}><img className="drawButton" src={drawIcon} alt="Draw" width="236.4px" height="67.2px" /> </Button>
            </div>
        </div>
    )
}

export default RankSelections
