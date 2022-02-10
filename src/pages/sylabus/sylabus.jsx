import React from 'react'
// import Axios from 'axios'
// import {
//     Carousel,
//     Card,
//     Button
// } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './sylabus.css'

class Sylabus extends React.Component {
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
               <div className='container'>Sylabus</div>
               <div>
                   <h5>Sylabus Pembelajaran : dropdown webminar & bootcamp</h5>
                   <h5>Fundamental</h5>
                   <h5>Frontend</h5>
                   <h5>Backend</h5>
                   <h5>Jumlah Anak Didik</h5>
               </div>
           </div>
       )
   }
}

export default Sylabus