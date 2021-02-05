import React from 'react'
import CommentComponents from '../../components/comments/comment.components';
import AddComment from '../../components/comments/add-comment.component';

function ActionCommentComponent(props) {
    return (
        <div className="comment-col-data d-flex">
            <div className=" comment-col border-rght" >
                <CommentComponents commentStyles={props.commentStyles} />
            </div>
            <div className="comment-col d-flex" >
                <div className="comment-action d-flex flex-column">
                    <CommentComponents commentStyles="comment-action comment" />
                    {props.multiComment ? <CommentComponents commentStyles="comment-action comment" /> : null}
                </div>
                <AddComment color='action' addBtn='action' />
            </div>
        </div>
    )
}

export default ActionCommentComponent