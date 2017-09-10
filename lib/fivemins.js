
const Rack = require('./rack');

class FiveMins extends Rack{

    // constructor(name,size,waitingRack,nextRack)
    constructor(waitingRack,nextrack){
        super('fivemins',11,waitingRack,nextrack);
    }
    
    add(ball){
        this.getBalls().push(ball);
        if (this.getBalls().length>this.size){
            // time to tip last ball to be added to next rack
            this.getNextRack().add(this.getBalls().pop());
            // rest go to the waiting
            this.getBalls().reverse();
            this.getWaitingRack().addSet(this.getBalls());

                        
            this.reset();
        }
    }

    toString(){
        let str = 'Five Minutes Rack ['+this.getBalls().length+' balls]\n  ';
        this.getBalls().forEach((e)=>{
            str+=e.toString()+' ';
        });
        return str;
    }
}

module.exports = FiveMins;