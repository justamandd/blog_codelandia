document.querySelectorAll('.like-button').forEach(card => {
    card.addEventListener('click', event => {
        card.classList.contains('bi-heart') ? card.classList.replace('bi-heart', 'bi-heart-fill') : card.classList.replace('bi-heart-fill', 'bi-heart')
    })
})


