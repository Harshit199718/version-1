const comments = document.querySelectorAll('.comment')
const commentCard = document.querySelectorAll('.comment-card')

draggables.forEach(draggables => {
    draggables.addEventListner('dragstarts', () => {
        console.log('drag start')
    })
})