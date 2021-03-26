"use strict";
const ball = document.getElementById("ballPoint");
const scoreboard = document.getElementById("scoreboard");
let goalkeeper = document.querySelector(".goalkeeper");
let hidden = document.getElementById("hidden");
const indicator1 = document.getElementById("indicator1");
indicator1.style.visibility = "visible";
const indicator2 = document.getElementById("indicator2");
const trophySet = document.getElementById("table");
trophySet.src = "img/tableWithoutTrophy.png";
hidden.style.visibility = "hidden";
let ballX;
let ballY;
let goalkeeperChooseSide;
let pcShootvar;
let goalkeeperPosition;
const body = document.body;
let remaining1 = 5;
let remaining2 = 5;
let stage;
let scoreboardText = localStorage.getItem("stage");

if (scoreboardText == "Final") {
  scoreboardText = "World Cup Final";
  document.getElementById("scoreboardText").textContent = scoreboardText;
  trophySet.src = "img/tableWithTrophy.png";
  trophySet.style.visibility = "visible";
} else {
  document.getElementById("scoreboardText").textContent = scoreboardText;
}
let shootPosition;
let team1Shoot = 0;
let team2Shoot = 0;

let lights1 = document.getElementById("lights1");
let lights2 = document.getElementById("lights2");

lights1.textContent = "";
lights2.textContent = "";
document.getElementById("lights1").textContent = lights1.textContent;

const field = document.getElementById("row-teren");
const resultBtn = document.getElementById("resultBtn");
let winner;
let winnerRes;
let defeated;
let defeatedRes;
let champions;
let champRes;
let runnRes;
let runnersUp;
let third;
let thirdRes;
let fourth;
let fourthRes;
let team1result = Number(document.getElementById("team1").textContent);
let team2result = Number(document.getElementById("team2").textContent);

let team1Name = localStorage.getItem("team1");
let team2Name = localStorage.getItem("team2");
let userPlayer = localStorage.getItem("player");
let pcPlayer;
let team1 = 1;
let team2 = 2;
let isOrder = team1;
let realPlayer;
if (userPlayer === "Home team") {
  body.style.cursor = "crosshair";
  realPlayer = team1;
  pcPlayer = team2;
} else if (userPlayer === "Away team") {
  pcPlayer = team1;
  realPlayer = team2;
  body.style.cursor = "not-allowed";
}

document.getElementById("team1Name").textContent = team1Name;
document.getElementById("team2Name").textContent = team2Name;

document.querySelector("body").style.backgroundColor = "silver";
const stranicaGrupa = "groups.html";
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
//position of goalkeeper
function keeperPosition() {
  if (goalkeeperChooseSide == 1) {
    goalkeeperPosition = "LeftUp";
  }
  if (goalkeeperChooseSide == 2) {
    goalkeeperPosition = "LeftDown";
  }
  if (goalkeeperChooseSide == 3) {
    goalkeeper.className = "goalkeeper";
  }
  if (goalkeeperChooseSide == 4) {
    goalkeeperPosition = "RightUp";
  }
  if (goalkeeperChooseSide == 5) {
    goalkeeperPosition = "RightDown";
  }
  goalkeeper.classList.toggle(goalkeeperPosition);
  return goalkeeperChooseSide;
}

// keeper choosing side
function keeperChoseSide() {
  goalkeeperChooseSide = Math.trunc(Math.random() * 5 + 1);
  keeperPosition();
  goalkeeper.classList.toggle(goalkeeperPosition);
  return goalkeeperChooseSide;
}

let probniRed = [];
let groupA = [];
let groupB = [];
let groupC = [];
let groupD = [];
let groupE = [];
let groupF = [];
let groupG = [];
let groupH = [];

//random grouping teams
function teamsGrouping() {
  for (let i = 0; probniRed.length < 32; i++) {
    let tg = Math.trunc(Math.random() * 32 + 1);
    if (probniRed.includes(tg)) {
      continue;
    }
    probniRed.push(tg);
    if (groupA.length < 4) {
      groupA.push(teams[tg - 1].name);
    } else if (groupB.length < 4) {
      groupB.push(teams[tg - 1].name);
    } else if (groupC.length < 4) {
      groupC.push(teams[tg - 1].name);
    } else if (groupD.length < 4) {
      groupD.push(teams[tg - 1].name);
    } else if (groupE.length < 4) {
      groupE.push(teams[tg - 1].name);
    } else if (groupF.length < 4) {
      groupF.push(teams[tg - 1].name);
    } else if (groupG.length < 4) {
      groupG.push(teams[tg - 1].name);
    } else if (groupH.length < 4) {
      groupH.push(teams[tg - 1].name);
    }
  }
  console.log(probniRed);
  console.log(groupA);
  console.log(groupB);
  console.log(groupC);
  console.log(groupD);
  console.log(groupE);
  console.log(groupF);
  console.log(groupG);
  console.log(groupH);
}
teamsGrouping();

