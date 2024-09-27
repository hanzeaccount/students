const programElem = document.getElementById('program')
const courseElem = document.getElementById('course')
const noRegister = document.getElementById('no-register')
const register = document.getElementById('registered')

const courseDep = document.getElementById('course-dep')


let diplomaCourses = ['Dutch language', 'Information Technology', 'International accounting', 'Global marketing', 'ACCA', 'CCNA', 'CCIE', 'CCNP']
let masterCourse = ['Classic Music', 'Composition & Music Production', 'Creative Media & Game', 'Design','Renewable Energy', 'Energy & Power Electronics', 'Fine Art', 'International Business', 'International communication', 'Sport studies', 'Popular culture', 'Mechanical Engineering', 'Jazz']


window.addEventListener('load', ()=>{
    let userName = localStorage.getItem('userName')
    console.log(userName)
    if(userName == 'behzad'){
        noRegister.style.display = 'none'
        register.style.display = 'block'
    }else if(userName == 'rafat'){
        noRegister.style.display = 'none'
        register.style.display = 'block'
        courseDep.textContent = 'Master in renewable energy for feb 2025'
    }
})

programElem.addEventListener('change', (event)=>{
    if(event.target.value == 'Diploma'){
        courseElem.innerHTML = ''
        diplomaCourses.forEach(course =>{
            courseElem.insertAdjacentHTML('afterbegin', 
            `
            <option>${course}</option>
            `

            )
        })
    }else if(event.target.value == 'Master programs'){
        courseElem.innerHTML = ''
        masterCourse.forEach(course =>{
            courseElem.insertAdjacentHTML('afterbegin', 
            `
            <option>${course}</option>
            `

            )
        })
    }
})

