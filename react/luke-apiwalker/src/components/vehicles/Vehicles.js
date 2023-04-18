
import './Vehicles.css'

function Vehicles(props){

    const {name,passengers,model,consumables,length} = props.vehiclesState;

    return(
        <div>
            <p className="name">{name}</p>
            <p>Passengers: {passengers}</p>
            <p>Model: {model}</p>
            <p>Consumables: {consumables}</p>
            <p>Length: {length}</p>            
        </div>
    )

}

export default Vehicles;