//changing team
function teamChange() {
  if (isOrder === team1) {
    indicator1.style.visibility = "hidden";
    indicator2.style.visibility = "visible";
    team1Shoot += 1;
    remaining1 = 5 - team1Shoot;
    console.log(remaining1);
    isOrder = team2;
  } else if (isOrder === team2) {
    indicator2.style.visibility = "hidden";
    indicator1.style.visibility = "visible";
    team2Shoot += 1;
    remaining2 = 5 - team2Shoot;
    console.log(remaining2);
    isOrder = team1;
  }
  if (isOrder === realPlayer) {
    body.style.cursor = "crosshair";
  } else if (isOrder === pcPlayer) {
    body.style.cursor = "not-allowed";
  }

  document.getElementById("hidden").style.visibility = "visible";
}

//function for missed penality
function missPenality(txt) {
  if (isOrder === team1) {
    lights1.textContent += "🔴";
    alert(txt);
  } else if (isOrder === team2) {
    lights2.textContent += "🔴";
    alert(txt);
  }
}

//function for additional shoots after 5th series of shooting
function additionalShoots() {
  if (
    scoreboardText != "Group stage" &&
    team1Shoot > 4 &&
    team2Shoot > 4 &&
    team1result == team2result
  ) {
    remaining1 = 1;
    remaining2 = 1;
    lights1.textContent = "";
    lights2.textContent = "";
    team1Shoot = 4;
    team2Shoot = 4;
  }
}
//function for 3rd place match
function thirdPlaceMatch() {
  alert(
    `${third} finished 3rd!
          C O N G R A T U L A T I O N S  !!!
    ${third} defeated ${fourth} (${thirdRes}:${fourthRes}) and WON BRONZE MEDAL 🥉 `
  );
  body.style.cursor = "auto";
}
//function for final
function final() {
  alert(`${champions} - ${runnersUp} ${champRes}:${runnRes} 
          C O N G R A T U L A T I O N S !!
        ${champions} IS WORLD CHAMPION!! 🥇🏆`);
  goalkeeper.className = "goalkeeper";
  goalkeeperPosition = "celebration";
  ball.src = "";
  ball.style.visibility = "hidden";
  scoreboard.style.visibility = "hidden";
  indicator1.style.visibility = "hidden";
  indicator2.style.visibility = "hidden";
  trophySet.src = "img/tableWithoutTrophy.png";
  goalkeeper.classList.toggle(goalkeeperPosition);
  goalkeeper.src = "img/goalkeepers/goalkeeper4.png";
  body.style.cursor = "auto";
}

//function for knockout phase
function knockout() {
  alert(
    `${winner} beat ${defeated} (${winnerRes}:${defeatedRes}) and won this ${scoreboardText} match!`
  );
  body.style.cursor = "auto";
}

//function for goals
function goal() {
  if (isOrder === team1) {
    team1result += 1;
    document.getElementById("team1").textContent = team1result;
    console.log(`Team1: ${team1result}`);
    lights1.textContent += "🟢";
    alert(`${team1Name} scored!`);
  } else if (isOrder === team2) {
    team2result += 1;
    document.getElementById("team2").textContent = team2result;
    console.log(`Team2: ${team2result}`);
    lights2.textContent += "🟢";
    alert(`${team2Name} scored!`);
  }
  teamChange();
  keeperPosition();
}

//user choose goalkeeper side
function saveIt() {
  const ballX = event.clientX;
  const ballY = event.clientY;

  console.log(`X: ${ballX}, Y:${ballY}`);
  if (ballX < 492 && ballY < 176) {
    goalkeeperChooseSide = 1;
  }
  if (ballX < 492 && ballY > 176) {
    goalkeeperChooseSide = 2;
  }
  if (ballX > 492 && ballY < 176) {
    goalkeeperChooseSide = 4;
  }
  if (ballX > 492 && ballY > 176) {
    goalkeeperChooseSide = 5;
  }
  keeperPosition();
  goalkeeper.classList.toggle(goalkeeperPosition);
  return goalkeeperChooseSide;
}

