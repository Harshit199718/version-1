import React from 'react'

const comments = document.querySelectorAll('.comment')
const commentCards = document.querySelectorAll('.comment-card')

comments.forEach(comment => {
    comment.addEventListener('dragstart', () => {
        comment.classList.add('dragging')
    })

    comment.addEventListener('dragend', () => {
        comment.classList.remove('dragging')
    })
})

commentCards.forEach(commentCard => {
    commentCard.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(commentCard, e.clientY)
        const comment = document.querySelector('.dragging')
        if (afterElement == null) {
            commentCard.appendChild(comment)
        } else {
            commentCard.insertBefore(comment, afterElement)
        }
    })

})

function getDragAfterElement(commentCard, y) {
    const draggableElements = [...commentCard.querySelectorAll('.comment:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2

        if (offset < 0 && offset > closest.offset) {
            return {
                offset: offset, element: child
            }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

export default function CommentComponents(props) {
    return (
        <div className="comment-card d-flex justify-content-center align-items-center" >
            <p className={props.commentStyles} draggable="true" style={{ cursor: "move", margin: '0px' }} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At explicabo officia error pariatur ipsum mollitia autem eligendi quidem aperiam! Quos.
            </p>
        </div>
    )
}

