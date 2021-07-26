
const gifts= ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }
  return gifts;
}


function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )

  }
  return thankYouCards
}

writeCards(["Ada", "Brendan", "Ali"], "birthday"); 

function countDown(number){
  while (number > 0){
    console.log(number);
    number -=1
  };
  console.log(number);
 
}