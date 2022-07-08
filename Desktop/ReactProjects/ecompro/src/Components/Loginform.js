import React, { useState } from "react";
import { Link } from "react-router-dom";
import toastr from "toastr";
import Axios from "../Apis/axiosConfig";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Loginform = () => {
  const [form, setFormField] = useState({ email: "", password: "" });
  const history = useHistory();
  const histry = useHistory();
  const his = useHistory();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormField(() => {
      return {
        ...form,
        [name]: value,
      };
    });
  };

  const LoginData = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(`auth/login`, {
        email: form.email,
        password: form.password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name",response.data.firstName +" "+ response.data.lastName)
      if (response) {
        histry.push("/profile");
      }
      if (response.status === 200) {
        toastr.success(`Welcome ${response.data.firstName}`);
      }
      return dispatch({ type: "GET_USER_DATA", payload: response.data });
    } catch (error) {
      // console.log("error in catch", error.response.data.message);
      showError(error);
    }
    e.target.reset();
  };

  function showError(error) {
    toastr.options.closeButton = true;
    toastr.options.preventDuplicates = true;
    toastr.error(error.response.data.message);
  }
  return (
    <div className="container">
      <div className="row">
        {!localStorage.token ? (
          <div>
            <div className="span12">
              <ul className="breadcrumb">
                <li>
                  <Link to={"/"}>Home</Link> <span className="divider">/</span>
                </li>
              </ul>
            </div>
            <div className="span6">
              <div className="well">
                <h5>CREATE YOUR ACCOUNT</h5>
                <br />
                Enter your e-mail address to create an account.
                <br />
                <br />
                <br />
                <form action="register.html">
                  <div className="control-group">
                    <label className="control-label" htmlFor="inputEmail0">
                      E-mail address
                    </label>
                  </div>
                  <div className="controls">
                    <button
                      typeof="submit"
                      className="btn block"
                      onClick={() => history.push(`/registration`)}
                    >
                      Create Your Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="span1"> &nbsp;</div>
            <div className="span6">
              <div className="well">
                <h5>ALREADY REGISTERED ?</h5>
                <form onSubmit={(e) => LoginData(e)}>
                  <div className="control-group">
                    <label className="control-label" htmlFor="inputEmail1">
                      Email
                    </label>
                    <div className="controls">
                      <input
                        className="span3"
                        type="text"
                        id="inputEmail1"
                        placeholder="Email"
                        onChange={loginHandler}
                        name="email"
                        defaultValue={form.email}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label" htmlFor="inputPassword1">
                      Password
                    </label>
                    <div className="controls">
                      <input
                        type="password"
                        className="span3"
                        id="inputPassword1"
                        placeholder="Password"
                        onChange={loginHandler}
                        name="password"
                        defaultValue={form.password}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="controls">
                      <button type="submit" className="btn">
                        Sign in
                      </button>
                      <Link to={"/forgetpassword"}> Forget password?</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : his.push('/')}
      </div>
    </div>
  );
};

export default Loginform;
