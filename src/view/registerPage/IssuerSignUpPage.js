import React, { Component } from 'react'
import '../../css/InvestorSignUp.css'
import { Link } from 'react-router-dom'

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export class IssuerSignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailConfirmState: false,
        }
    }

    handleOpen = () => {
        this.setState({emailConfirmState: true});
    };
    
    handleClose = () => {
        this.setState({emailConfirmState: false});
    };

    render() {
        return (
            <div>
                <div className="register container-fluid">
                    <div>
                        <div className="row investor-sign-up-container">
                            <div className="col-md-3 register-left">
                                <div className="investor-signUp-title">
                                    <h2>Issuer</h2>
                                    <h1>Sign Up</h1>
                                </div> 
                                <div>
                                    <div>
                                        <img src="./images/issuer-login-phone.png" alt="polygon4-img" className=" contaner polygon4-img" /> 
                                    </div>                                 
                                    <div className="already-have-account pt-4">
                                        <Link to={'/issuer-log-in'} className="link-style">
                                        <span className="already-have-account-title"><span>Already Have an account?</span>&nbsp;
                                            <strong>Login</strong>
                                        </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 register-right"> 
                                <div className="row register-form">
                                   <div className="col-lg-6 col-md-12 form-group-row">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control"  required="" />
                                        </div>                                                                                  
                                    </div>
                                    <div className="col-lg-6 col-md-12 form-group-row">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input type="text" className="form-control"  required="" />
                                        </div>                                                       
                                    </div>
                                    <div className="col-lg-12 col-md-12 form-group-row">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text" className="form-control"  required="" />
                                        </div>                                                       
                                    </div>

                                    <div className="col-lg-12 col-md-12 form-group-row">
                                        <div className="form-group">
                                            <label>Company Email Address</label>
                                            <input type="text" className="form-control"  required="" />
                                        </div>  
                                    </div>

                                    <div className="col-lg-12 col-md-12 form-group-row">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control"  required="" />
                                        </div>  
                                    </div>

                                    <div className="col-lg-6 col-md-12 form-group-row">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="text" className="form-control"  required="" />
                                        </div>                                   
                                    </div>
                                    <div className="col-lg-6 col-md-12 form-group-row">
                                        <div className="form-group">
                                            <label>Re-enter Password</label>
                                            <input type="text" className="form-control"  required="" />
                                        </div>                                   
                                    </div>
                                    <div className="investor-get-started-btn-main">
                                        <button type="button" className="investor-get-started-btn" onClick={()=>this.handleOpen()}>Get Started</button>
                                    </div>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>


                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="email-confirm-modal"
                    open={this.state.emailConfirmState}
                    onClose={()=>this.handleClose()}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={this.state.emailConfirmState}>
                    <div className="email-confrim-main">
                        <div className="email-box-main">
                            <img src="./images/email-box.png" alt="email png"/>
                        </div>
                        <div>
                            <h2 className="dark-blue"><strong>Email Confirmation</strong></h2>
                            <p>
                                Lorem ipsum dolor sit amet, <span className="modal-email-address">consetetur@gmail.com</span> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            </p>
                        </div>
                        <div>
                            <Link to={'/dashboard/funding-portal'} className="link-style">
                                <button className="round-lightred-btn-sm">Resend</button>
                            </Link>
                            <p className="pt-3">If you do not received any mail</p>
                        </div>
                    </div>
                    </Fade>
                </Modal>

            </div>
        )
    }
}

export default IssuerSignUpPage
