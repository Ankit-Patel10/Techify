import React from 'react'
import Button from '@material-ui/core/Button';

const CompanyCard = ({ company, onSelected }) => {
    return (
        company ? (
            <div>
                <Button onClick={() => onSelected(company.id)} > <img className="bodyimagegeneral" src={company.logo} alt="companylogo" /></Button>
                <p>{company.name}</p>
            </div>
        )
            : (
                <div>
                    <p>loading!</p>
                </div>
            )
    )
}

export default CompanyCard
