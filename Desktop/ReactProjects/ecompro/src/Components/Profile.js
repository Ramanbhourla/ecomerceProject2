import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Profile = () => {
  const { loginData } = useSelector((state) => state.LoginReducer);
  const { cartItems } = useSelector((state) => state.CartReducer);
  const history = useHistory()

  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "220px" }}>
        {
          localStorage.token ? <><div className="span12" style={{ marginBottom: "50px" }}>
          <ul className="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link> <span className="divider">/</span>
            </li>
          </ul>
        </div>
        <div className="span4">
          {loginData.length === 0 ? (
            <img src="" alt="img" />
          ) : (
            <img
              src={`http://localhost${loginData[0].profilePic}`}
              alt="Profile img"
            />
          )}
        </div>
        <div className="span4">
          <h5>
            Name :-
            {loginData.length === 0 ? (
              <b>" "</b>
            ) : (
              <b>
                {loginData[0].firstName} {loginData[0].lastName}
              </b>
            )}
          </h5>
          <br />

          <div>
            Email :-
            {loginData.length === 0 ? <b>" "</b> : <b>{loginData[0].email}</b>}
          </div>
          <br />
          <div>
            Mobile Number :-
            {loginData.length === 0 ? <b>" "</b> : <b>{loginData[0].phone}</b>}
          </div>
        </div>
        <div id="sidebar" className="span3">
          <div className="well well-small">
            <Link id="myCart" to={"/cart"}>
              {cartItems.length} Items in your cart
            </Link>
          </div>
          <ul id="sideManu" className="nav nav-tabs nav-stacked"></ul>
          <br />
          {cartItems.map((data, i) => {
            return (
              <div className="thumbnail" key={i}>
                <img
                  src={`http://localhost${data.productimg}`}
                  alt="img"
                  className="cartImg"
                />
                <div className="caption">
                  <h5>{data.name}</h5>
                  <h4 style={{ textAlign: "center" }}></h4>
                </div>
              </div>
            );
          })}

          <br />
        </div></> : history.push('/')
        }
      </div>
    </div>
  );
};

export default Profile;
