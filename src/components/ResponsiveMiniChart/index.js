import styled from "@emotion/styled"
const ResponsiveMiniChart = styled.span`
  & iframe,
  & div {
    width: 100% !important;
  }
  @media (max-width: 769px) {
    & iframe,
    & div {
      border-radius: 8px !important;
      height: 111px !important;
    }
  }
  @media (min-width: 769px) {
    & iframe,
    & div {
      border-radius: 8px !important;
      height: 127px !important;
    }
  }
`
export default ResponsiveMiniChart