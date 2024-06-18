// polymorphism example

class Animal {

    sound():void{
        console.log('Animals can sound!');   
    }
}

class Dog extends Animal {

    override sound(): string {
        console.log('bark');
        let a = 'shepard';
        return 'bark';
    }
}

class Cat extends Animal {

    override sound(): string {
        console.log('Meoww');
        return 'meoww';
    }
}

function animalSound(animal: Animal){
    animal.sound();
}

var animal = new Animal();
var animal1 = new Dog();
var animal2 = new Cat();

animalSound(animal);
animalSound(animal1);
animalSound(animal2);