import React from 'react'
// import Axios from 'axios'
import {
    Carousel,
    Card,
    Button,
    Form,
} from 'react-bootstrap'
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
           <div className='cover' >
               <div className='aa'>
                    <h1>Wellcome Back......!</h1>
               </div>
               <div className='container'>
                    <Form className='af'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{color: 'white'}}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{color: 'white'}} >Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
               </div>
               <div className='ag'>
                   <h3 style={{color: 'white', marginBottom: '25px'}} >Belum punya akun?</h3>
                   <Button variant="primary" type="submit">
                            Register sekarang
                    </Button>
               </div>
               <div>
                   as
               </div>
           </div>
       )
   }
}

export default Login