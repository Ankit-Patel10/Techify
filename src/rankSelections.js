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
    const [companies, setCompanies] = useState([null, null]);

    const fetchMatch = async () => {
        const res = await fetch('https://rankit-backend.herokuapp.com/company/match');
        const data = await res.json();
        setCompanies([{...data[0], status: null}, {...data[1], status: null}]);
    };

    useEffect(fetchMatch, []);

    const madeDecision = (winnerId) => {
        if (!companies[0] || !companies[1]) {
            return;
        }
        // gets called every time the user picks a winner or clicks draw   
        let payload;
        if (winnerId != null) {
            // figure out loserId
            let loserId;
            if (winnerId === companies[0].id) {
                loserId = companies[1].id;
                setCompanies([{...companies[0], status: "won"}, {...companies[1], status: "lost"}]);
            } else {
                loserId = companies[0].id;
                setCompanies([{...companies[0], status: "lost"}, {...companies[1], status: "won"}]);
            }

            // tell server who won and who lost
            payload = { "winnerId": winnerId, "loserId": loserId, "draw": false };
        } else {
            // tell server that it's a draw
            payload = { "winnerId": companies[0].id, "loserId": companies[1].id, "draw": true };
            setCompanies([{...companies[0], status: "draw"}, {...companies[1], status: "draw"}]);
        }

        fetch('https://rankit-backend.herokuapp.com/company/match', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    };

    useKeyPress((event) => {
        const code = dispatchForCode(event);
        if (code === "ArrowLeft") {
            if (companies[0]) {
                madeDecision(companies[0].id);
            }
        } else if (code === "ArrowRight") {
            if (companies[1]) {
                madeDecision(companies[1].id);
            }
        } else if (code === " ") {
            madeDecision(null);
        }
    });

    const onAnimationEnd = ({ animationName }, company) => {
        if (animationName != "stay") return;

        fetchMatch();
    };

    return (
        <div className="companies-container">
            <div className="bodyimage">
                <CompanyCard side="left" company={companies[0]} onSelected={madeDecision} onAnimationEnd={(event) => onAnimationEnd(event, companies[0])}> </CompanyCard>
            </div>
            <div className="bodyimage">
                <CompanyCard side="right" company={companies[1]} onSelected={madeDecision} onAnimationEnd={(event) => onAnimationEnd(event, companies[1])}> </CompanyCard>
            </div>
            <div className="drawButton">
                <Button onClick={() => madeDecision()}><img className="drawButton" src={drawIcon} alt="Draw" width="236.4px" height="67.2px" /> </Button>
            </div>
        </div>
    )
}

export default RankSelections
