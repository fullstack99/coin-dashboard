import axios from "axios"

export const baseUrl = "https://www.cryptocompare.com"
export const TOP_BY_MARKET_URL = "https://s2.coinmarketcap.com"

export const REST_API_ENDPOINTS = {
  TOP_BY_VOL24H: "/top/totalvolfull",
  TOP_BY_MARKET: "/generated/stats/global.json",
  PRICE_SINGLE: "/price",
  PRICE_MULTIFULL: "/pricemultifull"
}

const defaultConfig = {
  url: `https://min-api.cryptocompare.com/data`,
  params: {
    apiKey: "b86039193d7a9a43ed79cffa9a95877e11642d29ddba89cc071088a3680f2750"
  }
}

const useApi = (endpoint, { ...config }) => {
  const { params: defaultParams, ...defaultRest } = defaultConfig
  const { params, ...rest } = config || {}
  const opts = {
    ...defaultRest,
    ...rest,
    params: { ...defaultParams, ...params }
  }
  opts.url = `${opts.url}${endpoint}`
  return axios({ ...opts })
}

export default useApi
