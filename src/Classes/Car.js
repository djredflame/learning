// Import class Person
import Person from './Person.js';

// Create class Car that extends class Person
class Car extends Person{
    /**
     * Define the variables:
     * @param {string} name
     * @param {string} lastName
     * @param {number} age
     * @param {string} gender
     * @param {string} brand
     * @param {string} model
     * @param {string} generation
     * @param {string} engine
     * @param {number} startOfProduction
     * @param {number} endOfProduction
     * @param {string} bodyType
     * @param {number} seats
     * @param {number} doors
     * @param {number} maxSpeed
     * maxSpeed needs to be in km/h
     */
    constructor(name, lastName, age, gender, brand, model, generation, engine, startOfProduction,
        endOfProduction, bodyType, seats, doors, maxSpeed){
            super(name, lastName, age, gender);
            this._brand = brand;
            this._model = model;
            this._generation = generation;
            this._engine = engine;
            this._startOfProdcution = startOfProduction;
            this._endOfProdcution = endOfProduction;
            this._bodyType = bodyType;
            this._seats = seats;
            this._doors = doors;
            this._maxSpeed = maxSpeed;
        }

        get fullCarName(){
            return `${this._brand} ${this._generation}`;
        }

        get producedAmountYears(){
            return `The car ${this._brand} ${this._generation} was produced ${this._endOfProdcution - this._startOfProdcution} years long`
        }

        get maxSpeedKMH(){
            return `${this._maxSpeed} km/h`;
        }

        get maxSpeedMPH(){
            return `${Math.round(this._maxSpeed * 0.621371)} mph`;
        }

        /**
         * @param {string} newBrand
         */
        set changeBrand(newBrand){
            this._brand = newBrand;
        };

        /**
         * @param {string} newModel
         */
         set changeModel(newModel){
            this._model = newModel;
        };

        /**
         * @param {string} newGeneration
         */
         set changeGeneration(newGeneration){
            this._generation = newGeneration;
        };

        /**
         * @param {string} newEngine
         */
         set changeEngine(newEngine){
            this._engine = newEngine;
        };

        /**
         * @param {number} newStartOfProduction
         */
         set changeStartOfProduction(newStartOfProduction){
            this._startOfProdcution = newStartOfProduction;
        };

        /**
         * @param {number} newEndOfProduction
         */
         set changeEndOfProduction(newEndOfProduction){
            this._endOfProdcution = newEndOfProduction;
        };

        /**
         * @param {string} newBodyType
         */
         set changeBodyType(newBodyType){
            this._bodyType = newBodyType;
        };

        /**
         * @param {number} newSeats
         */
         set changeModel(newSeats){
            this._seats = newSeats;
        };

        /**
         * @param {number} newDoors
         */
         set changeModel(newDoors){
            this._doors = newDoors;
        };

        /**
         * @param {number} newMaxSpeed
         * maxSpeed needs to be in km/h
         */
         set changeModel(newMaxSpeed){
            this._maxSpeed = newMaxSpeed;
        };
}

export default Car;