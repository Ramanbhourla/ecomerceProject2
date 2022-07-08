import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Axios from "../Apis/axiosConfig";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [category, setcategory] = useState([])
  const { cartItems } = useSelector(state => state.CartReducer);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    Axios.get(`user/product${location.search}`).then((response) => {
      //   console.log("Product",response.data.data);
      setProductDetail(response.data.data);
    });
  }, []);
   
  useEffect(()=>{
	  Axios.get('user/category?page=1').then((response)=>{
		  setcategory(response.data.data)
	  })

  },[]);

 
  
  const AddtoCart = (product, e) => {
    e.preventDefault()
    return dispatch({ type: "ADD_TO_CART", payload: product });
  };
  

  return (
      <div className="container">
        <div className="row">
          <div id="sidebar" className="span3">
            <div className="well well-small">
              <Link id="myCart" to={'/cart'}>
                <BsCart4 style={{ fontSize: "22px", marginRight: "4px" }} /> {cartItems.length} 
                 Items in your cart
                 
              </Link>
            </div>
			<ul d="sideManu" className="nav nav-tabs nav-stacked">
                {
                category.map((data) => {
                  return (
                    <li key={data._id}>
                      <Link
                        to={{
                          pathname: `product`,
                          search:`?category=${data._id}`
                          }}
                      >
                        {data.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            <br />
          </div>
          <div className="span9">
            <ul className="breadcrumb">
              <li>
                <Link to={"/"}>Home</Link> <span className="divider">/</span>
              </li>
              <li>
                <Link to={'/product'}>Products</Link>
                <span className="divider">/</span>
              </li>
              <li className="active">product Details</li>
            </ul>
            <div className="row">
              {productDetail.map((curdata,i) => {
                // console.log(curdata);
                return (
                  <div key={i}>
                    <div id="gallery" className="span3">
                      <a
                        href="themes/images/products/large/f1.jpg"
                        title="Fujifilm FinePix S2950 Digital Camera"
                      >
                        <img
                          src={`http://localhost${curdata.productimg}`}
                          style={{ width: "100%" }}
                          alt="img"
                        />
                      </a>
                      <div
                        id="differentview"
                        className="moreOptopm carousel slide"
                      ></div>
                    </div>
                    <div className="span6">
                      <h3>{curdata.name} </h3>
                      <hr className="soft" />
                      <form className="form-horizontal qtyFrm">
                        <div className="control-group">
                          <label className="control-label">
                            <span>Rs- {curdata.price} </span>
                          </label>
                          <div className="controls">
                            
                            <button
                              type="submit"
                              className="btn btn-large btn-primary pull-right"
                              onClick={(e) => AddtoCart(curdata,e)}
                            >
                              Add to cart
                              <i className=" icon-shopping-cart"></i>
                            </button>
                          </div>
                        </div>
                      </form>

                      <hr className="soft" />
                      <h4> items in stock ( {curdata.qunatity} )</h4>
                      <form className="form-horizontal qtyFrm pull-right"></form>
                      <hr className="soft clr" />
                      <p> {curdata.description} </p>
                      <br className="clr" />
                    </div>
                    <div className="fcartspan9">
                      
                      <div id="myTabContent" className="tab-content">
                        <div className="tab-pane fade active in" id="home">
                          <h4>Product Information</h4>
                          <table className="table table-bordered">
                            <tbody>
                              <tr className="techSpecRow">
                                <th colSpan="2">Product Details</th>
                              </tr>
                              <tr className="techSpecRow">
                                <td className="techSpecTD1">Brand: </td>
                                <td className="techSpecTD2">{curdata.name}</td>
                              </tr>

                              <tr className="techSpecRow">
                                <td className="techSpecTD1">Discount</td>
                                <td className="techSpecTD2">
                              
                                  {curdata.discount}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetail;
