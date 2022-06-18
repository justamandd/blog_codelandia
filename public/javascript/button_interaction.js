document.querySelectorAll('.like-button').forEach(card => {
    card.addEventListener('click', event => {
        if (card.classList.contains('bi-heart')){
            card.classList.add('bi-heart-fill')
            card.classList.remove('bi-heart')
        } else {
            card.classList.add('bi-heart')
            card.classList.remove('bi-heart-fill')
        }
    })
})


