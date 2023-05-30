import { useState, useEffect } from 'react';

// import axios from 'axios'

import Form from '../formulario/Formulario';
import List from '../list/List';

import './Main.css'


import axios from 'axios'

// import { useState } from 'react';

function Main() {

    const [products, setProducts] = useState([]);

    // function updateProductsList(newProduct) {
    //     setProducts([...products, newProduct]);
    // }

    // const [products, setProducts] = useState([])
  
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

    const handleProductAdded = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const handleProductDeleted = (updatedProducts) => {
        setProducts(updatedProducts);
    };

    return (
        <div className='Main'>
            {
                console.log("aca va el Main")
            }
            {/* <div>
                aca va el main
            </div> */}
            <div className='form'>
                {/* <Form></Form> */}
                {/* <Form updateProductsList={updateProductsList} /> */}
                <Form onProductAdded={handleProductAdded} />
            </div>
            <div className='list'>
                {/* <List></List> */}
                <List products={products} onProductDeleted={handleProductDeleted}/>
            </div>
            
        </div> 
    );
  }
  
  export default Main;