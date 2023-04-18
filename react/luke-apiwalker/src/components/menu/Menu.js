import React from "react";
import { useState } from "react";
import axios from 'axios'

import Films from '../films/Films';
import People from '../people/People';
import Planets from '../planets/Planets';
import Species from '../species/Species';
import Starships from '../starships/Starships';
import Vehicles from '../vehicles/Vehicles';


import Error from '../error/Error';


function StarWars(props) {

    const [type,setType] = useState("");
    const [id,setId] = useState("");

    const [apiState,setApiState] = useState({});

    const [flag,setFlag] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("inicio handleSubmit");
        var type_value = e.target[0].value;
        var id_value = e.target[1].value;

        setType(type_value);
        setId(id_value);

        var final_api_route = "https://swapi.dev/api/" + type_value + '/' + id_value + '/';
        console.log("fina_api_route",final_api_route)

        setFlag("")

        try{
            var myAxios = await axios.get(final_api_route);
            var result = myAxios.data;
        
            setApiState(result);


        }catch(e){
            
            var flag_value = "error"
            setFlag(flag_value)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for:</label>
                <select name="resources" required>
                    <option value="films" >Films</option>
                    <option value="people" >People</option>
                    <option value="planets" >Planets</option>
                    <option value="species" >Species</option>
                    <option value="starships" >Starships</option>
                    <option value="vehicles" >Vehicles</option>
                </select>
                <label>id:</label>
                <input type="text" name="id" required/>
                <input type="submit" value="Search" />
            </form>
            
            {(function() {

                if (flag == "error"){
                    return <Error></Error>
                }    
                else{
                    if (type == "films"){
                        return <Films filmsState={apiState}></Films>
                    }
                    if (type == "people"){
                        return <People peopleState={apiState}></People>
                    }
                    if (type == "planets"){
                        return <Planets planetsState={apiState}></Planets>
                    }
                    if (type == "species"){
                        return <Species speciesState={apiState}></Species>
                    }
                    if (type == "starships"){
                        return <Starships starshipsState={apiState}></Starships>
                    }
                    if (type == "vehicles"){
                        return <Vehicles vehiclesState={apiState}></Vehicles>
                    }
                }
                


            })()}

        </div>
    );
}


export default StarWars