let d = new Date();
const year_message =  ` new year ${d} `;
const message  = 'Then he said \'s , what am doing !!';
document.body.innerHTML =`<h1>happy  ${year_message} </h1>`
document.body.innerHTML = message;

const sentence =  'How are you ?';
document.body.innerHTML = `${sentence} at position 4 of ${sentence.charAt(4)}`;
document.body.innerHTML = `${sentence} at index of 4 of ${sentence.indexOf('a')}`;
document.body.innerHTML = `${sentence} at index of 4 of ${sentence.lastIndexOf('o')}`;
const splitmessage =  sentence.split(' ');

console.log(splitmessage);
console.log(splitmessage[3]);
const tooMuchWhitespace = "     How are you?     ";

const trimmed = tooMuchWhitespace.trim();
console.log(trimmed);
/*  Array */
const FRUITS =  [
    "Apple",
    "Mango",
    "Jackfruit",
    "Jar"
]
FRUITS.push("Demo");
//FRUITS.unshift("Demo1");
FRUITS.shift();
let indexFruits =  FRUITS.indexOf("Mango")
FRUITS.splice(indexFruits,1)
console.log(FRUITS)

for(let fruit of FRUITS){
    console.log(fruit);
}
FRUITS.fill("anower",1,2)
console.log(FRUITS.reverse())

let fish = [ "piranha", "barracuda", "cod", "eel" ];
fish =  fish.map(item => { 
    return `${item}'_map_'`;
});
fish.forEach(item => {console.log(item.concat('_fish'))} )
/* filter */

let sea =  [ "shark", "whale", "squid", "starfish", "narwhal" ];
let seaItems =  [ "shark", "whale", "squid", "starfish", "narwhal" ];

let filteredList =  sea.filter(item => {
        return item[0] === 's'
})
debugger;
let findItem =  sea.find(x=>x === 'starfish');
let findIndex =  seaItems.findIndex("starfish");
console.log(findIndex);

filteredList.forEach(item => { 
    console.log(item);
 })




