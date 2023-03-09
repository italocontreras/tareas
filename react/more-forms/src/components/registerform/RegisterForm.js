import './RegisterForm.css';

function RegisterForm(props){
    
    var state = props.state
    var setState = props.setState
 

    function changeInput(ev){
        
        const id_input = ev.target.id
        const value_input = ev.target.value
        
         setState({
            ...state,
            [id_input]:value_input
         })

        validateForm(ev,id_input,value_input)
    }
    
    function validateForm(ev,id_input,value_input){
        const id_input_error = ev.target.attributes["iderror"].value
        var message = ""

        console.log("id_input",id_input)
        if (id_input === "firstName"){

            if(value_input.length < 2){
                
                message = "first name must have at least 2 characters"
            } 
                        
        }

        if (id_input === "lastName"){

            console.log("paso el if lastname")
            if(value_input.length < 2){
                console.log("paso el if lastname menor a 2")
                message = "last name must have at least 2 characters"
            } 
                    
        }    

        if (id_input === "email"){

            if(value_input.length < 5){
                
                message = "email must have at least 2 characters"
            } 
                    
        }

        if (id_input === "password"){

            if(value_input.length < 8){
                
                message = "password must have at least 8 characters"
            }
            
                    
        }

        if (id_input === "confirmPassword"){

            if(value_input !== state.password){
                console.log("paso el if confirm password")
                message = "password and password confirmed must be the same"
            } 
                    
        }

        setState({
            ...state,
            [id_input_error]:message
         })
        

    }


    return(
        <div>
            
            <form>
                <div className = "form-group">
                    
                    <div className="form">
                        <label htmlFor= "firstName">First Name</label>
                        
                        <div className="out-input">
                            <input onChange={changeInput} type= "text" id="firstName" iderror = "firstNameError"></input>
                        </div>

                    </div>
                    <div className='error'>{state.firstNameError}</div>
                </div>
                
                <div className = "form-group">
                    <div className="form">
                        <label htmlFor= "lastName">Last Name</label>

                        <div className="out-input">
                            <input onChange={changeInput} type= "text" id="lastName" iderror = "lastNameError"></input>
                        </div>

                    </div>
                    <div className='error'>{state.lastNameError}</div>
                </div>

                <div className = "form-group">
                    <div className="form">
                        <label htmlFor= "email">Email</label>
                        <div className="out-input">
                            <input onChange={changeInput} type= "text" id="email" iderror = "emailError"></input>
                        </div>

                    </div>

                    <div className='error'>{state.emailError}</div>
                </div>

                <div className = "form-group">
                    <div className="form">
                        <label htmlFor= "password">Password</label>
                        <div className="out-input">
                            <input onChange={changeInput} type= "password" id="password" iderror = "passwordError"></input>
                        </div>
                    </div>
                    <div className='error'>{state.passwordError}</div>
                </div>

                <div className = "form-group">
                    <div className="form">
                        <label htmlFor= "confirmPassword">Confirm Password</label>
                        <div className="out-input">
                            <input onChange={changeInput} type= "password" id="confirmPassword" iderror = "confirmPasswordError"></input>
                        </div>
                    </div>
                    <div className='error'>{state.confirmPasswordError}</div>
                </div>
            </form>
            
        </div>
    )
}

export default RegisterForm;
