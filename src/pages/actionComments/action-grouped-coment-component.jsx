import React from 'react'
import CommentComponents from '../../components/comments/comment.components';
import GroupedCommentComponents from '../../components/comments/grouped-comment.components';
import AddComment from '../../components/comments/add-comment.component';

function ActionGroupedCommentComponent(props) {
    return (
        <div className="comment-col-data d-flex">
            <div className=" comment-col border-rght ">
                <GroupedCommentComponents
                    commentStyles={props.commentStyles}
                    commentCardStyles={props.commentCardStyles}
                    headerColor={props.headerColor}
                />
            </div>
            <div className=" comment-col d-flex">
                <div className="d-flex flex-column">
                    < CommentComponents commentStyles="comment-action" />
                </div>
                <AddComment color='action' addBtn='action' />
            </div>
        </div>
    )
}

export default ActionGroupedCommentComponent