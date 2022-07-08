import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../Apis/axiosConfig";
import toastr from "toastr";

const Registration = () => {
  const [profilePic, setprofilePic] = useState(null);
  const [Registerdata, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
   });

  const getRegistrationData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData(() => {
      return {
        ...Registerdata,
        [name]: value,
      };
    });
  };

  const getImage = (e) => {
    setprofilePic(e.target.files[0]);
  };

  const fillRegisterData = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("firstName", Registerdata.firstName);
    formdata.append("lastName", Registerdata.lastName);
    formdata.append("email", Registerdata.email);
    formdata.append("password", Registerdata.password);
    formdata.append("phone", Registerdata.phone);
    formdata.append("profilePic", profilePic);

    try {
    const response = await Axios.post(`auth/register`, formdata);
    // console.log(response.data);
      if(response.status = 200) {
        toastr.success(response.data.message) 
        setRegisterData('')
      }
    } catch (error) {
       showError(error)
    }
    e.target.reset()
  };
  const showError =(error)=>{
    toastr.options.closeButton = true;
    toastr.options.preventDuplicates = true;
    toastr.error(error.response.data.message)
    toastr.success(error.response.data.message);

  }
 
  return (
    <div className="container" id="registration">
      <div className="row">
        <div className="span12">
          <ul className="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link> <span className="divider">/</span>
            </li>
            <li className="active">Registration</li>
          </ul>
          <h3> Registration</h3>
          <div className="well">
            <div className="alert alert-info fade in">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
              ></button>
              <strong>Lorem Ipsum is simply dummy</strong> text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s
            </div>
            <div className="alert fade in">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
              ></button>
              <strong>Lorem Ipsum is simply dummy</strong> text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s
            </div>
            <div className="alert alert-block alert-error fade in">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
              ></button>
              <strong>Lorem Ipsum is simply</strong> dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s
            </div>
            <form
              className="form-horizontal"
              onSubmit={(e) => fillRegisterData(e)}
            >
              <h4>Your personal information</h4>
              <div className="control-group">
                <label className="control-label" htmlFor="inputFname1">
                  Fisrt Name<sup>*</sup>
                </label>
                <div className="controls">
                  <input
                    type="text"
                    id="inputFname1"
                    placeholder="First Name" 
                    onChange={getRegistrationData}
                    name="firstName"
                  />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label" htmlFor="inputLnam">
                  Last Name<sup>*</sup>
                </label>
                <div className="controls">
                  <input
                    type="text"
                    id="inputLnam"
                    placeholder="Last  Name"
                    onChange={getRegistrationData}
                    name="lastName"
                  />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label" htmlFor="input_email">
                  Email <sup>*</sup>
                </label>
                <div className="controls">
                  <input
                    type="text"
                    id="input_email"
                    placeholder="Email"
                    onChange={getRegistrationData}
                    name="email"
                  />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label" htmlFor="inputPassword1">
                  Password <sup>*</sup>
                </label>
                <div className="controls">
                  <input
                    type="password"
                    id="inputPassword1"
                    placeholder="Password"
                    onChange={getRegistrationData}
                    name="password"
                  />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label" htmlFor="inputPassword1">
                  Phone Number <sup>*</sup>
                </label>
                <div className="controls">
                  <input
                    type="password"
                    id="inputPassword1"
                    placeholder="Phone"
                    onChange={getRegistrationData}
                    name="phone"
                  />
                </div>
              </div>
              
              
              

              <div className="control-group">
                <label className="control-label" htmlFor="phone">
                  Profile Picture<sup>*</sup>
                </label>
                <input
                  type="file"
                  name="profilePic"
                  style={{ marginLeft: "19px" }}
                  onChange={getImage}
                />
              </div>

              <p>
                <sup>*</sup>Required field
              </p>

              <div className="control-group" />
              <div className="controls">
                <input
                  className="btn btn-large btn-success"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
