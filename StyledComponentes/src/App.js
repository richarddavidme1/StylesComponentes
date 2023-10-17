import React from "react";
import { useState } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyles from "./Globalstyles";
import { ThemeProvider } from "styled-components";
import { temaClaro,temaOscuro } from "./Components/UI/temas"; 
import { BtnTema } from "./Components/UI";
import CambioTema from "./Components/CambioTema";



function App() {

  const [tema ,setTema]=useState(true);

  const cambioTema =() =>
  {
    setTema((tema) => !tema)
  }
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyles/>
      <BtnTema onClick={cambioTema}>
        <CambioTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
