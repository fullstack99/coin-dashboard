const btcDominance = (arr, totalMarketCap) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]["CoinInfo"]["Name"] === "BTC") {
      const BTCMarket = arr[i]["RAW"]["USD"]["MKTCAP"]

      return (BTCMarket * 100) / totalMarketCap
    }
  }
}

export default btcDominance