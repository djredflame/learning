// Create class Person
class Person {
    /**
     * Define the variables:
     * @param {string} name
     * @param {string} lastName
     * @param {number} age
     * @param {string} gender
     * Male or Female
    */
    constructor(name, lastName, age, gender){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._gender = gender;
    }

    get fullName(){
        return `${this._name} ${this._lastName}`;
    };

    get genderSymbol(){
        let g = this._gender;
        switch(g){
            case `Male`:
                return `♂`;
                break;
            case `Female`:
                return `♀`;
                break;
            default:
                return ``;
        };
    };

    /**
     * @param {string} newName
     */
    set changeName(newName){
        this._name = newName;
    };

    /**
     * @param {string} newLastName
     */
    set changeLastName(newLastName){
        this._lastName = newLastName;
    };

    /**
     * @param {number} newAge
     */
    set changeAge(newAge){
        this._age = newAge;
    };

    /**
     * @param {string} newGender
     */
    set changeGender(newGender){
        this._gender = newGender;
    };

}

export default Person;