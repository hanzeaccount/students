'use strict'


const submitElem = document.getElementById('submit')
const emailElem = document.getElementById('email')
const passwordElem = document.getElementById('password')
const programElem = document.getElementById('program')
const courseElem = document.getElementById('course')


let diplomaCourses = ['Dutch language', 'Information Technology', 'International accounting', 'Global marketing', 'ACCA', 'CCNA', 'CCIE', 'CCNP']
let masterCourse = ['Classic Music', 'Composition & Music Production', 'Creative Media & Game', 'Design', 'Energy & Power Electronics', 'Fine Art', 'International Business', 'International communication', 'Sport studies', 'Popular culture', 'Mechanical Engineering', 'Jazz']

let username = 'hussainbehzad3@gmail.com'
let password = 'Behzad@1994'


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


submitElem.addEventListener('click', ()=>{

    if(!emailElem.value || !passwordElem.value){
        Swal.fire({
            title: "Error!",
            text: "Enter user name and password",
            icon: "error",
            confirmButtonColor: '#E9724C'
          });
    }else if(emailElem.value == username && passwordElem.value == password){
        Swal.fire({
            title: "Welcome!",
            text: "You will redircet to user panel",
            icon: "success",
            confirmButtonColor: '#E9724C',
            showConfirmButton: false
          });
          setTimeout(() => {
            location.href='./application.html'
          }, 3000);
    }else{
        Swal.fire({
            title: "Error!",
            text: "User name or password is incorrect",
            icon: "error",
            confirmButtonColor: '#E9724C',
           
          });
    }
})