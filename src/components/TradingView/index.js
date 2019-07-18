import React from "react"
import { oneOf, bool, string } from "prop-types"
import TradingViewWidget, { Themes, BarStyles } from "react-tradingview-widget"

export const TradingView = ({ symbol, theme, autosize, style, ...props }) => (
  <TradingViewWidget
    symbol={`CRYPTOCAP:${symbol}`}
    theme={theme}
    autosize={autosize}
    style={style}
    {...props}
  />
)

TradingView.propTypes = {
  symbol: string,
  theme: oneOf([Themes.DARK, Themes.LIGHT]),
  style: oneOf(Object.values(BarStyles)),
  autosize: bool
}

TradingView.defaultProps = {
  symbol: "BTC",
  theme: Themes.DARK,
  style: BarStyles.CANDLES,
  autosize: true
}

export default TradingView
