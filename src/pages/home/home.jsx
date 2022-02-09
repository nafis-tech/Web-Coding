import React from 'react'
// import Axios from 'axios'
import {
    Carousel,
    Card,
    Button,
    Image
} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './home.css'
import { IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, LOGO} from '../../assets'

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
            <div>
                {/* <div className='cont'>
                    <div className='container'>Homepage-LOGO</div>
                    <Button variant="outline-warning">Login</Button>
                </div> */}
                {/* <div className='cont_2'>
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
                </div> */}
                <div class="header">
                    <div class="home-menu">
                        {/* <a href="">Be Hero Academy</a> */}
                        <Image src={LOGO.default} style={{width: '15vw', height: '8vh' }}/>
                        <div>
                            <Button href="/login" variant="outline-warning">Artikel</Button>
                            <Button href="/sylabus" variant="outline">Program Pendidikan</Button>
                            <Button href="/login" variant="outline">Donasi</Button>
                            <Button href="/patner" variant="outline">Join Patner</Button>
                        </div>

                    </div>
                </div>
                <div class="splash-container">
                    <div class="splash">
                        <h1 class="splash-head">Welcome to my Webbinar - ganti ganti</h1>
                        {/* <p class="splash-subhead">
                            Live Love Life <span style={{ color: '#F3950D' }}>with Digital Academy</span>
                        </p> */}
                        <p>
                            <a href="/register" class="pure-button pure-button-primary">Register</a>
                        </p>
                        <p> card event</p>
                    </div>
                </div>
                <div class="content-wrapper">
                    <div class="content">
                        <h2 class="content-head is-center">About Us</h2>

                        <div class="pure-g">
                            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                                <h3 class="content-subhead">
                                    <i class="fa fa-rocket"></i>
                                    Misi
                                </h3>
                                <p>
                                    Menjadi Academy digital terdepan yang dapat memberikan akses Pendidikan yang profesional dan bernilai ekonomis untuk meningkatkan kualitas hidup milineal.
                                </p>
                            </div>
                            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-mobile"></i>
                                    Motto
                                </h3>
                                <p>
                                    Live Love Life with Digital Academy.
                                </p>
                            </div>
                            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-th-large"></i>
                                    Kenapa Be. Hero Academy ada ?
                                </h3>
                                <p>
                                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                                </p>
                            </div>
                            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-check-square-o"></i>
                                    Bagaimana Sistem pembelajaran di Be.Hero Academy ?
                                </h3>
                                <p>
                                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="ribbon l-box-lrg pure-g">
                        <div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                            <img width="300" alt="File Icons" class="pure-img-responsive" src="/img/common/file-icons.png" />
                        </div>
                        <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                            <h2 class="content-head content-head-ribbon">Laboris nisi ut aliquip.</h2>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor.
                            </p>
                        </div>
                    </div>
                    <div class="content">
                        <h2 class="content-head is-center">Student project</h2>
                        <div className='card'>
                            <Card className='card-cont'>
                                project 1
                            </Card>
                            <br></br>
                            <Card className='card-cont'>
                                project 2
                            </Card>
                            <br />
                            <Card className='card-cont'>
                                project 3
                            </Card>
                        </div>

                        {/* <div class="pure-g">
                            <div class="l-box-lrg pure-u-1 pure-u-md-2-5">
                                <form class="pure-form pure-form-stacked">
                                    <fieldset>

                                        <label for="name">Your Name</label>
                                        <input id="name" type="text" placeholder="Your Name">


                                        <label for="email">Your Email</label>
                                        <input id="email" type="email" placeholder="Your Email">

                                        <label for="password">Your Password</label>
                                        <input id="password" type="password" placeholder="Your Password">

                                        <button type="submit" class="pure-button">Sign Up</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div> */}
                        <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
                            <h4>Contact Us</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>

                            <h4>More Information</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                    </div>
                    <div className="footer is-center">
                        Wichis Educate. Made with love by wichis.
                    </div>
                </div>

            </div>
        )
    }
}


// #0F2C67 - biru
// #F3950D - orange
// dasar putih
export default HomePage