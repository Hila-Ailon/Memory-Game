const cards = document.querySelectorAll(".card");

let hasCardFlipped = false;
let firstCard, secondCard;

function flip() {
    //this = the element that fired the event
    this.classList.add("flipped");
    this.querySelector(".emoji").classList.toggle("emoji-displayed");
    this.querySelector(".back-card").classList.toggle("back-card-displayed");

    if (hasCardFlipped === false) { //player clicked the first card
        hasCardFlipped = true;
        firstCard = this;
    }
    else  {
        // the player clicks on the 2nd card
        hasCardFlipped = false;
        secondCard = this;
        checkMatch();
    }
}

//one option: 
function checkMatch() {

    // ------- second option to catch the value -------

    let firstEmoji = firstCard.dataset.framework;
    let secondEmoji = secondCard.dataset.framework;

    if (firstEmoji === secondEmoji) {
        console.log("match");
        
        disableCards();
    }
    else {
        console.log("nope :(");
        setTimeout(()=>{
            firstCard.classList.remove('flipped');
            firstCard.classList.add('back-card-shown');

            secondCard.classList.remove('flipped');

        },1500);
        
        
        // autoUnFlipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flip);
    secondCard.removeEventListener('click', flip);
}


cards.forEach((card) => {
    card.addEventListener('click', flip)
});