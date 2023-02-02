const cards = document.querySelectorAll('.card'); //


let Flipped = false;
let lockCards = false;
let firstFlip;
let secondFlip;
let counter = 0;
let matchesToWin = 6

function flipCard() {
    if(lockCards) return;
    if(this === firstFlip) return;

    this.classList.add('flip');

    if(!Flipped) {
        Flipped = true;
        firstFlip = this;
    } else {
        Flipped = false;
        secondFlip = this;
        counter ++;
        doTheyMatch()
    } 
    
}

function doTheyMatch() {
    if (firstFlip.dataset.plant === secondFlip.dataset.plant) {
        firstFlip.removeEventListener('click', flipCard);
        secondFlip.removeEventListener('click', flipCard);
        matchesToWin --
        if(matchesToWin === 0) {
            let popUp = setTimeout(() => {
                window.alert(`It took you ${counter} tries!`)
            }, 1000);
        }
    } else {
        lockCards = true

        setTimeout(() => {
        firstFlip.classList.remove('flip');
        secondFlip.classList.remove('flip');

        lockCards = false
        }, 1000)
    }
    clearInterval(popUp)
}

(function shuffle() {
    cards.forEach(card => {
        let randomize = Math.floor(Math.random() * 12);
        card.style.order = randomize
    })
})();

cards.forEach(card => card.addEventListener('click', flipCard))

function refresh(){
    window.location.reload("Refresh")
}

function showCards(){
    document.getElementById('deck').style.display = 'flex' 
}

//we want to show the counter on the screen
//we want a reset button to pop up once all cards are flipped and locked



