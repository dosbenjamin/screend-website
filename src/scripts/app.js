const button = document.querySelectorAll('.button')
button.forEach(element => {
    element.addEventListener('click', (e) => {
        const newLocation = element.getAttribute('href');
        document.body.classList.add('animation');
        document.body.addEventListener('animationend', () => {
            window.location = newLocation
        })
        e.preventDefault()
    })
})
