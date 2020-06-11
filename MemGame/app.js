document.addEventListener("DOMContentLoaded", () => {
  // cards options
  const cardArray = [
    {
      name: "lilies",
      img: "./pics/lilies.jpg",
    },
    {
      name: "lilies",
      img: "./pics/lilies.jpg",
    },
    {
      name: "love",
      img: "./pics/love.jpg",
    },
    {
      name: "love",
      img: "./pics/love.jpg",
    },
    {
      name: "dandelion",
      img: "./pics/dandelion.jpg",
    },
    {
      name: "dandelion",
      img: "./pics/dandelion.jpg",
    },
    {
      name: "iceberg",
      img: "./pics/iceberg.jpg",
    },
    {
      name: "iceberg",
      img: "./pics/iceberg.jpg",
    },
    {
      name: "moons",
      img: "./pics/moons.jpg",
    },
    {
      name: "moons",
      img: "./pics/moons.jpg",
    },
    {
      name: "house",
      img: "./pics/house.jpg",
    },
    {
      name: "house",
      img: "./pics/house.jpg",
    },
  ];
  // randomizing the cards
  cardArray.sort(() => 0.5 - Math.random());

  // query for the cards
  const grid = document.querySelector(".grid");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  const resultDisplay = document.querySelector("#result");

  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img"); //creating a card for each element
      card.setAttribute("src", "./pics/paper-white.jpg"); //set card as an attribute
      card.setAttribute("data-id", i); //giving each card a data-id as it loops through each card
      card.addEventListener("click", flipCard); //flipping when each card is clicked
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const option1Id = cardsChosenId[0];
    const option2Id = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You have found the match");
      cards[option1Id].setAttribute("src", "./pics/triangles.png");
      cards[option2Id].setAttribute("src", "./pics/triangles.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[option1Id].setAttribute("src", "./pics/paper-white.jpg");
      cards[option2Id].setAttribute("src", "./pics/paper-white.jpg");
      alert("Please try again");
    }
    // set array to 0 after win or loss
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congradulations";
    }
  }

  // flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
