const CONVERSIONS = [
  {
    symbol: "T",
    rate: 1000000000000,
  },
  {
    symbol: "B",
    rate: 1000000000,
  },
  {
    symbol: "M",
    rate: 1000000,
  },
  {
    symbol: "K",
    rate: 1000,
  },
]
const useFormat = amount => {
  if (!amount) return 0
  let format = null
  CONVERSIONS.forEach(conversion => {
    if (format) return format
    let tmp = amount / conversion.rate
    if (Math.round(tmp) > 0) {
      tmp = parseFloat(tmp).toFixed(2)
      format = `${tmp} ${conversion.symbol}`
      return format
    }
    return false
  })
  if (!format) {
    format = parseFloat(amount).toFixed(2)
  }
  return format
}

export default useFormat
