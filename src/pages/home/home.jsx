import React from 'react'
// import Axios from 'axios'
// import {
//     Carousel,
//     Card,
//     Button
// } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './home.css'

class HomePage extends React.Component {
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
               <div className='container'>Homepage</div>
           </div>
       )
   }
}

export default HomePage