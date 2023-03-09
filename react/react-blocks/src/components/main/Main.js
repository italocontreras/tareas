import { Component } from "react";
import './Main.css';


class Main extends Component{
    render(){
        return <div className = "mainContent">
            { this.props.children }
        </div>;
         
    }
}

export default Main;