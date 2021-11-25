
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