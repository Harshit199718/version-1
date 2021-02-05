import React from 'react'

function AddComment(props) {
    return (
        <div className={props.addBtn === "retrospect" ? "add-retrospect-btn d-flex justify-content-end" : "add-action-btn d-flex justify-content-end"}>
            <button type="button" className={props.color}>
                <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default AddComment
