import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


import axios from 'axios'

function Product() {

    // const type = new URLSearchParams(location.search).get('type');
    const [product, setProduct] = useState({});
    

    const navigate = useNavigate() 

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    // const url = new URL('http://localhost:3000/product/6474d40ff8aa9655a07a0608');
    const url = window.location.href;
    // const path = url.pathname;
    const id = url.split('/').pop();

    console.log("url")
    console.log(url); // 6474d40ff8aa9655a07a0608


    console.log("id")
    console.log(id); 

    async function goHome (ev) {
        ev.preventDefault()
        console.log("updateProduct")

        try {


          navigate('/')
        
        } catch (error) {
        }
    }

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
                <button class ="btn-login" onClick={goHome}>Home</button>
            </div>
        </div>
    </div>
    );
  }
  
  export default Product;