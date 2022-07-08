import React, { useEffect, useState } from "react";
import "../css/base.css";
import "../css/bootstrap-responsive.min.css";
import "../css/font-awesome.css";
import "../css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import Axios from "../Apis/axiosConfig";

const Home = () => {
  const { cartItems } = useSelector((state) => state.CartReducer);
  const [apiData, setapiData] = useState([]);
  const [latestProduct, setLatestProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState()

  useEffect(() => {
    Axios.get(`user/category?page=1`).then((response) => {
      setapiData(response.data.data);
    });
  }, []);



  useEffect(() => {
    Axios.get(`user/product?category=62a30db187bae62c10354257`).then((response) => {
      setLatestProduct(response.data.data);
    });
  }, []);

  useEffect(()=>{
    let price = 0
    cartItems.map((data)=>{
      price = price + data.price * data.count
    setTotalPrice(price)
     })
 },[])

  // console.log(apiData, "api data");
  return (
    <div className="App">
      <div id="header">
        <div className="container">
          <div id="welcomeLine" className="row"></div>
        </div>
      </div>
      <div id="carouselBlk">
        <div id="myCarousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="item active">
              <div className="container">
                <Link to={'/registration'}>
                <img
                  style={{ width: "100%" }}
                  src="/images/carousel/1.png"
                  alt="special offers"
                /></Link>
              </div>
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
                  <BsCart4 style={{ fontSize: "22px", marginRight: "4px" }} />
                  <span style={{ fontSize: "20px" }}>{cartItems.length}</span>
                  Items in your cart
                  {
                        cartItems.length === 0 ? <span className="badge badge-warning pull-right">
                        Rs- 00
                       </span> : <span className="badge badge-warning pull-right">
                       Rs- {totalPrice}
                      </span>
                      }
                </Link>
              </div>
              <ul d="sideManu" className="nav nav-tabs nav-stacked">
                {apiData.map((data) => {
                  return (
                    <li key={data._id}>
                      <Link
                        to={{
                          pathname: `product`,
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
            </div>

            <div className="span9">
              <div className="well well-small">
                <h4>
                  Latest Products
                  <small className="pull-right">200+ featured products</small>
                </h4>
                <div className="row-fluid">
                  <div id="featured" className="carousel slide">
                    <div className="carousel-inner">
                      <div className="item active">
                        <ul className="thumbnails">
                          {
                            latestProduct.map((data,i)=>{
                              // console.log(data,"latest")
                              return(
                                <li className="span3" key={i}>
                                <div className="thumbnail">
                                  <i className="tag"></i>
                                    <img src={`http://localhost${data.productimg}`} alt="img" style={{'width':'120px', 'height':'160px'}} />
                                  <div className="caption">
                                    <h5>{data.name.substring(0,15)}</h5>
                                    <h4>
                                      <Link
                                        className="btn"
                                        to={{
                                          pathname:'/productdetail',
                                          search:`?_id=${data._id}`
                                        }}
                                      >
                                        VIEW
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </li>
                              )
                            })
                          }
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
