let timerInner = document.querySelectorAll('.timer-inner')

let time = new Date();

for(let i = 0; i< timerInner.length; i++){
    let timeDigit = timerInner[i].querySelector('span')
    if(timeDigit.classList.contains('hour-digit')){
        timeDigit.innerHTML = (time.getHours() >= 10) ? time.getHours() : '0'+time.getHours();
    }else if(timeDigit.classList.contains('min-digit')){
        timeDigit.innerHTML = (time.getMinutes() >= 10) ? time.getMinutes() : '0'+time.getMinutes();
    }else if(timeDigit.classList.contains('sec-digit')){
        timeDigit.innerHTML = (time.getSeconds() >= 10) ? time.getSeconds() : '0'+time.getSeconds();
    }
}

startTimer();
function startTimer(){
    setInterval(()=>{
            let prevH = parseInt(timerInner[0].querySelector('span').textContent.trim());
            let prevM = parseInt(timerInner[2].querySelector('span').textContent.trim());
            let prevS = parseInt(timerInner[4].querySelector('span').textContent.trim());
            let time = new Date()
            for(let i = 0; i< timerInner.length; i++){
                if(i%2 == 0){
                    if(timerInner[i].classList.contains('reverse')){
                        if(timerInner[i].classList.contains('hour') && prevH != new Date().getHours()){
                            timerInner[i].classList.remove('reverse')
                            timerInner[i].classList.add('bottom')
                        }else if(timerInner[i].classList.contains('min') && prevM != new Date().getMinutes()){
                            timerInner[i].classList.remove('reverse')
                            timerInner[i].classList.add('bottom')
                        }else if(timerInner[i].classList.contains('sec') && prevS != new Date().getSeconds()){
                            timerInner[i].classList.remove('reverse')
                            timerInner[i].classList.add('bottom')
                        }
                        let timeDigit = timerInner[i].querySelector('span')
                        if(timeDigit.classList.contains('hour-digit')){
                            timeDigit.innerHTML = (time.getHours() >= 10) ? time.getHours() : '0'+time.getHours();
                        }else if(timeDigit.classList.contains('min-digit')){
                            timeDigit.innerHTML = (time.getMinutes() >= 10) ? time.getMinutes() : '0'+time.getMinutes();
                        }else if(timeDigit.classList.contains('sec-digit')){
                            timeDigit.innerHTML = (time.getSeconds() >= 10) ? time.getSeconds() : '0'+time.getSeconds();
                        }
                    }else{
                        if(timerInner[i].classList.contains('hour') && prevH != new Date().getHours()){
                            timerInner[i].classList.add('reverse')
                            timerInner[i].classList.remove('bottom')
                        }else if(timerInner[i].classList.contains('min') && prevM != new Date().getMinutes()){
                            timerInner[i].classList.add('reverse')
                            timerInner[i].classList.remove('bottom')
                        }else if(timerInner[i].classList.contains('sec') && prevS != new Date().getSeconds()){
                            timerInner[i].classList.add('reverse')
                            timerInner[i].classList.remove('bottom')
                        }
                        let timeDigit = timerInner[i].querySelector('span')
                        if(timeDigit.classList.contains('hour-digit')){
                            timeDigit.innerHTML = (time.getHours() >= 10) ? time.getHours() : '0'+time.getHours();
                        }else if(timeDigit.classList.contains('min-digit')){
                            timeDigit.innerHTML = (time.getMinutes() >= 10) ? time.getMinutes() : '0'+time.getMinutes();
                        }else if(timeDigit.classList.contains('sec-digit')){
                            timeDigit.innerHTML = (time.getSeconds() >= 10) ? time.getSeconds() : '0'+time.getSeconds();
                        }
                    }
                }else{
                    if(timerInner[i].classList.contains('bottom')){
                        if(timerInner[i].classList.contains('hour') && prevH != new Date().getHours()){
                            timerInner[i].classList.add('reverse')
                            timerInner[i].classList.remove('bottom')
                        }else if(timerInner[i].classList.contains('min') && prevM != new Date().getMinutes()){
                            timerInner[i].classList.add('reverse')
                            timerInner[i].classList.remove('bottom')
                        }else if(timerInner[i].classList.contains('sec') && prevS != new Date().getSeconds()){
                            timerInner[i].classList.add('reverse')
                            timerInner[i].classList.remove('bottom')
                        }
                        let timeDigit = timerInner[i].querySelector('span')
                        if(timeDigit.classList.contains('hour-digit')){
                            timeDigit.innerHTML = (time.getHours() >= 10) ? time.getHours() : '0'+time.getHours();
                        }else if(timeDigit.classList.contains('min-digit')){
                            timeDigit.innerHTML = (time.getMinutes() >= 10) ? time.getMinutes() : '0'+time.getMinutes();
                        }else if(timeDigit.classList.contains('sec-digit')){
                            timeDigit.innerHTML = (time.getSeconds() >= 10) ? time.getSeconds() : '0'+time.getSeconds();
                        }
                    }else{
                        if(timerInner[i].classList.contains('hour') && prevH != new Date().getHours()){
                            timerInner[i].classList.remove('reverse')
                            timerInner[i].classList.add('bottom')
                        }else if(timerInner[i].classList.contains('min') && prevM != new Date().getMinutes()){
                            timerInner[i].classList.remove('reverse')
                            timerInner[i].classList.add('bottom')
                        }else if(timerInner[i].classList.contains('sec') && prevS != new Date().getSeconds()){
                            timerInner[i].classList.remove('reverse')
                            timerInner[i].classList.add('bottom')
                        }
                        let timeDigit = timerInner[i].querySelector('span')
                        if(timeDigit.classList.contains('hour-digit')){
                            timeDigit.innerHTML = (time.getHours() >= 10) ? time.getHours() : '0'+time.getHours();
                        }else if(timeDigit.classList.contains('min-digit')){
                            timeDigit.innerHTML = (time.getMinutes() >= 10) ? time.getMinutes() : '0'+time.getMinutes();
                        }else if(timeDigit.classList.contains('sec-digit')){
                            timeDigit.innerHTML = (time.getSeconds() >= 10) ? time.getSeconds() : '0'+time.getSeconds();
                        }
                    }
                }
            }
        
    },1000);
}