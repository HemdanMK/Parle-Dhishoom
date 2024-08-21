window.addEventListener('scroll', () => {
    document.body.style.setProperty('--sc', window.scrollY / (document.body.offsetHeight - window.innerHeight))
})