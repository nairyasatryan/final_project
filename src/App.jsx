import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Success from "./pages/Success";
// import { useSelector } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Home />} />
  
        <Route path="/products/:category"  element = {<ProductList />} />
         
        <Route path="/product/:id"  element = {<Product />} />
         
        
        <Route path="/cart"  element = {<Cart />}  />
          
      
        {/* <Route path="/success">
          <Success />
        </Route> */}
       <Route path="/login" element={ user  ? <Navigate replace to="/" /> : <Login />}/>
        <Route path="/login" element={ user  ? <Navigate replace to="/" /> : <Register />}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
