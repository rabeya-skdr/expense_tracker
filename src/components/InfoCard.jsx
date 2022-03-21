import React from 'react'
const isIncome = Math.round(Math.random());
export const InfoCard = () => {
  return (
    <div style={{textAlign: 'center', padding: '0 10%'}}>
        Try saying: <br />
        Add {isIncome ? ' Income ' :' Expense '} 
        for { isIncome ? ' $100 ' : '$50 '}
        in Category{ isIncome ? ' Business ' : ' House '} Salary 
        for { isIncome ? ' Satday ' : ' Tuesday '}
       
    </div>
  )
}

export default InfoCard;
