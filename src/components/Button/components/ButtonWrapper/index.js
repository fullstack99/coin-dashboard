import styled from "@emotion/styled"

const ButtonWrapper = styled.button`
  -webkit-appearance: none;
  background: #262d3e;
  border-radius: 5px;
  border: 1px solid #262d3e;
  color: inherit;
  font-size: 0.875rem;
  line-height: 20px;
  min-width: 100px;
  padding: 0.3125rem 1.25rem;

  &:focus,
  &:visited,
  &:active {
    outline: none;
  }

  &:active {
    opacity: 0.8;
    transform: scale(0.95);
  }
`
export default ButtonWrapper
