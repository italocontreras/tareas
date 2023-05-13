import { useState, useEffect } from 'react';

import axios from 'axios'

import './List.css'


function List(props) {

    
    return (
        <div className='list'>
            <div className='allproducts'>
                All products
            </div>
            <div className='data'>
                {props.products.map((item,index) => {
                    return (
                        <div className='value' key={item._id}>
                            <p>{item.title}</p>
                        </div>
                    );    
                })}     
            </div>
        </div> 
    );
}
  
export default List;