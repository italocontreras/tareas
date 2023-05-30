// import { useState, useEffect } from 'react';

// import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import axios from 'axios'

import './Update.css'

function Update() {

    const [product, setProduct] = useState({});
    

    const navigate = useNavigate() 

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const {id} = useParams();

    // http://localhost:8000/api/products/new
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/products/' + id);
            console.log("response",response)
            console.log(response.data)
            setProduct(response.data);
            setTitle(response.data.title);
            setPrice(response.data.price);
            setDescription(response.data.description);
          } catch (error) {
            console.error("Error fetching product:", error);
          }
        };
    
        fetchProduct();
    }, [id]);

    async function goHome (ev) {
        ev.preventDefault()
        console.log("updateProduct")
        // console.log({name, position});
        try {


          navigate('/')
        
        } catch (error) {
            // console.error("Error updating product:", error);
        }
    }

    async function updateProduct (ev) {
        ev.preventDefault()
        console.log("updateProduct")
        // console.log({name, position});
        try {


          await axios.put('http://localhost:8000/api/products/edit/' + id, {
            title: title,
            price:price,
            description:description
          })
          alert('Product modificado correctamente')
          navigate('/')
        
        } catch (error) {
            console.error("Error updating product:", error);
        }
    }

    return (
    <div>

        <div className='Formulario'>
            <div className='title'>Product Manager</div>

            <div className='group'>
                <div className='title-group'>Title</div>
                <div className='data-group'><input required type="text" name="textname" value={title} onChange={ev => setTitle(ev.target.value)}/></div>
            </div>
            <div className='group'>
                <div className='title-group'>Price</div>
                <div className='data-group'><input required type="text" name="textname" value={price} onChange={ev => setPrice(ev.target.value)}/></div>
            </div>
            <div className='group'>
                <div className='title-group'>Description</div>
                <div className='data-group'><input required type="text" name="textname" value={description} onChange={ev => setDescription(ev.target.value)}/></div>
            </div>    
            <div class="login">
                <button class ="btn-login" onClick={updateProduct}>Update</button>
                <button class ="btn-login" onClick={goHome}>Home</button>
            </div>
        </div>
    </div>
    );
  }
  
  export default Update;