const button = document.querySelector('[data-button]')

button.addEventListener('mousemove',()=>{
	const arrow = document.querySelector('.arrow')
	arrow.style.right = 0+'px'
})
button.addEventListener('mouseleave',()=>{
	const arrow = document.querySelector('.arrow')
	arrow.style.right = 15+'px'
})



const positionArrow = document.querySelectorAll('.position-arrow')
const posisionDeveloper = document.querySelectorAll('.posision-developer')

posisionDeveloper.forEach((arrow,i)=>{
	arrow.addEventListener('mousemove',()=>{
	positionArrow[i].src = 'https://img.icons8.com/windows/25/F0EAD6/long-arrow-right.png'	
	})
})

posisionDeveloper.forEach((arrow,i)=>{
	arrow.addEventListener('mouseleave',()=>{
	positionArrow[i].src = 'https://img.icons8.com/windows/25/000000/long-arrow-right.png'	
	})
})

