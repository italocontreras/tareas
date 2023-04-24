import './CreateAuthor.css'
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'

// import { DropdownButton, Dropdown } from 'react-bootstrap';

import {useNavigate, Link} from 'react-router-dom'

function CreateAuthor() {

    const navigate = useNavigate() 

    const [name, setName] = useState('')

    async function create (ev) {
        ev.preventDefault()

        //console.log({name, position});
        try {
          const newAuthor = await axios.post(window.$api + '/authors/new', {
            name: name
            
          })
          alert('Autor agregado correctamente')
          navigate('/')
        }
        catch(err) {
          const errors = err.response.data.errors
            // if (errors.name) {
            // dejarlo más bonito
            // setErrors(errors.name.message)
            //}
        }
    
        
    }

    return (
        <div className='create-author'>

            <div className="title">
                Favorite authors
            </div>
            <div className="link">
                <Link to={'/'}>Home</Link>
            </div>
            <div className='notes'>
                Add a new author:
            </div>
            
            <div className='form-input'>
            <form onSubmit={create}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ev => setName(ev.target.value)}/>
                  
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            </div>

        </div> 
    );
}

export default CreateAuthor;