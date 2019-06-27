import axios from "axios"

export const baseUrl = "https://www.cryptocompare.com"
export const REST_API_ENDPOINTS = {
  TOP_BY_MARKET: "/top/totalvolfull",
  PRICE_SINGLE: "/price",
}

const defaultConfig = {
  url: `https://min-api.cryptocompare.com/data`,
  params: {
    apiKey: "b86039193d7a9a43ed79cffa9a95877e11642d29ddba89cc071088a3680f2750",
  },
}

const useApi = (endpoint, { ...config }) => {
  const { params: defaultParams, ...defaultRest } = defaultConfig
  const { params, ...rest } = config || {}
  const opts = {
    ...defaultRest,
    ...rest,
    params: { ...defaultParams, ...params },
  }
  opts.url = `${opts.url}${endpoint}`
  return axios({ ...opts })
}

export default useApi
