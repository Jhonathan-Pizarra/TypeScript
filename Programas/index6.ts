//Interfaces
//Es solo otra manera de referenciar o dar un alias, pero solo un objeto, si no queremos usar el alias que vimos en la leccion anterior
type ID = string | number;
type Year = string | number;
interface Channel {
    id: ID,
    name: string,
    subscribers: number,
    year: Year
  }


  const getChannelInfo = (channel: Channel) => {
    console.log(`${channel.name} tiene ${channel.subscribers} suscriptores y fue creado en ${channel.year}`);
  }

  const tutarras = {
    id: 123,
    name: 'tutarras',
    subscribers: 1800,
    year: 2019,
  };
  
 
  getChannelInfo(tutarras);



  //Alias vs Interface
  type PersonType = {
      name: string,
  }

  interface PersonInterface {
      name: string,
  }

  const person1: PersonType =  {name: 'Natasha'}; //alias se extienden por intersecciones de tipoi
  const personw: PersonInterface =  {name: 'Doménica'}; //interfaces se extienden por la keyword "extends"

  //Vamos a extender primero PersonType con SuperHumanType
  type SuperHumanType = { powers: string[] } & PersonType; //asi interseccionamos con PersonType
                                                         //Si quieremos que este atributo sea opcional añadimos así: planet?:string

  const superHuman: SuperHumanType = {
      name: 'Peter Parker',
      powers: ['fuerza', 'sentido aracnido']
  };

  //Vamos a hacer lo mismo con interfaz
  interface Alien extends PersonInterface {
      planet: string 
  } //Si quieremos que este atributo sea opcional añadimos así: planet?:string

  const alien: Alien = {
      name: 'marciano',
      planet: 'Marte'
  }


  //Interfaz frente a aliases
  //extendemos la interfaz con una nueva propiedad al redeclarar la interfaz
  interface Pet {
      name: string
  }

  interface Pet {
      isCute:boolean
  }


  const myPet: Pet = {
      name: 'Garfield',
      isCute: false
  }

  //En los aliases de typo no se puede jacer eso, no se puede reedeclarar un Type:
  type PetType = {
      name: string
  }

  type PetType = {
      isCute: boolean
  }

  //Cuando usar uno y otro, dependeará del criterio del programador-