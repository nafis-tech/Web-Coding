import React from 'react'
// import Axios from 'axios'
import {
    Carousel,
    // Card,
    Button
} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './home.css'
import { IMG_1, IMG_2, IMG_3, IMG_4, IMG_5} from '../../assets'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carousels: [],
            products: [],
            page: 1,
            prodPerPage: 5,
            image: [IMG_1.default, IMG_2.default, IMG_3.default, IMG_4.default, IMG_5.default]
        }
    }
    render() {
        return (
            <div className='back'>
                <div className='cont'>
                    <div className='container'>Homepage-LOGO</div>
                    <Button variant="outline-warning">Login</Button>
                </div>
                <div className='cont_2'>
                    <Carousel fade>
                        {this.state.image.map((item) => {
                            console.log(this.state.image)
                            return (
                                <Carousel.Item style={{
                                    width: '55vw', height: '65vh', margin: '5vh 15vw',
                                }}
                                >
                                    <img
                                        className="d-block w-100"
                                        src={item}
                                        alt="First slide "
                                        style={{ backgroundSize: 'contain', width: '40vw', height: '55vh' }}
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        )
    }
}


// #0F2C67 - biru
// #F3950D - orange
// dasar putih
export default HomePage