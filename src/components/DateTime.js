import React from 'react'
import { DateContainer } from './DateTimeStyle';

const DateTime = () => {
    let today = new Date();
    let date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate();
  return (
    <DateContainer>
        <p>{date}</p>
    </DateContainer>
  )
}

export default DateTime