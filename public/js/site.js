// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

var totalRows = 3;
            var cellsInRow = 9;
            var min;
            var max;

            function drawTable() {
                var div1 = document.getElementById('div1');
                var tbl = document.createElement("table");
                for (var r = 0; r < totalRows; r++) {
                    var row = document.createElement("tr");
                    for (var c = 0; c < cellsInRow; c++) {
                        if (c == 0 && (r == 0 || r == 2)) {
                            min = 1;
                            max = 10;
                            var cell = document.createElement("td");
                            getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
                            cell.appendChild(cellText);
                            row.appendChild(cell);
                            continue;
                        }
                        if (c == 1 && r == 1) {
                            min = 11;
                            max = 20;
                            var cell = document.createElement("td");
                            getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
                            cell.appendChild(cellText);
                            row.appendChild(cell);
                            continue;
                        }
                        if (c == 2 && (r == 0 || r == 2)) {
                            min = 21;
                            max = 30;
                            var cell = document.createElement("td");
                            getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
                            cell.appendChild(cellText);
                            row.appendChild(cell);
                            continue;

                        }
                        if (c == 3 && r == 1) {
                            min = 31;
                            max = 40;
                            var cell = document.createElement("td");
                            getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
                            cell.appendChild(cellText);
                            row.appendChild(cell);
                            continue;

                        }
                        if (c == 4 && (r == 0 || r == 2)) {
                            min = 41;
                            max = 50;
                            var cell = document.createElement("td");
                            getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
                            cell.appendChild(cellText);
                            row.appendChild(cell);
                            continue;

                        }
                        if (c == 5 && r == 1) {
                            min = 51;
                            max = 60;
                            var cell = document.createElement("td");
                            getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
                            cell.appendChild(cellText);
                            row.appendChild(cell);
                            continue;

                        }
                        if (c == 6 && (r == 0 || r == 2)) {
                            min = 61;
                            max = 70;
                            var cell = document.createElement("td");
                            getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
                            cell.appendChild(cellText);
                            row.appendChild(cell);
                            continue;

                        }
                        if (c == 7 && (r == 0 || r == 1)) {
                            min = 71;
                            max = 80;
                            var cell = document.createElement("td");
                            getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
                            cell.appendChild(cellText);
                            row.appendChild(cell);
                            continue;

                        }
                        if (c == 8 && (r == 1 || r == 2)) {
                            min = 81;
                            max = 90;
                            var cell = document.createElement("td");
                            getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                            var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
                            cell.appendChild(cellText);
                            row.appendChild(cell);
                            continue;

                        }
                        var cell = document.createElement("td");
                        getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                        var cellText = document.createTextNode(" ");
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                    }

                    tbl.appendChild(row); // add the row to the end of the table body
                }

                div1.appendChild(tbl); // appends <table> into <div1>
            }
            window.onload = drawTable;

function myFunction() {
  var row = document.getElementById("myRow");
  var x = row.insertCell(0);
  x.innerHTML = Math.floor((Math.random() * 90) + 1);
    document.getElementById("app").innerHTML="";
    timePassed = 0;
    timeLeft = 20;
    timerInterval = null;
    remainingPathColor = COLOR_CODES.info.color;
    document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;
  }
  

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};


const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
startTimer();



function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
