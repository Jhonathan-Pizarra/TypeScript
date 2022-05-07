//Las funciones pueden recibir desde un parámetro que es un simple numero, hasta un objeto con varias propiedades
const getChannelName = (id: string | number) => {
    console.log(`El canal con id ${id} se llama deTodo!`);
}

const getChannelInfo = (channel: { id: string | number, name: string, subscribers: number, year: string | number}) => {
    console.log(`${channel.name} tiene ${channel.subscribers} suscriptores y fue creado en ${channel.year}`);
}

const webtoriales = {
    id: 123,
    name: 'webtoriales',
    subscribers: 1800,
    year: 2019,
};

getChannelName('123');
getChannelName(456);
getChannelName(webtoriales.id);
getChannelInfo(webtoriales);

//Alias
//Se usan para representar tipos de dato union, puede ayudar a simplificar estas funciones
type ID = string | number;
type Year = string | number;

const getChannelName2 = (id: ID) => {
  console.log(`El canal con id ${id} se llama Webtoriales`);
}

const getChannelInfo2 = (channel: { id: ID, name: string, subscribers: number, year: Year}) => {
  console.log(`${channel.name} tiene ${channel.subscribers} suscriptores y fue creado en ${channel.year}`);
}


const tutarras = {
  id: 123,
  name: 'tutarras',
  subscribers: 1800,
  year: 2019,
};

getChannelName2('123');
getChannelName2(456);
getChannelName2(tutarras.id);
getChannelInfo2(tutarras);


//Alias para objetos
//Se usan para representar objetos, puede ayudar a simplificar estas funciones aun más
type ID2 = string | number;
type Year2 = string | number;
type Channel = {
  id: ID2,
  name: string,
  subscribers: number,
  year: Year2
}

const getChannelName3 = (id: ID2) => {
  console.log(`El canal con id ${id} se llama Webtoriales`);
}

const getChannelInfo3 = (channel: Channel) => {
  console.log(`${channel.name} tiene ${channel.subscribers} suscriptores y fue creado en ${channel.year}`);
}

const subscribeToChannel = (channel: Channel) => {
  console.log(`Te has suscrito a ${channel.name}`);
}

//Podemos indicarle explicitamente que nuestro objeto es de tipo Channel(Opcional)
const guitarraviva: Channel = {
  id: 123,
  name: 'guitarraviva',
  subscribers: 1800,
  year: 2019,
};

getChannelName3('123');
getChannelName3(456);
getChannelName3(guitarraviva.id);
getChannelInfo3(guitarraviva);
subscribeToChannel(guitarraviva);