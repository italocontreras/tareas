import './Starships.css'

function Starships(props){

    const {name,consumables,manufacturer,starship_class,crew} = props.starshipsState;

    return(
        <div>
            <p className="name">{name}</p>
            <p>Consumables: {consumables}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Starship class: {starship_class}</p>
            <p>Crew: {crew}</p>            
        </div>
    )

}

export default Starships;