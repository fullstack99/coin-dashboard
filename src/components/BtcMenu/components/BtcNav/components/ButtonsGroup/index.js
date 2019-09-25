import styled from "@emotion/styled"

const ButtonsGroup = styled.section`
  flex: 1;

  & > div {
    margin: 0 5px 15px;

    @media (min-width: 768px) {
      margin: 0 10px 15px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

export default ButtonsGroup
