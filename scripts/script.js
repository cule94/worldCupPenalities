"use strict";

let selectedHomeTeam = document.getElementById("selectedHomeTeam").textContent;
let selectedAwayTeam = document.getElementById("selectedAwayTeam").textContent;
let flagHome = document.getElementById("flagHome");
let flagAway = document.getElementById("flagAway");
const randomTeams = document.getElementById("rndTeams");
const playerBack = document.getElementById("playerBack");
const playerForw = document.getElementById("playerForw");
const playerSelectionFront = document.getElementById("playerSelectionFront");
const possiblePlayers = ["Select", "Home team", "Away team"];
const homeBack = document.getElementById("homeBack");
const homeForw = document.getElementById("homeForw");
const awayBack = document.getElementById("awayBack");
const awayForw = document.getElementById("awayForw");
const confirmTeams = document.getElementById("confirmButton");
const stageBack = document.getElementById("backMini");
const stageForw = document.getElementById("forwMini");
let soundName = document.getElementById("soundName").textContent;
let soundArtist = document.getElementById("soundArtist").textContent;
let soundCountry = document.getElementById("soundCountry").textContent;
let soundYear = document.getElementById("soundYear").value;
let audioRnd = Math.trunc(Math.random() * 3 + 1);
let audio = new Audio(`audio/song${audioRnd}.mp3`);
audio.play();

const soundtrax = [
  {
    id: 1,
    name: "Temporal Flame",
    artist: "Martin Felix Kaczmarski",
    country: "England",
    year: 2018,
  },
  {
    id: 2,
    name: "Regardless",
    artist: "Raye",
    country: "England",
    year: 2020,
  },
  {
    id: 3,
    name: "Moi Lollita",
    artist: "Alizee",
    country: "France",
    year: 2000,
  },
];

document.getElementById("soundName").textContent = soundtrax[audioRnd - 1].name;
document.getElementById("soundArtist").textContent =
  soundtrax[audioRnd - 1].artist;
document.getElementById("soundCountry").textContent =
  soundtrax[audioRnd - 1].country;
document.getElementById("soundYear").textContent = soundtrax[audioRnd - 1].year;
let z = 4;
let p = 1;
const stage = document.getElementById("stageFront");
playerSelectionFront.textContent = possiblePlayers[p];
const stages = [
  "Group stage",
  "Round of 16",
  "Quarter-finals",
  "Semi-finals",
  "3rd place match",
  "Final",
];
stage.textContent = stages[z];
const mainGame = "mainGame.html";
let x = 13;
let y = 12;

