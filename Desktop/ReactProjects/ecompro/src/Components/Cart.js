import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Axios from "../Apis/axiosConfig";

const Cart = () => {
  const [category, setCategory] = useState([]);
  const { cartItems } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState();
  const history = useHistory();

  useEffect(() => {
    Axios.get("user/category?page=1").then((response) => {
      setCategory(response.data.data);
    });
  }, []);

  useEffect(() => {
    let price = 0;
    cartItems.map((data) => {
      price = price + data.price * data.count;
      setTotalPrice(price);
    });
  }, []);

  const RemoveItem = (id) => {
    return dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const inCrement = (id) => {
    return dispatch({ type: "INCREMENT", payload: id });
  };
  const deCrement = (id) => {
    // console.log(id)
    return dispatch({ type: "DECREMENT", payload: id });
  };
  return (
    <>
      {!cartItems.length ? (
        <h3 style={{ textAlign: "center", margin: "280px" }}>
          No Item Into your cart
        </h3>
      ) : (
        <>
          <div id="header">
            <div className="container">
              <div id="welcomeLine" className="row">
                <div className="span6">
                  Welcome!<strong> User</strong>
                </div>
              </div>
            </div>
          </div>
          <div id="mainBody">
            <div className="container">
              <div className="row">
                <div id="sidebar" className="span3">
                  <div className="well well-small">
                    <Link id="myCart" to={"/cart"}>
                      {cartItems.length} Items in your cart
                      <span className="badge badge-warning pull-right">
                        Rs- {totalPrice}
                      </span>
                    </Link>
                  </div>
                  <ul id="sideManu" className="nav nav-tabs nav-stacked">
                    {category.map((data, i) => {
                      return (
                        <li className="subMenu open" key={i}>
                          <Link
                            to={{
                              pathname: "product",
                              search: `?category=${data._id}`,
                            }}
                          >
                            {data.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
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
                          <h4 style={{ textAlign: "center" }}>
                            <button
                              className="btn btn-primary"
                              onClick={() => RemoveItem(data.id)}
                            >
                              REMOVE
                            </button>
                          </h4>
                        </div>
                      </div>
                    );
                  })}

                  <br />
                </div>
                <div className="span9">
                  <ul className="breadcrumb">
                    <li>
                      <Link to={"/"}>Home</Link>
                      <span className="divider">/</span>
                    </li>
                    <li className="active"> SHOPPING CART</li>
                  </ul>
                  <h3>
                    {" "}
                    SHOPPING CART [ <small>{cartItems.length} Item(s) </small>]
                    <button
                      className="btn btn-large pull-right"
                      onClick={() => history.push("/product")}
                    >
                      <i className="icon-arrow-left"></i> Continue Shopping
                    </button>
                  </h3>
                  <hr className="soft" />
                  <table className="table table-bordered">
                    <tr>
                      <th> I AM ALREADY REGISTERED </th>
                    </tr>
                    <tr>
                      <td>
                        <form className="form-horizontal">
                          <div className="control-group">
                            <div className="controls">
                              <Link to={"/login"}>
                                <button typeof="submit" className="btn">
                                  Sign in
                                </button>
                              </Link>
                              OR{" "}
                              <Link to={"/registration"} className="btn">
                                Register Now!
                              </Link>
                            </div>
                          </div>
                        </form>
                      </td>
                    </tr>
                  </table>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity/Update</th>
                        <th> Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((data, i) => {
                        return (
                          <tr key={i}>
                            <td>
                              <img
                                width="60"
                                src="themes/images/products/4.jpg"
                                alt=""
                              />
                            </td>
                            <td>{data.name}</td>
                            <td>
                              <div className="input-append">
                                <input
                                  className="span1"
                                  style={{ maxWidth: "34px" }}
                                  placeholder={data.count}
                                  id="appendedInputButtons"
                                  size="16"
                                  typeof="text"
                                />
                                <button
                                  className="btn"
                                  typeof="button"
                                  onClick={() => deCrement(data._id)}
                                >
                                  <i className="icon-minus"></i>
                                </button>
                                <button
                                  className="btn"
                                  typeof="button"
                                  onClick={() => inCrement(data._id)}
                                >
                                  <i className="icon-plus"></i>
                                </button>
                                <button
                                  className="btn btn-danger"
                                  typeof="button"
                                >
                                  <i className="icon-remove icon-white"></i>
                                </button>
                              </div>
                            </td>
                            <td>{data.price * data.count} </td>
                          </tr>
                        );
                      })}

                      <tr>
                        <td colSpan="6" style={{ textAlign: "right" }}>
                          <strong>TOTAL =</strong>
                        </td>
                        <td
                          className="label label-important"
                          style={{ display: "block" }}
                        >
                          <strong> {totalPrice} </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <Link to={"/product"} className="btn btn-large">
                    <i className="icon-arrow-left"></i> Continue Shopping
                  </Link>
                  <Link to={"/"} className="btn btn-large pull-right">
                    Next <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
