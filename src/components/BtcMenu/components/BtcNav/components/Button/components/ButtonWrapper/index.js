import styled from "@emotion/styled"

const ButtonWrapper = styled.button`
  -webkit-appearance: none;
  background-color: #1d1e2e;
  border: none;
  color: #8796b0;
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 10px;
  min-width: 100px;
  opacity: 0.4;
  padding: 0.3125rem 2rem 0 0;
  text-align: left;
  width: 160px;

  &:active,
  &:focus,
  &:visited {
    outline: none;
  }

  &:active {
    opacity: 0.8;
    transform: scale(0.95);
  }

  &:hover {
    background: #333d58;
  }

  @media (max-width: 575px) {
    font-size: 17px;
    text-align: left;
    width: 136px;
    width: 140px !important;
  }
`


export default ButtonWrapper
