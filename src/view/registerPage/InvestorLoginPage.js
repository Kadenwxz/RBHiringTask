import React, { Component } from 'react'
import '../../css/InvestorSignUp.css'
import { Link } from 'react-router-dom'



export class InvestorLoginPage extends Component {

    render() {
        return (
            <div>
                <div className="register container-fluid">
                    <div>
                        <div className="row investor-sign-up-container">
                            <div className="col-md-3 register-left">
                                <div className="investor-signUp-title">
                                    <h2><strong>Hello &nbsp;</strong></h2>
                                    <h2>Welcome</h2>
                                </div> 
                                <div>
                                    <div>
                                        <img src="./images/Polygon4.png" alt="polygon4-img" className=" contaner polygon4-img" /> 
                                    </div>                                 
                                    <div className="already-have-account pt-4">
                                        <Link to={'/investor-sign-up'} className="link-style">
                                        <span className="already-have-account-title"><span>Don't you have an account?</span>&nbsp;
                                            <strong>Sign Up</strong>
                                        </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 issuer-login-form"> 
                                <div className="issuer-login-form-container">
                                    <div className="issuer-login-form-item">
                                        <label>Company Email Address</label>
                                        <input type="text" className="form-control"  required="" />
                                    </div>  

                                    <div className="issuer-login-form-item">
                                        <label>Password</label>
                                        <input type="text" className="form-control"  required="" />
                                        <div className="login-forgot-password-title">
                                        <Link to={'/'} className="link-style">
                                            <span>Forgot Password?</span>
                                        </Link>
                                        </div>
                                    </div>
                                    <div className="login-btn-main">
                                        <Link to={'/dashboard/funding-portal'} className="link-style">
                                            <input type="button" value="Login" className="login-btn"/>
                                        </Link>
                                    </div>                             
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default InvestorLoginPage
