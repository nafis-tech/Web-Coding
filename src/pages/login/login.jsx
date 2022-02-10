import React from 'react'
// import Axios from 'axios'
// import {
//     Carousel,
//     Card,
//     Button
// } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './login.css'

class Login extends React.Component {
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
               <div className='container'>Login Page</div>
           </div>
       )
   }
}

export default Login