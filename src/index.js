function initDate(date) {
    const limiteDate = new Date(date);
    let ms = limiteDate - Date.now()
    let s = Math.floor(ms/1000)
    let m = s / 60
    let minute = Math.trunc(m)
    let seconde = Math.floor((m - minute) *60)
    let h = minute / 60
    let heure = Math.trunc(h)
    minute = Math.floor((h - heure) * 60)
    let j = heure / 24
    let jour = Math.trunc(j)
    heure = Math.floor((j - jour) * 24)
    displayValues(seconde, minute, heure, jour)
}

function displayValues(seconde, minute, heure, jour) {
    document.querySelector('.days').innerHTML = '<div><span>' + jour + '</span></br>Jours</div>'
    document.querySelector('.hours').innerHTML = '<div><span>' + heure + '</span></br>Heures</div>'
    document.querySelector('.minutes').innerHTML = '<div><span>' + minute + '</span></br>Minutes</div>'
    document.querySelector('.seconds').innerHTML = '<div><span>' + seconde + '</span></br>Secondes</div>'
    animateCounter()
}

function animateCounter() {
    let secondsContainer = document.querySelector('.seconds').querySelector('span')
    let minutesContainer = document.querySelector('.minutes').querySelector('span')
    let hoursContainer = document.querySelector('.hours').querySelector('span')
    let daysContainer = document.querySelector('.days').querySelector('span')
    let seconds = parseInt(secondsContainer.innerHTML)
    let minutes = parseInt(minutesContainer.innerHTML)
    let hours = parseInt(hoursContainer.innerHTML)
    let days = parseInt(daysContainer.innerHTML)
    setInterval(function(){
        seconds --;
        secondsContainer.innerHTML = seconds
        if(seconds === -1) {
            seconds = 59
            secondsContainer.innerHTML = seconds
            minutes --
            minutesContainer.innerHTML = minutes
            if(minutes === -1) {
                minutes = 59
                minutesContainer.innerHTML = minutes
                hours --
                hoursContainer.innerHTML = hours
                if (hours === -1) {
                    hours = 23
                    hoursContainer.innerHTML = hours
                    days --
                    daysContainer.innerHTML = days
                }
            }
        }

        }, 1000)

}


/* Zone d'appel des fonctions */
let date = "December 14, 2020"         // La variable suivante est la variable qui désigne la date de lancement ou d'ouverture
initDate(date)
