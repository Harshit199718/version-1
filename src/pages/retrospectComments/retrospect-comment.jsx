import React from 'react'
import CommentComponents from '../../components/comments/comment.components';
import GroupedCommentComponents from '../../components/comments/grouped-comment.components';
import AddComment from '../../components/comments/add-comment.component';

export default function RetrospectComment(props) {
    return (
        <div className="retrospect-comments-page" >
            <div className="retrospect-comments-sec" >
                <div className="retrospect-comments-header active d-flex">
                    <h1 className="comment-page-squad-name">[SQUAD NAME] -&nbsp; </h1>
                    <h1 className="comment-page-sprint"> [SPRINT #]:</h1>
                    <h1 className="comment-page-type">&nbsp;Retrospect</h1>
                </div>
                <div className="comment-table d-flex">
                    <div className="what-went-well comment-col border-rght ">
                        <div className="comment-col-header">
                            <h1 className="comment-header success ">WHAT WENT WELL</h1>
                        </div>
                        < CommentComponents commentStyles="comment-success" />
                        <GroupedCommentComponents commentStyles="comment-success" commentCardStyles="grouped-comment-card-success" headerColor="grouped-comment-header-success" />
                        < CommentComponents commentStyles="comment-success" />
                        <AddComment color='success' addBtn='retrospect' />
                    </div>
                    <div className="what-didnt-go-well comment-col border-rght ">
                        <div className="comment-col-header">
                            <h1 className="comment-header Warning ">WHAT DIDN'T GO WELL</h1>
                        </div>
                        <GroupedCommentComponents commentStyles="comment-denger" commentCardStyles="grouped-comment-card-denger" headerColor="grouped-comment-header-denger" />
                        < CommentComponents commentStyles="comment-denger" />
                        <AddComment color='denger' addBtn='retrospect' />
                    </div>
                    <div className="what-we-keep-doing comment-col ">
                        <div className="comment-col-header">
                            <h1 className="comment-header info ">WHAT WE KEEP DOING</h1>
                        </div>
                        < CommentComponents commentStyles="comment-info" />
                        < CommentComponents commentStyles="comment-info" />
                        <AddComment color='info' addBtn='retrospect' />
                    </div>
                </div>
            </div>
        </div>
    )
}