const australia = {
  name: "Australia",
  quality: 0.3,
  points: 0,
  short: "AUS",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "Australia and Oceania",
  population: "25 milions",
  worldCupWinns: 0,
};
const iran = {
  name: "Iran",
  quality: 0.3,
  points: 0,
  short: "IRN",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "Asia",
  population: "85 milions",
  worldCupWinns: 0,
};
const japan = {
  name: "Japan",
  quality: 0.3,
  points: 0,
  short: "JPN",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "Asia",
  population: "130 milions",
  worldCupWinns: 0,
};
const southKorea = {
  name: "South Korea",
  quality: 0.3,
  points: 0,
  short: "DPK",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "Asia",
  population: "50 milions",
  worldCupWinns: 0,
};
const algeria = {
  name: "Algeria",
  quality: 0.3,
  points: 0,
  short: "ALG",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "Africa",
  population: "33 milions",
  worldCupWinns: 0,
};
const cameroon = {
  name: "Cameroon",
  quality: 0.3,
  points: 0,
  short: "CMR",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "Africa",
  population: "? milions",
  worldCupWinns: 0,
};
const ghana = {
  name: "Ghana",
  quality: 0.3,
  points: 0,
  short: "GHN",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "Africa",
  population: "? milions",
  worldCupWinns: 0,
};
const nigeria = {
  name: "Nigeria",
  quality: 0.3,
  points: 0,
  short: "NGR",
  homeKit: "green",
  awayKit: "white",
  groupPosition: 1,
  continent: "Africa",
  population: "145 milions",
  worldCupWinns: 0,
};
const costaRica = {
  name: "Costa Rica",
  quality: 0.3,
  points: 0,
  short: "CRC",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "North America",
  population: "4,5 milions",
  worldCupWinns: 0,
};
const honduras = {
  name: "Honduras",
  quality: 0.3,
  points: 0,
  short: "HON",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "North America",
  population: "10 milions",
  worldCupWinns: 0,
};
const mexico = {
  name: "Mexico",
  quality: 0.4,
  points: 0,
  short: "MEX",
  homeKit: "green",
  awayKit: "white",
  groupPosition: 1,
  continent: "North America",
  population: "127 milions",
  worldCupWinns: 0,
};
const unitedStates = {
  name: "United States",
  quality: 0.3,
  points: 0,
  short: "USA",
  homeKit: "yellow",
  awayKit: "blue",
  groupPosition: 1,
  continent: "North America",
  population: "330 milions",
  worldCupWinns: 0,
};
const argentina = {
  name: "Argentina",
  quality: 0.4,
  points: 0,
  short: "ARG",
  homeKit: "blue",
  awayKit: "white",
  groupPosition: 1,
  continent: "South America",
  population: "45 milions",
  worldCupWinns: 2,
};
const brazil = {
  name: "Brazil",
  quality: 0.5,
  points: 0,
  short: "BRA",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "South America",
  population: "202 milions",
  worldCupWinns: 5,
};
const chile = {
  name: "Chile",
  quality: 0.4,
  points: 0,
  short: "CHI",
  homeKit: "red",
  awayKit: "white",
  groupPosition: 1,
  continent: "South America",
  population: "17,5 milions",
  worldCupWinns: 0,
};
const colombia = {
  name: "Colombia",
  quality: 0.4,
  points: 0,
  short: "COL",
  homeKit: "yellow",
  awayKit: "green",
  groupPosition: 1,
  continent: "South America",
  population: "46 milions",
  worldCupWinns: 0,
};
const ecuador = {
  name: "Ecuador",
  quality: 0.3,
  points: 0,
  short: "ECU",
  homeKit: "yellow",
  awayKit: "white",
  groupPosition: 1,
  continent: "South America",
  population: "? milions",
  worldCupWinns: 0,
};
const uruguay = {
  name: "Uruguay",
  quality: 0.4,
  points: 0,
  short: "URU",
  homeKit: "cyan",
  awayKit: "white",
  groupPosition: 1,
  continent: "South America",
  population: "3,5 milions",
  worldCupWinns: 2,
};
const netherlands = {
  name: "Netherlands",
  quality: 0.5,
  points: 0,
  short: "NED",
  homeKit: "orange",
  awayKit: "black",
  groupPosition: 1,
  continent: "Europe",
  population: "17,5 milions",
  worldCupWinns: 0,
};
const belgium = {
  name: "Belgium",
  quality: 0.5,
  points: 0,
  short: "BEL",
  homeKit: "red",
  awayKit: "black",
  groupPosition: 1,
  continent: "Europe",
  population: "11 milions",
  worldCupWinns: 0,
};
const bosnia = {
  name: "Bosnia",
  quality: 0.3,
  points: 0,
  short: "BIH",
  homeKit: "blue",
  awayKit: "white",
  groupPosition: 1,
  continent: "Europe",
  population: "3,5 milions",
  worldCupWinns: 0,
};
const croatia = {
  name: "Croatia",
  quality: 0.4,
  points: 0,
  short: "CRO",
  homeKit: "red",
  awayKit: "black",
  groupPosition: 1,
  continent: "Europe",
  population: "4 milions",
  worldCupWinns: 0,
};
const england = {
  name: "England",
  quality: 0.4,
  points: 0,
  short: "ENG",
  homeKit: "white",
  awayKit: "red",
  groupPosition: 1,
  continent: "Europe",
  population: "51 milions",
  worldCupWinns: 1,
};
const france = {
  name: "France",
  quality: 0.5,
  points: 0,
  short: "FRA",
  homeKit: "blue",
  awayKit: "white",
  groupPosition: 1,
  continent: "Europe",
  population: "66 milions",
  worldCupWinns: 2,
};
const germany = {
  name: "Germany",
  quality: 0.4,
  points: 0,
  short: "GER",
  homeKit: "white",
  awayKit: "green",
  groupPosition: 1,
  continent: "Europe",
  population: "83 milions",
  worldCupWinns: 4,
};
const greece = {
  name: "Greece",
  quality: 0.3,
  points: 0,
  short: "GRE",
  homeKit: "white",
  awayKit: "blue",
  groupPosition: 1,
  continent: "Europe",
  population: "11 milions",
  worldCupWinns: 0,
};
const italy = {
  name: "Italy",
  quality: 0.4,
  points: 0,
  short: "ITA",
  homeKit: "blue",
  awayKit: "white",
  groupPosition: 1,
  continent: "Europe",
  population: "61 milions",
  worldCupWinns: 4,
};
const portugal = {
  name: "Portugal",
  quality: 0.4,
  points: 0,
  short: "POR",
  homeKit: "red",
  awayKit: "cyan",
  groupPosition: 1,
  continent: "Europe",
  population: "11 milions",
  worldCupWinns: 0,
};
const russia = {
  name: "Russia",
  quality: 0.3,
  points: 0,
  short: "RUS",
  homeKit: "red",
  awayKit: "white",
  groupPosition: 1,
  continent: "Europe",
  population: "145 milions",
  worldCupWinns: 0,
};
const serbia = {
  name: "Serbia",
  quality: 0.3,
  points: 0,
  short: "SER",
  homeKit: "red",
  awayKit: "white",
  groupPosition: 1,
  continent: "Europe",
  population: "25 milions",
  worldCupWinns: 0,
};
const spain = {
  name: "Spain",
  quality: 0.5,
  points: 0,
  short: "ESP",
  homeKit: "red",
  awayKit: "white",
  groupPosition: 1,
  continent: "Europe",
  population: "44 milions",
  worldCupWinns: 1,
};
const switzerland = {
  name: "Switzerland",
  quality: 0.3,
  points: 0,
  short: "CH",
  homeKit: "red",
  awayKit: "white",
  groupPosition: 1,
  continent: "Europe",
  population: "25 milions",
  worldCupWinns: 0,
};

