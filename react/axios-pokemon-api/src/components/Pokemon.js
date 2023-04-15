import {useState} from "react"
import './Pokemon.css'
import axios from 'axios'

const Pokemon = () => {


    const [lista,setLista] = useState([]);
    

    const traerDatos = async () => {


        try{
            var myFetch = await axios.get("https://pokeapi.co/api/v2/pokemon");
            


            // var body = await resultado.json();

            var pokemons = myFetch.data.results;

            var listaTemp = [...lista];

            for (var i=0;i<pokemons.length;i++){
                const pokemon = pokemons[i];
                listaTemp.push(pokemon.name);
            };

            setLista(listaTemp);
            console.log(listaTemp)
        }catch(e){
            console.log(e);
        }
    }

    return(
        <div>
            <button className="btn-pokemon" onClick={traerDatos}>Fetch Pokemon</button>
            {
                lista.map((item,index) => {
                    
                    return <p key={index}>-{item}</p>
                    

                })
            }

        </div>
    )


}

export default Pokemon;