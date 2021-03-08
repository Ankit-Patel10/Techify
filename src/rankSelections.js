import React, { useCallback } from 'react'
import CompanyCard from './companyCard';
import drawIcon from './drawIcon.PNG';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from "react";
import { useKeyPress } from './keypress'

var dispatchForCode = function (event) {
    var code;

    if (event.key !== undefined) {
        code = event.key;
    } else if (event.keyIdentifier !== undefined) {
        code = event.keyIdentifier;
    } else if (event.keyCode !== undefined) {
        code = event.keyCode;
    }

    return code;
};

// function's type:
// 1. what it takes as input (parameters/arguments)
// 2. what it outputs (return value)
const RankSelections = () => {
    // const res = fetch('https://rankit-backend.herokuapp.com/company/match')
    // const company1 = res[0]
    // const company2 = res[1]
    // let draw = false

    const [company1, setCompany1] = useState();
    const [company2, setCompany2] = useState();


    // useEffect(()=>{fetchMatch()}, []);


    const fetchMatch = async () => {
        const res = await fetch('https://rankit-backend.herokuapp.com/company/match');
        const data = await res.json();
        setCompany1(data[0]);
        setCompany2(data[1]);
    };

    useEffect(fetchMatch, []);

    const madeDecision = (winnerId) => {
        console.log(winnerId)
        if (!company1 || !company2) {
            return;
        }
        // gets called every time the user picks a winner or clicks draw   
        let payload;
        if (winnerId) {
            // figure out loserId
            let loserId;
            if (winnerId === company1.id) {
                loserId = company2.id;
            } else {
                loserId = company1.id;
            }

            // tell server who won and who lost
            payload = { "winnerId": winnerId, "loserId": loserId, "draw": false };
        } else {
            // tell server that it's a draw
            payload = { "winnerId": company1.id, "loserId": company2.id, "draw": true };
        }

        fetch('https://rankit-backend.herokuapp.com/company/match', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        // get new match (i.e. new set of companies)
        fetchMatch();
    };

    useKeyPress((event) => {
        const code = dispatchForCode(event);
        if (code === "ArrowLeft") {
            if (company1) {
                madeDecision(company1.id);
            }
        }
        else if (code === "ArrowRight") {
            if (company2) {
                madeDecision(company2.id);
            }
        }
        else if (code === " ") {
            madeDecision(null);
        }
    })


    return (
        <div>
            <div className="bodyimage">
                <CompanyCard company={company1} onSelected={madeDecision}> </CompanyCard>
            </div>
            <div className="bodyimage">
                <CompanyCard company={company2} onSelected={madeDecision}> </CompanyCard>
            </div>
            <div className="drawButton">
                <Button onClick={() => madeDecision()}><img className="drawButton" src={drawIcon} alt="Draw" width="236.4px" height="67.2px" /> </Button>
            </div>
        </div>
    )
}

export default RankSelections
