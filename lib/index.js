
const Rack = require('./rack');
const Ball = require('./ball');
const Hours = require('./hours');
const FiveMins = require('./fivemins');


let waiting = new Rack('waiting',50);
let hours = new Hours(waiting);

let fivesMins = new FiveMins(waiting,hours);
let unitMins = new Rack('Unit',4,waiting,fivesMins);

const BALLQTY = 32;

function tick(){
    // one from the waiting queue and add it to the unitMins;
    unitMins.add(waiting.balls.shift());   
}

function display(){
    let m = (unitMins.getCurrentSize() + (fivesMins.getCurrentSize()*5));
    let d = hours.getCurrentSize();
     
    console.log('------->> '+ (d<10 ? '0'+d:d )+':'+  (m<10 ? '0'+m : m) );
    console.log(unitMins.toString());
    console.log(fivesMins.toString());
    console.log(hours.toString());
    console.log(waiting.toString());
    if(unitMins.getCurrentSize()+fivesMins.getCurrentSize()+hours.getCurrentSize()+waiting.getCurrentSize()!==32){
        process.exit();
    }
}

for (let x=1; x<= BALLQTY; x++){
    let b = new Ball('#'+x);
    waiting.add(b);
}

let l =61;

for (let i=0; i<l; i++){
    tick();
    display();
}
