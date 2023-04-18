import './People.css'

function People(props){

    const {name,gender,height,hair_color,eye_color} = props.peopleState;

    return(
        <div>
            <p className="name">{name}</p>
            <p>gender: {gender}</p>
            <p>height: {height}</p>
            <p>hair color: {hair_color}</p>
            <p>eye color: {eye_color}</p>
            
        </div>
    )



}

export default People;