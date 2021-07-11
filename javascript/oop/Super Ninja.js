class Ninja{
    constructor(name,health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log("Name: "+this.name+"\n strength: "+this.strength+"\n speed: "+this.speed+"\n health: "+this.health);

    }
    drinkMilk(){
        this.health+=10;
        
    }

}
class Sensei extends Ninja{
    constructor(name){
    super(name,200,10,10);
    		
        this.wisdom=10;
        
        
        
    }
    
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");

    }
    drinkMilk(){
        this.health+=10;
    }

}

const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkMilk();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
