import React from 'react'
// import Axios from 'axios'
// import {
//     Carousel,
//     Card,
//     Button
// } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './patner.css'

class Patner extends React.Component {
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
               <div className='container'>Register Patner</div>
               <div>
                   <h5>Nama Perusahaan</h5>
                   <h5>Alamat lengkap</h5>
                   <h5>Akte Pendirian</h5>
                   <h5>Penanggung Jawab/ Ketua</h5>
                   <h5>Jumlah Anak Didik</h5>
               </div>
           </div>
       )
   }
}

export default Patner