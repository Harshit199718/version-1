import React from 'react'

function AddUser() {
    return (
        <tr>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>
                <div className="d-flex">
                    <div className="edit-btn">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                        &nbsp;&nbsp;
                        <span className="edit-option">EDIT</span>
                    </div>
                    <div className="edit-btn">
                        <i class="fa fa-ban" aria-hidden="true"></i>
                        &nbsp;&nbsp;
                        <span className="edit-option">DISABLE</span>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default AddUser
