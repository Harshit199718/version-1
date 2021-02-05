import React from 'react'
import CommentComponents from '../../components/comments/comment.components';
import GroupedCommentComponents from '../../components/comments/grouped-comment.components';
import AddComment from '../../components/comments/add-comment.component';

import ActionCommentComponent from './action-comment-component';
import ActionGroupedCommentComponent from './action-grouped-coment-component';

export default function ActionComment(props) {
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
                    <ActionCommentComponent commentStyles="comment-denger comment" />
                    <ActionGroupedCommentComponent commentStyles="comment-denger comment"
                        commentCardStyles="grouped-comment-card-denger"
                        headerColor="grouped-comment-header-denger" />
                    <ActionCommentComponent commentStyles="comment-denger comment" />
                    <ActionCommentComponent commentStyles="comment-denger comment" multiComment="true" />
                    <ActionCommentComponent commentStyles="comment-info comment" />
                    <ActionCommentComponent commentStyles="comment-info comment" />
                </div>
            </div>
        </div>
    )
}
