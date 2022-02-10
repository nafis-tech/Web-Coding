import React from 'react'
// import Axios from 'axios'
// import {
//     Carousel,
//     Card,
//     Button
// } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './register.css'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carousels: [],
            products: [],
            page: 1,
            prodPerPage: 5,
            maxPage: 0
        }
    }
   render () {
       return(
           <div>
               <div className='container'>Register Peserta</div>
               <div>
                   <h5>Nama</h5>
                   <h5>Email</h5>
                   <h5>No Handphone</h5>
               </div>
           </div>
       )
   }
}

export default Register