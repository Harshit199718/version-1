import React from 'react';
import Avatar from '../../assets/avatar-icon.png';

function CreateSquad() {
    return (
        <div className="create-squad-page d-flex justify-content-center align-items-center " >
            <div className="create-squad-container d-flex justify-content-center align-items-start flex-column ">
                <h1 className="create-squad-header" > &nbsp; Create a Squad</h1>
                <form className="create-squad-form" >
                    <div className="form-group d-flex squad-name">
                        <input type="text"
                            className="form-control form-input "
                            id="formGroupExampleInput"
                            placeholder="Squad Name"
                        />
                        <img src={Avatar} alt="Avatar img" className="avatar-icon" />
                    </div>
                    <h1 className="squad-members-header" > &nbsp; Squad Membars</h1>
                    <div className="squad-members d-flex justify-content-between align-items-center" >
                        <div className="squad-member squad-member-name " >John Doe</div>
                        <div className="squad-member squad-member-position " >Architect</div>
                        <img src={Avatar} alt="Avatar img" className="member-avatar-icon" />
                    </div>
                    <h1 className="squad-members-header" > &nbsp; Add New Member</h1>
                    <div className="add-member d-flex justify-content-between align-items-start" >
                        <div className="form-group">
                            <input type="text"
                                className="form-control form-input "
                                id="formGroupExampleInput"
                                placeholder="Member Name"
                            />
                        </div>
                        <div className="form-group">
                            <div class="input-group input-member-positon">
                                <select class="custom-select" id="inputGroupSelect04" >
                                    <option selected>ROLE</option>
                                    <option value="Scrum Master">Scrum Master</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Architect">Architect</option>
                                    <option value="Product">Product</option>
                                </select>
                            </div>
                        </div>
                        <img src={Avatar} alt="Avatar img" className="avatar-icon" />
                        <div className="add-btn  " >
                            <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;
                        </div>
                    </div>
                    <div className="submit-btn d-flex ">
                        <button type="button" className="btn btn-primary ml-auto mt-3">
                            <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;
                            SAVE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateSquad
