
export class Bike{

    price:number;
    max_speed:string;
    miles:number;
    
    constructor(price:number,max_speed:string,miles:number){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = miles;
    }

    displayInfo(){
        console.log("Price: " + this.price + ", Max Speed: " + this.max_speed + ", Total Miles: " + this.miles)
    }

    ride(){
        this.miles += 10;
        console.log("Riding");
        return this;
    }

    reverse(){
        console.log("Reversing");
        this.miles -= 5;
        return this;
    }

}


const Shimano = new Bike(2500, "50", 150);
const Tottem = new Bike(2000, "55", 263);
const Bianchi = new Bike(1000, "15", 184);

Shimano.ride();
Shimano.ride();
Shimano.ride();
Shimano.reverse();
Shimano.displayInfo();

Tottem.ride();
Tottem.ride();
Tottem.reverse();
Tottem.reverse();
Tottem.displayInfo();

Bianchi.reverse();
Bianchi.reverse();
Bianchi.reverse();
Bianchi.displayInfo();