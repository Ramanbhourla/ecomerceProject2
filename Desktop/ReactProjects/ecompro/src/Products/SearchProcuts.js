import React,{useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import Axios from '../Apis/axiosConfig';

const SearchProcuts = () => {
    const [getSearch, setSearch] = useState()
    const location = useLocation()
    // console.log(location.search)
    useEffect(() => {
        Axios.get(`user/product${location.search}`).then((response) => {
            // console.log(response.data.total)
          setSearch(response.data.data);
        });
      }, [location]);
  return (
    <div className="container">
      <div className="row" style={{'marginBottom':'100px'}}>
        {
            !getSearch ?<h2>No product Found</h2> : 
                getSearch.map((curData) => {
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
                })
        }
        
      </div>
    </div>
  )
}

export default SearchProcuts