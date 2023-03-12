import { Engine, Tires, Car } from "./car";


// Bad pattern 

export class CarFactory {
    createCar() {
        const car = new Car(this.createEngine(), this.createTires())
        car.description= 'Factory'
        return car
    }

    createEngine() {
        return new Engine()
    }

    createTires() {
        return new Tires()
    }
}