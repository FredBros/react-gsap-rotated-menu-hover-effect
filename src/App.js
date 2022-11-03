import React, {useState} from "react"
import Header from "./components/Header"
import Menu from "./components/Menu"
import styled from "styled-components"

const StyledMainWrapper= styled.div`
position: relative;
`
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <StyledMainWrapper>
    <Header isMenuOpen= {isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    <Menu/>
    </StyledMainWrapper>
  );
}

export default App;
