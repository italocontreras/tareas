
import './Planets.css'

function Planets(props){

    const {name,population,gravity,diameter,climate} = props.planetsState;

    return(
        <div>
            <p className="name">{name}</p>
            <p>Population: {population}</p>
            <p>Gravity: {gravity}</p>
            <p>Diameter: {diameter}</p>
            <p>Climate: {climate}</p>            
        </div>
    )

}

export default Planets;