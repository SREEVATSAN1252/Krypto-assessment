import React from "react";
import TradingViewWidget , { Themes } from 'react-tradingview-widget';
const Graph = () => {
  return <div style={{height:"400px" ,marginLeft:"10px",marginTop:"5px"}}>
  <TradingViewWidget symbol="NASDAQ:AAPL"  
    theme={Themes.DARK}
    locale="fr"
   autosize/>
  </div>;
};

export default Graph;
