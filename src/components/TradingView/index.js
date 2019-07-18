import React from "react"
import { oneOf, bool, string } from "prop-types"
import TradingViewWidget, { Themes, BarStyles } from "react-tradingview-widget"

export const TradingView = ({
  symbol,
  theme,
  autosize,
  style,
  save_image,
  ...props
}) => (
  <TradingViewWidget
    symbol={symbol}
    theme={theme}
    autosize={autosize}
    style={style}
    {...props}
  />
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
  style: BarStyles.CANDLES,
  autosize: true,
  save_image: false
}

export default TradingView
