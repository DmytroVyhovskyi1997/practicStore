import { Outlet } from "react-router"
import { StyledLink } from "./Layout.styled"

export const Layout =()=>{
return(
    <>
    <nav>
<StyledLink to='/'>Categories</StyledLink>
<StyledLink to='/products'>Products</StyledLink>
    </nav>
    <main>
        <Outlet/>
    </main>
    </>
    
)
}
