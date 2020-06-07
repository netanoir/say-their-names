/*
say their names

code forked from Laurel Schwulst
https://github.com/laurelschwulst/say-their-names

list of Black people killed by police brutality 
https://github.com/washingtonpost/data-police-shootings
*/

let names;
let counter = 0;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/washingtonpost/data-police-shootings/master/fatal-police-shootings-data.csv', 'csv', 'header');
}

function setup() {
  names = [];

  for (let r = 0; r < table.getRowCount(); r += 1) {
    let name = table.getString(r, 1);
    let race = table.getString(r, 7);
    let Black = race.includes("B");

    if (Black) {
      names.push(name);
    }
  }
  change();
}

function change() {
  if (counter == names.length) { counter = 0; }
  var currentName = names[counter];
  var textElement = document.querySelector("p");
  var pageTitle = document.querySelector("title");
  textElement.innerHTML = currentName;
  pageTitle.innerHTML = currentName;
  setTimeout(change, 5000);
  counter++;
}