import './css/main.css'

const $html = document.getElementById('html')
const $buttonsDark = document.querySelectorAll('.toggleDarkButton')

const toggleDarkMode = () => {
  $html.classList.toggle('dark')
}

$buttonsDark.forEach(btn => btn.addEventListener('click', toggleDarkMode))
