import React from 'react'
import Button from '@material-ui/core/Button';

const CompanyCard = ({ side, company, onSelected, onAnimationEnd }) => {
    return (
        company ? (
            <div onAnimationEnd={onAnimationEnd} className="company" data-side={side} data-draw={company.status === "draw"} data-lost={company.status === "lost"} data-won={company.status === "won"}>
                <Button onClick={() => onSelected(company.id)} > <img className="bodyimagegeneral" src={company.logo} key={company.logo} alt="companylogo" /></Button>
                <p>{company.name}</p>
            </div>
        ) : (
            <div>
                <p>loading!</p>
            </div>
        )
    )
};

export default CompanyCard;
