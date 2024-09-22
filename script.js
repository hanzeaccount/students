'use strict'


const submitElem = document.getElementById('submit')
const emailElem = document.getElementById('email')
const passwordElem = document.getElementById('password')




let username = 'hussainbehzad3@gmail.com'
let password = 'Behzad@1994'





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
            location.href='./main.html'
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