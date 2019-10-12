import { useEffect } from "react"
import { navigate } from "gatsby"

const Empty = ({ location }) => {
  const { pathname } = location
  console.log({ location })
  useEffect(() => {
    if (pathname.indexOf("/empty") === 0) {
      navigate("/")
    }
  })
  return null
}

export default Empty
