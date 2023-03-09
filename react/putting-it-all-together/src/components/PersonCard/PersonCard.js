import {Component} from 'react'
import './PersonCard.css'

class PersonCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            age:this.props.age
        }
    }

    increment = () => {
        console.log("increment")
        this.setState(
            {
                age: this.state.age + 1
            }
        );
    };

    render(){
        
        const {firstName,lastName,hairColor} = this.props;
        

        return(
            <div>
                <div className="cont">
                    <div className="names">{lastName}, {firstName}</div>
                    <div className="age">Age: {this.state.age}</div>
                    <div className="haircolor">Hair Color: {hairColor}</div>
                    <div><button onClick={this.increment} className = "btn-primary">Birthday Bottom for {firstName} {lastName}</button> </div>
                </div>
            </div>
        )
    }
}

export default PersonCard