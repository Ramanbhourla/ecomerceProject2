import React from "react";

const ForgetPassword = () => {


  const submitResetpassword =(e)=>{
    e.preventDefault();

  }
  return (
    
<div className="container">
	<div className="row">
		<div className="span12">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="text-center">
                  <h3><i className="fa fa-lock fa-4x"></i></h3>
                  <h2 className="text-center2">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" className="form" method="post" onSubmit={(e)=>submitResetpassword(e)}>
    
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input id="email" name="email" placeholder="email address" className="form-control"  type="email" />
                        </div>
                      </div>
                      <div className="col-md-4 col-md-offset-4"><br/>
                        <input  className="btn-primary" value="Reset Password" type="submit" />
                      </div>
                      
                      <input type="hidden" className="hide" name="token" id="token" value="" /> 
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>
  );
};

export default ForgetPassword;