const teams = [
  australia,
  iran,
  japan,
  southKorea,
  algeria,
  cameroon,
  ghana,
  nigeria,
  costaRica,
  honduras,
  mexico,
  unitedStates,
  argentina,
  brazil,
  chile,
  colombia,
  ecuador,
  uruguay,
  netherlands,
  belgium,
  bosnia,
  croatia,
  england,
  france,
  germany,
  greece,
  italy,
  portugal,
  russia,
  serbia,
  spain,
  switzerland,
];

selectedHomeTeam = `${teams[x].name}`;
selectedAwayTeam = `${teams[y].name}`;
flagHome.src = `img/flags/${selectedHomeTeam}.png`;
flagAway.src = `img/flags/${selectedAwayTeam}.png`;

document.getElementById("selectedHomeTeam").textContent = selectedHomeTeam;
document.getElementById("selectedAwayTeam").textContent = selectedAwayTeam;
homeBack.addEventListener("click", function () {
  if (x > 0) {
    x--;
    selectedHomeTeam = `${teams[x].name}`;
    flagHome.src = `img/flags/${selectedHomeTeam}.png`;
    document.getElementById("selectedHomeTeam").textContent = selectedHomeTeam;
  } else {
    x = 31;
    selectedHomeTeam = `${teams[x].name}`;
    flagHome.src = `img/flags/${selectedHomeTeam}.png`;
    document.getElementById("selectedHomeTeam").textContent = selectedHomeTeam;
  }
});

homeForw.addEventListener("click", function () {
  if (x < 31) {
    x++;
    selectedHomeTeam = `${teams[x].name}`;
    flagHome.src = `img/flags/${selectedHomeTeam}.png`;
    document.getElementById("selectedHomeTeam").textContent = selectedHomeTeam;
  } else {
    x = 0;
    selectedHomeTeam = `${teams[x].name}`;
    flagHome.src = `img/flags/${selectedHomeTeam}.png`;
    document.getElementById("selectedHomeTeam").textContent = selectedHomeTeam;
  }
});

awayBack.addEventListener("click", function () {
  if (y > 0) {
    y--;
    selectedAwayTeam = `${teams[y].name}`;
    flagAway.src = `img/flags/${selectedAwayTeam}.png`;
    document.getElementById("selectedAwayTeam").textContent = selectedAwayTeam;
  } else {
    y = 31;
    selectedAwayTeam = `${teams[y].name}`;
    flagAway.src = `img/flags/${selectedAwayTeam}.png`;
    document.getElementById("selectedAwayTeam").textContent = selectedAwayTeam;
  }
});

awayForw.addEventListener("click", function () {
  if (y < 31) {
    y++;
    selectedAwayTeam = `${teams[y].name}`;
    flagAway.src = `img/flags/${selectedAwayTeam}.png`;
    document.getElementById("selectedAwayTeam").textContent = selectedAwayTeam;
  } else {
    y = 0;
    selectedAwayTeam = `${teams[y].name}`;
    flagAway.src = `img/flags/${selectedAwayTeam}.png`;
    document.getElementById("selectedAwayTeam").textContent = selectedAwayTeam;
  }
});

randomTeams.addEventListener("click", function () {
  const rndHome = Math.trunc(Math.random() * 32 + 1);
  const rndAway = Math.trunc(Math.random() * 32 + 1);

  selectedHomeTeam = `${teams[rndHome].name}`;
  flagHome.src = `img/flags/${selectedHomeTeam}.png`;
  document.getElementById("selectedHomeTeam").textContent = selectedHomeTeam;

  selectedAwayTeam = `${teams[rndAway].name}`;
  flagAway.src = `img/flags/${selectedAwayTeam}.png`;
  document.getElementById("selectedAwayTeam").textContent = selectedAwayTeam;
});

stageBack.addEventListener("click", function () {
  if (z > 0) {
    z -= 1;
    stage.textContent = stages[z];
  } else {
    z = 5;
    stage.textContent = stages[z];
  }
});
stageForw.addEventListener("click", function () {
  if (z < 5) {
    z += 1;
    stage.textContent = stages[z];
  } else {
    z = 0;
    stage.textContent = stages[z];
  }
});

//for players
playerBack.addEventListener("click", function () {
  if (p > 0) {
    p -= 1;
    playerSelectionFront.textContent = possiblePlayers[p];
  } else {
    p = 2;
    playerSelectionFront.textContent = possiblePlayers[p];
  }
});
playerForw.addEventListener("click", function () {
  if (p < 2) {
    p += 1;
    playerSelectionFront.textContent = possiblePlayers[p];
  } else {
    p = 0;
    playerSelectionFront.textContent = possiblePlayers[p];
  }
});

confirmTeams.addEventListener("click", function () {
  localStorage.setItem("team1", selectedHomeTeam);
  localStorage.setItem("team2", selectedAwayTeam);
  localStorage.setItem("stage", stage.textContent);
  localStorage.setItem("player", playerSelectionFront.textContent);
  window.open(mainGame);
});
