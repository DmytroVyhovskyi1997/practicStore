import { Route, Routes } from "react-router";
import { Layout } from "./Layout/Layout";
import { Categories } from "./pages/Categories";
import { Products } from "./pages/Products";


export const App = () => {
  return (
<Routes>
  <Route path="/" element={<Layout/>} >
    <Route index element={<Categories/>}/>
    <Route path="/products" element={<Products/>}/>

  </Route>
</Routes>
  );
};
