import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
import Registration from "./Components/Registration";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import "./css/toastr.css";
import ForgetPassword from "./Components/ForgetPassword";
import ProductDetail from "./Products/ProductDetail";
import Products from "./Products/Products";
import Loginform from "./Components/Loginform";
import SearchProcuts from "./Products/SearchProcuts";


const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={"/"} render={() => <Home />} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/faq"} component={Faq} />
        <Route exact path={"/login"} component={Loginform} />
        <Route exact path={"/profile"} render={()=> <Profile/> }/>
        <Route exact path={"/forgetpassword"} render={()=> <ForgetPassword/>} />
        <Route exact path={"/registration"} component={Registration} />
        <Route path={`/product`} component={Products} />
        <Route path={`/productdetail`} component={ProductDetail} />
        <Route path={`/searchproduct`} component={SearchProcuts} />
        <Route exact path={`/cart`} component={Cart} />
        <Redirect to={"/"} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
