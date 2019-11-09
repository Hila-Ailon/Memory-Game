var cards = document.querySelectorAll(".card");


function flip() {
    //this = the element that fired the event
    this.classList.toggle("flipped");
    this.querySelector(".emoji").classList.toggle("emoji-displayed");
    this.querySelector(".back-card").classList.toggle("back-card-displayed");

}


cards.forEach((card) => {
    card.addEventListener('click', flip)
});