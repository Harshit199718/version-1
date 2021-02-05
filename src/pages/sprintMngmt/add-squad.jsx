import React from 'react'

function AddSquad() {
    return (
        <tr>
            <td>
                <div className="squad-name">XPTO Squad</div>
            </td>
            <td>
                <div className="sprint-retro-date">
                    <span className="sprint-no">Sprint 1:</span>
                    <br></br>
                    <span className="retro-date">&nbsp;&nbsp;-Retro 01/01/2021</span>
                </div>
                <div className="sprint-retro-date">
                    <span className="sprint-no">Sprint 1:</span>
                    <br></br>
                    <span className="retro-date">&nbsp;&nbsp;-Retro 01/01/2021</span>
                </div>
            </td>
            <td>
                <div className="d-flex">
                    <div className="edit-btn text-align-center">
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

export default AddSquad
