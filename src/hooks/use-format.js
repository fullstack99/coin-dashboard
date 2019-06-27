const defaultConfig = {
  type: "k",
}
const useFormat = (amount, opts) => {
  if (!amount) return 0
  const config = { ...defaultConfig, ...opts }
  const { type } = config
  let format = amount
  switch (type) {
    case "k":
      const tmp = Math.round(amount / 1000)
      if (tmp === 0) {
        format = parseFloat(amount).toFixed(2)
      } else {
        format = `${tmp} K`
      }
      break
    default:
      break
  }
  return format
}

export default useFormat
