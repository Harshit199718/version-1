import React from 'react'
import AddSquad from './add-squad';

function SprintManagement() {
    return (
        <div className="user-management-page d-flex justify-content-center align-items-center" >
            <div className="user-management-sec d-flex flex-column justify-content-center align-items-center " >
                <div className="user-management-header active d-flex flex-column">
                    <h1 className="comment-page-squad-name">User Management </h1>
                    <div className="btn-add-user d-flex justify-content-end">
                        <button className="cerate-user-btn">
                            <i class=" fa fa-plus" aria-hidden="true"></i>
                            &nbsp;
                            CREATE
                    </button>
                    </div>
                </div>
                <div className="user-table">
                    <table >
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Options</th>
                        </tr>
                        <AddSquad />
                        <AddSquad />

                    </table>
                </div>
            </div>
        </div>
    )
}

export default SprintManagement