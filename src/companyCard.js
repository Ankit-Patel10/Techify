import React from 'react'
import Button from '@material-ui/core/Button';

const CompanyCard = ({ disname, disimage, disid, winnerId }) => {
    return (
        <div>
            <Button onClick={() => winnerId(disid)} > <img className="bodyimagegeneral" src={disimage} alt="companylogo" /></Button>
            <p>{disname}</p>
        </div>
    )
}

export default CompanyCard
