import './Form.css';

const Form = props => {
    

    const{inputs,setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.id]: e.target.value
        });
    };

    return(
        <form>
                
            <div className="form">
                <label htmlFor= "firstName">First Name</label>
                
                <div className="out-input">
                    <input onChange={onChange} type= "text" id="firstName"></input>
                </div>

            </div>

        
            <div className="form">
                <label htmlFor= "lastName">Last Name</label>

                <div className="out-input">
                    <input onChange={onChange} type= "text" id="lastName"></input>
                </div>

            </div>


            <div className="form">
                <label htmlFor= "email">Email</label>
                <div className="out-input">
                    <input onChange={onChange} type= "text" id="email"></input>
                </div>

            </div>

            <div className="form">
                <label htmlFor= "password">Password</label>
                <div className="out-input">
                    <input onChange={onChange} type= "password" id="password"></input>
                </div>
            </div>
                
            <div className="form">
                <label htmlFor= "confirmPassword">Confirm Password</label>
                <div className="out-input">
                    <input onChange={onChange} type= "password" id="confirmPassword"></input>
                </div>
            </div>


        </form>
    )
}

export default Form;