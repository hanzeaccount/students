'use strict'
window.addEventListener('load',()=>{
    if(!localStorage.getItem('userName')){
        location.href= './'
    }
})

const methods = document.getElementById('methods')
const paypalMsg = document.getElementById('paypal-msg')
const wireMsg = document.getElementById('wire-msg')
const cryptoOptions = document.getElementById('crypto-options')
const bitcoinImg = document.getElementById('bitcoin-img')
const usdtImg = document.getElementById('usdt-img')
const loading = document.getElementById('loading')
const titles = document.querySelector('.titles')
const bitAmount = document.querySelector('.bitcoin-amount')
const usdtAmount = document.querySelector('.usdt-amount')

window.addEventListener('load',()=>{
   const user = localStorage.getItem('userName')
   if(user == 'rafat'){
    titles.innerHTML = ` <p>Student number: INSM - 4003822</p>
    <p>Student name: Rafat Sultan Ali</p>
    <p>Passport number: </p>
    <p>Program: Master in Renewable Energy</p>
    <p>Payment Deadline: 2024/10/14</p>
    <p style="color:#E9724C">Total tuition: 6500 EUR</p>`

    bitAmount.textContent = '0.12 Bitcoin'
    usdtAmount.textContent = '7205 USDT'

   }else if(user == 'behzad'){
    titles.innerHTML = ` <p>Student number: INS - 4003241</p>
    <p>Student name: Behzad Hussain</p>
    <p>Passport number: P03963511</p>
    <p>Program: Dutch 1 Year program</p>
    <p style="color:#E9724C">Total tuition: 4820 EUR</p>`

    bitAmount.textContent = '0.085 Bitcoin'
    usdtAmount.textContent = '5360 USDT'

   }
})
methods.addEventListener('change', (event)=>{
    if(event.target.value =='paypal'){
        paypalMsg.style.display = 'block'
        wireMsg.style.display = 'none'
        bitcoinImg.style.display = 'none'
        cryptoOptions.style.display = 'none'
        usdtImg.style.display ='none'
    }else if(event.target.value == 'wire'){
        paypalMsg.style.display = 'none'
        wireMsg.style.display = 'block'
        cryptoOptions.style.display = 'none'
        bitcoinImg.style.display = 'none'
        usdtImg.style.display ='none'
    }
    else if(event.target.value == 'crypto'){
        paypalMsg.style.display = 'none'
        wireMsg.style.display = 'none'
        cryptoOptions.style.display = 'inline'
        bitcoinImg.style.display = 'none'
        usdtImg.style.display ='none'
    }
})


cryptoOptions.addEventListener('change', (event)=>{
    loading.style.display = 'block'
    const randomNumber =  Math.floor(Math.random() * 5000 )
    console.log(randomNumber)
    bitcoinImg.style.display = 'none'
    usdtImg.style.display ='none'
    setTimeout(() => {
        loading.style.display = 'none'
        if(event.target.value == 'bitcoin'){
            bitcoinImg.style.display = 'inline'
            usdtImg.style.display ='none'
        }else if(event.target.value =='USDT'){
            bitcoinImg.style.display = 'none'
            usdtImg.style.display ='inline'
    
        }
    }, randomNumber);
   
})