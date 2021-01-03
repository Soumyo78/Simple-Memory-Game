document.addEventListener('DOMContentLoaded', ()=>{

    cardArr = [
        {
            name: "blackWidow",
            img: "Resources/black-widow-pic.png"
        },
        {
            name: "blackWidow",
            img: "Resources/black-widow-pic.png"
        },
        {
            name: "captainAmerica",
            img: "Resources/captain-america-pic.png"
        },
        {
            name: "captainAmerica",
            img: "Resources/captain-america-pic.png"
        },
        {
            name: "hawkeye",
            img: "Resources/hawkeye-pic.png"
        },
        {
            name: "hawkeye",
            img: "Resources/hawkeye-pic.png"
        },
        {
            name: "hulk",
            img: "Resources/hulk-pic.png"
        },
        {
            name: "hulk",
            img: "Resources/hulk-pic.png"
        },
        {
            name: "ironMan",
            img: "Resources/ironman-pic.png"
        },
        {
            name: "ironMan",
            img: "Resources/ironman-pic.png"
        },
        {
            name: "thor",
            img: "Resources/thor-pic.png"
        },
        {
            name: "thor",
            img: "Resources/thor-pic.png"
        }
    ];

    cardArr.sort(()=> 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardChosen = [];
    var cardChosenId = [];
    var cardsWon = [];

    function createBoard(){
        for(let i=0; i<cardArr.length; i++){
            var card = document.createElement('input');
            card.setAttribute('type', "image");
            card.setAttribute('src', "Resources/blank.png");
            card.setAttribute('class', "card-img");
            card.setAttribute('data-id', i);
            card.setAttribute('id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('input');
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];
        if(cardChosen[0] === cardChosen[1]){
            alert("You have found a match !")
            cards[optionOneId].setAttribute('src', "Resources/white.png");
            cards[optionTwoId].setAttribute('src', "Resources/white.png");
            cardsWon.push(cardChosen);
        }
        else{
            cards[optionOneId].setAttribute('src', "Resources/blank.png");
            cards[optionTwoId].setAttribute('src', "Resources/blank.png");
            alert("Sorry, try again !");
            document.getElementById(optionOneId).disabled = false;
            document.getElementById(optionTwoId).disabled = false;
        }
        cardChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArr.length/2){
            resultDisplay.textContent = cardsWon.length;
            alert(`Congratulation, you have found them all ! Your final score is ${resultDisplay.textContent}`);
            window.location.reload(true);
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardChosen.push(cardArr[cardId].name);
        cardChosenId.push(cardId);
        document.getElementById(cardId).disabled = true;
        this.setAttribute('src', cardArr[cardId].img);
        if(cardChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
})