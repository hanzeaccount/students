'use strict'


const submitElem = document.getElementById('submit')
const emailElem = document.getElementById('email')
const passwordElem = document.getElementById('password')




let username = 'hussainbehzad3@gmail.com'
let password = 'Behzad@1994'

let username2 = 'rafatsultanali49@gmail.com'
let password2 = 'Behzad@1994'





submitElem.addEventListener('click', ()=>{

    if(!emailElem.value || !passwordElem.value){
        Swal.fire({
            title: "Error!",
            text: "Enter user name and password",
            icon: "error",
            confirmButtonColor: '#E9724C'
          });
    }else if(emailElem.value == username && passwordElem.value == password){
      submitElem.style.opacity = '0.7'
      localStorage.setItem('userName', "behzad")
     localStorage.setItem('payment', "behzad")
      setTimeout(() => {
        Swal.fire({
          title: "Welcome!",
          text: "You will redircet to user panel",
          icon: "success",
          confirmButtonColor: '#E9724C',
          showConfirmButton: false
        });
        submitElem.style.opacity = '1'

      }, 3000);
        
          setTimeout(() => {
            location.href='./main.html'
          }, 5000);
    }else if(emailElem.value == username2 && passwordElem.value == password2){
      submitElem.style.opacity = '0.7'
      localStorage.setItem('userName', "rafat")
      localStorage.setItem('payment', "rafat")
      setTimeout(() => {
        Swal.fire({
          title: "Welcome!",
          text: "You will redircet to user panel",
          icon: "success",
          confirmButtonColor: '#E9724C',
          showConfirmButton: false
        });
        submitElem.style.opacity = '1'

      }, 3000);
        
          setTimeout(() => {
            location.href='./main.html'
          }, 5000);
    }else{
        Swal.fire({
            title: "Error!",
            text: "User name or password is incorrect",
            icon: "error",
            confirmButtonColor: '#E9724C',
           
          });
    }
})