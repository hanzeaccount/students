'use strict'


const methods = document.getElementById('methods')
const paypalMsg = document.getElementById('paypal-msg')
const wireMsg = document.getElementById('wire-msg')
const cryptoOptions = document.getElementById('crypto-options')
const bitcoinImg = document.getElementById('bitcoin-img')
const usdtImg = document.getElementById('usdt-img')
const loading = document.getElementById('loading')


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