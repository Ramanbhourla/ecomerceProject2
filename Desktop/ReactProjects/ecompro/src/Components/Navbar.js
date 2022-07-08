import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/base.css";
import "../css/bootstrap-responsive.min.css";
import "../css/font-awesome.css";
import "../css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";

const Navbar = () => {
  const history = useHistory();
  const [rerender, setRerender] = useState(false);
  const [rerenderSearch, setRerenderSearch] = useState(false);
  const [searchData, setSearchData] = useState();
  // console.log(loginData[0].username ,'getdata')

 

  function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    setRerender(!rerender);
    history.push("/loginform");
  }
  const searchButton = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div id="logoArea" className="navbar">
      <a
        id="smallScreen"
        data-target="#topMenu"
        data-toggle="collapse"
        className="btn btn-navbar"
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </a>
      <div className="navbar-inner">
        <Link className="brand" to={"/"}>
          {/* <img src='https://www.designevo.com/res/templates/thumb_small/simple-bag-cursor-online-shopping.png' alt="logo" style={{'backgroundColor':'transparent','width':'100px'}}/> */}
          <h1>
            Shophaven <RiShoppingCart2Line />
          </h1>
        </Link>
        <div
          className="form-inline navbar-quary"
          method="post"
          action="products.html"
        >
          <input
            placeholder="search"
            className="srchTxt"
            type="text"
            onChange={searchButton}
          />{" "}
          <Link
            to={{ pathname: "searchproduct", search: `?name=${searchData}` }}
          >
            <button onClick={() => setRerenderSearch(!rerenderSearch)}>
              Search
            </button>
          </Link>
        </div>
        <ul id="topMenu" className="nav pull-right">
          <li className="">
            <Link to={"/product"}>All Products</Link>
          </li>
          <li className="">
            <Link to={"/contact"}>Contact</Link>
          </li>
          {!localStorage.token ? (
            <li className="">
              <Link
                to={"/login"}
                role="button"
                data-toggle="modal"
                style={{ paddingRight: "0" }}
              >
                <span className="btn btn-large btn-success">Login</span>
              </Link>
            </li>
          ) : (
            <div>
              <Link to={"/profile"} style={{ color: "gray" }}>
                {" "}
                {localStorage.getItem("name")}{" "}
              </Link>
              <button onClick={() => logout()}>Logout</button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
