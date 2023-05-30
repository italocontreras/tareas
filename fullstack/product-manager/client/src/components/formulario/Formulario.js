import { useState } from 'react';

import axios from 'axios'

// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './Formulario.css'

function Formulario(props) {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
  
    const [errors, setErrors] = useState('')

    async function createProduct(ev) {
        ev.preventDefault()
        
        console.log("create Porduct")
        //console.log({name, position});
        try {
          const newProduct = await axios.post('http://localhost:8000/api/products/new', {
            title: title,
            price: price,
            description:description
          })
          alert('´Producto agregado correctamente')
          props.onProductAdded(newProduct.data);
          setTitle('');
          setPrice('');
          setDescription('');
        }
        catch(err) {
          console.log("va por el catch")
          const errors = err.response.data.errors
          if (errors.title) {
            // dejarlo más bonito
            setErrors(errors.title.message)
          }
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
                    <button class ="btn-login" onClick={createProduct}>Create</button>
                </div>
            </div>
        </div> 
    );
  }
  
  export default Formulario;