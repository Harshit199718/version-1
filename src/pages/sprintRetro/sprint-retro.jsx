import React from 'react'

function SprintRetro() {
    return (
        <div className="login-page sprint-retro-page d-flex justify-content-center align-items-center " >
            <div className="login-container d-flex justify-content-center align-items-center flex-column ">
                <h1 className="login-header" >Sprint Retro</h1>
                <form className="login-form" >
                    <div className="form-group">
                        <input type="text"
                            className="form-control form-input "
                            id="formGroupExampleInput"
                            placeholder="Sprint #"
                        />
                    </div>
                    <div className="form-group">
                        <div class="input-group form-input-squad">
                            <select class="custom-select" id="inputGroupSelect04" >
                                <option selected>SQUAD </option>
                                <option value="XPTO Squad">XPTO Squad</option>
                                <option value="ABC Squad">ABC Squad</option>
                                <option value="Justice Legue">Justice Legue</option>
                                <option value="Avengers">Avengers</option>
                            </select>
                        </div>
                    </div>
                    <div className="submit-btn d-flex ">
                        <button type="button" className="btn btn-primary ml-auto mt-3">
                            <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;
                            CONTINIUE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SprintRetro
