import './AuthorsList.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'

import Table from 'react-bootstrap/Table';


// import { DropdownButton, Dropdown } from 'react-bootstrap';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

function AuthorsList() {

    const navigate = useNavigate() 

    const [authors, setAuthors] = useState([])

    useEffect(
        () => {
        console.log("authros list use effect")
        axios.get(window.$api + '/authors')
        .then(resp => {
            setAuthors(resp.data)
        })
        },
        []
    )

    async function eliminateAuthor(_id) {
        console.log("delete")
        await axios.delete(window.$api + '/authors/delete/' + _id)
        const newAuthors = authors.filter(aut => aut._id !== _id)
        setAuthors(newAuthors)
    }

    async function editAuthor(_id) {
        console.log("update pirate de authoris list")
        console.log(_id)
        navigate('/edit/'+_id)        
        
    }


    return (
        <div className='authors-list'>

            <div className="title">
                Favorite authors
            </div>
            <div className="link">
                <Link to={'/new'}>Add an author</Link>
            </div>
            <div className='notes'>
                We have quotes by:
            </div>
            
            <div className='table'>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map(author => 
                        <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                            <button onClick={() => editAuthor(author._id)} className="btn btn-primary">Edit</button>
                            
                            <button onClick={() => eliminateAuthor(author._id)} className="btn btn-danger">Eliminar</button>
                            

                        </td>
                        </tr>
                        )}
                    </tbody>
                </Table>

            </div>

        </div> 
    );
}

export default AuthorsList;