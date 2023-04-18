import './Species.css'

function Species(props){

    const {name,classification,designation,skin_colors,average_lifespan} = props.speciesState;

    return(
        <div>
            <p className="name">{name}</p>
            <p>Classification: {classification}</p>
            <p>Designation: {designation}</p>
            <p>Skin colors: {skin_colors}</p>
            <p>Average lifespan: {average_lifespan}</p>
        </div>
    )

}

export default Species;