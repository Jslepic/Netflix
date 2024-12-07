/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit",
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender",
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place",
];

function chooseRandomGenre() {
  // Deliverable 1: Your code here 👇
  let ran = getRandomNumber(0, 2);
  if (ran == 0) {
    return "drama";
  } else if (ran == 1) {
    return "comedy";
  } else {
    return "fantasy";
  }
}

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  let g = null;
  if (genre == "random") {
    g = chooseRandomGenre();
  } else {
    g = genre;
  }
  //select random show
  if (g == "comedy") {
    displayShow(comedyShows[getRandomNumber(0, 4)]);
  } else if (g == "drama") {
    displayShow(dramaShows[getRandomNumber(0, 4)]);
  } else {
    displayShow(fantasyShows[getRandomNumber(0, 4)]);
  }
}
