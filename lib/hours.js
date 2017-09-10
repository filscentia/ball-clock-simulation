
const Rack = require('./rack');

class Hours extends Rack{

    // constructor(name,size,waitingRack,nextRack)
    constructor(waitingRack){
        super('hours',11,waitingRack);
    }

    add(ball){
        this.getBalls().push(ball);
        if (this.getBalls().length>this.size){
            // time to tip last ball to be added to next rack
            // rest go to the waiting
            this.getBalls().reverse();
            this.getWaitingRack().addSet(this.getBalls());                        
            this.reset();
        }
    }

    toString(){
        let str = 'Hours Rack ['+this.getBalls().length+' balls]\n  ';
        this.getBalls().forEach((e)=>{
            str+=e.toString()+' ';
        });
        return str;
    }

    
}

module.exports = Hours;