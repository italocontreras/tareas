import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


import axios from 'axios'

import './List.css'
import { Link } from 'react-router-dom';


function List(props) {
    const navigate = useNavigate();


    async function editProduct(_id) {
        console.log("update pirate de authoris list")
        console.log(_id)
        navigate('/edit/'+_id)        
        
    }

    async function deleteProduct(_id){
        try {
          await axios.delete(`http://localhost:8000/api/products/delete/` + _id);
          const updatedProducts = props.products.filter((product) => product._id !== _id);
          props.onProductDeleted(updatedProducts);
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <div className='list'>
            <div className='allproducts'>
                All products
            </div>
            <div className='data'>
                {props.products.map((item,index) => {
                    return (
                        <div className='value' key={item._id}>
                            <div className='title-list'>{item.title}</div>
                            
                            <div className='link-list'>
                                <Link to={{ pathname: '/product/' + item._id}}>(Ver detalle)</Link>
                            </div>
                            <div className='btn-primary-list'>
                                <button type="button" class="btn btn-primary" onClick={() => editProduct(item._id)}>Edit</button>
                            </div>
                            <div className='btn-danger-list'>
                                <button type="button" class="btn btn-danger" onClick={() => deleteProduct(item._id)}>Delete</button>
                            </div>
                     
                                               
                        </div>
                    );    
                })}     
            </div>
        </div> 
    );
}
  
export default List;