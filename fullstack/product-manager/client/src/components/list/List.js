import { useState, useEffect } from 'react';

import axios from 'axios'

import './List.css'


function List() {

    const [products, setProducts] = useState([])
  
    useEffect(
      () => {
        axios.get('http://localhost:8000/api/products')
        .then(resp => {
            console.log("resp")
            console.log(resp)
            setProducts(resp.data)
        })
      },
      []
    )
  
  
    return (
        <div className='list'>
            <div className='allproducts'>
                All products
            </div>
            <div className='data'>
                {
                    products.map((item,index) => {
                        return<div className='value'>
                            <p>{item.title}</p>
                        </div>    
                    })
                    
                }
            </div>
        </div> 
    );
}
  
export default List;