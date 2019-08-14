import React from "react"
import { oneOf, bool, string } from "prop-types"
import TradingViewWidget, { Themes, BarStyles } from "react-tradingview-widget"

import TradingViewWrapper from "./components/TradingViewWrapper/index"

export const TradingView = ({
  symbol,
  theme,
  autosize,
  style,
  save_image,
  ...props
}) => (
  <TradingViewWrapper>
    <TradingViewWidget
      symbol={symbol}
      theme={theme}
      autosize={autosize}
      style={style}
      {...props}
    />
  </TradingViewWrapper>
)

TradingView.propTypes = {
  symbol: string.isRequired,
  theme: oneOf([Themes.DARK, Themes.LIGHT]),
  style: oneOf(Object.values(BarStyles)),
  autosize: bool,
  save_image: bool
}

TradingView.defaultProps = {
  theme: Themes.DARK,
  style: BarStyles.AREA,
  autosize: true,
  save_image: false
}

export default TradingView
