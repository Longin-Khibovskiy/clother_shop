function toggleMenu() {
	const burger = document.querySelector('#burger')
	const menu = document.querySelector('#mobile-menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('hidden')
		menu.classList.toggle('flex')
		body.classList.toggle('overflow-hidden')
	})
	window.addEventListener('resize', () => {
		if (window.innerWidth > 767.99) {
			menu.classList.add('hidden')
			menu.classList.remove('flex')
			burger.classList.remove('active')
			burger.classList.remove('overflow-hidden')
		}
	})
}
toggleMenu()

const toggleCardClasses = cardElements => {
	cardElements.forEach(card => {
		card.classList.toggle('hidden')
		card.classList.toggle('flex')
	})
}
function Card() {
	const full = document.querySelector('.full-card')
	const cardElements = Array.from(
		document.querySelectorAll('.add-to-card, .add-to-card1, .add-to-card2')
	)
	full.addEventListener('mouseover', () => toggleCardClasses(cardElements))
	full.addEventListener('mouseout', () => toggleCardClasses(cardElements))
}
Card()

function svg() {
	var svg = document.getElementById('svg')
	svg.addEventListener('click', function () {
		this.classList.toggle('svg-active')
	})
}
svg()
// id=kol
function AddToCard() {
	const btn = document.getElementById('btn-card')
	const kol = document.getElementById('kol')
	btn.addEventListener('click', function () {
		kol.classList.toggle('hidden')
		btn.innerHTML = 'Удалить из корзины'
		// kol.classList.toggle('block')
	})
}
AddToCard()
