// import { useState, useEffect } from 'react';

// import axios from 'axios'

import Form from '../formulario/Formulario';
import List from '../list/List';

import './Main.css'


function Main() {

  
    return (
        <div className='Main'>
            {
                console.log("aca va el Main")
            }
            {/* <div>
                aca va el main
            </div> */}
            <div className='form'>
                <Form></Form>
            </div>
            <div className='list'>
                <List></List>
            </div>
            
        </div> 
    );
  }
  
  export default Main;