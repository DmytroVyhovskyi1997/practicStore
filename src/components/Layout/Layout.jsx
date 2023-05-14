import { Outlet } from "react-router"
import { Header, Nav, StyledLink } from "./Layout.styled"

export const Layout =()=>{
return(
    <>
    <Header>
    <Nav>
<StyledLink to='/'>Categories</StyledLink>
<StyledLink to='/products'>Products</StyledLink>
    </Nav>
    </Header>
  
    <main>
        <Outlet/>
    </main>
    </>
    
)
}
