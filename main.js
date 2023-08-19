let recIcon = document.getElementById('icon');
let recName = document.getElementById('recName');
let recScore = document.getElementById('recScore');

let memIcon = document.getElementById("memIcon");
let memScore = document.getElementById("memScore");
let memName = document.getElementById("memName");

let verIcon = document.getElementById("verIcon");
let verScore = document.getElementById("verScore");
let verName = document.getElementById("verName");

let visIcon = document.getElementById("visIcon");
let visScore = document.getElementById("visScore");
let visName = document.getElementById("visName");

import data from "./data.json" assert {type: 'json'};


recIcon.setAttribute("src",data[0].icon);
recName.innerText = data[0].category;
recScore.innerText = data[0].score;

memIcon.setAttribute("src",data[1].icon);
memName.innerText = data[1].category;
memScore.innerText = data[1].score;

verIcon.setAttribute("src",data[2].icon);
verName.innerText = data[2].category;
verScore.innerText = data[2].score;

visIcon.setAttribute("src",data[3].icon);
visName.innerText = data[3].category;
visScore.innerText = data[3].score;