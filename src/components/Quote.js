import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { QuoteContainer, Text } from './QuoteStyle'
const url = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
const Quote = () => {
    const [data, setData] = useState(null)
    useEffect(()=>{
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    if ( !data ) return null

  return (
    <QuoteContainer>
        <Text>{data.quotes[0].text}</Text>
        <Text>{data.quotes[0].author}</Text>
    </QuoteContainer>
  )
}

export default Quote