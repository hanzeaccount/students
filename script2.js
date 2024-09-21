const programElem = document.getElementById('program')
const courseElem = document.getElementById('course')

let diplomaCourses = ['Dutch language', 'Information Technology', 'International accounting', 'Global marketing', 'ACCA', 'CCNA', 'CCIE', 'CCNP']
let masterCourse = ['Classic Music', 'Composition & Music Production', 'Creative Media & Game', 'Design', 'Energy & Power Electronics', 'Fine Art', 'International Business', 'International communication', 'Sport studies', 'Popular culture', 'Mechanical Engineering', 'Jazz']

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

