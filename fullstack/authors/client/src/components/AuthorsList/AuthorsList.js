import './AuthorsList.css'
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'

import Table from 'react-bootstrap/Table';


// import { DropdownButton, Dropdown } from 'react-bootstrap';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

function AuthorsList() {


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

    async function eliminate(_id) {
        console.log("delete")
        // await axios.delete(window.$api + '/authors/' + _id)
        // const newAuthors = authors.filter(aut => aut._id !== _id)
        // setAuthors(newAuthors)
    }

    async function edit(_id) {
        console.log("edit")
        // await axios.delete(window.$api + '/authors/' + _id)
        // const newAuthors = authors.filter(aut => aut._id !== _id)
        // setAuthors(newAuthors)
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
                            <button onClick={() => edit(author._id)} className="btn btn-primary">Edit</button>
                            
                            <button onClick={() => eliminate(author._id)} className="btn btn-danger">Eliminar</button>
                            

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