import styled from "@emotion/styled"

const BlockWrapper = styled.section`
  background-color: #202334;
  border-radius: 8px;
  box-shadow: 0 0 20px 0 #171b3a;
  font-family: sans-serif;
  padding: 1.5625em;
  width: 100%;

  @media (max-width: 575px) {
    margin: 7px auto;
    width: 100%;
  }
`

export default BlockWrapper