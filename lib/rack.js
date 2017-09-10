

class Rack {

    constructor(name,size,waitingRack,nextRack){
        this.name = name;
        this.size = size;
        this.waitingRack = waitingRack;
        this.nextRack = nextRack;

        this.balls = [];
        this.ballsAfter=[];
    }

    add(ball){
        this.balls.push(ball);
        if (this.balls.length>this.size){
            // time to tip last ball to be added to next rack
            let toAdd =this.balls.pop();
            
            // rest go to the waiting
            this.balls.reverse();
            this.waitingRack.addSet(this.balls);
            if (this.ballsAfter.length>0){
                this.waitingRack.addSet(this.ballsAfter);
                this.ballsAfter=[];
            }
            this.nextRack.add(toAdd);
            this.balls=[];
        }
    }
    pleaseAddTheseForMe(ballsToadd){
        this.ballsAfter=ballsToadd;
    }

    full(){
        return this.balls.length===this.size;
    }

    reset(){
        this.balls=[];
    }
    addSet(setBalls){
        // only for the waiting rack
        let set = this.balls.concat(setBalls);
        this.balls = set;
    }

    getNextRack(){
        return this.nextRack;
    }

    getWaitingRack(){
        return this.waitingRack;
    }

    getBalls(){
        return this.balls;
    }
    getCurrentSize(){
        return this.balls.length;
    }

    toString(){
        let str = 'Rack '+this.name+': ['+this.balls.length+' balls]\n  ';
        this.getBalls().forEach((e)=>{
            str+=e.toString()+' ';
        });
        return str;
    }
}

module.exports = Rack;