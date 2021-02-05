import React from 'react'

function Login() {
    return (
        <div className="login-page d-flex justify-content-center align-items-center " >
            <div className="login-container d-flex justify-content-center align-items-center flex-column ">
                <h1 className="login-header" >Login</h1>
                <form className="login-form" >
                    <div className="form-group">
                        <input type="text"
                            className="form-control form-input "
                            id="formGroupExampleInput"
                            placeholder="User Name"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form-input "
                            id="formGroupExampleInput2"
                            placeholder="Password"
                        />
                    </div>
                    <div className="submit-btn d-flex ">
                        <button type="button" className="btn btn-primary ml-auto">
                            <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;
                            CONTINIUE
                        </button>
                    </div>
                    <div className="form-group d-flex" >
                        <a href="#">forget Password ?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
