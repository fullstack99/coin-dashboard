import axios from "axios"

export const baseUrl = "https://www.cryptocompare.com"
export const REST_API_ENDPOINTS = {
  TOP_BY_VOL24H: "/top/totalvolfull",
  TOP_BY_MARKET: "/top/mktcapfull",
  PRICE_SINGLE: "/price",
  PRICE_MULTIFULL: "/pricemultifull"
}

const defaultConfig = {
  url: `https://min-api.cryptocompare.com/data`,
  params: {
    apiKey: "b86039193d7a9a43ed79cffa9a95877e11642d29ddba89cc071088a3680f2750"
  }
}

const defaultConfigCoinMarketCap = {
  url: `https://s2.coinmarketcap.com/generated/stats/global.json`,
  params: {

  }
}

export const REST_API_ENDPOINTS_COIN_CAP = {
  TOP_BY_MARKET: '/v1/global-metrics/quotes/latest'
}

const useApi = (endpoint, { ...config }, apiDefault = true) => {
  let { params: defaultParams, ...defaultRest } = defaultConfig
  if(!apiDefault){
   defaultRest.url = defaultConfigCoinMarketCap.url
   defaultParams = defaultConfigCoinMarketCap.params
  }
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
