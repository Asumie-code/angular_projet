// examples with car and engine variations 

import { Car, Engine, Tires } from "./car";


// example 1 
export function simpleCar() {
    // simple car with 4 cylinders and flinstone tires 
    const car = new Car(new Engine, new Tires())
    car.description = 'Simple'
    return car
}


// example 2 
class Engine2 {
    constructor(public cylinders: number) {}
}

export function superCar() {
    // super car with 12 cylinders and flinstone tires. 
    const bigCylinders = 12 
    const car = new Car(new Engine2(bigCylinders), new Tires())
    car.description = 'Super' 
    return car

}



// example 3 
class MockEngine extends Engine { override cylinders = 8}
class MockTires extends Tires { override make = 'YokoGoodStone'}

export function testCar() {
    // Test car with 8 cylinders and yokoGoodStone tires
    const car = new Car(new MockEngine(), new MockTires())
    car.description = 'Test'
    return car

}


// car examples represent creating the dependencies manually and injecting them manually versus injecting them with the defualt angular injector. 