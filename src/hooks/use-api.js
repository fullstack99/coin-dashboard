import axios from "axios"

export const baseUrl = 'https://www.cryptocompare.com'
export const REST_API_ENDPOINTS = {
  TOP_BY_MARKET: "/top/totalvolfull",
}

const defaultConfig = {
  url: `https://min-api.cryptocompare.com/data`,
  params: {
    apiKey: "b86039193d7a9a43ed79cffa9a95877e11642d29ddba89cc071088a3680f2750",
  },
}

const useApi = async ({ endpoint, ...config }) => {
  const { params: defaultParams, url, ...defaultRest } = defaultConfig
  const { params, ...rest } = config || {}
  const opts = {
    ...defaultRest,
    ...rest,
    url: `${url}${endpoint}`,
    params: { ...defaultParams, ...params },
  }
  return await axios({ ...opts })
}

export default useApi
