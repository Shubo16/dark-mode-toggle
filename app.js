// Get the checkbox element
const darkModeToggle = document.querySelector (".switch input")
// Need to make the checkbox interactable
darkModeToggle.addEventListener('change', () => {
    //the toggle js would be here,
    // so toggle the dark mode class on the body element
    document.body.classList.toggle('dark-mode')
})