import React from 'react'

import ActionCommentComponent from '../actionComments/action-comment-component';

function ActComment() {
    return (
        <div className="action-comments-page d-flex justify-content-center align-items-center" >
            <div className="action-comments-sec d-flex flex-column justify-content-center align-items-center " >
                <div className="action-comments-header active d-flex mr-auto">
                    <h1 className="comment-page-squad-name">[SQUAD NAME] -&nbsp; </h1>
                    <h1 className="comment-page-sprint"> [SPRINT #]:</h1>
                    <h1 className="comment-page-type">&nbsp;ACT</h1>
                </div>
                <div className="comment-table d-flex flex-column align-items-center">
                    <div className="comment-headers d-flex justify-content-around align-items-center">
                        <div className="action-comment-header border-rght">
                            <h1 className="comment-header warning ">COMMENT</h1>
                        </div>
                        <div className="action-comment-header">
                            <h1 className="comment-header action ">ACTION ITEM</h1>
                        </div>
                    </div>
                    <ActionCommentComponent />

                </div>
            </div>
        </div>
    )
}

export default ActComment
