import React from "react"
import { Link } from 'gatsby'
import styled from "@emotion/styled"
import cx from "classnames"
import { string, bool } from "prop-types"

// THEME COLORS
const LINK_TEXT_COLOR = '#5d6c76'
const LINK_VISITED_TEXT_COLOR = '#5d6c76'
const LINK_HOVER_TEXT_COLOR = '#9e9e9e'
const LINK_ACTIVE_BORDER_COLOR = '#475ff2'
const LINK_HOVER_BORDER_COLOR = '#475ff25e'

const StyledLink = styled(Link)`
  color: ${LINK_TEXT_COLOR};
  font-size: 14px;
  min-height: 40px;
  min-width: 120px;
  padding: 0 0 28px 0;

  &:active,
  &:visited {
    color: ${LINK_VISITED_TEXT_COLOR};
  }

  &:hover {
    color: ${LINK_HOVER_TEXT_COLOR};

    &:after {
      background: ${LINK_HOVER_BORDER_COLOR};
      bottom: 0;
      content: "";
      height: 4px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }

  &.active:after {
    background: ${LINK_ACTIVE_BORDER_COLOR};
    bottom: 0;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`

const TabLink = ({ to, text, title, isActive }) => {
  return (
    <StyledLink
      className={cx(
        "text-center",
        "text-decoration-none",
        "position-relative",
        {
          "active": isActive,
          "text-white": isActive
        }
      )}
      to={to}
      title={title}
    >
      {text}
    </StyledLink>
  )
}

TabLink.propTypes = {
  to: string.isRequired,
  text: string.isRequired,
  title: string,
  isActive: bool
}

TabLink.defaultProps = {
  title: null,
  isActive: false
}

export default TabLink
