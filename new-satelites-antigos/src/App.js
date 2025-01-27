import { Router } from '../src/router/router';
import { useState, useEffect } from "react";
import {GlobalContext} from './context/GlobalContext'

function App() {
  const itemsCart = JSON.parse( localStorage.getItem("itemsCart") || "[]")
  const [listCart, setListCart] = useState([...itemsCart])

  useEffect(()=>{
    localStorage.setItem("itemsCart", JSON.stringify(listCart))
  },[listCart])

  const context = {
    itemsCart: itemsCart,
    listCart: listCart,
    setListCart
  }

  return (
    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider >
  );
}

export default App;
