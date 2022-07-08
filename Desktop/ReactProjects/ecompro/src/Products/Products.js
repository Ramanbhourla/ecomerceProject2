import React,{useState, useEffect}from "react";
import "../css/base.css";
import "../css/bootstrap-responsive.min.css";
import "../css/font-awesome.css";
import "../css/bootstrap.min.css";
import Axios from "../Apis/axiosConfig";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = () => {
  const [Products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    Axios.get(`user/product${location.search}`).then((response) => {
      setProducts(response.data.data);
    });
  }, []);

  
  // console.log(Products, 'Products')
  return (
    <div className="container">
      <div className="row" style={{'marginBottom':'100px'}}>
        {
        Products.map((curData) => {
          return (
            <div className="span4" key={curData._id}>
              <div className="card" style={{'width': '14rem', 'marginTop':'30px'}}>
                <img className="card-img-top" src={`http://localhost${curData.productimg}`} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{curData.name.substring(0,20)}</h5>
                  <p className="card-text">
                  Rs- {curData.price}
                  </p>
                 <Link  to={{
                          pathname: `productdetail`,
                          search:`?_id=${curData._id}`
                          }} className={'view'}> VIEW DETAIL</Link>
                    
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
