import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import { Greeting, Time, Welcome } from './TimeStampStyle';

const Timestamp = () => {
    let today = new Date();
    let hours = today.getHours();
    console.log(hours)
    let greeting = () => {
        if (hours >= 5 && hours < 11) {
            return 'Good Morning, Client!'
        }else if (hours >= 11 && hours < 17) {
            return 'Good Afternoon, Client!'
        }else if (hours >= 17 && hours < 24) {
            return 'Good Evening, Client!'
        }else {
            return 'What are you doing up at this hours!'
        }
    }

    return (
        <Welcome>
            <Time><Moment format='LT'></Moment></Time>
            <Greeting>{greeting()}</Greeting>
        </Welcome>
    )
}

export default Timestamp