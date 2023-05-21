const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')


const clock = setInterval(function time(){
    const date = new Date()
    hours.innerHTML = date.getHours()
    minutes.innerHTML = date.getMinutes()
    seconds.innerHTML = date.getSeconds()

    if(date.getHours() < 10){
        hours.innerHTML = `0${date.getHours()}`
    }
    if(date.getSeconds() < 10){
        seconds.innerHTML = `0${date.getSeconds()}`
    }

    if(date.getMinutes() < 10){
        minutes.innerHTML = `0${date.getMinutes()}`
    }
})