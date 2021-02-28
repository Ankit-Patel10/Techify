import React from 'react'
import Button from '@material-ui/core/Button';

const CompanyCard = ({ disname, disimage, disid, winnerId }) => {
    return (
        <div>
            <Button onClick={() => winnerId(disid)} > <img src={disimage} height="354.63px" width="388.09px" alt="companylogo" /></Button>
            <p className="companyname1">{disname}</p>
        </div>
    )
}

export default CompanyCard
