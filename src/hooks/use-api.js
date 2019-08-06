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
    apiKey: "cf4d7fa2bac9320077e822ba35bdb009ef9c0308bed3909abd9c91012ac4c384"
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
