import React from 'react'
// import Axios from 'axios'
import {
    Carousel,
    Card,
    Button,
    InputGroup,
    FormControl,
    Form,
    Image,
} from 'react-bootstrap'
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
           <div className='full'>
               <div className='container'>
                   <h1>Register Peserta</h1>
               </div>
               <div className='cont'>
                   <div className='contleft'>
                    <img src="regcover.jpg" alt="im1"/>
                   </div>

                   <div className='colom'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Name</InputGroup.Text>
                            <FormControl aria-label="First name" placeholder="First name" />
                            <FormControl aria-label="Last name" placeholder="Last name" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Handphone</InputGroup.Text>
                            <FormControl aria-label="First name" placeholder="+62" />

                        </InputGroup>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                    Register
                            </Button>
                        </Form>
               </div>
               </div>
               
           </div>
       )
   }
}

export default Register