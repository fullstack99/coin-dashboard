const addAllFields = (arr, field) => {
  let marketCap = arr.map(coin => {
    return coin["RAW"]["USD"][field]
  })

  return marketCap.reduce((a, b) => a + b, 0)
}

export default addAllFields