import React, { useState } from "react"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"

import Counter from "./components/Counter"
import Notifications from "./components/Notifications"

const notifier = css`
  height: 25px;
  margin-right: 74px;
  margin-top: -10px;
  position: relative;
  width: 21px;

  @media (min-width: 992px) {
    margin-right: 0
  }

  button {
    background: transparent;
    border: 0;
    color: #fff;
    font-size: 24px;
    height: 30px;
    padding: 0;
    position: absolute;

    &:focus {
      outline: 0;
    }
  }
`

const Notifier = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="d-flex" css={notifier}>
      <div className="position-relative">
        <button onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faBell} />
          <Counter value="2" />
        </button>
        <Notifications className={open === false ? "d-none" : "d-block"} />
      </div>
    </div>
  )
}

export default Notifier
