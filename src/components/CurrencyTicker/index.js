import React, { useState, useEffect } from "react"
import Ticker from "react-ticker"
import styled from "@emotion/styled"
import axios from 'axios';

const TickerWrapper = styled.div`
  background-color: #3041eb;
  margin: 0;
  padding: 1.5rem 0;
`

const TickerItem = styled.div`
  margin-bottom: 0;
  padding: 0 4rem;
`

const CurrencyTicker = () => {
  const [data, setData] = useState({ currencies: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=b86039193d7a9a43ed79cffa9a95877e11642d29ddba89cc071088a3680f2750',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  console.log('currencyTicker', '/data/price', data)

  return (
    <TickerWrapper>
      <Ticker>
        {({ index }) => (
          <>
            <TickerItem>elem #{index}!</TickerItem>
          </>
        )}
      </Ticker>
    </TickerWrapper>
  )
}

export default CurrencyTicker