//pc choosing side for shoot
function pcShoot() {
  pcShootvar = Math.trunc(Math.random() * 5 + 1);
  if (pcShootvar === goalkeeperChooseSide) {
    const message = "SAVED";
    keeperPosition();
    missPenality(message);
    teamChange();
  } else {
    goal();
  }
}

//main function
function readBallCords(event) {
  additionalShoots();
  if (pcPlayer != isOrder) {
    if (
      (team1Shoot <= 4 || team2Shoot <= 4) &&
      team1result <= team2result + remaining2 &&
      team2result <= team1result + remaining1 &&
      hidden.style.visibility == "hidden"
    ) {
      ballX = event.clientX;
      ballY = event.clientY;
      ball.style.top = `${-(630 - ballY)}px`;
      ball.style.left = `${-(580 - ballX)}px`;
      console.log(`X: ${ballX}, Y:${ballY}`);
      if (ballX < 492 && ballY > 176) {
        shootPosition = 2;
      }
      if (ballX < 492 && ballY < 176) {
        shootPosition = 1;
      }
      if (ballX > 492 && ballY > 176) {
        shootPosition = 5;
      }
      if (ballX > 492 && ballY < 176) {
        shootPosition = 4;
      }

      if (ballY < 319 && ballY > 95 && ballX > 250 && ballX < 785) {
        if (ballX < 287 || ballX > 742 || ballY < 110) {
          goal();
        } else if (shootPosition != goalkeeperChooseSide) {
          goal();
        } else if (shootPosition == goalkeeperChooseSide) {
          const message = "SAVED";
          keeperPosition();
          missPenality(message);
          teamChange();
        }
      } else {
        const message = "OUT OF GOAL!";
        missPenality(message);
        teamChange();
      }
    } else {
      team1result = Number(document.getElementById("team1").textContent);
      team2result = Number(document.getElementById("team2").textContent);

      if (scoreboardText == "3rd place match") {
        if (team1result > team2result) {
          third = team1Name;
          fourth = team2Name;
          thirdRes = team1result;
          fourthRes = team2result;
        } else if (team2result > team1result) {
          third = team2Name;
          fourth = team1Name;
          thirdRes = team2result;
          fourthRes = team1result;
        }
        thirdPlaceMatch();
      } else if (scoreboardText == "World Cup Final") {
        if (team1result > team2result) {
          champions = team1Name;
          runnersUp = team2Name;
          champRes = team1result;
          runnRes = team2result;
        } else if (team2result > team1result) {
          champions = team2Name;
          runnersUp = team1Name;
          champRes = team2result;
          runnRes = team1result;
        }
        final();
      } else {
        if (team1result > team2result) {
          winner = team1Name;
          defeated = team2Name;
          winnerRes = team1result;
          defeatedRes = team2result;
        } else if (team2result > team1result) {
          winner = team2Name;
          defeated = team1Name;
          winnerRes = team2result;
          defeatedRes = team1result;
        }
        knockout();
      }
    }
  } else {
    saveIt();
    pcShoot();
  }
  ball.style.zoom = "80%";
}
if (hidden.style.visibility == "hidden") {
  field.addEventListener("click", function () {
    if (isOrder != pcPlayer) {
      keeperChoseSide();
    } else {
      saveIt();
    }
  });
  field.addEventListener("click", function () {
    readBallCords(event);
  });
}

let keyboard = "inactive";
document.querySelector("body").addEventListener("keydown", function (e) {
  if (e.keyCode == "37") {
    shootPosition = 1;
    keeperChoseSide();
    readBallCords(event);
  }
  if (e.keyCode == "39") {
    shootPosition = 2;
    keeperChoseSide();
    readBallCords(event);
  }
});
//playing matches
stage = "fistRound";
const match1 = `${groupA[0].name} vs ${groupA[1].name}`;
const match2 = `${groupA[2].name} vs ${groupA[3].name}`;

const match3 = `${groupB[0].name} vs ${groupB[1].name}`;
const match4 = `${groupB[2].name} vs ${groupB[3].name}`;

const match5 = `${groupC[0].name} vs ${groupC[1].name}`;
const match6 = `${groupC[2].name} vs ${groupC[3].name}`;

const match7 = `${groupD[0].name} vs ${groupD[1].name}`;
const match8 = `${groupD[2].name} vs ${groupD[3].name}`;

const match9 = `${groupE[0].name} vs ${groupE[1].name}`;
const match10 = `${groupE[2].name} vs ${groupE[3].name}`;

const match11 = `${groupF[0].name} vs ${groupF[1].name}`;
const match12 = `${groupF[2].name} vs ${groupF[3].name}`;

