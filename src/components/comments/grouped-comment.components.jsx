import React from 'react'
import CommentComponents from './comment.components';

export default function GroupedCommentComponents(props) {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column" className={props.commentCardStyles}>
            <h1 className={props.headerColor} >GROUPED COMMENTS HEADING</h1>
            <div className="group-comment">
                <CommentComponents commentStyles={props.commentStyles} />
                <CommentComponents commentStyles={props.commentStyles} />
            </div>
        </div>
    )
}
