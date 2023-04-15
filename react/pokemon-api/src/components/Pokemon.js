import {useState} from "react"
import './Pokemon.css'

const Pokemon = () => {


    const [list,setList] = useState([]);
    

    const getData = async () => {


        try{
            var resultado = await fetch("https://pokeapi.co/api/v2/pokemon");
            
            var body = await resultado.json();
            
            var pokemons = body.results;
            
            var listTemp = [...list];

            for (var i=0;i<pokemons.length;i++){
                const pokemon = pokemons[i];
                listTemp.push(pokemon.name);
            };

            setList(listTemp);
            console.log(listTemp)
        }catch(e){
            console.log(e);
        }
    }

    return(
        <div>
            <button className="btn-pokemon" onClick={getData}>Fetch Pokemon</button>
            {
                list.map((item,index) => {
                    return <p key={index}>-{item}</p>
                    

                })
            }

        </div>
    )


}

export default Pokemon;