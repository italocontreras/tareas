import {Component} from 'react'
import './PersonCard.css'


class PersonCard extends Component{
    render(){
        
        const {firstName,lastName,age,hairColor} = this.props;
        
        return(
            <div>
                <div className="cont">
                    <div className="names">{firstName}, {lastName}</div>
                    <div className="age">Age: {age}</div>
                    <div className="haircolor">Hair Color: {hairColor}</div>
                </div>
            </div>
        )
    }
}

export default PersonCard