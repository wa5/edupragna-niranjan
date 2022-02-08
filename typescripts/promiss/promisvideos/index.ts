//first
// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(res=>res.json())
// .then((data)=>{console.log(data)})
//second
 interface PokemonList {
    count: number;
    next: string;
    previous?: any;
    results: {
      name: string;
      url: string;
    }[];
  }
  interface Pokemon {
    id: number;
    name: string;
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
  }

//   fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(res=>res.json())
//   .then((data:PokemonList)=>{console.log(data)})

//chng error
//   fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(res=>res.json())
//   .then((data:PokemonList)=>{console.log(data)})
//   .catch((err)=>{console.log(err)})

//async and awaite




  (async()=>{
    try{
        let listRes=await fetch('https://pokeapi.co/api/v2/pokemon/')
        const list:PokemonList=await listRes.json()
          console.log(list)
    }catch(e){
        console.log(e)
    }
    
})()


const getPokemonList = async (): Promise<PokemonList> => {
    const listResp = await fetch("https://pokeapi.co/api/v2/pokemon/");
    return await listResp.json();
  };
  
 const getPokemon = async (url: string): Promise<Pokemon> => {
    const dataResp = await fetch(url);
    return await dataResp.json();
  };
 const getFirstPokemon = async (): Promise<Pokemon> =>
  new Promise(async (resolve, reject) => {
    try {
      console.log("Getting the list");
      const list = await getPokemonList();
      resolve(await getPokemon(list.results[0].url));
    } catch (error) {
      reject(error);
    }
  });
  getFirstPokemon()