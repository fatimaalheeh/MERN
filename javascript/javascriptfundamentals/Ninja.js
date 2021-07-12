class Ninja{
    constructor(name){
        this.name=name;
        this.health=100;
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

const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkMilk();
ninja1.showStats();
