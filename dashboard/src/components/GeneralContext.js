import React, { useState,useContext } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {
    
  },
  openSellWindow :(uid)=>{

  },
  closeBuyWindow: () => {},
  closeSellWindow :()=>{},

  
});

export const GeneralContextProvider = ({children}) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
const [selectedSellStockUID, setSelectedSellStockUID] = useState("");
 const handleOpenBuyWindow=(uid)=>{
  setIsBuyWindowOpen(true);
  setSelectedStockUID(uid);
 }

 const handleOpenSellWindow=(uid)=>{
  setIsSellWindowOpen(true);
  setSelectedSellStockUID(uid);
 }
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };
const handleCloseSellWindow=()=>{
  setIsSellWindowOpen(false);
  setSelectedSellStockUID("");
}
  return (
    <GeneralContext.Provider value={{openBuyWindow : handleOpenBuyWindow,
      closeBuyWindow :handleCloseBuyWindow,
      openSellWindow :handleOpenSellWindow,
      closeSellWindow : handleCloseSellWindow,

    }}>
  {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedSellStockUID}/>}
    </GeneralContext.Provider>
  );
};



export default GeneralContext;