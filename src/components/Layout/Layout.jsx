import { Outlet } from "react-router"
import { Footer, Header, Nav, StyledLink } from "./Layout.styled"

export const Layout =()=>{
    return (
      <>
        <Header>
          <Nav>
            <StyledLink to="/">Categories</StyledLink>
            <StyledLink to="/products">Products</StyledLink>
            <StyledLink to="/add">Card</StyledLink>
          </Nav>
        </Header>
      
        <main>
          <Outlet/>
        </main>
      
        <Footer>
        </Footer>
      </>
    )
  }
