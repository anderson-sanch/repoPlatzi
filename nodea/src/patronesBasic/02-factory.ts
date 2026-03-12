class Pet {
  constructor(public name:string){
  }
}

class PetFactory{
  createPet(name:string){
    return new Pet(name)
  }
}

const factory = new PetFactory();

const pet1 = factory.createPet('lulu');
const pet2 = factory.createPet('juan');

console.log(pet1 === pet2);