const match13 = `${groupG[0].name} vs ${groupG[1].name}`;
const match14 = `${groupG[2].name} vs ${groupG[3].name}`;

const match15 = `${groupH[0].name} vs ${groupH[1].name}`;
const match16 = `${groupH[2].name} vs ${groupH[3].name}`;

stage = "secondRound";
const match17 = `${groupA[0].name} vs ${groupA[2].name}`;
const match18 = `${groupA[1].name} vs ${groupA[3].name}`;

const match19 = `${groupB[0].name} vs ${groupB[2].name}`;
const match20 = `${groupB[1].name} vs ${groupB[3].name}`;

const match21 = `${groupC[0].name} vs ${groupC[2].name}`;
const match22 = `${groupC[1].name} vs ${groupC[3].name}`;

const match23 = `${groupD[0].name} vs ${groupD[2].name}`;
const match24 = `${groupD[1].name} vs ${groupD[3].name}`;

const match25 = `${groupE[0].name} vs ${groupE[2].name}`;
const match26 = `${groupE[1].name} vs ${groupE[3].name}`;

const match27 = `${groupF[0].name} vs ${groupF[2].name}`;
const match28 = `${groupF[1].name} vs ${groupF[3].name}`;

const match29 = `${groupG[0].name} vs ${groupG[2].name}`;
const match30 = `${groupG[1].name} vs ${groupG[3].name}`;

const match31 = `${groupH[0].name} vs ${groupH[2].name}`;
const match32 = `${groupH[1].name} vs ${groupH[3].name}`;

stage = "thirdRound";
const match33 = `${groupA[0].name} vs ${groupA[3].name}`;
const match34 = `${groupA[1].name} vs ${groupA[2].name}`;

const match35 = `${groupB[0].name} vs ${groupB[3].name}`;
const match36 = `${groupB[1].name} vs ${groupB[2].name}`;

const match37 = `${groupC[0].name} vs ${groupC[3].name}`;
const match38 = `${groupC[1].name} vs ${groupC[2].name}`;

const match39 = `${groupD[0].name} vs ${groupD[3].name}`;
const match40 = `${groupD[1].name} vs ${groupD[2].name}`;

const match41 = `${groupE[0].name} vs ${groupE[3].name}`;
const match42 = `${groupE[1].name} vs ${groupE[2].name}`;

const match43 = `${groupF[0].name} vs ${groupF[3].name}`;
const match44 = `${groupF[1].name} vs ${groupF[2].name}`;

const match45 = `${groupG[0].name} vs ${groupG[3].name}`;
const match46 = `${groupG[1].name} vs ${groupG[2].name}`;

const match47 = `${groupH[0].name} vs ${groupH[3].name}`;
const match48 = `${groupH[1].name} vs ${groupH[2].name}`;

// Store
localStorage.setItem("australia", australia);
localStorage.setItem("iran", iran);
localStorage.setItem("japan", japan);
localStorage.setItem("southKorea", southKorea);
localStorage.setItem("algeria", algeria);
localStorage.setItem("cameroon", cameroon);
localStorage.setItem("ghana", ghana);
localStorage.setItem("nigeria", nigeria);
localStorage.setItem("costaRica", costaRica);
localStorage.setItem("honduras", honduras);
localStorage.setItem("mexico", mexico);
localStorage.setItem("unitedStates", unitedStates);
localStorage.setItem("argentina", argentina);
localStorage.setItem("brazil", brazil);
localStorage.setItem("chile", chile);
localStorage.setItem("colombia", colombia);
localStorage.setItem("ecuador", ecuador);
localStorage.setItem("uruguay", netherlands);
localStorage.setItem("belgium", belgium);
localStorage.setItem("bosnia", bosnia);
localStorage.setItem("croatia", croatia);
localStorage.setItem("england", england);
localStorage.setItem("france", france);
localStorage.setItem("germany", germany);
localStorage.setItem("greece", greece);
localStorage.setItem("italy", italy);
localStorage.setItem("portugal", portugal);
localStorage.setItem("russia", russia);
localStorage.setItem("serbia", serbia);
localStorage.setItem("spain", "Espana");
localStorage.setItem("switzerland", switzerland);

/*
document.querySelector("body").addEventListener("keypress", function (event) {
  console.log(event.which);
});
*/
document.querySelector("body").addEventListener("keypress", function () {
  hidden.style.visibility = "hidden";
  ball.style.zoom = "100%";
  ball.style.top = "0px";
  ball.style.left = `0px`;
  goalkeeper.className = "goalkeeper";
});
