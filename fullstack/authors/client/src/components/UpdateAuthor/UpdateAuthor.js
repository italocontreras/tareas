import './UpdateAuthor.css'
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'

import {useNavigate, Link} from 'react-router-dom'

import { Dropdown } from 'react-bootstrap';

// import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useParams } from "react-router-dom";


function UpdateAuthor() {

    const [author, setAuthor] = useState({});
    const {id} = useParams();

    const [name, setName] = useState('')

    const navigate = useNavigate() 


    useEffect(() => {
        const fetchAuthor = async () => {
          try {
            const response = await axios.get(window.$api + '/authors/' + id);
            console.log("response",response)
            console.log(response.data)
            setAuthor(response.data);
            setName(response.data.name);
          } catch (error) {
            console.error("Error fetching author:", error);
          }
        };
    
        fetchAuthor();
    }, [id]);

    async function edit (ev) {
        ev.preventDefault()
        console.log("edit")
        // console.log({name, position});
        try {

          await axios.put(window.$api + '/authors/edit/' + id, {
            name: name
            
          })
          alert('Autor modificado correctamente')
          navigate('/')
        }
        catch(err) {
          const errors = err.response.data.errors
            if (errors.name) {
            
            
            }
        }
    }
        
    

    return (
        // <div className='update-author'>

        //     update

        // </div> 

        

        <div className='update-author'>

            <div className="title">
                Favorite authors
            </div>
            
            <div className="link">
                <Link to={'/'}>Home</Link>
            
            </div>
            
            <div className='notes'>
                Edit this author:
            </div>

            <div className='form-input'>
            
                <form onSubmit={edit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ev => setName(ev.target.value)}/>
                    
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

        </div> 
    );
}

export default UpdateAuthor;